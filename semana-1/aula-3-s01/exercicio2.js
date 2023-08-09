function calcularMedia(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length;
  }
  


function verificarSituacao(media, faltas) {
    const mediaAprovacao = 7;
    const limiteFaltas = 5;

    return media >= mediaAprovacao && faltas <= limiteFaltas ? 'aprovado' : 'reprovado';
}

function calcularMediaENotas(notas, faltas) {
    const media = calcularMedia(notas);
    const situacao = verificarSituacao(media, faltas);

    const resultado = {
        media: media.toFixed(2),
        situacao: situacao
};

    return resultado;
}
  
  const notasAluno1 = [8, 7, 6, 9, 8];
  const faltasAluno1 = 3;
  console.log('Notas:', notasAluno1);
  console.log('Faltas:', faltasAluno1);
  console.log('Resultado:', calcularMediaENotas(notasAluno1, faltasAluno1));
  