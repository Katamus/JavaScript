let a = 10;

if(a > 10){ // undefine, null, una asignacion
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

if( dia === 0 ){
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
    // if(dia === 1){
    //     console.log('Lunes');
    // }else {
    //     console.log('No es lunes ni domingo');
    // }
} else if (dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

console.log({dia});

const diasLetrasArray = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
const diasLetras = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
}

console.log(diasLetras[dia]||'Dia no definido');
console.log(diasLetrasArray[dia]||'Dia no definido');
