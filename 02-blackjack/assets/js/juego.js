let deck = [];
let tipos = ['C','D','H','D'];
let especiales = ['A','J','Q','K'];

// Esta Funcion crea una nueva baraja
const crearDeck = () => {

    for(let tipo of tipos){
        for(let  i= 2; i <= 10; i++){
            deck.push(i+tipo);   
        }
        for(let especial of especiales){
            deck.push(especial+tipo)
        }


    }
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }

    carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}


// pedirCarta();