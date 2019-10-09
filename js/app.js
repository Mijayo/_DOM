// Eliminar de Local Storage
localStorage.clear();

// Muestra el codigo HTML en la consola. El triangulo que sale en la consola signifca que es un objeto
let elemento;
elemento = document;
console.log(elemento);

// Muestra el codigo HTML como una tabla
elemento = document.all;
console.log(elemento);

// Accedemos a una parte concreta, la que queramos, del DOM HTML de la siguiente manera
elemento = document.head;
console.log(elemento);

elemento = document.body;
console.log(elemento);

// Obtenemos la URL del documento
elemento = document.URL;
console.log(elemento);

// Accedemos a los formularios
elemento = document.forms;
console.log(elemento);

// Recorremos los formularios sacando informacion concreta por posicion [] dependiendo del numero de formularios que tengamos
elemento = document.forms[0].id;
console.log(elemento);

elemento = document.forms[0].className;
console.log(elemento);

elemento = document.forms[0].classList;
console.log(elemento);

// Accedemos a las imaganes del HTML
elemento = document.images;
console.log(elemento);

elemento = document.images[18];
console.log(elemento);

elemento = document.images[2].getAttribute('src');
console.log('SRC de la imagen: ' + elemento);

// Programa para recorrer y pintar todas las imagenes del HTML
var img = document.images;
var imgArr = Array.from(img);
imgArr.forEach(function(imG) {
    console.log(imG);
});

let ele_hero;
ele_hero = document.getElementById('hero');
console.log(ele_hero);

let cabecera;
cabecera = document.getElementById('encabezado');
cabecera.style.background = '#333';
cabecera.style.color = '#fff';
cabecera.style.padding = '200px';
cabecera.textContent = 'DIEGO';
console.log(cabecera);