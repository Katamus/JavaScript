let deck = [];
let tipos = ['C','D','H','D'];
let especiales = ['A','J','Q','K'];
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