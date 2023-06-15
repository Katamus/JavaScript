function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola '+nombre);
    return [1,2,3];

    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre) {
    console.log('Hola '+nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola '+nombre);
}

const retornaDeSaludar = saludar('Christian',40,true,'Costa Rica'); // 1
// console.log(retornaDeSaludar[0],retornaDeSaludar[1]);
// saludar2('Christian')
// saludarFlecha();
// saludarFlecha2('Jenifer');

function sumar (a,b) {
    return a+b;
}

const sumar2 = (a,b)=> a+b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());