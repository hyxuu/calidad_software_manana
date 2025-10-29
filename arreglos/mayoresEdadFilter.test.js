const { mayoresEdadFilter } = require('./mayoresEdadFilter');

describe('Mayores de edad con filter', ()=>{
    test('Happy path: [15,18,26,28] mayores de edad [18,26,28]', ()=>{
        expect(mayores([15, 22, 18, 30])).toEqual([22, 18, 30]);
    });
    test('Happy path: [] mayores []', ()=>{
        expect(mayoresEdadFilter([])).toEqual([]);
    });
    test('Sad path: edades invalidas', ()=>{
        expect(()=>mayoresEdadFilter([])).toThrow('arreglo inválido');
    });
});
