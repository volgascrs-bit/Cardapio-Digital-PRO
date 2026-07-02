let carrinho = [];
let total = 0;

function adicionar(nome, preco) {

    // Verifica se o item já existe no carrinho
    let item = carrinho.find(p => p.nome === nome);

    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {

    let lista = "";

    carrinho.forEach(item => {
        lista += `${item.quantidade}x ${item.nome} <br>`;
    });

    document.getElementById("lista").innerHTML = lista;
    document.getElementById("total").innerText = total.toFixed(2);
}

function finalizarPedido() {

    let mensagem = "🔥 *Pedido - Espetinho D'alu*%0A%0A";

    carrinho.forEach(item => {
        mensagem += `${item.quantidade}x ${item.nome}%0A`;
    });

    mensagem += `%0A💰 Total: R$ ${total.toFixed(2)}`;

    const telefone = "5521996542073";

    window.open(
        `https://wa.me/${telefone}?text=${mensagem}`,
        "_blank"
    );
}

function pesquisarProdutos() {

    let texto = document.getElementById("pesquisa").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let nome = card.querySelector("h2, h3").innerText.toLowerCase();

        if(nome.includes(texto)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

function filtrarCategoria(categoria){

    let cards = document.querySelectorAll(".card");

    cards.forEach(card =>{

        if(categoria === "todos"){
            card.style.display = "block";
        }else if(card.dataset.categoria === categoria){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}