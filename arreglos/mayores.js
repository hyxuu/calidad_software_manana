function mayores(edades) {
    if (!Array.isArray(edades) || edades.length == 0)
        throw new TypeError('arreglo inválido');
    let mayoresEdad = [];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayoresEdad.push(edades[i]);
        }
    }
    return mayoresEdad;
}
module.exports = { mayores };
