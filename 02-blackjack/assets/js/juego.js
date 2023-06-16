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

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');


    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2 )=>{
        deck = [];
        deck = crearDeck();
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
    }
    // Esta Funcion crea una nueva baraja
    const crearDeck = () => {
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

    // turno : 0 es igual al primer jugador y el ultimo al turno de la computadora
    const acumularPuntos = (carta,turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta,turno) => {
            const imgCarta = document.createElement('img');
            imgCarta.classList.add("carta");
            imgCarta.src = `assets/cartas/${carta}.png`;
            divCartasJugadores[turno].append(imgCarta);
    }

    // truno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
            crearCarta(carta,puntosJugadores.length-1);
            // const imgCarta = document.createElement('img');
            // imgCarta.classList.add("carta");
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // divCartasComputador.append(imgCarta);
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
        const puntosJugador = acumularPuntos(carta,0);
        crearCarta(carta,0);
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
        inicializarJuego();
        // deck = [];
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        // deck = crearDeck();

        // puntosJugador = 0;
        // puntosComputadora = 0;

        puntosHtml[0].innerText = 0;
        puntosHtml[1].innerText = 0;

        // divCartasComputador.innerHTML = "";
        // divCartasJugador.innerHTML = "";

    });

})();