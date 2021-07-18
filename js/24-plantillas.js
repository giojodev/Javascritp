'use strict'

//Plantillas de texto

var nombre=prompt("METE TU NOMBRE");
var apellidos=prompt("METE TUS APELLIDOS");
//var texto= "Mi nombre es: 0"+nombre+", mis apellidos son: "+apellidos;

var texto=`
<h1>hola que tal</h1>
<h3>Mi nimbre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);