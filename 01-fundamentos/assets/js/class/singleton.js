class Singleton{

    static instancia;

    nombre = '';

    constructor( nombre = ''){

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');
const instacia3 = new Singleton('BlackPhanter');
console.log(`Nombre en la instancia1 es ${instacia1.nombre}`);
console.log(`Nombre en la instancia1 es ${instacia2.nombre}`);
console.log(`Nombre en la instancia1 es ${instacia3.nombre}`);