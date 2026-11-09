/*
  Proyecto: Bitácora de Trading - PSP
  Archivo: app.js
  Autores: Equipo de trabajo colaborativo PSP
  Fecha: 2026-11-08
  Descripción: Registro de operaciones, cálculo de P&L y balance, y gráfico de equidad.
*/
// Capital inicial base fijo
const balanceInicial = 10000;

// Arreglo global para almacenar las operaciones
let listaOperaciones = [];

// Últimos puntos dibujados, para redibujar al cambiar el tamaño de la pantalla
let ultimosPuntosEquity = [];

// Evento que se ejecuta al cargar completamente la página
document.addEventListener('DOMContentLoaded', () => {
  const datosGuardados = localStorage.getItem('operacionesTrading');
  if (datosGuardados) {
    listaOperaciones = JSON.parse(datosGuardados);
  }
  actualizarInterfaz();
});

// Capturar el envío del formulario para agregar nueva operación
const formulario = document.getElementById('formulario-operacion');

// Calcular la ganancia o pérdida de una operación según su dirección
function calcularPnl(tipoOperacion, precioEntrada, precioSalida, lote, tamanoContrato) {
  const direccion = tipoOperacion === 'venta' ? -1 : 1;
  return (precioSalida - precioEntrada) * direccion * lote * tamanoContrato;
}

// Completar el campo P&L cuando los datos necesarios son válidos
function actualizarPnlCalculado() {
  const precioEntrada = parseFloat(document.getElementById('precio-entrada').value);
  const precioSalida = parseFloat(document.getElementById('precio-salida').value);
  const lote = parseFloat(document.getElementById('lote').value);
  const tamanoContrato = parseFloat(document.getElementById('tamano-contrato').value);
  if ([precioEntrada, precioSalida, lote, tamanoContrato].some(Number.isNaN)) {
    return;
  }
  const tipoOperacion = document.getElementById('tipo-operacion').value;
  const resultado = calcularPnl(tipoOperacion, precioEntrada, precioSalida, lote, tamanoContrato);
  document.getElementById('pnl').value = resultado.toFixed(2);
}

// Recalcular el P&L al modificar cualquiera de los campos que intervienen
['tipo-operacion', 'lote', 'tamano-contrato', 'precio-entrada', 'precio-salida'].forEach((idCampo) => {
  document.getElementById(idCampo).addEventListener('input', actualizarPnlCalculado);
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // Crear objeto con las entradas del usuario
  const nuevaOperacion = {
    id: Date.now(),
    activo: document.getElementById('activo').value,
    tipoOperacion: document.getElementById('tipo-operacion').value,
    tamanoContrato: parseFloat(document.getElementById('tamano-contrato').value),
    horaEntrada: document.getElementById('hora-entrada').value,
    lote: parseFloat(document.getElementById('lote').value),
    precioEntrada: parseFloat(document.getElementById('precio-entrada').value),
    tp: parseFloat(document.getElementById('tp').value) || 0,
    sl: parseFloat(document.getElementById('sl').value) || 0,
    precioSalida: parseFloat(document.getElementById('precio-salida').value),
    horaSalida: document.getElementById('hora-salida').value,
    pnl: parseFloat(document.getElementById('pnl').value)
  };

  // Guardar en la lista y actualizar memoria local
  listaOperaciones.push(nuevaOperacion);
  guardarEnStorage();

  // Limpiar campos y refrescar pantalla
  formulario.reset();
  actualizarInterfaz();
});

// Guardar el arreglo actualizado en localStorage
function guardarEnStorage() {
  localStorage.setItem('operacionesTrading', JSON.stringify(listaOperaciones));
}

// Función principal para redibujar la tabla, recalcular balance y actualizar el gráfico
function actualizarInterfaz() {
  const cuerpoTabla = document.getElementById('cuerpo-tabla');
  cuerpoTabla.innerHTML = '';

  let balanceActual = balanceInicial;
  const puntosEquity = [balanceInicial];

  // Recorrer la lista de operaciones
  listaOperaciones.forEach((operacion) => {
    balanceActual += operacion.pnl;
    puntosEquity.push(balanceActual);

    // Crear la fila HTML
    const fila = document.createElement('tr');
    const clasePnl = operacion.pnl >= 0 ? 'ganancia' : 'perdida';

    fila.innerHTML = `
      <td>${operacion.activo}</td>
      <td>${operacion.horaEntrada}</td>
      <td>${operacion.lote}</td>
      <td>${operacion.precioEntrada}</td>
      <td>${operacion.tp || '-'}</td>
      <td>${operacion.sl || '-'}</td>
      <td>${operacion.precioSalida}</td>
      <td>${operacion.horaSalida}</td>
      <td class="${clasePnl}">$${operacion.pnl.toFixed(2)}</td>
      <td><button class="boton-eliminar" onclick="eliminarOperacion(${operacion.id})">X</button></td>
    `;

    cuerpoTabla.appendChild(fila);
  });

  // Mostrar el balance actualizado
  document.getElementById('balance-actual').innerText = `Balance Actual: $${balanceActual.toFixed(2)} USD`;

  // Renderizar el gráfico con la curva de equidad
  dibujarGrafico(puntosEquity);
}

// Eliminar una operación mediante el botón [X]
function eliminarOperacion(idOperacion) {
  listaOperaciones = listaOperaciones.filter(op => op.id !== idOperacion);
  guardarEnStorage();
  actualizarInterfaz();
}

// Dibujar la línea de equidad sobre el elemento Canvas
function dibujarGrafico(puntos) {
  ultimosPuntosEquity = puntos;
  const lienzo = document.getElementById('lienzo-grafico');
  const contexto = lienzo.getContext('2d');

  // Ajustar la resolución del lienzo a su tamaño real en pantalla
  const ancho = lienzo.clientWidth || lienzo.width;
  const alto = lienzo.clientHeight || lienzo.height;
  const densidad = window.devicePixelRatio || 1;
  lienzo.width = ancho * densidad;
  lienzo.height = alto * densidad;
  contexto.setTransform(densidad, 0, 0, densidad, 0, 0);

  // Limpiar el área de dibujo
  contexto.clearRect(0, 0, ancho, alto);

  if (puntos.length === 0) return;

  const maxBalance = Math.max(...puntos, 11000);
  const minBalance = Math.min(...puntos, 9000);

  contexto.beginPath();
  contexto.strokeStyle = '#2196f3';
  contexto.lineWidth = 2;

  const pasoX = ancho / (puntos.length > 1 ? puntos.length - 1 : 1);

  puntos.forEach((valor, indice) => {
    const x = indice * pasoX;
    const y = alto - ((valor - minBalance) / (maxBalance - minBalance)) * (alto - 40) - 20;

    if (indice === 0) {
      contexto.moveTo(x, y);
    } else {
      contexto.lineTo(x, y);
    }
  });

  contexto.stroke();
}

// Redibujar el gráfico cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  dibujarGrafico(ultimosPuntosEquity);
});
