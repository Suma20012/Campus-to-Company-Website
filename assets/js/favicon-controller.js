/* ============================================
   DYNAMIC FAVICON CONTROLLER
   Add to assets/js/favicon-controller.js
   ============================================ */

class DynamicFaviconController {
    constructor() {
        this.faviconLinks = {
            light: {
                ico: 'assets/images/icons/favicon-light.ico',
                png: 'assets/images/icons/favicon-light.png',
                appleTouchIcon: 'assets/images/icons/apple-touch-icon-light.png'
            },
            dark: {
                ico: 'assets/images/icons/favicon-dark.ico',
                png: 'assets/images/icons/favicon-dark.png',
                appleTouchIcon: 'assets/images/icons/apple-touch-icon-dark.png'
            }
        };
        
        this.currentTheme = 'light';
        this.init();
    }
    
    init() {
        // Set initial favicon based on system preference
        this.detectInitialTheme();
        this.createFaviconElements();
        this.setupThemeListener();
        this.setupSystemThemeListener();
    }
    
    detectInitialTheme() {
        // Check saved theme first
        const savedTheme = localStorage.getItem('campus-to-company-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            // Check system preference
            this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    }
    
    createFaviconElements() {
        // Remove existing favicon elements
        this.removeExistingFavicons();
        
        // Create new favicon elements
        this.createFaviconLink('shortcut icon', this.faviconLinks[this.currentTheme].ico);
        this.createFaviconLink('icon', this.faviconLinks[this.currentTheme].png, 'image/png', '32x32');
        this.createFaviconLink('apple-touch-icon', this.faviconLinks[this.currentTheme].appleTouchIcon, 'image/png', '180x180');
        
        // Add additional sizes for better support
        this.createFaviconLink('icon', this.faviconLinks[this.currentTheme].png, 'image/png', '16x16');
        this.createFaviconLink('icon', this.faviconLinks[this.currentTheme].png, 'image/png', '96x96');
    }
    
    createFaviconLink(rel, href, type = null, sizes = null) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (type) link.type = type;
        if (sizes) link.sizes = sizes;
        
        // Add data attribute for easy identification
        link.setAttribute('data-favicon-theme', this.currentTheme);
        
        document.head.appendChild(link);
    }
    
    removeExistingFavicons() {
        // Remove all existing favicon-related links
        const existingLinks = document.querySelectorAll([
            'link[rel="shortcut icon"]',
            'link[rel="icon"]',
            'link[rel="apple-touch-icon"]',
            'link[data-favicon-theme]'
        ].join(', '));
        
        existingLinks.forEach(link => link.remove());
    }
    
    switchFavicon(theme) {
        if (this.currentTheme === theme) return;
        
        this.currentTheme = theme;
        this.createFaviconElements();
        
        // Trigger custom event
        const event = new CustomEvent('faviconChanged', {
            detail: { theme, faviconUrls: this.faviconLinks[theme] }
        });
        document.dispatchEvent(event);
        
        console.log(`🎨 Favicon switched to ${theme} mode`);
    }
    
    setupThemeListener() {
        // Listen for theme changes from dark mode controller
        document.addEventListener('themeChanged', (event) => {
            this.switchFavicon(event.detail.theme);
        });
        
        // Also listen for data-theme attribute changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const theme = document.documentElement.getAttribute('data-theme');
                    if (theme && theme !== this.currentTheme) {
                        this.switchFavicon(theme);
                    }
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
    
    setupSystemThemeListener() {
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addListener((e) => {
            // Only change if user hasn't manually set a preference
            if (!localStorage.getItem('campus-to-company-theme')) {
                const theme = e.matches ? 'dark' : 'light';
                this.switchFavicon(theme);
            }
        });
    }
    
    // Method to manually switch favicon (for external use)
    setTheme(theme) {
        if (this.faviconLinks[theme]) {
            this.switchFavicon(theme);
        }
    }
    
    // Get current favicon theme
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    // Preload favicon for smooth switching
    preloadFavicons() {
        Object.values(this.faviconLinks).forEach(themeIcons => {
            Object.values(themeIcons).forEach(iconUrl => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = iconUrl;
                document.head.appendChild(link);
            });
        });
    }
}

// Initialize dynamic favicon controller
const dynamicFaviconController = new DynamicFaviconController();

// Preload favicons for smooth switching
dynamicFaviconController.preloadFavicons();

// Export for external use
window.DynamicFaviconController = DynamicFaviconController;
window.dynamicFaviconController = dynamicFaviconController;