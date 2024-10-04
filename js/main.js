const menuMobile = document.getElementById('menu-mobile');
const headerNav = document.querySelector('.header-nav');

function activeMenu(){
    headerNav.classList.toggle('active');
    const headerAtivo = headerNav.classList.contains('active');

    if(headerAtivo){
        menuMobile.style.color = '#FFF';
        menuMobile.style.borderColor = '#FFF';
    }else{
        menuMobile.style.color = '#000';
        menuMobile.style.borderColor = '#000';
    }
}

menuMobile.addEventListener('click', activeMenu);