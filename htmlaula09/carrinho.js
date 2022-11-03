listaProdutos = []

const produto = document.getElementById("produto")
const preco = document.getElementById("preco")
const todos = document.getElementById("todos")

function adicionar(){
    if (produto.value == ""){
        alert("PRODUTO SEM NOME")
        return
    }
    if (preco.value == ""){
        alert("PRODUTO SEM PREÇO")
        return
    }

    if (((preco.value >= "a") && (preco.value <= "z")) || ((preco.value >= "A") && (preco.value <= "Z"))){
        alert("PRECISA SER UM NUMERO")
        return
    }
    if (!preco.value.includes(",")){
        preco.value += ",00"
    }
    
    addCarrinho(produto.value, preco.value)
    
    produto.value = ""
    preco.value = ""
}

function addCarrinho(produtos, precos){
    var novoProduto = {nome: produtos, valor: precos}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    exibirProdutos()
    
}

function exibirProdutos(){
    var codHTML = '<h2>PRODUTOS</h2>';
    var i = 0;
    listaProdutos.forEach((prod) => {
        i += 1;
        if ((prod.nome != undefined)||(prod.valor != undefined)){
        codHTML += `<div class="divisao" id="${i}"><h1>${prod.nome}</h1><div>R$ ${(prod.valor)}<a href="javascript:void(0)" onclick="excluir(${i})">---</a></div></div>`
        todos.innerHTML = codHTML
        }
    });
    salvarCarrinho()
}

function salvarCarrinho(){
    localStorage.setItem('loja', JSON.stringify(listaProdutos))
}

function obterCarrinho(){
    if (localStorage.getItem('loja') != null){
    listaProdutos = JSON.parse(localStorage.getItem('loja'))
    exibirProdutos()
    }
}
function excluir(i){
    /*
    todos.innerHTML = ""
    listaProdutos = []
    */
   ex = document.getElementById(i)
   ex.innerHTML = ''
   listaProdutos.splice(i-1,1)
   salvarCarrinho()
   obterCarrinho()
}

document.getElementById('mostrar').addEventListener('click', esconder)

function esconder(){
    todos.classList.toggle('esc')
    
}
obterCarrinho();