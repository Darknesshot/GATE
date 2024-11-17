/*

código da navbar

*/
// criando um seletor

let menuItem = document.querySelectorAll(".Item-menu");

function selectLink() {
    menuItem.forEach((item) => {
        item.classList.remove("ativo");
    });
    this.classList.add("ativo");
}

menuItem.forEach((item) => {
    item.addEventListener("click", selectLink);
});

// evento de click
let add = document.querySelectorAll("#plus");

// parte de adicionar

// abrindo adicionar
let openAdd = document.getElementById("plus");
openAdd.addEventListener("click", openView);

function openView() {
    let add = document.getElementById("add");
    add.style.visibility = "visible";
}

// ouvindo eventos e buscando os elementos
let dropDonw = document.getElementById("mydrop");
dropDonw.addEventListener("click", enquanto);

let troca = document.getElementById("R");
troca.addEventListener("click", trocaUm);

let troca1 = document.getElementById("D");
troca1.addEventListener("click", trocaDois);

let troca2 = document.getElementById("O");
troca2.addEventListener("click", trocaTres);

let cancelar = document.getElementById("cancel");
cancelar.addEventListener("click", cancelView);

let concluir = document.getElementById("concl");
concluir.addEventListener("click", concluirView);

// funções de eventos
function concluirView() {}

function aquanto(){
    let view = document.getElementById("view");
    view.style.visibility = "hidden";
}

function enquanto() {
    let view = document.getElementById("view");
    view.style.visibility = "visible";
}

function trocaUm() {
    let tex = "receita";
    dropDonw.innerText = tex;

    let view = document.getElementById("view");
    view.style.visibility = "hidden";
}

function trocaDois() {
    let tex = "Dispesa";
    dropDonw.innerText = tex;

    let view = document.getElementById("view");
    view.style.visibility = "hidden";
}

function trocaTres() {
    let tex = "Outros";
    dropDonw.innerText = tex;

    let view = document.getElementById("view");
    view.style.visibility = "hidden";
}

function cancelView() {
    let add = document.getElementById("add");
    add.style.visibility = "hidden";
}
