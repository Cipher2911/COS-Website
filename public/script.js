document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // FEATURE 1: INTRO PAGE LOAD ANIMATION
    // ==========================================
    // This makes your new title, logo, and tagline fade and slide up when the page opens.
    const introElements = document.querySelectorAll('.intro-name-focus24, .logo-layout');
    
    introElements.forEach((el, index) => {
        // Initial hidden state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        // Stagger the animation so the title loads slightly before the logo
        el.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    });


    // ==========================================
    // FEATURE 2: SMOOTH SCROLLING FOR NAV LINKS
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scrolling to internal anchor links
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ==========================================
    // FEATURE 3: SCROLL REVEAL ANIMATIONS
    // ==========================================
    // Grabs all platforms, text boxes, and contact cards
    const animatedElements = document.querySelectorAll('.platform-card-wide, .text-box, .contact-card, .candidate-card');
    
    // Set the initial hidden state
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        // We include CSS hover properties here so they don't break when JS animates them
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.3s ease, box-shadow 0.3s ease';
    });

    // Create the Intersection Observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade IN when the box enters the screen
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Fade OUT when scrolling past (optional: delete these 2 lines if you only want it to animate once!)
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(40px)';
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    setTimeout(() => {
        const navBar = document.getElementById('box');
        if (navBar) {
            navBar.classList.add('nav-visible');
        }
    }, 1500);

    // ==========================================
    // FEATURE 4: JAVASCRIPT HOVER EFFECTS
    // ==========================================
    const interactiveCards = document.querySelectorAll('.platform-card-wide');
    
    interactiveCards.forEach(card => {
        // When the mouse enters the card
        card.addEventListener('mouseenter', () => {
            // Overrides the transform from the scroll reveal to pop the card up
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
            card.style.backgroundColor = '#cd44ff';
        });

        // When the mouse leaves the card
        card.addEventListener('mouseleave', () => {
            // Reverts back to normal resting state
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; 
            card.style.backgroundColor = '#5c277a';
        });
    });

});