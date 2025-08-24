/* ============================================
   ANIMATIONS CONTROLLER
   Campus to Company Website
   ============================================ */

/**
 * Initialize AOS (Animate On Scroll) Library
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
            disable: function() {
                // Disable AOS on mobile devices with reduced motion preference
                const isMobile = window.innerWidth < 768;
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                return isMobile && prefersReducedMotion;
            }
        });
    } else {
        console.warn('AOS library not loaded');
        // Fallback to custom scroll animations
        initCustomScrollAnimations();
    }
}

/**
 * Custom scroll animations fallback
 */
function initCustomScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-aos');
                
                element.classList.add('aos-animate');
                
                // Apply custom animation based on data-aos attribute
                switch(animationType) {
                    case 'fade-up':
                        element.style.animation = 'slideInUp 0.8s ease-out forwards';
                        break;
                    case 'fade-right':
                        element.style.animation = 'slideInLeft 0.8s ease-out forwards';
                        break;
                    case 'fade-left':
                        element.style.animation = 'slideInRight 0.8s ease-out forwards';
                        break;
                    case 'zoom-in':
                        element.style.animation = 'zoomIn 0.8s ease-out forwards';
                        break;
                    case 'flip-up':
                        element.style.animation = 'flip 0.8s ease-out forwards';
                        break;
                    default:
                        element.style.animation = 'fadeIn 0.8s ease-out forwards';
                }
                
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
}

/**
 * Typing animation for hero text
 */
function initTypingAnimation() {
    const typedElement = document.getElementById('typedText');
    if (!typedElement) return;
    
    const texts = [
        'Career Journey',
        'Future Today',
        'Skills Now',
        'Dreams Reality'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function typeText() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 100;
        } else {
            typedElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            // Finished typing, wait then start deleting
            setTimeout(() => {
                isDeleting = true;
                typeText();
            }, 2000);
            return;
        }
        
        if (isDeleting && currentCharIndex === 0) {
            // Finished deleting, move to next text
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeText, 500);
            return;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(() => {
        typeText();
    }, 2000);
}

/**
 * Parallax scrolling effects
 */
function initParallaxEffects() {
    const parallaxElements = [
        {
            element: document.querySelector('.hero'),
            speed: 0.5
        },
        {
            element: document.querySelector('.hero-image'),
            speed: 0.3
        }
    ];
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(({ element, speed }) => {
            if (element && scrollTop < element.offsetTop + element.offsetHeight) {
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
    
    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}

/**
 * Stagger animation for course cards
 */
function initStaggerAnimations() {
    const courseCards = document.querySelectorAll('.course-card');
    const partnerLogos = document.querySelectorAll('.partner-logo');
    
    // Animate course cards with stagger
    const courseObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 100);
                courseObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        courseObserver.observe(card);
    });
    
    // Animate partner logos with stagger
    const partnerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 150);
                partnerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    partnerLogos.forEach((logo, index) => {
        logo.style.opacity = '0.3';
        partnerObserver.observe(logo);
    });
}

/**
 * Floating animation for stats cards
 */
function initFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.floating-stats');
    
    floatingElements.forEach((element, index) => {
        // Add different animation delays
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.animation = `floatUpDown 3s ease-in-out infinite`;
    });
    
    // Add mouse interaction for floating elements
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animationPlayState = 'paused';
            element.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationPlayState = 'running';
            element.style.transform = '';
        });
    });
}

/**
 * Button ripple effect
 */
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            // Add ripple styles
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation if not exists
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Loading screen animation
 */
function initLoadingAnimation() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;
    
    // Show loading screen immediately
    loadingScreen.style.display = 'flex';
    
    // Minimum loading time for better UX
    const minimumLoadTime = 1000;
    const startTime = Date.now();
    
    function hideLoading() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Initialize other animations after loading is complete
                initPostLoadAnimations();
            }, 500);
        }, remainingTime);
    }
    
    // Hide loading when page is fully loaded
    if (document.readyState === 'complete') {
        hideLoading();
    } else {
        window.addEventListener('load', hideLoading);
    }
}

/**
 * Animations to run after loading is complete
 */
