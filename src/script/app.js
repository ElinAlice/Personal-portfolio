const menu = document.querySelector('#menu');

menu.addEventListener("click", () => {
    const displayNavMenu = document.querySelector('#displayNavMenu');

    if(displayNavMenu.style.display === 'none' || displayNavMenu.style.display === '') {
        displayNavMenu.style.display = 'block';
    } else {
        displayNavMenu.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    let animacion = document.querySelector('.rotateFooter');
    let posicionFooter = animacion.getBoundingClientRect().top;
    console.log(posicionFooter);
    let screenSize = window.innerHeight/3.5;
    if((posicionFooter) < screenSize) {
        animacion.style.animacion = 'mover 1s ease-out';
    }
})