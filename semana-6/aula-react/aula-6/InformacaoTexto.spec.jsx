
function InformacaoTexto(texto) {
    return {
        quantidadeCaracteres: texto.length,
        primeiroCaracter: texto[0],
        ultimoCaracter: texto[texto.length - 1]
    }
}



describe ('InformacaoTexto', () => {
    
    test('Se o texto for Maria a quantidade de caracteres deve ser 5', () => {
        const resultado = InformacaoTexto('Maria');
        expect(resultado.quantidadeCaracteres).toBe(5);
    });

    test.todo('Se o texto for Maria o primeiro caracter deve ser M');

    test.todo('Se o texto for Maria o último caracter deve ser a');
}
);