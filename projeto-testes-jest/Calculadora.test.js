const Calculadora = require('./Calculadora');

describe('Testes da Calculadora', ()=>{
    let calc;

    beforeEach(()=>{
        calc = new Calculadora();
    });

    test('Deve somar dois números', ()=>{
        expect(calc.soma(2,1)).toBe(3);
    });

    test('Deve subtrair dois número', ()=>{
        expect(calc.subtrai(3,1)).toBe(2);
    });

    test('Deve dividir dois número', ()=>{
        expect(calc.divide(2,2)).toBe(1);
    });

    test('Deve multiplicar dois número', ()=>{
        expect(calc.multiplica(3,0)).toBe(0);
    });

    test('Deve lançar erro ao dividir por zero', ()=>{
        expect(()=> calc.divide(2,0)).toThrow('Divisão por zero não é permitida!');
    });

    test('Deve somar número negativos', ()=>{
        expect(calc.soma(-2,-1)).toBe(-3);
    });

    test('Deve dividindo dois número que resulta em um número fracionário', ()=>{
        expect(calc.divide(5,2)).toBe(2.5);
    });

    test('Deve mockar setTimeout para soma com delay', ()=>{
        jest.useFakeTimers();
        const callback = jest.fn();
        calc.somaComDelay(2,3, callback);

        jest.advanceTimersByTime(1000);
        expect(callback).toHaveBeenCalledWith(5);
    });

});