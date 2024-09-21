/*

código da navbar

*/
// criando um seletor

let menuItem = document.querySelectorAll('.Item-menu')

function selectLink(){
    menuItem.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

menuItem.forEach((item) => {
    item.addEventListener('click', selectLink)
})

// Expandir menu

let btnexp = document.querySelector('#btn-exp')
let menuSide = document.querySelector('.menu-lateral')

btnexp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})