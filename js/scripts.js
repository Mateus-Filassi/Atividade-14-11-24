/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Pegando as imagens dos podcasts
    const images = document.querySelectorAll('.podcast-img');
    
    let voted = false; // Controle para garantir que apenas um voto seja permitido
    let selectedImage = null; // Armazenar a imagem selecionada

    // Função para adicionar a animação e borda
    function handleClick(event) {
        const image = event.target;

        // Se já foi votado em um podcast, não faz nada
        if (voted) {
            return;
        }

        // Marcar a imagem como selecionada
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#10084;'; // Emoji de coração

        // Posicionando o coração em cima da imagem
        const rect = image.getBoundingClientRect();
        heart.style.top = `${rect.top + window.scrollY + rect.height / 2 - 25}px`;
        heart.style.left = `${rect.left + window.scrollX + rect.width / 2 - 25}px`;

        document.body.appendChild(heart); // Adicionando o coração na página

        // Adicionando a classe de borda vermelha
        image.classList.add('selected');
        selectedImage = image; // Armazenando a imagem selecionada

        // Desabilitar as outras imagens
        images.forEach(img => {
            if (img !== image) {
                img.classList.add('disabled');
            }
        });

        // Animando o coração
        heart.addEventListener('animationend', () => {
            heart.remove(); // Remover o coração depois da animação
        });

        // Indicar que já houve um voto
        voted = true;
    }

    // Adicionando o evento de clique para todas as imagens
    images.forEach(img => img.addEventListener('click', handleClick));

    // Função para desmarcar o voto (caso queira mudar de voto)
    function resetVote() {
        if (!selectedImage) return; // Caso não tenha selecionado nada ainda
        
        // Remover a borda vermelha e a animação do coração
        selectedImage.classList.remove('selected');

        // Habilitar novamente todas as imagens
        images.forEach(img => {
            img.classList.remove('disabled');
        });

        // Limpar a variável que guarda a imagem selecionada
        selectedImage = null;

        // Resetar a lógica de voto
        voted = false;
    }

    // Você pode chamar a função resetVote() manualmente quando quiser permitir que o usuário desmarque o voto.
});

