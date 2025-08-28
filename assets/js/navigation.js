/* ============================================
   COMPLETE NAVIGATION CONTROLLER
   Campus to Company Website
   Handles multi-page navigation and interactions
   ============================================ */

const NavigationController = {
    currentSection: 'home',
    isScrolling: false,
    scrollTimeout: null,
    headerHeight: 80,
    
    /**
     * Initialize all navigation functionality
     */
    init() {
        console.log('Initializing Navigation Controller...');
        this.setupPageNavigation();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupHeaderScrollEffect();
        this.setupMobileNavigation();
        this.setupScrollToTop();
        this.setupKeyboardNavigation();
        this.setupLoadingScreen();
        console.log('Navigation Controller initialized successfully');
    },
    
    /**
     * Setup page navigation for multi-page website
     */
    setupPageNavigation() {
        // Handle navigation links to other pages
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href$=".html"]');
            if (link) {
                e.preventDefault();
                this.navigateToPage(link.href, link.textContent.trim());
            }
        });
        
        // Handle logo clicks
        document.addEventListener('click', (e) => {
            const logo = e.target.closest('.logo');
            if (logo) {
                e.preventDefault();
                this.navigateToPage('index.html', 'Home');
            }
        });
    },
    
    /**
     * Navigate to a specific page with loading animation
     */
    navigateToPage(url, pageName = '') {
        console.log(`Navigating to: ${url} (${pageName})`);
        
        // Show loading screen
        this.showLoadingScreen();
        
        // Add page transition class to body
        document.body.classList.add('page-transitioning');
        
        // Smooth transition delay
        setTimeout(() => {
            window.location.href = url;
        }, 500);
        
        // Analytics tracking (if available)
        this.trackNavigation(url, pageName);
    },
    
    /**
     * Setup smooth scrolling for same-page navigation
     */
    setupSmoothScrolling() {
        // Handle hash links (same page navigation)
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link && !link.href.includes('.html')) {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                    this.updateActiveNavLink(link);
                }
            }
        });
    },
    
    /**
     * Smooth scroll to element with offset
     */
    scrollToElement(element, offset = 0) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || this.headerHeight;
        const targetPosition = element.offsetTop - headerHeight - offset;
        
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
     * Fallback smooth scrolling for older browsers
     */
    smoothScrollTo(targetPosition) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        requestAnimationFrame(animation);
    },
    
    /**
     * Easing function for smooth scrolling
     */
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    },
    
    /**
     * Setup active navigation highlighting
     */
    setupActiveNavigation() {
        // Set active navigation item based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a, .nav-links a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            
            // Remove existing active classes
            link.classList.remove('active');
            
            // Add active class to current page link
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === 'index.html') ||
                (currentPage === 'about-us.html' && linkPage === 'about-us.html') ||
                (currentPage === 'courses.html' && linkPage === 'courses.html')) {
                link.classList.add('active');
                console.log(`Set active navigation for: ${linkPage}`);
            }
        });
        
        // Handle scroll-based active navigation for single page
        if (currentPage === 'index.html') {
            window.addEventListener('scroll', this.handleScrollNavigation.bind(this));
        }
    },
    
    /**
     * Handle scroll-based navigation highlighting
     */
    handleScrollNavigation() {
        if (this.isScrolling) return;
        
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + this.headerHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                this.updateActiveNavLink(null, sectionId);
            }
        });
    },
    
    /**
     * Update active navigation link
     */
    updateActiveNavLink(clickedLink = null, targetId = null) {
        const navLinks = document.querySelectorAll('.nav-menu a, .nav-links a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (clickedLink && link === clickedLink) {
                link.classList.add('active');
            } else if (targetId && link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    },
    
    /**
     * Setup header scroll effects
     */
    setupHeaderScrollEffect() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        
        const updateHeader = () => {
            const scrollY = window.pageYOffset;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide header on scroll down, show on scroll up
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
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
     * Setup mobile navigation functionality
     */
    setupMobileNavigation() {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-links');
        
        if (!navContainer || !navMenu) return;
        
        // Create mobile menu toggle button if it doesn't exist
        let mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (!mobileToggle) {
            mobileToggle = document.createElement('button');
            mobileToggle.className = 'mobile-menu-toggle';
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
            navContainer.appendChild(mobileToggle);
        }
        
        // Add mobile menu styles
        this.addMobileMenuStyles();
        
        // Toggle mobile menu
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
            
            // Update icon
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('mobile-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && navMenu.classList.contains('mobile-open')) {
                navMenu.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
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
                color: #a855f7;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
                z-index: 1001;
            }
            
            .mobile-menu-toggle:hover {
                background: rgba(168, 85, 247, 0.1);
                transform: scale(1.1);
            }
            
            .mobile-menu-toggle.active {
                transform: rotate(90deg);
            }
            
            @media (max-width: 768px) {
                .mobile-menu-toggle {
                    display: block;
                }
                
                .nav-menu, .nav-links {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    font-size: 1.2rem;
                    transform: translateX(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    z-index: 1000;
                }
                
                .nav-menu.mobile-open, .nav-links.mobile-open {
                    transform: translateX(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .nav-menu a, .nav-links a {
                    padding: 1rem 2rem;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    color: #333;
                }
                
                .nav-menu a:hover, .nav-links a:hover {
                    background: rgba(168, 85, 247, 0.1);
                    color: #a855f7;
                    transform: translateY(-2px);
                }
                
                .nav-menu a.active, .nav-links a.active {
                    background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
                    color: white;
                }
                
                body.mobile-menu-open {
                    overflow: hidden;
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    /**
     * Setup scroll to top button
     */
    setupScrollToTop() {
        // Create scroll to top button if it doesn't exist
        let scrollToTopBtn = document.querySelector('.scroll-to-top');
        if (!scrollToTopBtn) {
            scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.className = 'scroll-to-top';
            scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
            document.body.appendChild(scrollToTopBtn);
        }
        
        // Add scroll to top styles
        this.addScrollToTopStyles();
        
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Handle scroll to top click
        scrollToTopBtn.addEventListener('click', () => {
            this.scrollToTop();
        });
    },
    
    /**
     * Add scroll to top button styles
     */
    addScrollToTopStyles() {
        if (document.getElementById('scroll-to-top-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'scroll-to-top-styles';
        style.textContent = `
            .scroll-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                box-shadow: 0 5px 15px rgba(168, 85, 247, 0.3);
                transition: all 0.3s ease;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
            }
            
            .scroll-to-top.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .scroll-to-top:hover {
                background: linear-gradient(135deg, #9333ea 0%, #a855f7 100%);
                box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
                transform: translateY(-3px) scale(1.1);
            }
            
            @media (max-width: 768px) {
                .scroll-to-top {
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    /**
     * Smooth scroll to top
     */
    scrollToTop() {
        this.isScrolling = true;
        
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            this.smoothScrollTo(0);
        }
        
        setTimeout(() => {
            this.isScrolling = false;
        }, 1000);
    },
    
    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC key to close mobile menu
            if (e.key === 'Escape') {
                const navMenu = document.querySelector('.nav-menu.mobile-open') || 
                               document.querySelector('.nav-links.mobile-open');
                if (navMenu) {
                    const mobileToggle = document.querySelector('.mobile-menu-toggle');
                    navMenu.classList.remove('mobile-open');
                    if (mobileToggle) {
                        mobileToggle.classList.remove('active');
                        mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                    }
                    document.body.classList.remove('mobile-menu-open');
                }
            }
            
            // Ctrl/Cmd + Home to go to top
            if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
                e.preventDefault();
                this.scrollToTop();
            }
        });
    },
    
    /**
     * Setup and manage loading screen
     */
    setupLoadingScreen() {
        // Hide loading screen after page load
        window.addEventListener('load', () => {
            this.hideLoadingScreen();
        });
        
        // Fallback: hide loading screen after 3 seconds
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 3000);
    },
    
    /**
     * Show loading screen
     */
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
            loadingScreen.style.opacity = '1';
        }
    },
    
    /**
     * Hide loading screen
     */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 300);
        }
    },
    
    /**
     * Track navigation for analytics
     */
    trackNavigation(url, pageName) {
        // Google Analytics tracking (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_navigation', {
                'page_title': pageName,
                'page_location': url,
                'event_category': 'navigation'
            });
        }
        
        // Console logging for development
        console.log(`Navigation tracked: ${pageName} -> ${url}`);
    },
    
    /**
     * Utility method to get current page name
     */
    getCurrentPage() {
        return window.location.pathname.split('/').pop() || 'index.html';
    },
    
    /**
     * Utility method to check if user is on mobile device
     */
    isMobileDevice() {
        return window.innerWidth <= 768 || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

/**
 * Theme toggle functionality (if needed)
 */
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon?.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon?.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon?.classList.replace('fa-sun', 'fa-moon');
    }
}

/**
 * Global error handler for navigation
 */
window.addEventListener('error', (e) => {
    console.error('Navigation Error:', e.error);
    // Hide loading screen in case of error
    NavigationController.hideLoadingScreen();
});

/**
 * Initialize everything when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing navigation...');
    NavigationController.init();
    initializeTheme();
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Page became visible, refresh active navigation
        NavigationController.setupActiveNavigation();
    }
});

/**
 * Export NavigationController for use in other scripts
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationController;
}

/**
 * Make NavigationController globally available
 */
window.NavigationController = NavigationController;