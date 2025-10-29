const { calcularPromedio } = require('./calcularPromedio');

describe('Promedio', () => {
    test('Happy path: [4,9,2,10] mayor 6.25', () => {
        expect(calcularPromedio([4,9,2,10])).toBe(6.25);
    });
    test('Happy path: promedio es -3', () => {
        expect(calcularPromedio([-5,-1])).toBe(-3);
    });
    test('Sad path: arreglo invalido', () => {
        expect(() => calcularPromedio([])).toThrow('arreglo inválido');
        expect(() => calcularPromedio('edificio')).toThrow('arreglo inválido');
    });
});