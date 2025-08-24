/* ============================================
   ADVANCED INTERACTIONS CONTROLLER
   Add to assets/js/advanced-interactions.js
   ============================================ */

class AdvancedInteractions {
    constructor() {
        this.init();
    }
    
    init() {
        this.createScrollIndicator();
        this.setupMagneticButtons();
        this.setupParallaxElements();
        this.setupTextRevealAnimation();
        this.setupCursorFollower();
        this.setupImageReveal();
        this.setupTiltCards();
    }
    
    // Scroll Progress Indicator
    createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height);
            indicator.style.transform = `scaleX(${scrolled})`;
        });
    }
    
    // Magnetic Button Effect
    setupMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
                button.style.transition = 'transform 0.3s ease';
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.transition = '';
            });
        });
    }
    
    // Advanced Parallax
    setupParallaxElements() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                const rate = scrolled * -0.5 * (index + 1);
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }
    
    // Text Reveal Animation
    setupTextRevealAnimation() {
        const textElements = document.querySelectorAll('.text-reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateTextReveal(entry.target);
                }
            });
        });
        
        textElements.forEach(element => observer.observe(element));
    }
    
    animateTextReveal(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `all 0.3s ease ${index * 0.03}s`;
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 50);
        });
    }
    
    // Custom Cursor
    setupCursorFollower() {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div>';
        document.body.appendChild(cursor);
        
        const cursorDot = cursor.querySelector('.cursor-dot');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
        
        // Cursor interactions
        const interactiveElements = document.querySelectorAll('a, button, .course-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
        
        // Add cursor styles
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
            }
            
            .cursor-dot {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: white;
                transform: translate(-50%, -50%);
                transition: transform 0.15s ease;
            }
            
            .cursor-hover .cursor-dot {
                transform: translate(-50%, -50%) scale(2);
            }
            
            body {
                cursor: none;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Image Reveal Effect
    setupImageReveal() {
        const images = document.querySelectorAll('.reveal-image');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.clipPath = 'inset(0 0 0 0)';
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.style.clipPath = 'inset(0 100% 0 0)';
            img.style.transition = 'clip-path 1s cubic-bezier(0.25, 1, 0.5, 1)';
            observer.observe(img);
        });
    }
    
    // 3D Tilt Cards
    setupTiltCards() {
        const cards = document.querySelectorAll('.tilt-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }
}

// Morphing Loader
class MorphingLoader {
    constructor() {
        this.shapes = [
            'M 0,100 C 0,100 0,50 0,50 C 0,22.385763 22.385763,0 50,0 C 77.614237,0 100,22.385763 100,50 C 100,77.614237 77.614237,100 50,100 C 22.385763,100 0,77.614237 0,50 Z',
            'M 0,100 C 0,100 0,50 0,50 C 0,22.385763 22.385763,0 50,0 C 77.614237,0 100,22.385763 100,50 C 100,77.614237 77.614237,100 50,100 C 22.385763,100 0,77.614237 0,50 Z',
            'M 0,100 C 0,100 0,33.333333 0,33.333333 C 0,14.924051 14.924051,0 33.333333,0 C 51.742616,0 66.666667,14.924051 66.666667,33.333333 C 66.666667,51.742616 51.742616,66.666667 33.333333,66.666667 C 14.924051,66.666667 0,51.742616 0,33.333333 Z'
        ];
        this.currentShape = 0;
        this.init();
    }
    
    init() {
        const loader = document.querySelector('.morphing-loader');
        if (!loader) return;
        
        const svg = loader.querySelector('svg path');
        if (!svg) return;
        
        setInterval(() => {
            this.currentShape = (this.currentShape + 1) % this.shapes.length;
            svg.style.d = this.shapes[this.currentShape];
        }, 1000);
    }
}

// Initialize advanced interactions
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedInteractions();
    new MorphingLoader();
});

// Export for use in other modules
window.AdvancedInteractions = AdvancedInteractions;