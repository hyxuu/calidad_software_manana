const { mayores } = require('./mayores');

describe('Mayores de edad', ()=>{
    test('Retorna solo los mayores de 18', ()=>{
        expect(mayores([15, 22, 18, 30])).toEqual([22, 18, 30]);
    });
    test('Retorna un arreglo vacío si todos son menores', ()=>{
        expect(mayores([10, 11, 12])).toEqual([]);
    });
    test('Error al recibir un arreglo vacío o no un arreglo', ()=>{
        expect(()=>mayores([])).toThrow('arreglo inválido');
        expect(()=> mayores('hola')).toThrow('arreglo inválido');
    });
});
