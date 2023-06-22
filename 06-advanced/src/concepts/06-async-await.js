import { heroes } from "../data/heores";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asynAwaitsComponent = async (element) => {
    
    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f97c29d020f1e1f6ds';

    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        console.log(error);
        element.innerHTML = error
    }


    console.log('asynAwaitComponent');
    
}

const findHero = async (id) => {
    const hero  = heroes.find(hero => hero.id === id);
    if(!hero)
        throw new Error(`Hero whit ${id} no found`);

    return hero;
}