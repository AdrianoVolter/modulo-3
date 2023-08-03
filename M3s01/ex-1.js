function verificaNumeroPrimo(numero) {
    if (numero < 2) 
    return false;

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return true;
    
  }
  
  // Teste a função
  console.log(verificaNumeroPrimo(7)); // Saída esperada: true
  console.log(verificaNumeroPrimo(12)); // Saída esperada: false