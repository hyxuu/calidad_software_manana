const { obtenerFrutas, contienePalabra, agregarElemento } = require('./toContainDemo');

describe('toContain Matcher', () => {
    test('Happy Path: elemento dentro de array', () => {
        const frutas = obtenerFrutas();
        expect(frutas).toContain('pera');
    });

    test('Sad path: palabra dentro de texto', () => {
        const texto = 'Jest es super';
        expect(texto).toContain('super');
    });

    test('Sad path: elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas();
        expect(frutas).not.toContain('banana');
    });

    test('Sad path: elementos inválidos', () => {
        expect(() => {
            agregarElemento({}, 'x');
        }).toThrow('Lista debe ser array');
    });
});
