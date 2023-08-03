//refatorar com clean code
function fatorial( numero ) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }

  // Teste a função
  console.log(fatorial(5)); // Saída esperada: 120
  console.log(fatorial(0)); // Saída esperada: 1
  console.log(fatorial(10)); // Saída esperada: 3628800