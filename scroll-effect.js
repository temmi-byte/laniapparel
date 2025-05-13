// Scroll Reveal Animation
function scrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll reveal on load
window.addEventListener('load', () => {
    scrollReveal();
});

// Add scroll event listener
window.addEventListener('scroll', scrollReveal);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Scroll Effects with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const scrollConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // 1. Scroll Reveal Animation
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-into-view');
                observer.unobserve(entry.target);
            }
        });
    };

    // 2. Staggered Animation for Gallery Items
    const staggerAnimation = (elements) => {
        elements.forEach((el, index) => {
            el.style.setProperty('--animation-order', index);
            el.classList.add('stagger-item');
        });
    };

    // 3. Parallax Effect for Hero Section
    const setupParallax = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
        });
    };

    // 4. Smooth Scroll for Anchor Links
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Initialize all effects
    const initScrollEffects = () => {
        // Observer for scroll-triggered elements
        const scrollObserver = new IntersectionObserver(animateOnScroll, scrollConfig);
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            scrollObserver.observe(el);
        });

        // Staggered gallery animations
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length > 0) {
            staggerAnimation(galleryItems);
        }

        setupParallax();
        setupSmoothScroll();
    };

    initScrollEffects();
});
