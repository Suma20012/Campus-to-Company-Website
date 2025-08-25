/* ============================================
   DARK MODE CONTROLLER
   Add to assets/js/dark-mode.js
   ============================================ */

class DarkModeController {
    constructor() {
        this.isDarkMode = this.getSavedTheme() === 'dark';
        this.init();
    }
    
    init() {
        this.createToggleButton();
        this.applyTheme();
        this.setupEventListeners();
    }
    
    createToggleButton() {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'theme-toggle';
        toggleButton.innerHTML = `
            <i class="fas fa-moon" id="theme-icon"></i>
        `;
        
        // Position in top-right of header
        const header = document.querySelector('.header .nav-container');
        if (header) {
            header.appendChild(toggleButton);
        }
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .theme-toggle {
                background: none;
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                width: 45px;
                height: 45px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 1rem;
            }
            
            .theme-toggle:hover {
                background: var(--primary-color);
                color: white;
                transform: rotate(180deg);
            }
            
            /* Dark mode styles */
            [data-theme="dark"] {
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --text-primary: #f1f5f9;
                --text-secondary: #cbd5e1;
                --background-light: #1e293b;
            }
            
            [data-theme="dark"] .header {
                background: rgba(15, 23, 42, 0.95);
            }
            
            [data-theme="dark"] .hero {
                background: linear-gradient(135deg, #0f172a, #1e293b);
            }
            
            [data-theme="dark"] .partners {
                background: rgba(15, 23, 42, 0.8);
            }
            
            [data-theme="dark"] .course-card,
            [data-theme="dark"] .about-stat,
            [data-theme="dark"] .partner-logo {
                background: var(--bg-secondary);
                border-color: rgba(100, 116, 139, 0.2);
            }
            
            [data-theme="dark"] .modal-content {
                background: var(--bg-secondary);
                color: var(--text-primary);
            }
        `;
        document.head.appendChild(style);
    }
    
    setupEventListeners() {
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // System preference detection
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(() => {
            if (!this.hasUserPreference()) {
                this.isDarkMode = mediaQuery.matches;
                this.applyTheme();
            }
        });
    }
    
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveTheme();
        
        // Add transition effect
        document.documentElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    }
    
   applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
        
        // Update meta theme-color for mobile browsers
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (!themeColorMeta) {
            themeColorMeta = document.createElement('meta');
            themeColorMeta.name = 'theme-color';
            document.head.appendChild(themeColorMeta);
        }
        themeColorMeta.content = this.isDarkMode ? '#0f172a' : '#7c3aed';
    }
    
    saveTheme() {
        localStorage.setItem('campus-to-company-theme', this.isDarkMode ? 'dark' : 'light');
    }
    
    getSavedTheme() {
        return localStorage.getItem('campus-to-company-theme') || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    
    hasUserPreference() {
        return localStorage.getItem('campus-to-company-theme') !== null;
    }
}

// Initialize dark mode
const darkModeController = new DarkModeController();

// Export for use in other modules
window.DarkModeController = DarkModeController;