

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    element.innerHTML  = 'Loding...';
    
    const renderValue = (value) =>{
        element.innerHTML  = value;
    }


    console.log('promiseRaceComponent');
    Promise.race([
        slowPromise(),
        midiumPromise(),
        fastPromise()
    ]).then(renderValue);

}

const slowPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Slow Promise')
    },2000);
});

const midiumPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Midum Promise')
    },1500);
});

const fastPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Fast Promise')
    },1000);
});