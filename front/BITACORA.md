
# Prueba técnica Front-end Ecomsur: Gestión de carrito de compras 


## Tabla de contenido

1. [Instalar y correr la aplicación](#Instalar-y-correr-la-aplicación)
2. [Manejo de estado](#Manejo-de-estado)
3. [Rutas](#Rutas)
4. [Estilo](#Estilo)
5. [Llamado a la API](#Llamado-a-la-API)



Instalar y correr la aplicación (front):

En la carpeta root de la aplicacion correr: npm install
Navega al directorio front y vuelve a correr el comando: npm install
Regresa al directorio root cd ...
La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando


# Instalar y Correr la aplicación 

Instalar API (backend) y la aplicacion React (front):

En la carpeta root de la aplicacion correr: npm install
Navega al directorio front y vuelve a correr el comando: npm install
Regresa al directorio root cd ...
La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

npm run dev

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

Las únicas dependencias utilizadas extra al proyecto fueron,

- Axios 
- react-router-dom 
- sweetAlert2 


Las que debiesen de  estar ingresadas una vez se instale el proyecto, pero en caso de no agregarse correctamente, favor correr los siguientes comandos desde la terminal de front-end:
```bash
npm i axios
npm i react-router-dom
npm install sweetalert2
```

# Descripcion de la solución

## Manejo del estado: 

Considerando la complejidad del manejo de estados en el desafío, opté por no hacer uso de redux sino que de Context, que considerando la documentación oficial de react: 
 

>.Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

>.En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esta forma puede resultar incómoda para ciertos tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente una prop a través de cada nivel del árbol.

## Rutas: 

Respecto al manejo de las rutas este se realizó a partir de la siguiente base: 

- una ruta inicial o Home ("/")
- ruta carrito de compras 
- rutas relativas para el acceso al detalle de cada producto, esto a partir del id (por ejemplo:" http://localhost:5000/api/products/4" ) 

## Estilos: 

Toda el desafío fue desarrollado sólo con manejo de css, sin embargo, con el fin de proporcionar al usuario/a una experiencia más fluida  las notificaciones de ingreso o salida de productos del carrito, se hace con el uso de la librería Sweet Alert. 



