// function crearPersona (nombre, apellido){
//     return {nombre,apellido}
// }

const crearPersona = (nombre,apellido) => ({nombre,apellido})

const persona = crearPersona('Eduardo','Hurtado');

console.log(persona);

function imprimeArgumentos(){
    console.log(arguments)
}

const imprimeArgumentos2 = (edad,...args) => {
    // console.log({edad,args})
    return args;
}

imprimeArgumentos(10,true,false ,'Christian','Hurtado');

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false ,'Eduardo','Catamuscay');



console.log({casado,vivo,nombre,saludo});

const {apellido} = crearPersona('Eduardo','Hurtado');
console.log(apellido);


const tony = {
    nombre:'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad = 15,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);