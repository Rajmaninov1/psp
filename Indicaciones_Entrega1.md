# Entrega Previa 1 (Semana 3) – Proceso de Software Personal (PSP)

*Revisión hecha el 8 de noviembre de 2026. Actualizada el mismo día con la nueva versión del documento de entrega, `Document 31.md`. El portal, el Excel y el informe del compañero no cambiaron.*

**Contenido**

1. Documentos del proyecto
2. Indicaciones de la docente
3. Enunciado oficial
4. Requisitos generales del documento
5. Marco del curso: formatos de los escenarios
6. Evaluación de cada documento
7. Matriz de cumplimiento
8. Brechas, metas y sobrantes
9. Lo que no corresponde a esta entrega
10. Plan de acción sugerido

---

## 1. Documentos del proyecto

| Archivo | Qué es |
|---|---|
| `eEKHEBTkLjc_…-software.pdf` | Enunciado oficial: *"Etapas del proceso de construcción de software"*. Trae los requisitos generales y los de cada entrega (semanas 3, 5 y 7). |
| `escenarios/escenario1.pdf` | Teoría del Escenario 1: fases, métricas e indicadores, **formato de registro de tiempos**. |
| `escenarios/escenario2.pdf` | Teoría del Escenario 2: **estándar de codificación**, conteo de líneas de código (LOC), sintaxis HTML, listas, tablas, formularios y validación con `pattern`. |
| `escenarios/escenario3.pdf` | Teoría del Escenario 3: estimación, **inventario de elementos**, calidad, **clasificación, registro y compilado de defectos**. |
| `Document 31.md` | **Documento final que se entrega.** Reemplaza a `Document 31.docx`, que ya no está en la carpeta. Tiene la portada institucional y el texto del informe del compañero, casi sin cambios. |
| `Informe Entrega 1 - PSP.docx` | Avance del compañero: el texto del documento (introducción → referencias). |
| `Plantillas_Registro_PSP.xlsx` | Avance del compañero: formatos PSP con datos (instrucciones, registro de tiempos, registro de defectos, resumen y estimación). |
| `index.html`, `estilos.css`, `app.js` | Avance del compañero: portal web "Bitácora de Trading" (Trading Journal). |
| `Indicaciones_Entrega1.md` | Este archivo. |

**Decisión del grupo:** se usa la **opción (b)**. Se mantiene el Trading Journal y se le añade una **sección PSP** que permita el seguimiento y la trazabilidad del proceso.

---

## 2. Indicaciones adicionales de la docente (recibidas el 6 de noviembre de 2026)

> 📢 **ENTREGA PREVIA 1 (SEMANA 3)**
> 📝 **Indicaciones obligatorias para la entrega:**

1. **Documentación base:** portada institucional con el listado completo de integrantes, introducción, descripción del problema, objetivos (general y específicos), justificación y cronograma de actividades.
2. **Control y estándares:** consolidación de la base de datos de ejercicios (tiempos, características y tamaños) junto con la definición del estándar de codificación. *(Hacer uso de formatos.)*
3. **Especificaciones del producto software:** énfasis en la preparación del portal web funcional, que incluirá:
   - **HTML:** formularios, diagramas de barras/torta, listas.
   - **CSS:** diseño adaptable (responsive design), colores, fuentes.
   - **JavaScript:** validaciones, operaciones y efectos.

   Todo ello para permitir el seguimiento y la trazabilidad mediante la metodología PSP.
4. **Entregables:** archivo comprimido en formato **.ZIP** con el desarrollo y **documento base en PDF**.

## 3. Lo que pide el enunciado oficial para la Entrega Previa 1

Tomado del PDF del enunciado, p. 3:

- **Primera versión del documento:** introducción, descripción del problema, objetivos (general y específicos), justificación y actividades a desarrollar.
- **Base de datos de los ejercicios:** usando los formatos y de acuerdo con los ejercicios planteados en los escenarios, consolidar una base de datos con los tiempos, las características y los tamaños de los distintos desarrollos o ejercicios. Especificar el estándar de codificación.
- **Carpeta de ejercicios:** archivo .zip con los ejercicios.
- *Esta entrega debe servir de preparación para el producto que se entrega en la semana 7.*

## 4. Requisitos generales del documento que aplican desde ahora

Tomados del mismo PDF, p. 2:

