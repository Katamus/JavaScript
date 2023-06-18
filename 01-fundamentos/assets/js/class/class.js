class Persona{

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){

        if(!nombre){
            throw Error('El campo nombre no puede estar vacio');
        }

       this.codigo = codigo;
       this.nombre = nombre;
       this.frase = frase;

       Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidadFavorita(){
        return `La comida favorita de  ${this.nombre} es ${this.comida}`;
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
// const ironman = new Persona('Tony Strak','Ironman','Yo soy Ironman');

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';


// spiderman.nemesis = 'Duende verde'; // mala practica


// console.log(spiderman);
// console.log(ironman);

spiderman.miFase();
// ironman.miFase();

// console.log(spiderman.getComidadFavorita);
// Persona._conteo = 2;
console.log('Conteo stático',Persona._conteo);
console.log(Persona.conteo);

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona);
console.log( Persona.propiedadExterna );