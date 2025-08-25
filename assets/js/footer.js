// MODERN FOOTER JAVASCRIPT - footer.js

// Scroll Progress Bar
function updateScrollProgress() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

// Back to Top Button
function toggleBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

// Theme Toggle
function toggleTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.classList.toggle('light');
        body.style.background = themeToggle.classList.contains('light') 
            ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' 
            : '#0a0a0f';
    }
}

// Newsletter Form Handler
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const successMessage = document.getElementById('successMessage');
    
    // Simple email validation
    if (email && email.includes('@')) {
        successMessage.classList.add('show');
        document.getElementById('emailInput').value = '';
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
}

// Contact Actions
function makeCall() {
    window.open('tel:+919900946207', '_self');
}

function sendEmail() {
    window.open('mailto:sparkeetechsolutions@gmail.com', '_self');
}

// Dynamic Particle Generation
function createParticle() {
    const particleContainer = document.querySelector('.footer-particles');
    if (!particleContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = (Math.random() * 4 + 2) + 'px';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    particleContainer.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 15000);
}

// Enhanced Link Interactions
function initializeLinkEffects() {
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover-color', '#667eea');
        });
    });
}

// Newsletter Input Enhancement
function initializeNewsletterValidation() {
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            if (this.value.includes('@') && this.value.includes('.')) {
                this.style.borderColor = '#4ade80';
                this.style.boxShadow = '0 0 0 3px rgba(74, 222, 128, 0.2)';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                this.style.boxShadow = 'none';
            }
        });
    }
}

// Advanced Footer Reveal Animation
function revealFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    const footerPosition = footer.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > footerPosition + 100) {
        footer.style.transform = 'translateY(0)';
        footer.style.opacity = '1';
    }
}

// Initialize Advanced Animation Triggers
function initializeAnimationObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe footer sections
    document.querySelectorAll('.footer-section').forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll enhancement for internal links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Performance optimization for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize all footer functionality
function initializeFooter() {
    // Set up event listeners with throttling for performance
    window.addEventListener('scroll', throttle(() => {
        updateScrollProgress();
        toggleBackToTop();
        revealFooter();
    }, 16)); // ~60fps

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Initialize other functionality
    initializeLinkEffects();
    initializeNewsletterValidation();
    initializeAnimationObserver();
    initializeSmoothScroll();

    // Initialize footer state
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.transform = 'translateY(50px)';
        footer.style.opacity = '0.8';
        footer.style.transition = 'all 0.8s ease';
    }

    // Start particle generation
    setInterval(createParticle, 2000);

    // Initial calls
    updateScrollProgress();
    toggleBackToTop();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFooter);
} else {
    initializeFooter();
}

// Export functions for global use
window.makeCall = makeCall;
window.sendEmail = sendEmail;
window.toggleTheme = toggleTheme;