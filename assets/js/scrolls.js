document.addEventListener('DOMContentLoaded', function () {
    const navbarHeight = document.querySelector('#cabecalho').offsetHeight; // Altura do navbar

    const links = [
        { id: 'link-home', target: '#hero-section' },
        { id: 'link-sobre', target: '#sobre-section' },
        { id: 'link-projetos', target: '#projetos-section' },
        { id: 'link-habilidades', target: '#habilidades-section' },
        { id: 'mobile-link-home', target: '#hero-section' },
        { id: 'mobile-link-sobre', target: '#sobre-section' },
        { id: 'mobile-link-projetos', target: '#projetos-section' },
        { id: 'mobile-link-habilidades', target: '#habilidades-section' },
    ];

    links.forEach(link => {
        const element = document.querySelector(`#${link.id}`);
        const target = document.querySelector(link.target);

        if (element) {
            element.addEventListener('click', function (event) {
                event.preventDefault();

                if (link.id.includes('home')) {
                    // Scroll para o topo exato da página
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                } else if (target) {
                    // Scroll para outras seções
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1600, 
        once: false, 
        offset: 120, 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Itera por todos os elementos com 'data-aos'
    document.querySelectorAll('[data-aos]').forEach((element) => {
        if (window.innerWidth <= 800) {
            // Força o 'fade-up' em dispositivos móveis
            element.setAttribute('data-aos', 'fade-up');
        }
    });

    // Re-inicializa o AOS
    AOS.init();
});

// Seleciona os links do menu e as seções
const navLinks = document.querySelectorAll("#nav-list a");
const sections = document.querySelectorAll("section");

// Função que detecta a seção visível
function updateActiveLink() {
    let currentSection = "";

    // Itera sobre as seções para verificar qual está visível
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Remove a classe 'active' de todos os links
    navLinks.forEach((link) => {
        link.classList.remove("active");

        // Adiciona 'active' ao link correspondente
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

// Ouve o evento de rolagem
window.addEventListener("scroll", updateActiveLink);




navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
        });
    });
});