let total = document.getElementById('valor-total').textContent;
let numberTotal = parseInt(total.replace('R$', ''));
let carrinho = document.getElementById('lista-produtos');

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let nomeProdutoEPreço = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    if (quantidade <= 0){
        let palavraItem = quantidade <= -2 ? 'itens' : 'item';
        alert (`Impossível adicionar ${quantidade} ${palavraItem}!`);
        return;
    } else{

    //dividir nome e prço do produto
    let texto = nomeProdutoEPreço;
    let partes = texto.split(' - ');
    let nomeProduto =  partes[0];
    let preçoProduto = partes[1].replace('R$','');  

    //calcular o preço, subtotal (valor * quantidade)
    let subTotal = preçoProduto * quantidade;
    
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    //atualizar o valor total
    
    numberTotal = numberTotal + subTotal;
    console.log (`Total: R$${numberTotal}`);
    document.getElementById('valor-total').innerHTML = `R$${numberTotal}`;
    }
}

function limpar() {
    numberTotal = 0;    
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span><span class="texto-azul"></span>
        </section>`;
    document.getElementById('valor-total').innerHTML = `R$${numberTotal}`;
}