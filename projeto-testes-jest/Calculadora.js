class Calculadora{
    soma(a,b){
        return a+b;
    };

    subtrai(a,b){
        return a-b;
    };

    divide(a,b){
        if(b===0) throw new Error('Divisão por zero não é permitida!');
        return a/b;
    };

    multiplica(a,b){
        return a*b;
    };
}

module.exports = Calculadora;