document.addEventListener('DOMContentLoaded', function () {
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

        if (element && target) {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
});