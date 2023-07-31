
class DiasDaSemana {
    constructor(dia) {
        this.dia = dia;
    }

    getDias() {
        switch (this.dia) {
            case 1:
                return 'Domingo';
            case 2:
                return 'Segunda-feira';
            case 3:
                return 'Terça-feira';
            case 4:
                return 'Quarta-feira';
            case 5:
                return 'Quinta-feira';
            case 6:
                return 'Sexta-feira';
            case 7:
                return 'Sábado';
            default:
                return 'Dia inválido';
        }
    }
}

const DiaDaSemana = new DiasDaSemana(3);

console.log(DiaDaSemana.getDias());

