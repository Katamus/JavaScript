class Persona {

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    static porObjeto({nombre,apellido, pais}){
        return new Persona(nombre,apellido,pais);
    }

    getInfo(){
        console.log(`info: ${this.nombre},${this.apellido},${this.pais}`);
    }
}

    const nombre1 = 'Melissa',
        apellido1 = 'Flores',
        pais1 = 'Honduras';

    const fher = {
        nombre: 'Fernando',
        apellido: 'Herrera',
        pais : 'Honduras'
    }

    const perona = new Persona(nombre1,apellido1,pais1);
    const perona2 = Persona.porObjeto(fher);

    perona.getInfo();
    perona2.getInfo();