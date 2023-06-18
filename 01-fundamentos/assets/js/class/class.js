class Persona{
    
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){

        if(!nombre){
            throw Error('El campo nombre no puede estar vacio');
        }

       this.codigo = codigo;
       this.nombre = nombre;
       this.frase = frase;

    }

    quienSoy(){
        console.log(`soy ${this.codigo} y mi identidad es ${this.nombre}`);
    }

    miFase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter parker','Spiderman', 'soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Strak','Ironman','Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

spiderman.miFase();
ironman.miFase();