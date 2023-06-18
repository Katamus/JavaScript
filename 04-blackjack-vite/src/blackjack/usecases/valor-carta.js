/**
 * Calcula el valor de una carta
 * 
 * @param {String} carta 
 * @returns {Number} retorna el valor correspondiente a la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta || carta.length == 0){
        throw Error('La carta es requeridad y no puede ser vacia');
    }
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}