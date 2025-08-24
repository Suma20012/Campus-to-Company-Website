/* ============================================
   MAIN JAVASCRIPT CONTROLLER
   Campus to Company Website
   Entry point and orchestration
   ============================================ */

/**
 * Main Application Controller
 */
class CampusToCompanyApp {
    constructor() {
        this.isInitialized = false;
        this.loadStartTime = performance.now();
        this.modules = {
            particles: null,
            animations: null,
            navigation: null,
            modal: null,
            counters: null,
            search: null
        };
        
        this.config = {
            debug: false,
            performance: {
                enableParticles: true,
                enableAnimations: true,
                enableComplexEffects: true
            },
            features: {
                searchSuggestions: true,
                animatedCounters: true,
                smoothScrolling: true,
                modalDialogs: true
            }
        };
        
        this.init();
    }
    
    /**
     * Initialize the application
     */
    init() {
        if (this.isInitialized) return;
        
        this.log('Initializing Campus to Company website...');
        
        // Detect environment and capabilities
        this.detectEnvironment();
        
        // Initialize core functionality immediately
        this.initializeCore();
        
        // Initialize modules when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeModules();
            });
        } else {
            this.initializeModules();
        }
        
        // Initialize additional features when page is fully loaded
        window.addEventListener('load', () => {
            this.initializeEnhancements();
            this.reportInitializationComplete();
        });
        
        this.isInitialized = true;
    }
    
    /**
     * Detect environment and user capabilities
     */
    detectEnvironment() {
        const userAgent = navigator.userAgent.toLowerCase();
        const connection = navigator.connection;
        
        // Detect device type
        this.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        this.isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
        this.isDesktop = !this.isMobile && !this.isTablet;
        
        // Detect performance capabilities
        this.isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
        this.isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Adjust configuration based on capabilities
        if (this.isMobile || this.isLowPerformance || this.isSlowConnection || this.prefersReducedMotion) {
            this.config.performance.enableParticles = !this.isSlowConnection;
            this.config.performance.enableComplexEffects = !this.isLowPerformance;
            this.config.performance.enableAnimations = !this.prefersReducedMotion;
        }
        
        this.log('Environment detected:', {
            device: this.isMobile ? 'mobile' : this.isTablet ? 'tablet' : 'desktop',
            performance: this.isLowPerformance ? 'low' : 'normal',
            connection: this.isSlowConnection ? 'slow' : 'normal',
            reducedMotion: this.prefersReducedMotion
        });
    }
    
    /**
     * Initialize core functionality
     */
    initializeCore() {
        // Set up error handling
        this.setupErrorHandling();
        
        // Set up performance monitoring
        this.setupPerformanceMonitoring();
        
        // Apply initial optimizations
        this.applyInitialOptimizations();
        
        // Set up theme detection
        this.setupThemeDetection();
        
        this.log('Core functionality initialized');
    }
    
    /**
     * Initialize all modules
     */
    async initializeModules() {
        this.log('Initializing modules...');
        
        try {
            // Initialize modules in order of priority
            await this.initializeModule('navigation', () => {
                // Navigation is handled by navigation.js
                return Promise.resolve();
            });
            
            await this.initializeModule('animations', () => {
                // Animations are handled by animations.js
                return Promise.resolve();
            });
            
            await this.initializeModule('modal', () => {
                // Modal functionality is handled by modal.js
                return Promise.resolve();
            });
            
            await this.initializeModule('counters', () => {
                // Counter animations are handled by counters.js
                return Promise.resolve();
            });
            
            await this.initializeModule('search', () => {
                // Search functionality is handled by search.js
                return Promise.resolve();
            });
            
            // Initialize particles last (most resource intensive)
            if (this.config.performance.enableParticles) {
                await this.initializeModule('particles', () => {
                    if (typeof initParticleSystem === 'function') {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                initParticleSystem();
                                resolve();
                            }, 1000);
                        });
                    }
                    return Promise.resolve();
                });
            }
            
        } catch (error) {
            this.logError('Module initialization failed:', error);
        }
        
        this.log('Modules initialized successfully');
    }
    
    /**
     * Initialize a single module with error handling
     */
    async initializeModule(name, initFunction) {
        try {
            this.log(`Initializing ${name} module...`);
            await initFunction();
            this.modules[name] = { status: 'initialized', timestamp: Date.now() };
            this.log(`${name} module initialized successfully`);
        } catch (error) {
            this.logError(`Failed to initialize ${name} module:`, error);
            this.modules[name] = { status: 'failed', error: error.message, timestamp: Date.now() };
        }
    }
    
    /**
     * Initialize enhancements and additional features
     */
    initializeEnhancements() {
        this.log('Initializing enhancements...');
        
        // Initialize lazy loading
        this.initializeLazyLoading();
        
        // Initialize intersection observers for performance
        this.initializeIntersectionObservers();
        
        // Initialize keyboard shortcuts
        this.initializeKeyboardShortcuts();
        
        // Initialize accessibility features
        this.initializeAccessibility();
        
        // Initialize analytics (if needed)
        this.initializeAnalytics();
        
        // Initialize service worker (if available)
        this.initializeServiceWorker();
        
        this.log('Enhancements initialized');
    }
    
    /**
     * Setup error handling
     */
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            this.logError('JavaScript Error:', {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                error: e.error
            });
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            this.logError('Unhandled Promise Rejection:', e.reason);
        });
    }
    
    /**
     * Setup performance monitoring
     */
    setupPerformanceMonitoring() {
        // Monitor page load performance
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        this.log('Performance metrics:', {
                            loadTime: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                            domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
                            firstPaint: this.getFirstPaint(),
                            largestContentfulPaint: this.getLargestContentfulPaint()
                        });
                    }
                }, 0);
            });
        }
        
        // Monitor memory usage (if available)
        if ('memory' in performance) {
            setInterval(() => {
                const memInfo = performance.memory;
                if (memInfo.usedJSHeapSize > memInfo.jsHeapSizeLimit * 0.9) {
                    this.log('High memory usage detected, consider optimization');
                }
            }, 30000);
        }
    }
    
    /**
     * Apply initial optimizations
     */
    applyInitialOptimizations() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize images loading
        this.optimizeImageLoading();
        
        // Add resource hints
        this.addResourceHints();
        
        // Optimize font loading
        this.optimizeFontLoading();
    }
    
    /**
     * Setup theme detection
     */
    setupThemeDetection() {
        // Detect system theme preference
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const applyTheme = (isDark) => {
            document.documentElement.classList.toggle('dark-theme', isDark);
            this.log(`Theme applied: ${isDark ? 'dark' : 'light'}`);
        };
        
        // Apply initial theme
        applyTheme(darkModeQuery.matches);
        
        // Listen for theme changes
        darkModeQuery.addEventListener('change', (e) => {
            applyTheme(e.matches);
        });
    }
    
    /**
     * Initialize lazy loading
     */
    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    /**
     * Initialize intersection observers for performance
     */
    initializeIntersectionObservers() {
        // Pause animations when elements are out of view
        const animatedElements = document.querySelectorAll('[data-aos], .animate-float, .animate-pulse');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    element.style.animationPlayState = 'running';
                } else {
                    element.style.animationPlayState = 'paused';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }
    
    /**
     * Initialize keyboard shortcuts
     */
    initializeKeyboardShortcuts() {
        const shortcuts = {
            'ctrl+k': () => this.focusSearch(),
            'alt+h': () => this.scrollToSection('home'),
            'alt+a': () => this.scrollToSection('about'),
            'alt+c': () => this.scrollToSection('courses'),
            'esc': () => this.closeAllModals()
        };
        
        document.addEventListener('keydown', (e) => {
            const key = this.getShortcutKey(e);
            if (shortcuts[key]) {
                e.preventDefault();
                shortcuts[key]();
            }
        });
    }
    
    /**
     * Initialize accessibility features
     */
    initializeAccessibility() {
        // Skip to content link
        this.addSkipToContentLink();
        
        // Focus management
        this.setupFocusManagement();
        
        // ARIA live regions for dynamic content
        this.setupAriaLiveRegions();
        
        // Keyboard navigation improvements
        this.improveKeyboardNavigation();
    }
    
    /**
     * Initialize analytics
     */
    initializeAnalytics() {
        // Basic page view tracking
        this.trackPageView();
        
        // Track user interactions
        this.setupInteractionTracking();
        
        // Track performance metrics
        this.trackPerformanceMetrics();
    }
    
    /**
     * Initialize service worker
     */
    initializeServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    this.log('Service Worker registered successfully');
                })
                .catch(error => {
                    this.log('Service Worker registration failed:', error);
                });
        }
    }
    
    /**
     * Preload critical resources
     */
    preloadCriticalResources() {
        const criticalResources = [
            { href: 'assets/css/main.css', as: 'style' },
            { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', as: 'style' },
            { href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css', as: 'style' }
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }
    
    /**
     * Optimize image loading
     */
    optimizeImageLoading() {
        // Add loading="lazy" to images
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
    
    /**
     * Add resource hints
     */
    addResourceHints() {
        const resourceHints = [
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
        ];
        
        resourceHints.forEach(hint => {
            const link = document.createElement('link');
            Object.assign(link, hint);
            document.head.appendChild(link);
        });
    }
    
    /**
     * Optimize font loading
     */
    optimizeFontLoading() {
        if ('fonts' in document) {
            // Load critical fonts first
            const criticalFonts = [
                'Segoe UI'
            ];
            
            criticalFonts.forEach(font => {
                document.fonts.load(`16px "${font}"`);
            });
        }
    }
    
    /**
     * Add skip to content link
     */
    addSkipToContentLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-to-content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content landmark if not exists
        if (!document.getElementById('main-content')) {
            const main = document.querySelector('main') || document.querySelector('.hero');
            if (main) {
                main.id = 'main-content';
            }
        }
    }
    
    /**
     * Setup focus management
     */
    setupFocusManagement() {
        let focusedElementBeforeModal = null;
        
        // Store focus when modal opens
        document.addEventListener('modalOpened', (e) => {
            focusedElementBeforeModal = document.activeElement;
        });
        
        // Restore focus when modal closes
        document.addEventListener('modalClosed', (e) => {
            if (focusedElementBeforeModal) {
                focusedElementBeforeModal.focus();
            }
        });
    }
    
    /**
     * Setup ARIA live regions
     */
    setupAriaLiveRegions() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
        
        // Function to announce messages
        this.announce = (message) => {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        };
    }
    
    /**
     * Improve keyboard navigation
     */
    improveKeyboardNavigation() {
        // Add focus indicators
        const style = document.createElement('style');
        style.textContent = `
            .focus-visible {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Utility functions
     */
    focusSearch() {
        const searchInput = document.getElementById('courseSearchInput') || document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    closeAllModals() {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            if (typeof closeModal === 'function') {
                closeModal(modal.id);
            }
        });
    }
    
    getShortcutKey(e) {
        const parts = [];
        if (e.ctrlKey) parts.push('ctrl');
        if (e.altKey) parts.push('alt');
        if (e.shiftKey) parts.push('shift');
        if (e.metaKey) parts.push('meta');
        parts.push(e.key.toLowerCase());
        return parts.join('+');
    }
    
    getFirstPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
        return firstPaint ? Math.round(firstPaint.startTime) : null;
    }
    
    getLargestContentfulPaint() {
        return new Promise((resolve) => {
            const observer = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                resolve(Math.round(lastEntry.startTime));
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        });
    }
    
    /**
     * Tracking functions
     */
    trackPageView() {
        // Implement your analytics tracking here
        this.log('Page view tracked');
    }
    
    setupInteractionTracking() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn-primary, .btn-secondary')) {
                this.log('Button clicked:', e.target.textContent.trim());
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.log('Form submitted:', e.target.className);
        });
    }
    
    trackPerformanceMetrics() {
        // Track Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    this.log('LCP:', Math.round(entry.startTime));
                }
            }).observe({ entryTypes: ['largest-contentful-paint'] });
            
            // First Input Delay
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    this.log('FID:', Math.round(entry.processingStart - entry.startTime));
                }
            }).observe({ entryTypes: ['first-input'] });
        }
    }
    
    /**
     * Report initialization completion
     */
    reportInitializationComplete() {
        const loadTime = performance.now() - this.loadStartTime;
        this.log(`Campus to Company website fully initialized in ${Math.round(loadTime)}ms`);
        
        // Trigger custom event
        const event = new CustomEvent('appInitialized', {
            detail: {
                loadTime,
                modules: this.modules,
                config: this.config
            }
        });
        document.dispatchEvent(event);
        
        // Remove loading class from body
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }
    
    /**
     * Logging functions
     */
    log(...args) {
        if (this.config.debug || localStorage.getItem('campus-debug') === 'true') {
            console.log('[Campus to Company]', ...args);
        }
    }
    
    logError(...args) {
        console.error('[Campus to Company Error]', ...args);
    }
    
    /**
     * Public API methods
     */
    getModuleStatus(moduleName) {
        return this.modules[moduleName] || { status: 'not_initialized' };
    }
    
    getAllModulesStatus() {
        return { ...this.modules };
    }
    
    enableDebugMode() {
        this.config.debug = true;
        localStorage.setItem('campus-debug', 'true');
        this.log('Debug mode enabled');
    }
    
    disableDebugMode() {
        this.config.debug = false;
        localStorage.removeItem('campus-debug');
        console.log('[Campus to Company] Debug mode disabled');
    }
}

/**
 * Initialize the application
 */
const app = new CampusToCompanyApp();

/**
 * Global API for debugging and external access
 */
window.CampusToCompanyApp = app;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CampusToCompanyApp;
}