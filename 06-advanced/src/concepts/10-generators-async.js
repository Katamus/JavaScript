import { heroes } from "../data/heores";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {
    
    const heroGenerator = getHeroGenerartor();
    let isFinish = false;
    do {
        const {value,done} = await heroGenerator.next();
        isFinish = done;
        if(!isFinish)
            element.innerHTML = value;
    }while (!isFinish) 
}

async function* getHeroGenerartor(){
    for( const hero of heroes ){
        await sleep();
        yield hero.name
    }
}

const sleep = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        },1000);
    })
}