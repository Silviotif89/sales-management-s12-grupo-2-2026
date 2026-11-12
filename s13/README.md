# Sales Management · UAM · Sesión 13

## ¿Qué contiene?

Clase universitaria interactiva **centrada en explicar qué es un CRM, cómo se ve y cómo se usa**. No se construye un caso empresarial o inmobiliario. Para practicar, el sistema muestra 14 **prospectos completamente ficticios**, con nombres genéricos, canales, etapas y montos inventados; no representan ventas ni datos de mercado.

Incluye **35 diapositivas** con explicaciones, diagramas, ejemplos de interfaces y una guía docente por diapositiva. La guía contiene explicación natural, ejemplo oral, pregunta para el grupo y transición.

### Cómo abrirla

1. **Descargá y descomprimí** el archivo ZIP completo en una carpeta de tu computadora.
2. Abrí el archivo `index.html` en **Firefox** (también está desarrollado con HTML/CSS/JavaScript estándar).
3. Usá las flechas **← / →** del teclado, o los botones inferiores, para navegar. Abrí **Índice** para saltar a cualquier tema.
4. Seleccioná **Presentar** para pantalla completa y **Guía docente** para consultar las notas ocultas.
5. No borres `styles.css` ni la carpeta `scripts`: el HTML los necesita en la misma estructura relativa.

No hace falta instalar software, ejecutar un servidor, conectar internet ni configurar librerías para utilizar las funciones principales. Los tres enlaces a documentación oficial sí requieren internet.

### Laboratorios interactivos

1. **CRM de demostración.** Ficha editable (necesidad, canal, etapa, valor, responsable, próximo paso y fecha), historial de seguimiento, nuevas oportunidades, arrastre de tarjetas entre ocho etapas, cambio de etapa por selector y reinicio de la demostración. Restablecer la demo no borra el trabajo de los equipos.
2. **Excel.** Filtrar por canal y etapa, ver conteos, tasa de cierre de oportunidades resueltas y descargar CSV compatible con Excel. El CSV usa UTF-8 con BOM y separador `;`; en Excel, elegir ese delimitador si se solicita.
3. **Tablero estilo Power BI.** Indicadores y gráficos recalculados con filtros de canal y etapa. Es una **simulación didáctica**, no Power BI.
4. **Constructor estilo Metabase.** Configurar agrupación, filtro y operación; ejecutar una pregunta para contar oportunidades o sumar valores estimados de etapas abiertas. Es una **simulación didáctica**, no Metabase.
5. **Decisión gerencial.** Tres opciones interactivas con ventajas, riesgos y formas de comprobar los resultados; más de una puede tener justificación.
6. **Espacio de equipos.** Ficha de Plan de Cuenta Clave para su empresa real, oportunidades separadas de la demo, tablero propio, presentación visual y descarga de respaldo JSON o CSV. Permite **importar** un respaldo JSON previamente descargado.

### Datos y cálculos

- Los 14 registros iniciales están declarados en `scripts/data.js`. Son únicamente material ficticio.
- Los laboratorios 1–4 y la decisión gerencial consultan la misma lista de oportunidades de demostración, incluyendo los cambios realizados por el usuario.
- La **tasa de cierre de oportunidades resueltas** es `ganadas / (ganadas + perdidas) × 100`. No incluye oportunidades abiertas en el denominador. Si el denominador es cero, aparece «—».
- El tablero muestra **etapas actuales**. «Visitas» y «Ofertas» no son acumulados históricos ni conteos de todas las visitas/ofertas realizadas.
- La suma de valores del pipeline se aplica a oportunidades **abiertas** y no debe interpretarse como ingreso, facturación o venta confirmada.
- Los datos de demostración se registran de forma separada de la ficha y oportunidades del equipo.

### Limitaciones reales

- **Solo almacenamiento local (`localStorage`)**, dentro de ese navegador y perfil. Puede perderse al borrar datos del sitio, cambiar de equipo o navegar de forma privada. Descargá el respaldo JSON del equipo.
- **No hay Firebase**, nube, usuarios, autenticación, roles, integración con un CRM, API, Power BI real ni Metabase real. Para sincronizar entre dispositivos habría que crear un proyecto Firebase o backend equivalente, configurar credenciales públicas de cliente, autenticación, reglas de acceso, base de datos, políticas de privacidad y una capa de sincronización segura. No se incluyen ni se inventan claves.
- Los datos de la empresa real del equipo deben ser apropiados para la práctica y estar autorizados. Evitar información personal sensible o confidencial.
- No se adjuntó el programa oficial de la asignatura; la actividad de equipos está formulada **como práctica formativa**. No se inventaron criterios, notas ni porcentajes de evaluación.
- En clase, los laboratorios permiten desplazamiento interno; **las diapositivas normales no tienen scroll**.

### Archivos

- `index.html` — entrada principal.
- `styles.css` — diseño visual y disposición 16:9.
- `scripts/data.js` — registros ficticios para practicar.
- `scripts/slides.js` — contenido y notas docentes de las 35 diapositivas.
- `scripts/app.js` — navegación, reloj, temporizador, simulaciones, filtros, descargas y guardado local.
- `assets/` — capturas de revisión de la interfaz.

### Revisión de funcionamiento

Se verificó mediante una ejecución automatizada con Chromium y el proyecto cargado sin servidor externo: portada, diapositiva teórica, CRM, Excel, tablero, constructor de preguntas, actividad por equipos y descargas de CSV/JSON. La revisión automática detectó **35 diapositivas y ningún desbordamiento** en los elementos principales a 1366 × 768. No se registraron errores de JavaScript. La apertura directa con Firefox no se pudo comprobar desde este entorno porque Firefox no estaba disponible.

### Referencias conceptuales oficiales

- [HubSpot — What is CRM?](https://www.hubspot.com/products/crm/what-is)
- [Microsoft Learn — What is Power BI?](https://learn.microsoft.com/en-us/power-bi/power-bi-overview)
- [Microsoft Learn — Slicers](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers)
- [Metabase — Ask a question](https://www.metabase.com/docs/latest/getting-started/ask-a-question)
- [Metabase — Dashboards](https://www.metabase.com/docs/latest/dashboards/introduction)
