function acharMaiorValor(lista){
    let maiorValor = lista[0];

    for(let i = 1; i < lista.length; i++){
        if(lista[i] > maiorValor){
            maiorValor = lista[i];
        }
    }

    return maiorValor;
}

const valores = [10, 5, 8, 20, 3, 89];
console.log('Maior valor: ', acharMaiorValor(valores));
