class Forma {
    constructor(tipo, medidas) {
      this.tipo = tipo;
      this.medidas = medidas;
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super('quadrado', { lado });
    }
    calcularArea() {
        return this.medidas.lado * this.medidas.lado;
    }
    calcularPerimetro() {
        return 4 * this.medidas.lado;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super('circulo', { raio });
    }
    calcularArea() {
        return Math.PI * this.medidas.raio * this.medidas.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.medidas.raio;
    }
}

class Triangulo extends Forma {
    constructor(base, altura, lado1, lado2, lado3) {
        super('triangulo', { base, altura, lado1, lado2, lado3 });
    }
    calcularArea() {
        return (this.medidas.base * this.medidas.altura) / 2;
    }
    calcularPerimetro() {
        return this.medidas.lado1 + this.medidas.lado2 + this.medidas.lado3;
    }
}

const forma1 = new Quadrado(5);
console.log('Área do quadrado:', forma1.calcularArea());
console.log('Perímetro do quadrado:', forma1.calcularPerimetro());

const forma2 = new Circulo(3);
console.log('Área do círculo:', forma2.calcularArea());
console.log('Perímetro do círculo:', forma2.calcularPerimetro());

const forma3 = new Triangulo(4, 6, 3, 4, 5);
console.log('Área do triângulo:', forma3.calcularArea());
console.log('Perímetro do triângulo:', forma3.calcularPerimetro());
