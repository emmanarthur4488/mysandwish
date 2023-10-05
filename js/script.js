let menu = document.querySelector('#menu-bar')
let mynav = document.querySelector('.navbar')

menu.onclick = () =>(
    menu.classList.toggle('close'),
    mynav.classList.toggle('active')
)