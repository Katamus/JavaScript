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