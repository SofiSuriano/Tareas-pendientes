// Comentarios /*Comentarios para varias lineas*/
//alt + 39 para comillas sencillas o simples '' 
//alert('HOLA DESDE UN ALERT');
console.log('hola consola!');

//Var y let son formas de definir variables solo que la actual es let
//var apellido="Rojas"

let nombre = "Sofia";

const pi = 3.14;
//String nombre = 'Juan';
// Tipos de datos 

//* No definido 
let noDefinido; 
//* Número 
let cantidad = 50;
//Cadena de texto o string 
let bedida= 'agua';
//* booleanos
let activo=true;

// Objetos
// Persona: nombre, apellido, edad, peso
let Persona= {nombre: 'Aurora', apellido:'Pinzón', edad: 20,};
console.log(Persona);
//Los arrays  son con corchetes [ ] Y Los objetos con llaves { }
// Arrays colection 
let Personas=[
    {nombre: 'Melanie', apellido: 'Matus', edad:21},
    {nombre: 'Mayra', apellido: 'Arias', edad:19},
    {nombre: 'Karla', apellido: 'Yulenni', edad:22},
    Persona
]
console.log(Personas);
//JavaScript empieza a contar en el elemento 0
//en general cuando usas arreglos todos los elementos que guardes los acomoda desde 0 (en cualquier lenguaje)
console.log(Personas[2]);

// Funciones JS
// Listado de instrucciones
function suma( a, b) {
//return 2+2; esto se supone que no sirve pero x
return a+b; //esto es lo mejor
}
let ResultadoDeSuma=suma( 5,3 );
console.log(ResultadoDeSuma);

function multiplicacion( a, b) {
    return a*b;
}
let ResultadoMult=multiplicacion(5,3);
console.log(ResultadoMult);


//== se utiliza cuando comparamos un dato con otro en un condicional, creo jaja

//Operadores aritmeticos




