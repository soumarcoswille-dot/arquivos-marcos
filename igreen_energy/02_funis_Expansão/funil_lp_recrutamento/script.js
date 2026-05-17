// Animação de Revelação ao Rolar (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
});

// Rolagem Suave (Smooth Scroll) para os links da página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Remover marca d'água 'Built with Spline' de forma robusta e dinâmica do Shadow DOM
window.addEventListener('load', () => {
    const splines = document.querySelectorAll('spline-viewer');
    splines.forEach(spline => {
        const removeLogo = () => {
            const shadow = spline.shadowRoot;
            if (shadow) {
                // Seleciona o logo do Spline por id ou atributo href no shadow DOM
                const logo = shadow.querySelector('#logo') || 
                             shadow.querySelector('a[href*="spline.design"]') || 
                             shadow.querySelector('.logo');
                if (logo) {
                    logo.style.display = 'none';
                    logo.style.visibility = 'hidden';
                    logo.style.opacity = '0';
                    logo.style.pointerEvents = 'none';
                }
            }
        };
        
        // Executa ao concluir o carregamento oficial
        spline.addEventListener('load-complete', removeLogo);
        
        // Executa também em intervalos curtos caso o evento já tenha disparado
        setTimeout(removeLogo, 500);
        setTimeout(removeLogo, 1000);
        setTimeout(removeLogo, 2500);
        setTimeout(removeLogo, 5000);
    });
});
