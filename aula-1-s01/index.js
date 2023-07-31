const dias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];
  
  function DiaDaSemana(dia) {
    const diaDaSemana = dias[dia - 1];
    return diaDaSemana ? diaDaSemana : 'Dia inválido';
  }
  
  const diaDaSemana = DiaDaSemana(5);
  console.log(diaDaSemana);
  