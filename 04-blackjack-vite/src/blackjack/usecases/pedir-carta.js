
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Arreglo con todas las cartas
 * @returns {String} retorna la ultima carta del arreglo de cartas
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}