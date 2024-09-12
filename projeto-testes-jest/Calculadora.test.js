const Calculadora = require('./Calculadora');

describe('Testes da Calculadora', ()=>{
    let calc;

    beforeEach(()=>{
        calc = new Calculadora();
    });

    test('Deve somar dois números', ()=>{
        expect(calc.soma(2,3).toBe(5))
    })
})