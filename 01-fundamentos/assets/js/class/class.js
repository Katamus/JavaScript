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

}

const spiderman = new Persona('Peter parker','Spider', 'soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Strak','Ironman','Yo soy Ironman');
console.log(spiderman);