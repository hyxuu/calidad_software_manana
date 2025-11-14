function esTruthy(valor){
    return !!valor; //coercion booleana
}

function retornarDefault(valor,defacto = 'N/A') {
    return valor ? valor : defecto; // usa falsy
}

function requiereTextoNoVacio(txt){
    if(typeof txt !== 'string' || !txt.trim()){
        throw new TypeError('texto rquerido');
    }
    return txt.trim();
}

module.exports = { esTruthy, retornarDefault, requiereTextoNoVacio };