- Índice del documento, de imágenes, de tablas y de ecuaciones.
- Normas APA: nombrar, numerar y describir tablas, imágenes y ecuaciones, y referenciar las fuentes.
- **Del plan:** hay dos planes en el proyecto: las actividades de las 8 semanas (este es el cronograma de esta entrega) y las proyectadas a 6 meses (va en la entrega final).
- **Scripts y plantillas:** usar las plantillas presentadas en cada unidad y referenciar sus fuentes.
- **Trabajo colaborativo:** hay que dejar evidencia de la participación individual de cada integrante.
- **Producto software:** como mínimo, HTML (formularios, diagramas de barras, torta u otros, listas numeradas y con viñetas), CSS (fuentes, colores, interfaz adaptable) y JavaScript (validaciones, operaciones, efectos).

---

## 5. Marco del curso: formatos de los escenarios 1 a 3

Estos son los formatos que la docente espera ver cuando dice "hacer uso de formatos".

| Formato o concepto | Escenario | Contenido esperado |
|---|---|---|
| Fases del desarrollo | 1, Tabla 1 | **4 fases:** Análisis (inicio), Diseño (planeación), Desarrollo (codificación, pruebas, despliegue, control) y Cierre (lecciones aprendidas, post mortem). |
| Registro de tiempos | 1, Tabla 2 | Fase, descripción de la actividad, tiempo planeado, tiempo real (sin interrupciones), tiempo de interrupción, descripción de la interrupción, desfase (real − planeado) y acumulado. Además: totalizar las interrupciones, hacer el análisis con y sin ellas, autoevaluarse (qué dato agregar o quitar al formato) y **comparar los resultados con 2 compañeros**. |
| Rendimiento | 1, Figura 1 | Líneas de código ÷ horas (indicador construido a partir de métricas). |
| Estándar de codificación | 2 | Las llaves `{}` y los comentarios **no** cuentan como LOC. Indentación definida, con `<html>`, `<head>` y `<body>` **sin** sangría. Nominación: `<!DOCTYPE html>` en mayúsculas, etiquetas y atributos en minúsculas, comentarios en el idioma de la interfaz, variables de JS en minúsculas (`nombre_variable`). Validación con el W3C. |
| Ejercicios HTML | 1, 2 y 3 | Tabla de 4×5 con registros PSP (Esc. 1). Listas `ul` y `ol` con las fases; tabla de requerimiento, tiempo planeado y tiempo real; enlaces e imágenes; formulario; contraseña con `pattern` (Esc. 2). Formulario de inicio de sesión con usuario, contraseña y validación (Esc. 3). |
| Inventario de elementos | 3, Tabla 1 | **Por elemento** (botón, etiqueta, formulario, tabla…): características, número de líneas y código, para luego estimar a partir de él. |
| Rango de estimación | 3 | Un error de ±5 % a ±20 % es normal; **más de ±20 % es una falla de estimación**. |
| Defectos | 3, Tablas 2, 3 y 4 | Catálogo de tipos 010–100. Registro: fecha, número, tipo, fase en que aparece, fase en que se elimina, tiempo de corrección y descripción. Compilado por tipo y fase. |

---

## 6. Evaluación de cada documento

### 6.1 `Document 31.md` (documento final, nueva versión)

Al compararlo párrafo por párrafo con el informe del compañero, el cuerpo es **el mismo texto**. Los únicos cambios son la portada, el índice, títulos reformateados, dos comas y un error nuevo. **Por eso siguen vigentes todas las brechas de contenido de la sección 6.2.**

**Lo que mejoró:**
- Ya contiene introducción, problema, objetivos, justificación, actividades, estándar y referencias.
- Ya tiene índice general.
- Se quitó "Archivo Zip de los ejercicios" como sección.

**Lo que hay que corregir en esta versión:**
- **Siguen los textos de relleno** `## INSERTEN AQUI LA TABLA ###` y `## INSERTEN AQUI LA OTRA TABLA ###` (secciones 7.1 y 7.2).
- **Error nuevo en la sección 6.1:** *"Archivos HTML: ¡Las etiquetas…"* tiene un signo "¡" de más.
- **Portada:** "Jesús Yuncosar Piña" y "Julián Escobar Gamba" siguen en la misma línea, ahora separados por espacios.
- **Índice:**
  - "INDICE" debe llevar tilde.
  - Dice "Actividades a Desarrollar", pero el título de la sección es "Plan de actividades a desarrollar".
  - No tiene números de página.
  - Faltan los índices de tablas y de figuras.
