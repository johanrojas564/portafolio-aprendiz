============================================================
                   PROYECTO FINAL: POWERFIT
============================================================

1. NOMBRE DEL SITIO WEB
------------------------------------------------------------
POWERFIT (Gimnasio de alta calidad multiservicios)


2. DESCRIPCIÓN GENERAL DE LOS ARCHIVOS
------------------------------------------------------------
El proyecto consta de dos archivos principales en su estructura web:

- index.html: 
  Archivo principal que contiene toda la estructura semántica y el contenido 
  del sitio web. Está organizado en secciones clave:
  * Cabecera y Navegación fija (`<header>`) con el logotipo y enlaces rápidos.

  * Sección de Presentación / Hero (`#inicio`) con el mensaje principal y presentación de la marca.

  * Sección de Servicios / Membresías (`#servicios`) con tarjetas informativas.

  * Sección de Precios y Catálogo (`#precios`) estructurada mediante una tabla detallada.

  * Sección de Información Adicional (`#nosotros` y horarios) utilizando un diseño de columnas.

  * Sección de Reserva  (`#contacto`) con un formulario interactivo validado por HTML5.

  * Pie de página (`<footer>`) con información legal y de contacto.

- styles.css: 
  Hoja de estilos modular y organizada secuencialmente que controla todo el aspecto 
  visual, la tipografía, los colores corporativos y la adaptabilidad del sitio.


3. FUNCIONALIDAD DEL ARCHIVO CSS (`styles.css`)
------------------------------------------------------------
La hoja de estilos está estrictamente ordenada y sectorizada para facilitar su mantenimiento:
1. Variables: 
     Definición centralizada de colores, sombras y radios de borde mediante `:root`.
  
  2. Base: 
     Restablecimiento de márgenes y aplicación global de `box-sizing: border-box`, 
     imágenes fluidas, tipografía y estilos base del cuerpo (`body`).
  
  3. Contenedor y utilidades: 
     Clases reutilizables como `.contenedor`, `.seccion`, `.seccion-clara` y 
     clases de introducción para el espaciado y centrado del contenido.
  
  4. Botones: 
     Estilos interactivos para los botones (`.boton`), con transiciones suaves, 
     efectos de elevación (`active`) y estados de enfoque accesibles (`focus-visible`).
  
  5. Encabezado y navegación: 
     Diseño de la barra superior fija (`sticky`), alineación flexible de elementos 
     y el menú de navegación principal con efectos de hover.
  
  6. Hero: 
     Estilizado de la sección de presentación con imagen de fondo, gradiente superpuesto 
     y tipografía destacada.
  
  7. Secciones: 
     Definición de los contenedores de sección, títulos principales y líneas decorativas 
     bajo los encabezados.
  
  8. Tarjetas / Servicios: 
     Diseño en cuadrícula (`CSS Grid`) de las tarjetas de membresías y sus interacciones.
  
  9. Información adicional: 
     Estilos para la tabla de servicios, la sección "Nosotros" en columnas y 
     el bloque de horarios con diseño distintivo.
  
  10. Formulario: 
     Estructura en rejilla (`grid`) de dos columnas para los campos de reserva, 
     así como validaciones visuales y avisos personalizados.
  
  11. Pie de página: 
     Alineación y diseño flexible de los elementos legales, de contacto y dirección (`address`).
  
  12. Responsive: 
     Consultas de medios (`Media Queries`) ubicadas al final para garantizar una visualización 
     adaptada a pantallas móviles y tablets.

4. DECISIONES DE DISEÑO
------------------------------------------------------------
- Paleta de Colores Corporativa: Se optó por una combinación de tonos oscuros, claros y anaranjados para ser alusivo al mundo,
dada su alta popularidad e iconicidad. 
- Accesibilidad: Se incorporaron estilos específicos para `focus-visible` permitiendo 
  que los usuarios que navegan mediante teclado identifiquen claramente en qué elemento se encuentran.

- Diseño Adaptable: Uso intensivo de `Flexbox` y `CSS Grid` para pasar de pantallas grandes a pequeñas 
  con funciones como `repeat(auto-fit, minmax(...))` para garantizar que las tarjetas y 
  secciones se acomoden fluidamente en todo tipo de pantallas. 
