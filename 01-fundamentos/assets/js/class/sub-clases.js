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

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
    
}

const spiderman = new Heroe('Peter parker','Spiderman', 'soy tu amigable vecino Spiderman');

console.log(spiderman);
spiderman.quienSoy();