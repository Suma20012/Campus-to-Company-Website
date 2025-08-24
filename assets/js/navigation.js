/* ============================================
   NAVIGATION CONTROLLER
   Campus to Company Website
   ============================================ */

/**
 * Navigation state management
 */
const NavigationController = {
    currentSection: 'home',
    isScrolling: false,
    scrollTimeout: null,
    headerHeight: 80,
    
    /**
     * Initialize navigation functionality
     */
    init() {
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupHeaderScrollEffect();
        this.setupMobileNavigation();
        this.setupScrollToTop();
        this.setupKeyboardNavigation();
    },
    
    /**
     * Setup smooth scrolling for navigation links
     */
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link, .btn-primary[href^="#"], .btn-secondary[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                    this.updateActiveNavLink(link);
                }
            });
        });
        
        // Handle logo click
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => {
                this.scrollToTop();
            });
        }
    },
    
    /**
     * Smooth scroll to element
     */
    scrollToElement(element, offset = 0) {
        const targetPosition = element.offsetTop - this.headerHeight - offset;
        
        this.isScrolling = true;
        
        // Use native smooth scrolling if supported
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback smooth scrolling
            this.smoothScrollTo(targetPosition);
        }
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            this.isScrolling = false;
        }, 1000);
    },
    
    /**
     * Fallback smooth scrolling implementation
     */
    smoothScrollTo(targetY, duration = 800) {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const ease = this.easeInOutCubic(progress);
            
            window.scrollTo(0, startY + difference * ease);
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    },
    
    /**
     * Easing function for smooth animation
     */
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    
    /**
     * Setup active navigation highlighting
     */
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (sections.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            if (this.isScrolling) return;
            
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const sectionId = entry.target.id;
                    this.updateActiveSection(sectionId);
                }
            });
        }, {
            threshold: [0.3, 0.5, 0.7],
            rootMargin: '-20% 0px -20% 0px'
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Handle scroll end to update active section
        window.addEventListener('scroll', () => {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                if (!this.isScrolling) {
                    this.updateActiveNavigationOnScroll();
                }
            }, 150);
        });
    },
    
    /**
     * Update active section based on scroll position
     */
    updateActiveNavigationOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + this.headerHeight + 100;
        
        let activeSection = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSection = section.id;
            }
        });
        
        this.updateActiveSection(activeSection);
    },
    
    /**
     * Update active section and navigation
     */
    updateActiveSection(sectionId) {
        if (this.currentSection === sectionId) return;
        
        this.currentSection = sectionId;
        
        // Update navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Update URL without triggering navigation
        if (history.pushState) {
            const newUrl = `${window.location.pathname}${sectionId !== 'home' ? '#' + sectionId : ''}`;
            history.pushState(null, null, newUrl);
        }
    },
    
    /**
     * Update active nav link when clicked
     */
    updateActiveNavLink(clickedLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    },
    
    /**
     * Setup header scroll effects
     */
    setupHeaderScrollEffect() {
        const header = document.getElementById('header');
        if (!header) return;
        
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        
        const updateHeader = () => {
            const scrollY = window.pageYOffset;
            
            // Add scrolled class for styling
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll (optional)
            if (scrollY > 200) {
                if (scrollY > lastScrollY && !header.classList.contains('nav-hidden')) {
                    header.classList.add('nav-hidden');
                } else if (scrollY < lastScrollY && header.classList.contains('nav-hidden')) {
                    header.classList.remove('nav-hidden');
                }
            }
            
            lastScrollY = scrollY;
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick);
    },
    
    /**
     * Setup mobile navigation
     */
    setupMobileNavigation() {
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');
        
        if (!navContainer || !navLinks) return;
        
        // Create mobile menu toggle button
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.classList.add('mobile-menu-toggle');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuButton.setAttribute('aria-label', 'Toggle mobile menu');
        
        // Add mobile menu styles
        this.addMobileMenuStyles();
        
        // Insert mobile menu button
        navContainer.appendChild(mobileMenuButton);
        
        // Handle mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-menu-open');
            mobileMenuButton.classList.toggle('active');
            
            const icon = mobileMenuButton.querySelector('i');
            if (navLinks.classList.contains('mobile-menu-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        
        // Close mobile menu when link is clicked
        const navLinkElements = document.querySelectorAll('.nav-link');
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-menu-open');
                mobileMenuButton.classList.remove('active');
                mobileMenuButton.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && navLinks.classList.contains('mobile-menu-open')) {
                navLinks.classList.remove('mobile-menu-open');
                mobileMenuButton.classList.remove('active');
                mobileMenuButton.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    },
    
    /**
     * Add mobile menu styles dynamically
     */
    addMobileMenuStyles() {
        if (document.getElementById('mobile-menu-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'mobile-menu-styles';
        style.textContent = `
            .mobile-menu-toggle {
                display: none;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-color);
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
            }
            
            .mobile-menu-toggle:hover {
                background: rgba(124, 58, 237, 0.1);
            }
            
            .mobile-menu-toggle.active {
                transform: rotate(90deg);
            }
            
            @media (max-width: 768px) {
                .mobile-menu-toggle {
                    display: block;
                }
                
                .nav-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    gap: 0;
                    padding: 1rem 0;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease;
                    z-index: 1000;
                }
                
                .nav-links.mobile-menu-open {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: all;
                }
                
                .nav-links a {
                    padding: 1rem 2rem;
                    border-bottom: 1px solid rgba(124, 58, 237, 0.1);
                    text-align: center;
                    transition: all 0.3s ease;
                }
                
                .nav-links a:hover {
                    background: rgba(124, 58, 237, 0.05);
                }
                
                .nav-links a:last-child {
                    border-bottom: none;
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    /**
     * Setup scroll to top functionality
     */
    setupScrollToTop() {
        // Create scroll to top button
        const scrollToTopButton = document.createElement('button');
        scrollToTopButton.classList.add('scroll-to-top');
        scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
        
        document.body.appendChild(scrollToTopButton);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });
        
        // Handle scroll to top click
        scrollToTopButton.addEventListener('click', () => {
            this.scrollToTop();
        });
    },
    
    /**
     * Scroll to top of page
     */
    scrollToTop() {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            this.smoothScrollTo(0);
        }
        
        this.updateActiveSection('home');
    },
    
    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Handle arrow keys for section navigation
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    this.navigateWithKeys(e.key === 'ArrowDown');
                }
            }
            
            // Handle Home/End keys
            if (e.key === 'Home') {
                e.preventDefault();
                this.scrollToTop();
            } else if (e.key === 'End') {
                e.preventDefault();
                this.scrollToBottom();
            }
        });
    },
    
    /**
     * Navigate sections with keyboard
     */
    navigateWithKeys(down = true) {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentIndex = sections.findIndex(section => section.id === this.currentSection);
        
        let nextIndex;
        if (down) {
            nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
        } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        }
        
        if (sections[nextIndex]) {
            this.scrollToElement(sections[nextIndex]);
        }
    },
    
    /**
     * Scroll to bottom of page
     */
    scrollToBottom() {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        window.scrollTo({
            top: documentHeight - windowHeight,
            behavior: 'smooth'
        });
    },
    
    /**
     * Handle hash navigation on page load
     */
    handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                // Wait for page to load completely
                setTimeout(() => {
                    this.scrollToElement(targetElement);
                }, 100);
            }
        }
    },
    
    /**
     * Handle browser back/forward navigation
     */
    handleBrowserNavigation() {
        window.addEventListener('popstate', () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            } else {
                this.scrollToTop();
            }
        });
    }
};

/**
 * Utility function for external use
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        NavigationController.scrollToElement(element);
    }
}

/**
 * Initialize navigation when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    NavigationController.init();
    NavigationController.handleHashNavigation();
    NavigationController.handleBrowserNavigation();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationController,
        scrollToSection
    };
}