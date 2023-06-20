import { heroes } from "../data/heores"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f9f80b591f499df32';
    findHero(id1, (error,hero1) => {
        if(!!error){
            element.innerHTML = error;
            return
        }
        findHero(id2, (error,hero2) => {
            if(!!error){
                element.innerHTML = error;
                return
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
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