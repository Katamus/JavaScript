import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crear-carta-html";

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement } puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement } divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');

    if(!puntosHTML) throw new Error('puntosHTML es necesario necesarios');
    

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        divCartasComputadora.append( crearCartaHTML(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}