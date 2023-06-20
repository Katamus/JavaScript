
import { heroes } from "../data/heores"
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    
    console.log('promiseComponent');
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) =>{
    
    return new Promise((resolve,reject)=>{
        
        const hero =heroes.find(hero  => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }

        reject(`Hero with is ${id} not found.`);
    });

}