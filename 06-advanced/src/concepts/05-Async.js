import { heroes } from "../data/heores";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    
    const id1 = '5d86371f97c29d020f1e1f6d';
    console.log('Inicio de componente');
    findHero(id1)
        .then(console.log)
        .catch((error) => element.innerHTML = error);
    console.log(findHero(id1));
    console.log('Fin de componente');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero){
        throw new Error(`Hero with id ${id} not found`);
    }
    return hero.name;
}
