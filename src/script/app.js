const menu = document.querySelector('#menu');

menu.addEventListener("click", () => {
    const displayNavMenu = document.querySelector('#displayNavMenu');

    if(displayNavMenu.style.display === 'none' || displayNavMenu.style.display === '') {
        displayNavMenu.style.display = 'block';
    } else {
        displayNavMenu.style.display = 'none';
    }
});