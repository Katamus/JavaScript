(() => {

    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'D'],
        especiales = ['A', 'J', 'Q', 'K'];
    // let puntosJugador = 0, 
    //     puntosComputadora = 0;

    let puntosJugadores = [];

    // Referencias HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

    
    const divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComputador = document.querySelector('#computadora-cartas'),
        puntosHtml = document.querySelectorAll('small');


    // Esta funcion inicializa el juego
    const inicialzarJuego = (numJugadores = 2 )=>{
        crearDeck();
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
    }
    // Esta Funcion crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        for (let tipo of tipos) {
            for (let i = 2; i <= 10; i++) {
                deck.push(i + tipo);
            }
            for (let especial of especiales) {
                deck.push(especial + tipo)
            }
        }

        return _.shuffle(deck);
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }


    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    const acumularPuntos() => {


    }

    // truno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHtml[1].innerText = puntosComputadora;

            //<img src="assets/cartas/2C.png" class="carta"></img>
            const imgCarta = document.createElement('img');
            imgCarta.classList.add("carta");
            imgCarta.src = `assets/cartas/${carta}.png`;
            divCartasComputador.append(imgCarta);
            if (puntosMinimos > 21) {
                break;
            }
        } while (puntosMinimos > puntosComputadora && (puntosMinimos <= 21));

        setTimeout(() => {
            btnDetener.disabled = true;
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else {
                alert('Computador gana');
            }
        }, 100);
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHtml[0].innerText = puntosJugador;

        //<img src="assets/cartas/2C.png" class="carta"></img>
        const imgCarta = document.createElement('img');
        imgCarta.classList.add("carta");
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador == 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    });

    

    btnNuevo.addEventListener('click', () => {
        inicialzarJuego();
        // deck = [];
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        // deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHtml[0].innerText = 0;
        puntosHtml[1].innerText = 0;

        divCartasComputador.innerHTML = "";
        divCartasJugador.innerHTML = "";

    });

})();