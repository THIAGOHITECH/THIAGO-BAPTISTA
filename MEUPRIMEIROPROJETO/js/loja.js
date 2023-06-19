let carrinho=[];
function adicionarAoCarrinho(peçasid){
    carrinho.push(peçasid);
    carrinho.push(acessoriosid);
}
function exibirItensCarrinho(){
    let itensCarrinho=document.getElementById("itens-carrinho");
    itensCarrinho.innerHTML="";
    

    for (let i=0; i< carrinho.length; i++){
        let item=
        document.createElement("li");
        item.textContent="peças"+ carrinho[i];
        itensCarrinho.appendChild(item);
    }
}
function LimparCarrinho(){
    carrinho=[];
    exibirItensCarrinho();
}
