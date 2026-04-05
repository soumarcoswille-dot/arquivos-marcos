// Script para interatividade da Landing Page iGreen

document.addEventListener('DOMContentLoaded', () => {
    // Reveal effects on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.transition = 'all 0.8s ease-out';
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        observer.observe(section);
    });

    // Dynamic Header change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '1rem 5%';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.padding = '2rem 5%';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Logging for testing
    console.log('iGreen Landing Page Loaded successfully!');
});
