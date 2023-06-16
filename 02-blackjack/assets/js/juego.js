let deck = [];
let tipos = ['C','D','H','D'];
let especiales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputador = document.querySelector('#computadora-cartas');

console.log(btnPedir);

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
    // console.log(deck);
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}
crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }

    carta = deck.pop();
    return carta;
}

const valorCarta = (carta) => {
    let puntos = 0;
    const valor = carta.substring(0,carta.length -1);
    // console.log(valor);

    return isNaN(valor) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;

}
// Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    //<img src="assets/cartas/2C.png" class="carta"></img>
    const imgCarta = document.createElement('img');
    imgCarta.classList.add("carta");
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);
    
    if(puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    }else if(puntosJugador == 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }


});