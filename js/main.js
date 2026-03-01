// Luxury Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initial check on page load
    handleScrollAnimation();
    
    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0 && prevBtn && nextBtn) {
        // Show first testimonial
        testimonialCards[0].classList.add('active');
        
        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                card.classList.remove('active');
                if (i === index) {
                    card.classList.add('active');
                }
            });
        }
        
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        });
        
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };
    
    // Animate skill bars when they come into view
    const skillSection = document.querySelector('.skills-section');
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillSection);
    }
    
    // Add animation classes to elements
    const elementsToAnimate = [
        '.hero-content',
        '.about-content',
        '.service-card',
        '.project-card',
        '.certification-card'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // Parallax effect for hero sections
    const parallaxElements = document.querySelectorAll('.hero-section, .qualifications-hero, .projects-hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            el.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    });
    
    // Add typewriter effect to subtitles
    const typewriterElements = document.querySelectorAll('.luxury-subtitle');
    typewriterElements.forEach(el => {
        el.classList.add('typewriter');
    });
    
    // Add floating animation to buttons
    const buttons = document.querySelectorAll('.luxury-btn');
    buttons.forEach(btn => {
        btn.classList.add('floating');
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .project-card, .certification-card');
    cards.forEach(card => {
        card.classList.add('hover-scale');
    });
    
    // Add shimmer effect to skill bars
    const skillBarsContainer = document.querySelectorAll('.skill-bar');
    skillBarsContainer.forEach(bar => {
        bar.classList.add('shimmer');
    });
    
    // Add gradient animation to hero sections
    const heroSections = document.querySelectorAll('.hero-section, .qualifications-hero, .projects-hero');
    heroSections.forEach(hero => {
        hero.classList.add('gradient-animate');
    });
});