- **Secciones que siguen faltando:**
  - **Cronograma** de 8 semanas.
  - **Especificaciones del producto software (portal web)**.
  - **Inventario de elementos** y datos de **características** de los ejercicios. El esquema anterior incluía "Registro de características" y esta versión lo perdió.
  - **Registro y compilado de defectos**.
  - Un apartado breve de **anexos** que describa el contenido del ZIP.

**Revisar en el Word de origen** (pueden venir de la conversión a Markdown):
- "Introducción" y "Descripción del problema" aparecen ambas con el número 1.
- Los subniveles del índice salen numerados del 1 al 7 en lugar de 3.1, 3.2, 6.1…
- El título "4. JUSTIFICACIÓN" quedó pegado al final de la última viñeta de los objetivos.
- Hay marcas sueltas (`****`, un `#` vacío) y tabulaciones dentro de frases.

**Si el PDF se genera desde este Markdown:** las etiquetas escritas sin formato de código (`<canvas>` en la sección 5; `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>` en la 6.1; `<!-- -->` en la 6.3) pueden desaparecer al convertir. Hay que marcarlas como código. Además, los párrafos de relleno de 7.1 y 7.2 deben sustituirse por las tablas.

### 6.2 `Informe Entrega 1 - PSP.docx` (avance del compañero; su texto ahora está en `Document 31.md`)

**Lo que está bien:**
- Tiene introducción, descripción del problema, objetivo general, 4 objetivos específicos y justificación, todos bien redactados.
- Lista las actividades por fase (ACT-01 a ACT-06), y coinciden con las del Excel.
- El estándar de codificación cubre indentación, nominación y criterios de conteo de LOC (sin llaves ni comentarios), en línea con el Escenario 2.
- Las referencias están en formato APA.

**Brechas:**
- **No hay cronograma:** las actividades no tienen fechas ni semanas, y el plan no cubre las 8 semanas.
- Las secciones 7.1 y 7.2 todavía tienen los textos de relleno `## INSERTEN AQUI LA TABLA ###` y `## INSERTEN AQUI LA OTRA TABLA ###`.
- No incluye el registro ni el compilado de defectos, aunque sí están en el Excel.
- Falta la sección de **especificaciones del producto software**.
- **Estándar de codificación:**
  - Está escrito como texto corrido y no en formato de plantilla.
  - Usa camelCase en JS, cuando el Escenario 2 sugiere minúsculas (`nombre_variable`). Se puede mantener, pero hay que justificarlo.
  - Faltan la regla de `<!DOCTYPE html>` en mayúsculas, la regla de encabezado de archivo (autor, fecha, propósito) y la validación con el W3C.
- **Fases:** usa 5 fases (Análisis, Diseño, Codificación, Pruebas, Post-Mortem) en lugar de las 4 del curso. Hay que agrupar Pruebas dentro de Desarrollo y Post-Mortem dentro de Cierre.
- **El texto afirma cosas que el portal no cumple:** "interfaz web responsiva" y "ajustes de compatibilidad de pantalla (responsive design)".
- **El problema y los objetivos no mencionan el seguimiento PSP dentro del portal.** Tras la decisión (b), hay que incorporarlo.
- El índice está escrito a mano: no es un campo automático y no tiene números de página.
- **Referencias:**
  - "Politécnico Grancolombiano (2026)" debería citar al autor de las lecturas, Diego Iván Oliveros Acosta.
  - Las fechas de MDN y W3C deben ser las de consulta.
  - Las referencias que no se citen en el texto sobran.

### 6.3 `Plantillas_Registro_PSP.xlsx` (avance del compañero)

**Lo que está bien:**
- La hoja **Instrucciones** contiene los 4 pilares, los pasos de uso y el catálogo de defectos 010–100, igual que en el Escenario 3.
- **Registro de tiempos:** sus columnas coinciden exactamente con la Tabla 2 del Escenario 1. El desfase es real − planeado y el acumulado se calcula con fórmula.
- **Registro de defectos:** 4 defectos (DEF-001 a DEF-004), en el formato de la Tabla 3 del Escenario 3.
- **Resumen y estimación:** compilado de defectos por tipo y fase (Tabla 4 del Esc. 3) e inventario con estimación de LOC y LOC/h.

