// o endereco da API que esta rodando no vscode
const API = "http://127.0.0.1:8000";

// async: dentro dela da para esperar a resposta com wait
async function listarLivros(){
    //fetch faz o pedido GET, como a barra de endereço
    const resposta = await fetch(API + "/livros");
    const livros = await resposta.json();
    
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (const livro of livros){
        const item = document.createElement("li");
        item.textContent = `${livro.id} - ${livro.titulo} (${livro.ano})`;
        lista.appendChild(item);
    }
}

async function buscarLivro(){
    const codigo = document.getElementById("codigo").value;
    const resultado = document.getElementById("resultado");

    const resposta = await fetch(API + '/livros/' + codigo);
    const livro = await resposta.json();
    resultado.textContent = `${livro.id} - ${livro.titulo} (${livro.ano})`;

    if (!resposta.ok) {
    resultado.textContent = livro.detail;
    return;
}

}


// como o cammand= do tkinter? o clique chama a função
const botaoListar = document.getElementById("botaoListar");
botaoListar.addEventListener("click", listarLivros);
const botaoBuscar = document.getElementById("botaoBuscar");
botaoBuscar.addEventListener("click", buscarLivro);
