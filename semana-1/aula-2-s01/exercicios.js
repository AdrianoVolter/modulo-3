class Pedido {
    constructor(id, cliente){
        this.nome = id;
        this.preco = cliente;
        this.itens = [];
        this.valorTotal = 0;
    }

    calcularValorTotal(){
        this.valorTotal = this.itens.reduce((total, item) => total + item.precoUnitario * item.quantidade, 0);
    }

    adicionarItem(item, precoUnitario, quantidade){
        this.itens.push({
            item,
            precoUnitario,
            quantidade
        });
    }
}

const pedido = new Pedido(1, 'João');
pedido.adicionarItem('Coca-Cola', 5, 2);
pedido.adicionarItem('Batata Frita', 10, 1);
pedido.calcularValorTotal();
console.log(pedido);




