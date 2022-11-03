const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menuMobile')


botao.addEventListener('click', abrir)

function abrir(){
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
    //  botao.classList == 'active'
    // if (botao.classList.contains('active')){
    //     botao.classList.remove('active')
    // }else{
    //     botao.classList.add('active')
    // }
}
