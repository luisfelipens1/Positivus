//Mobile Menu
const menuMobile = document.getElementById('menu-mobile');
const headerNav = document.querySelector('.header-nav');

function activeMenu(event){
    if(event.type === 'touchstart') event.preventDefault();

    headerNav.classList.toggle('active');
    const navActive = headerNav.classList.contains('active');

    if(navActive){
        event.currentTarget.setAttribute('aria-expanded', 'true');
        event.currentTarget.setAttribute('aria-label', 'Close Menu');
    }else{
        event.currentTarget.setAttribute('aria-expanded', 'false');
        event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
    
}

menuMobile.addEventListener('click', activeMenu);
menuMobile.addEventListener('touchstart', activeMenu);