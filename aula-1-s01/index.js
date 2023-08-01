function getWeekDayName(day) {
    const weekDays = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ];
  
    const weekDay = weekDays[day - 1];
    return weekDay ? weekDay : 'Dia inválido';
  }
  
  function main() {
    const diaDaSemana = getWeekDayName(3);
    console.log(diaDaSemana);
  }
  
  main();
  