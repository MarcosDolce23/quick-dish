# Plato Rápido (nombre clave)

## Descripción
Este proyecto es un desarrollo que surgió entre amigos luego de publicar nuestra primera app (Mi Barra).
La intención no es hacer una aplicación revolucionaria ni tampoco un gran proyecto. Solo queremos desarrollar nuestros conocimientos en programación e interfaces de usuario.

La aplicación consiste en un buscador de platos basado en lo que hay al alance en tu hogar, el enfoque es poder ayudar al usuario cuando tiene pocos ingredientes y no sabe qué cocinar.

## Tecnología
Es una aplicación cordova mientras que la interfaz de usuario está hecha en React.js

Para poder integrar ambos proyectos (cordova y React.js) fue necesario:
- Copiar las carpeta src/ y public/ de un proyecto React dentro del proyecto cordova.
- Agregar las dependencias necesarias de React al package.json del proyecto cordova.
- Agregar los siguientes <meta> tags en el <head> del archivo public/index.html.
```
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
<meta name="format-detection" content="telephone=no">
<meta name="msapplication-tap-highlight" content="no">
<meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
```
- Agregar el archivo cordova.js en el <body> de public/index.html.
```
<script src="cordova.js" type="text/javascript"></script>
```
- Configurar el react dom par que sea cargado luego del evento cordova "deviceready".
```
if (window.cordova) {
  document.addEventListener('deviceready', () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, false);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
```
- Actualizar el package.json para que la aplicación utilice relative paths.
```
"homepage": "./"
```
  
Para que la aplicación React pueda correr dentro del proyecto cordova es necesario hacer un build de esta y copiar el resultado dentro la carpeta wwww/.
Para automatizar esta tarea agregué un script que se ejecutará mediante el hook "before_prepare" de cordova.
  
## Otros
Por el momento solo estamos desarrollando la aplicación para Android. Dado que el presupuesto es de $0.

