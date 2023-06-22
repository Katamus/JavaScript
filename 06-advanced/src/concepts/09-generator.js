

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    
    // console.log('generatorFunctionsComponent');
    // const myGenerator =myFirstGeneratorFunction();

    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const genId = idGenerator();

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click',
        renderButton
    );
}

function* idGenerator(){
    let currenid=0;
    while (true) {
        yield ++currenid;
    }
} 

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    
    return 'Ya no hay valores';
    yield 'Ya no se puede hacer nada';
}