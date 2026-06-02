document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll effect for Navbar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.innerHTML = isExpanded 
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' 
                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        questionBtn.addEventListener('click', () => {
            // Check if current item is already open
            const isOpen = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // If it wasn't open, open it
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 4. Anime.js Scroll Animations
    if (typeof anime !== 'undefined') {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // Hero section animation
                    if (target.classList.contains('hero-content')) {
                        anime.timeline({ easing: 'spring(1, 80, 10, 0)' })
                            .add({
                                targets: target.querySelectorAll('h1, p, a, span'),
                                translateY: [50, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(150)
                            });
                    } 
                    // Grid cards staggering
                    else if (target.classList.contains('benefits-grid')) {
                        anime({
                            targets: target.querySelectorAll('.benefit-card'),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            easing: 'spring(1, 80, 10, 0)',
                            delay: anime.stagger(150)
                        });
                    }
                    // Side by side elements
                    else if (target.classList.contains('pain-solution')) {
                        anime({
                            targets: Array.from(target.children),
                            translateX: (el, i) => i === 0 ? [-50, 0] : [50, 0],
                            opacity: [0, 1],
                            easing: 'easeOutQuint',
                            duration: 1000,
                            delay: anime.stagger(200)
                        });
                    }
                    // Generic fade up for titles and single blocks
                    else {
                        anime({
                            targets: target,
                            translateY: [40, 0],
                            opacity: [0, 1],
                            easing: 'easeOutQuint',
                            duration: 1000
                        });
                    }
                    
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        // Define which elements will be animated on scroll
        const animateElements = document.querySelectorAll('.hero-content, .pain-solution, .benefits-grid, .testimonial-content, .offer-faq, .section-title, .section-subtitle, .footer-cta');
        
        // Hide elements initially to avoid flickering before animation starts
        animateElements.forEach(el => {
            if (el.classList.contains('hero-content')) {
                el.querySelectorAll('h1, p, a, span').forEach(child => child.style.opacity = '0');
            } else if (el.classList.contains('benefits-grid')) {
                el.querySelectorAll('.benefit-card').forEach(card => card.style.opacity = '0');
            } else if (el.classList.contains('pain-solution')) {
                Array.from(el.children).forEach(child => child.style.opacity = '0');
            } else {
                el.style.opacity = '0';
            }
            observer.observe(el);
        });
    }
});