**Brechas:**
- **DEF-002 es un error de copia:** *"Variable de puntaje no inicializada… `let score = 0;`"*. Esa variable no existe en el código. Lo mismo pasa con la descripción del tipo 080 ("cálculo de puntajes erróneo").
- **DEF-001 se detectó en "Compilación",** pero HTML no se compila. Hay que poner "Revisión" o "Pruebas".
- **El inventario está hecho por archivo,** no por elemento como en la Tabla 1 del Esc. 3. Además, solo trae tamaños *estimados*. Ver la sección 6.5.
- **Faltan tamaños reales.** Con un conteo aproximado, el código real tiene ≈238 LOC (HTML ≈86, CSS ≈75, JS ≈77) frente a 339 estimadas: −30 %, fuera de ±20 %.
- **El tiempo total quedó fuera de rango:** 550 min reales frente a 420 planeados, es decir +31 %. Eso es una falla de estimación según el Esc. 3 y hay que analizarlo en el documento.
- **Las dos estimaciones de tiempo no coinciden:** el inventario suma 350 min y el registro de tiempos suma 420 min planeados.
- **Hay valores escritos a mano en vez de fórmulas:** el desfase (columna H), el compilado de defectos y el rendimiento (columna E). Se desactualizan al agregar filas.
- **Faltan los totales y el análisis que pide el Esc. 1:** interrupciones totales (80 min), análisis con y sin interrupciones y autoevaluación del formato.
- **Todos los datos son de una sola persona.** Falta el registro de cada integrante y la comparación entre compañeros.
- **No aparecen los ejercicios de los escenarios** (tabla, listas, formulario, contraseña con `pattern`, inicio de sesión).

### 6.4 Portal web (`index.html`, `estilos.css`, `app.js`)

**Lo que está bien:**
- Formulario de 9 campos con `required` y tipos numéricos.
- Tabla del historial, con opción de eliminar registros.
- Guardado en `localStorage`.
- Cálculo del balance acumulado.
- Curva de equidad dibujada en `<canvas>`.
- Paleta de colores oscura y uniforme.
- Distribución con `grid`, `flex` y `auto-fit`.
- El código sigue su propio estándar: 2 espacios, kebab-case y camelCase, todo en español.

**Brechas frente a los mínimos:**

| Mínimo | Estado |
|---|---|
| Formularios | ✅ Uno (Trading). Falta el formulario PSP. |
| **Diagrama de barras o torta** | ❌ Solo hay una línea en el canvas. |
| **Listas `ol` y `ul`** | ❌ No hay. |
| Colores | ✅ |
| **Fuentes** | ⚠️ Solo Arial. Falta una tipografía definida, por ejemplo de Google Fonts. |
| **Diseño adaptable** | ⚠️ No hay `@media`. La tabla de 10 columnas se desborda en el móvil y el canvas, con ancho y alto fijos, se deforma. |
| **Validaciones en JS** | ❌ Solo hay validación HTML. Faltan, por ejemplo: precios positivos, coherencia entre TP y SL, hora de salida posterior a la de entrada y `pattern` en "activo". |
| Operaciones | ⚠️ Solo suma el balance. La ganancia o pérdida se escribe a mano; podría calcularse. |
| **Efectos** | ❌ Solo hay `:hover` en los botones. |
| **Seguimiento PSP** | ❌ No existe (es la brecha principal, por la decisión b). |

**Otros:**
- El campo "activo" se inserta con `innerHTML`, lo que permite inyectar HTML. Conviene usar `textContent`.
- Los archivos no tienen encabezado (autor, fecha, propósito).
- Falta validar el HTML con el W3C.
- La carpeta `.idea/` no debe ir en el ZIP.

### 6.5 Base de datos de ejercicios: cómo debería quedar

Se propone un formato que una el inventario del Esc. 3 con el registro de tiempos del Esc. 1, **una fila por elemento o ejercicio**:

| ID | Ejercicio / elemento | Escenario | Características | LOC est. | LOC real | T. plan (min) | T. real (min) | Responsable |
|---|---|---|---|---|---|---|---|---|
| EJ-01 | Listas `ul` y `ol` de fases | 2 | sin estilos | … | … | … | … | … |
| EJ-02 | Tabla 4×5 de registros PSP | 1–2 | encabezados `th` | … | … | … | … | … |
| EJ-03 | Formulario con `pattern` | 2–3 | validación HTML | … | … | … | … | … |
| EJ-04 | Formulario de trading (9 campos) | portal | `required`, numéricos | … | … | … | … | … |
| … | Canvas, gráfico de barras, torta, CSS, lógica JS… | portal | … | … | … | … | … | … |

---

