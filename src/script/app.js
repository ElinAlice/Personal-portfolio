const menu = document.querySelector('#menu');
const btOptions = document.querySelectorAll('.btOption');

menu.addEventListener("click", () => {
    const displayNavMenu = document.querySelector('#displayNavMenu');

    if(displayNavMenu.style.display === 'none' || displayNavMenu.style.display === '') {
        displayNavMenu.style.display = 'block';
    } else {
        displayNavMenu.style.display = 'none';
    }
});

btOptions.forEach(btOption => {
    btOption.addEventListener("click", () => {
        const displayNavMenu = document.querySelector('#displayNavMenu');
    
        if(displayNavMenu.style.display === 'none' || displayNavMenu.style.display === '') {
            displayNavMenu.style.display = 'block';
        } else {
            displayNavMenu.style.display = 'none';
        }
    });
});



const translator = document.querySelector('#idTraslator');
translator.addEventListener("click", () => {
    const presentation = document.querySelector('#presentation');
    const projects = document.querySelector('#projects');
    const contactMe = document.querySelector('#contactMe');
    const desciption = document.querySelector('#desciption');
    const hProjects = document.querySelector('#hProjects');
    const detailCardValidation = document.querySelector('#detailCardValidation');
    const detailDataLovers = document.querySelector('#detailDataLovers');
    const detailMdLinks = document.querySelector('#detailMdLinks');
    const detailSocialNetwork = document.querySelector('#detailSocialNetwork');
    const detailBqApi = document.querySelector('#detailBqApi');
    const contactame = document.querySelector('#contactame');
    const information = document.querySelector('#information');
    const cv = document.querySelector('#cv');
    const iconTraslate = document.querySelector('.icon-translate');

    if(iconTraslate.style.color === 'white' || iconTraslate.style.color === '') {
        console.log('cambia amarillo');
        iconTraslate.style.color = '#a7a216';
    } else {
        iconTraslate.style.color = 'white';
    }

    if(presentation.textContent === 'Sobre mi') {
        presentation.textContent = 'About me';
    } else {
        presentation.textContent = 'Sobre mi';
    }

    if(projects.textContent === 'Proyectos') {
        projects.textContent = 'Projects';
    } else {
        projects.textContent = 'Proyectos';
    }

    if(contactMe.textContent === 'Contáctame') {
        contactMe.textContent = 'Contact me';
    } else {
        contactMe.textContent = 'Contáctame';
    }

    if(desciption.innerHTML.trim() === `Hola soy Nelida:
                            <br>
                            Me encanta el diseño web, me gusta aprender y ser comprometida con lo que hago. 
                            Amo la naturaleza y a la vez la tecnología. Me adapto al cambio de manera rápida.`) {
        desciption.innerHTML = `Hi, I'm Nelida:
                                    <br>
                                    I love web design, I like to learn and be committed to what I do. 
                                    I love nature and technology at the same time. I adapt to change quickly.`
    } else {
        desciption.innerHTML = `Hola soy Nelida:
                            <br>
                            Me encanta el diseño web, me gusta aprender y ser comprometida con lo que hago. 
                            Amo la naturaleza y a la vez la tecnología. Me adapto al cambio de manera rápida.`
    }

    if(hProjects.textContent === 'Proyectos:') {
        hProjects.textContent = 'Projects:';
    } else {
        hProjects.textContent = 'Proyectos:';
    }

    if(detailCardValidation.textContent.trim() === 'Aplicación web que permite al usuario validar el número de una tarjeta de crédito.') {
        detailCardValidation.textContent = 'Web application that allows the user to validate the number of a credit card.';
    } else {
        detailCardValidation.textContent = 'Aplicación web que permite al usuario validar el número de una tarjeta de crédito.'
    }

    if(detailDataLovers.textContent.trim() === "Aplicación web que muestra de manera dinámica y categórica la información de cada Pokémon, para usuarios de nivel principiante.") {
        detailDataLovers.textContent = 'Web application that dynamically and categorically displays the information of each Pokémon, for beginner-level users';
    } else {
        detailDataLovers.textContent = 'Aplicación web que muestra de manera dinámica y categórica la información de cada Pokémon, para usuarios de nivel principiante.';
    }

    if(detailMdLinks.textContent.trim() === 'Librería que lee y analiza los links que contiene los archivos en formato MD, para verificar sus estados HTTP, generando un resultado estadístico y a detalle de cada link.') {
        detailMdLinks.textContent = 'Library that reads and analyzes the links contained in the files in MD format, to verify their HTTP status, generating a statistical and detailed result of each link.';
    } else {
        detailMdLinks.textContent = 'Librería que lee y analiza los links que contiene los archivos en formato MD, para verificar sus estados HTTP, generando un resultado estadístico y a detalle de cada link.';
    }

    if(detailSocialNetwork.textContent.trim() === 'Aplicación web sobre una red social, donde los usuarios pueden interactuar, y compartir información, sobre eventos que se realizan en la ciudad de Lima.') {
        detailSocialNetwork.textContent = 'Web application on a social network, where users can interact, and share information, about events that take place in the city of Lima.';
    } else {
        detailSocialNetwork.textContent = 'Aplicación web sobre una red social, donde los usuarios pueden interactuar, y compartir información, sobre eventos que se realizan en la ciudad de Lima.';
    }

    if(detailBqApi.textContent.trim() === 'API (Application Programming Interface) para un restaurante de hamburguesas.') {
        detailBqApi.textContent = 'API (Application Programming Interface) for a hamburger restaurant.';
    } else {
        detailBqApi.textContent = 'API (Application Programming Interface) para un restaurante de hamburguesas.';
    }

    if(contactame.textContent.trim() === 'Contáctame:') {
        contactame.textContent = 'Contact me:';
    } else {
        contactame.textContent = 'Contáctame:';
    }

    if(information.textContent.trim() === 'Información profesional:') {
        information.textContent = 'Professional information:';
    } else {
        information.textContent = 'Información profesional:';
    }

    if(cv.textContent.trim() === 'Hoja de Vida.pdf') {
        cv.textContent = 'Curriculum vitae.pdf';
    } else {
        cv.textContent = 'Hoja de Vida.pdf'
    }
})