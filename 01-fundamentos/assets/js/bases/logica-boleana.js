const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresafalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!!!!!!!true);
console.log(!regresafalse());


console.warn('And'); // true si todos los calores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true

console.log("==========");
console.log(regresafalse() && regresaTrue()); //false
console.log(regresaTrue() && regresafalse()); //false

console.log("==========");
regresafalse() && regresaTrue()
console.log('Cuatro condiciones', true || true || true || false);


console.warn('OR');
console.log(true || false);
console.log(false || true);
console.log(regresaTrue() || regresafalse());


console.warn("Asignaciones")

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;

const a2 = 'Hola' && 'Mundo' && soyFalso && true;

const a3 = soyFalso || 'Ya no soy falso';

const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;

const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4,a5});

if( regresafalse() && regresaTrue() && (true || false || true)){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}