## 7. Matriz de cumplimiento (Entrega 1)

| # | Requisito | Fuente | Estado | Dónde está o qué falta |
|---|---|---|---|---|
| 1 | Portada institucional con todos los integrantes | Docente | ⚠️ | `Document 31.md`. Poner los dos últimos nombres en líneas separadas. |
| 2 | Introducción | Docente / PDF | ✅ | Informe, sección 1. Ajustar la mención a "responsiva" y añadir la sección PSP. |
| 3 | Descripción del problema | Docente / PDF | ✅ | Informe, sección 2. Añadir la necesidad de seguimiento PSP. |
| 4 | Objetivo general y específicos | Docente / PDF | ⚠️ | Informe, sección 3. Muy ligados a la implementación ("9 campos", "botón [X]", "$10,000"). Incluir los objetivos PSP del portal. |
| 5 | Justificación | Docente / PDF | ✅ | Informe, sección 4. |
| 6 | **Cronograma de 8 semanas** | Docente / PDF | ❌ | No existe. |
| 7 | Base de datos: tiempos | Docente / PDF | ⚠️ | Hay registro de tiempos en el Excel. Falta pasarlo al documento, registrar a cada integrante, agrupar en 4 fases y hacer el análisis de interrupciones. |
| 8 | Base de datos: características y tamaños | Docente / PDF | ⚠️ | Hay inventario por archivo con tamaños estimados. Falta hacerlo por elemento o ejercicio y con tamaños reales. |
| 9 | Ejercicios de los escenarios | PDF | ❌ | No están registrados ni en una carpeta. |
| 10 | **Estándar de codificación en formato** | Docente / PDF | ⚠️ | Está como texto. Falta pasarlo a tabla o plantilla y completar las reglas del Esc. 2. |
| 11 | **Especificaciones del producto software** | Docente | ❌ | No hay sección en el documento. |
| 12 | Portal: formularios, barras/torta, listas | Docente / PDF | ⚠️ | Solo hay formulario. |
| 13 | Portal: diseño adaptable, colores, fuentes | Docente / PDF | ⚠️ | Solo colores. |
| 14 | Portal: validaciones, operaciones, efectos | Docente / PDF | ⚠️ | Solo hay operaciones básicas. |
| 15 | **Portal: seguimiento y trazabilidad PSP** | Docente | ❌ | Por la decisión (b): sección PSP nueva. |
| 16 | Índices (general, tablas, figuras) y títulos APA | PDF | ⚠️ | Ya hay índice general, sin páginas. Faltan los índices de tablas y figuras y los títulos APA. |
| 17 | Referencias APA | PDF | ⚠️ | Corregir el autor de las lecturas y las fechas. |
| 18 | Participación individual | PDF | ❌ | Todos los registros son de una sola persona. |
| 19 | ZIP del desarrollo y PDF del documento | Docente | ❌ | Por armar, sin `.idea/`. |

---

## 8. Brechas, metas y sobrantes

### 8.1 Brechas (lo que falta), por prioridad

1. **Sección PSP del portal (opción b):**
   - formulario de registro de tiempos con validación en JS y `pattern`;
   - tabla con desfase y acumulado calculados;
   - **gráfico de barras** de tiempo planeado frente a real por fase;
   - formulario y tabla de defectos (010–100);
   - **gráfico de torta** de defectos por tipo;
   - **listas** `ol` (las 4 fases) y `ul` (estándar o compromisos de mejora);
   - indicadores: % de desfase con alerta si pasa de ±20 %, interrupciones totales y LOC/h.

   Puede arrancar con los datos que ya tiene el Excel.
2. **Cronograma de 8 semanas** (tabla o Gantt, con responsables). Debe incluir las entregas de la semana 3, la semana 5 y la semana 7.
3. **Base de datos de ejercicios** en el formato de la sección 6.5, con tamaños reales y los ejercicios de los escenarios.
4. **Estándar de codificación en formato de tabla**, con las reglas que faltan y la justificación del camelCase.
5. **Sección "Especificaciones del producto software"** en el documento: qué hace el portal, cómo cumple cada mínimo de HTML, CSS y JS, y cómo apoya la trazabilidad PSP.
6. **Completar el portal:** fuente definida, `@media` (tabla con scroll horizontal, canvas adaptable), validaciones en JS, efectos (transiciones, pestañas, mensajes) y corrección del `innerHTML`.
7. **Registro de cada integrante** y comparación con 2 compañeros (Esc. 1).
8. **Completar `Document 31.md`:** el texto base ya está. Faltan las correcciones de la sección 6.1, las tablas con título APA, los índices y la exportación a PDF.
9. **Correcciones de datos:** DEF-002, la fase de DEF-001, agrupación en 4 fases, fórmulas en lugar de valores fijos y estimaciones que coincidan entre hojas.