function initPostLoadAnimations() {
    // Animate hero content with stagger
    const heroElements = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.stats-container',
        '.hero-buttons',
        '.course-search'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.animation = 'slideInLeft 0.8s ease-out forwards';
                element.style.opacity = '1';
            }, index * 200);
        }
    });
    
    // Animate hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        setTimeout(() => {
            heroImage.style.animation = 'slideInRight 0.8s ease-out forwards';
            heroImage.style.opacity = '1';
        }, 400);
    }
}

/**
 * Scroll-triggered animations for sections
 */
function initScrollTriggerAnimations() {
    const sections = document.querySelectorAll('.about, .courses, .partners');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-animated');
                
                // Add specific animations for each section
                if (entry.target.classList.contains('about')) {
                    animateAboutSection(entry.target);
                } else if (entry.target.classList.contains('courses')) {
                    animateCoursesSection(entry.target);
                } else if (entry.target.classList.contains('partners')) {
                    animatePartnersSection(entry.target);
                }
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Animate about section
 */
function animateAboutSection(section) {
    const content = section.querySelector('.about-content');
    const image = section.querySelector('.about-image');
    const stats = section.querySelectorAll('.about-stat');
    
    if (content) {
        content.style.animation = 'slideInLeft 0.8s ease-out forwards';
    }
    
    if (image) {
        setTimeout(() => {
            image.style.animation = 'slideInRight 0.8s ease-out forwards';
        }, 200);
    }
    
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.animation = 'zoomIn 0.6s ease-out forwards';
        }, 400 + (index * 100));
    });
}

/**
 * Animate courses section
 */
function animateCoursesSection(section) {
    const title = section.querySelector('h2');
    const subtitle = section.querySelector('.subtitle');
    const filters = section.querySelector('.courses-filter');
    const grid = section.querySelector('.courses-grid');
    
    if (title) {
        title.style.animation = 'slideInDown 0.8s ease-out forwards';
    }
    
    if (subtitle) {
        setTimeout(() => {
            subtitle.style.animation = 'slideInDown 0.8s ease-out forwards';
        }, 200);
    }
    
    if (filters) {
        setTimeout(() => {
            filters.style.animation = 'slideInUp 0.8s ease-out forwards';
        }, 400);
    }
}

/**
 * Animate partners section
 */
function animatePartnersSection(section) {
    const title = section.querySelector('h3');
    const logos = section.querySelectorAll('.partner-logo');
    
    if (title) {
        title.style.animation = 'fadeIn 0.8s ease-out forwards';
    }
    
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.style.animation = 'slideInUp 0.6s ease-out forwards';
            logo.style.opacity = '1';
        }, 200 + (index * 100));
    });
}

/**
 * Performance optimization for animations
 */
function optimizeAnimations() {
    // Disable animations on low-performance devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.documentElement.style.setProperty('--duration-300', '0.1s');
        document.documentElement.style.setProperty('--duration-500', '0.2s');
        document.documentElement.style.setProperty('--duration-700', '0.3s');
    }
    
    // Reduce animations on slow connections
    if (navigator.connection && navigator.connection.effectiveType) {
        const connectionType = navigator.connection.effectiveType;
        if (connectionType === 'slow-2g' || connectionType === '2g') {
            // Disable complex animations
            const complexAnimations = document.querySelectorAll('.animate-float, .animate-pulse, .floating-stats');
            complexAnimations.forEach(el => {
                el.style.animation = 'none';
            });
        }
    }
}

/**
 * Initialize all animations
 */
function initAllAnimations() {
    // Initialize loading animation first
    initLoadingAnimation();
    
    // Initialize other animations after DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        initAOS();
        initStaggerAnimations();
        initFloatingAnimations();
        initRippleEffect();
        initScrollTriggerAnimations();
        optimizeAnimations();
        
        // Initialize typing animation after a delay
        setTimeout(() => {
            initTypingAnimation();
        }, 2000);
        
        // Initialize parallax on desktop only
        if (window.innerWidth > 768) {
            initParallaxEffects();
        }
    });
}

// Initialize animations
initAllAnimations();

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAOS,
        initTypingAnimation,
        initParallaxEffects,
        initStaggerAnimations,
        initFloatingAnimations,
        initRippleEffect
    };
}