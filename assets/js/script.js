$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active');
    });

    $('#mobile-menu a').on('click', function () {
        $('#mobile-menu').removeClass('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const words = ["tecnologia.", "desenvolver.", "inovação.", "aprender.", "solucionar."];
    const span = document.getElementById("dynamic-text");
    const cursor = document.getElementById("cursor");
    let wordIndex = 0; // Índice da palavra atual
    let charIndex = 0; // Índice do caractere na palavra atual
    let isDeleting = false; // Indica se está apagando
    const typingSpeed = 150; // Velocidade de digitação (ms)
    const deletingSpeed = 100; // Velocidade de apagamento (ms)
    const delayBetweenWords = 1500; // Pausa entre as palavras (ms)

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            // Adiciona caracteres um por um
            span.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                // Palavra completa, começa a apagar após o delay
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenWords);
                return;
            }
        } else {
            // Remove caracteres um por um
            span.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                // Palavra apagada, passa para a próxima palavra
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Vai para a próxima palavra
            }
        }

        // Ajusta a velocidade conforme digitação ou apagamento
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, speed);
    };

    // Inicia o efeito de digitação
    typeEffect();

    // Cursor piscando
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "1" ? "0" : "1";
    }, 500); // Alterna a opacidade a cada 500ms
});

