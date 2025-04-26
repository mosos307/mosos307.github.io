# Proyecto de Manipulación de URLs y Generación de Reportes

Este proyecto permite **manipular parámetros de URLs** de manera dinámica para acceder a diferentes tipos de reportes basados en un sistema de gestión académica. La herramienta permite cambiar el contenido mostrado en el servidor alterando los parámetros de la URL, como el periodo o el grado, y generar enlaces personalizados para obtener información específica.

## Descripción

El sistema permite modificar los parámetros de la URL, tales como:

- **Periodo**


Con ello, el usuario puede generar enlaces personalizados para acceder a reportes y documentos específicos según los parámetros seleccionados. Los parámetros se codifican en Base64 para ser transmitidos de manera segura y compacta.

### Funcionalidades

- **Manipulación de parámetros**: Permite modificar parámetros como el periodo, el grado o el grupo de manera dinámica.
- **Codificación Base64**: Los parámetros se codifican en Base64 para permitir una transmisión eficiente en las URLs.
- **Generación de URL personalizada**: Al cambiar los parámetros, se genera una URL completa que se puede utilizar directamente para acceder al reporte deseado.
- **Interactividad y validación**: La interfaz de usuario es interactiva, permitiendo copiar las URLs generadas y validar los datos ingresados.

## Cómo Funciona

1. **Entrada de URL**: El usuario introduce la URL base en el campo correspondiente.
2. **Extracción de parámetro `enc`**: Se extrae el parámetro `enc` de la URL para decodificarlo.
3. **Selección de parámetros**: El usuario puede modificar parámetros como el periodo, grado o grupo.
4. **Generación de nueva URL**: Después de realizar las modificaciones, el sistema genera una nueva URL con los parámetros codificados en Base64.
5. **Notificación y Copia**: El usuario puede copiar la nueva URL generada y usarla para acceder al reporte.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para la estilización y el diseño, con un enfoque en la **interactividad** y el diseño atractivo.
- **JavaScript**: Para manipular la URL, codificar en Base64 y manejar la lógica de la interfaz de usuario.
- **Base64**: Para codificar los parámetros de manera compacta y segura.

## Instrucciones para el Usuario

1. **Ingrese la URL base**: Copie y pegue la URL original que desea modificar en el campo de texto.
2. **Modifique los parámetros**: Cambie los parámetros como el periodo
3. **Genere la nueva URL**: Después de hacer las modificaciones, presione el botón "Generar URL".
4. **Copie la URL**: Haga clic en "Copiar URL" para obtener el enlace modificado que puede ser utilizado para acceder al reporte.
5. **Reciba la notificación**: El sistema le notificará cuando la URL haya sido copiada correctamente.