### 8.2 Metas: cuándo la entrega está lista

- [ ] El PDF tiene portada, índices, introducción, problema, objetivos, justificación, cronograma, base de datos de ejercicios (tiempos, características, tamaños), estándar en formato, especificaciones del producto y referencias APA.
- [ ] Cada tabla y figura tiene número, título y fuente en formato APA.
- [ ] El registro de tiempos sigue el formato del Esc. 1, con las 4 fases, los totales y el análisis de interrupciones y desfase (±20 %).
- [ ] El inventario es por elemento, con LOC estimadas y reales, contadas según el estándar.
- [ ] Hay datos de **cada integrante**.
- [ ] El portal cumple los mínimos: formulario, barras, torta, listas, colores, fuentes, diseño adaptable, validaciones, operaciones y efectos.
- [ ] El portal permite **registrar y ver** tiempos y defectos PSP.
- [ ] El HTML pasa el validador del W3C, o se documentan sus avisos.
- [ ] El ZIP contiene el portal y la carpeta de ejercicios, sin `.idea/`.
- [ ] Lo que dice el documento coincide con lo que hace el portal.

### 8.3 Sobrantes y qué acotar

Al revisar con los escenarios, **casi todo lo adelantado por el compañero corresponde al curso hasta el Escenario 3.** Los formatos de defectos, el compilado, el rendimiento y el post-mortem están en los Escenarios 1 y 3. No hace falta quitarlos. Lo que sí conviene acotar o ajustar:

- **Nivel de detalle de los objetivos y de la introducción.** Sobran "9 campos", "botón [X]", "$10,000 USD" y "modo oscuro"; eso va en las especificaciones del producto.
- **Afirmaciones que el portal no cumple todavía** ("responsiva"): quitarlas o cumplirlas.
- **La "evaluación preliminar del rendimiento"** en la fase de cierre: basta con calcularla, sin hacer todavía análisis de mejora (eso es de la entrega final).
- **Referencias no citadas en el texto,** por ejemplo la del Ministerio del Interior: citarlas o quitarlas.
- ~~**"Archivo Zip de los ejercicios"** como sección del documento~~: ya se quitó en `Document 31.md`. Falta el apartado de anexos.
- **Funciones extra del Trading Journal:** no ampliarlas. El esfuerzo debe ir a la sección PSP.

---

## 9. Lo que NO corresponde a esta entrega (queda para después)

| Entrega | Contenido |
|---|---|
| Previa 2 (semana 5) | Sección de cambios y correcciones, plan de desarrollo personal, **plan de pruebas** y **estimación con PROBE**. |
| Final (semana 7) | Bibliografía y conclusiones completas, cambios de las dos entregas anteriores, niveles y subniveles PSP, plan de mejora personal y de corrección de defectos y estimaciones, **plan a 6 meses**, trabajo futuro y producto final. |

---

## 10. Plan de acción sugerido

| # | Tarea | Responsable |
|---|---|---|
| 1 | Corregir en `Document 31.md` la portada, el índice y el "¡", y añadir las secciones que faltan (cronograma, especificaciones, inventario, defectos, anexos). | |
| 2 | Corregir el Excel: DEF-002, fase de DEF-001, 4 fases, fórmulas, estimaciones que coincidan, interrupciones totales. | |
| 3 | Hacer el inventario por elemento con LOC reales y registrar los ejercicios de los escenarios. | |
| 4 | Cada integrante: registrar sus tiempos (ejercicios y aporte al proyecto) y compararlos. | |
| 5 | Implementar la sección PSP del portal y completar los mínimos de HTML, CSS y JS. **Registrar su tiempo como ACT-07 en adelante.** | |
| 6 | Redactar el cronograma de 8 semanas, el estándar en formato y las especificaciones del producto. | |
| 7 | Ajustar el texto de `Document 31.md` (objetivos, "responsiva", seguimiento PSP, 4 fases, referencias) e incluir tablas, títulos APA e índices. | |
| 8 | Validar con el W3C, armar el ZIP (portal y ejercicios, sin `.idea/`) y exportar a PDF. | |
