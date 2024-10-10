const burger = document.querySelector('.test');
const menu = document.querySelector('#mobileNav');
const closeBtn = document.querySelector('.tabler-icon');



burger.addEventListener('click', ()=>{
    menu.classList.remove('closed-menu');
    menu.classList.add('open-menu');
})

closeBtn.addEventListener('click',()=>{
    menu.classList.remove('open-menu');
    menu.classList.add('closed-menu');
})

