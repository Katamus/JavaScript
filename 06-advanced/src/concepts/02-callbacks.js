import { heroes } from "../data/heores"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id = '5d8637a1f2343e37870b91ef1';
    findHero(id, (error,hero) => {
        if(!!error){
            element.innerHTML = error;
            return
        }
        element.innerHTML = hero.name;
    });
    
}

/**
 * 
 * @param {String} id 
 * @param {(erro: string|null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero =heroes.find(hero  => hero.id === id);
    if(!hero){
        callback(`Hero with is ${id} not found.`);
        return;//undefined
    }
    callback(null,hero);
}