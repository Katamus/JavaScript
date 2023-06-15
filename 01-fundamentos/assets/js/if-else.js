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
    console.log('Martes');
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