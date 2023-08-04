class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class GerenciadorEstoque {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    removerProduto(produto) {
      const index = this.produtos.findIndex((p) => p.nome === produto.nome);
      if (index !== -1) {
        this.produtos.splice(index, 1);
      }
    }
  
    listarProdutos() {
      return this.produtos;
    }
  }
  
  class LojaOnline {
    constructor(gerenciadorEstoque) {
      this.gerenciadorEstoque = gerenciadorEstoque;
    }
  
    adicionarProduto(nome, preco, quantidade) {
      const produto = new Produto(nome, preco, quantidade);
      this.gerenciadorEstoque.adicionarProduto(produto);
    }
  
    removerProduto(nome) {
      const produto = this.gerenciadorEstoque.listarProdutos().find((p) => p.nome === nome);
      if (produto) {
        this.gerenciadorEstoque.removerProduto(produto);
      }
    }
  
    listarProdutos() {
      return this.gerenciadorEstoque.listarProdutos();
    }
  }
  
  const gerenciadorEstoque = new GerenciadorEstoque();
  const lojaOnline = new LojaOnline(gerenciadorEstoque);
  
  lojaOnline.adicionarProduto('Camiseta', 29.99, 50);
  lojaOnline.adicionarProduto('Calça Jeans', 89.99, 30);
  
  console.log('Produtos em estoque:', lojaOnline.listarProdutos());
  
  lojaOnline.removerProduto('Camiseta');
  
  console.log('Produtos em estoque após a remoção:', lojaOnline.listarProdutos());
  