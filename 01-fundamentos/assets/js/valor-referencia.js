let a = 10;
let b = a;
a= 30;

console.log({a,b});


let juan = {
    nombre:'Juan'
}

let ana = {...juan};

ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});


/// Arreglos
const frutas = ['Manzana', 'pera', 'piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('Spread');
otrasFrutas2 = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('mango');

console.table({frutas,otrasFrutas});
