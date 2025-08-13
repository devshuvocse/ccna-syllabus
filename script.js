
document.addEventListener('DOMContentLoaded', function() {
    // --- Scroll Animations for Cards ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.skill-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // --- Active Navigation Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('.skill-domain');
    const navAllLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = 'hero'; // Default to hero
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust offset to trigger highlight sooner
            if (pageYOffset >= sectionTop - 150) { 
                current = section.getAttribute('id');
            }
        });

        navAllLinks.forEach(link => {
            link.classList.remove('active');
            // Match section id with link href by removing the '#'
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
