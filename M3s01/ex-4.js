class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class ItemPedido {
    constructor(produto, quantidade) {
      this.produto = produto;
      this.quantidade = quantidade;
    }
  
    calcularValorTotal() {
      return this.produto.preco * this.quantidade;
    }
  }
  
  class Pedido {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    calcularValorTotal() {
      return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
  }
  
  class NotaFiscalServico {
    gerarNotaFiscal(pedido) {
      const valorTotal = pedido.calcularValorTotal();
      return new NotaFiscal(pedido, valorTotal);
    }
  }
  
  class NotaFiscal {
    constructor(pedido, valorTotal) {
      this.pedido = pedido;
      this.valorTotal = valorTotal;
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto("Produto 1", 100.0);
  const produto2 = new Produto("Produto 2", 200.0);
  
  const item1 = new ItemPedido(produto1, 2);
  const item2 = new ItemPedido(produto2, 1);
  
  const pedido = new Pedido();
  pedido.adicionarItem(item1);
  pedido.adicionarItem(item2);
  
  const notaFiscalServico = new NotaFiscalServico();
  const notaFiscal = notaFiscalServico.gerarNotaFiscal(pedido);
  
  console.log("Valor total do pedido:", pedido.calcularValorTotal());
  console.log("Valor total da nota fiscal:", notaFiscal.valorTotal);
  