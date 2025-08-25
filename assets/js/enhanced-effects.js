// COMPLETE FIX SOLUTION - Add this to assets/js/enhanced-effects.js (create new file)

/**
 * Modern Theme Controller - Replaces all existing theme toggle functionality
 */
class ModernThemeController {
    constructor() {
        this.isDarkMode = this.getInitialTheme();
        this.init();
    }
    
    getInitialTheme() {
        const saved = localStorage.getItem('theme-preference');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    init() {
        this.addThemeStyles();
        this.createThemeToggle();
        this.applyTheme();
        this.setupEventListeners();
    }
    
    addThemeStyles() {
        const style = document.createElement('style');
        style.id = 'complete-theme-styles';
        style.textContent = `
            /* Theme Variables */
            :root {
                --bg-primary: #ffffff;
                --bg-secondary: #f8fafc;
                --text-primary: #1a202c;
                --text-secondary: #4a5568;
                --border-color: #e2e8f0;
                --shadow-color: rgba(0, 0, 0, 0.1);
                --header-bg: rgba(255, 255, 255, 0.95);
            }
            
            [data-theme="dark"] {
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --text-primary: #f1f5f9;
                --text-secondary: #cbd5e1;
                --border-color: #334155;
                --shadow-color: rgba(0, 0, 0, 0.3);
                --header-bg: rgba(15, 23, 42, 0.95);
            }
            
            /* Apply theme transitions */
            * {
                transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease !important;
            }
            
            /* Theme Toggle Styles */
            .theme-toggle {
                width: 64px;
                height: 32px;
                cursor: pointer;
                margin-left: 1rem;
                position: relative;
                flex-shrink: 0;
            }
            
            .theme-toggle-track {
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
            }
            
            .theme-toggle-track::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, #667eea, #764ba2);
                opacity: 0;
                transition: opacity 0.4s ease;
            }
            
            .theme-toggle.dark .theme-toggle-track::before {
                opacity: 1;
            }
            
            .theme-toggle-thumb {
                width: 28px;
                height: 28px;
                background: white;
                border-radius: 50%;
                position: absolute;
                top: 2px;
                left: 2px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
            }
            
            .theme-toggle.dark .theme-toggle-thumb {
                transform: translateX(32px);
                background: #1a1a2e;
            }
            
            .theme-icon {
                font-size: 0.8rem;
                color: #667eea;
                transition: all 0.4s ease;
            }
            
            .theme-toggle.dark .theme-icon {
                color: #fbbf24;
            }
            
            /* Dark mode application */
            [data-theme="dark"] body {
                background: var(--bg-primary);
                color: var(--text-primary);
            }
            
            [data-theme="dark"] .header {
                background: var(--header-bg);
                border-bottom-color: var(--border-color);
            }
            
            [data-theme="dark"] .nav-links a {
                color: var(--text-primary);
            }
            
            [data-theme="dark"] .logo {
                color: #667eea;
            }
            
            [data-theme="dark"] .search-box {
                background: var(--bg-secondary);
                border-color: var(--border-color);
                color: var(--text-primary);
            }
            
            [data-theme="dark"] .hero {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            }
            
            [data-theme="dark"] .about,
            [data-theme="dark"] .courses,
            [data-theme="dark"] .contact {
                background: var(--bg-secondary);
            }
            
            [data-theme="dark"] .course-card,
            [data-theme="dark"] .about-stat {
                background: var(--bg-primary);
                border-color: var(--border-color);
            }
            
            /* Modern Typing Animation Styles */
            .typed-text {
                position: relative;
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 800;
                animation: gradientShift 4s ease-in-out infinite;
            }
            
            .typing-cursor {
                display: inline-block;
                background: linear-gradient(135deg, #667eea, #764ba2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: smoothBlink 1.5s ease-in-out infinite;
                font-weight: 400;
                margin-left: 4px;
            }
            
            @keyframes smoothBlink {
                0%, 45% { opacity: 1; }
                46%, 94% { opacity: 0; }
                95%, 100% { opacity: 1; }
            }
            
            @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            /* Enhanced hero animations */
            .hero-title {
                animation: heroTitleReveal 1.2s ease-out forwards;
                opacity: 0;
                transform: translateY(30px);
            }
            
            @keyframes heroTitleReveal {
                0% {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                60% {
                    opacity: 0.8;
                    transform: translateY(-5px) scale(1.02);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            /* Accessibility: Reduce motion */
            @media (prefers-reduced-motion: reduce) {
                .typed-text,
                .typing-cursor,
                .hero-title {
                    animation: none !important;
                }
                
                .typing-cursor {
                    opacity: 1;
                }
                
                * {
                    transition: none !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    createThemeToggle() {
        // Remove existing theme toggles
        document.querySelectorAll('.theme-toggle').forEach(el => el.remove());
        
        const toggle = document.createElement('div');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = `
            <div class="theme-toggle-track">
                <div class="theme-toggle-thumb">
                    <i class="theme-icon fas fa-moon"></i>
                </div>
            </div>
        `;
        
        // Insert into navigation
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            navContainer.appendChild(toggle);
        }
    }
    
    setupEventListeners() {
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }
    }
    
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveTheme();
        
        console.log(`Theme switched to: ${this.isDarkMode ? 'dark' : 'light'}`);
    }
    
    applyTheme() {
        const theme = this.isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.classList.toggle('dark', this.isDarkMode);
        }
        
        // Update icon
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.className = `theme-icon fas ${this.isDarkMode ? 'fa-sun' : 'fa-moon'}`;
        }
    }
    
    saveTheme() {
        localStorage.setItem('theme-preference', this.isDarkMode ? 'dark' : 'light');
    }
}

/**
 * Enhanced Typing Animation - Smooth and Modern
 */
class ModernTypingAnimation {
    constructor(elementId, texts, options = {}) {
        this.element = document.getElementById(elementId);
        this.texts = texts;
        this.options = {
            typeSpeed: 120,
            deleteSpeed: 60,
            pauseTime: 2500,
            loop: true,
            ...options
        };
        
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isWaiting = false;
        
        if (this.element) {
            this.init();
        }
    }
    
    init() {
        this.createCursor();
        this.startAnimation();
    }
    
    createCursor() {
        // Remove existing cursor
        const existingCursor = this.element.parentNode.querySelector('.typing-cursor');
        if (existingCursor) existingCursor.remove();
        
        // Create new cursor
        this.cursor = document.createElement('span');
        this.cursor.className = 'typing-cursor';
        this.cursor.textContent = '|';
        this.element.parentNode.insertBefore(this.cursor, this.element.nextSibling);
    }
    
    startAnimation() {
        if (this.isWaiting) return;
        
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.deleteCharacter(currentText);
        } else {
            this.typeCharacter(currentText);
        }
    }
    
    typeCharacter(text) {
        if (this.currentCharIndex < text.length) {
            this.element.textContent = text.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            setTimeout(() => this.startAnimation(), this.options.typeSpeed);
        } else {
            this.pauseBeforeDelete();
        }
    }
    
    deleteCharacter(text) {
        if (this.currentCharIndex > 0) {
            this.element.textContent = text.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            setTimeout(() => this.startAnimation(), this.options.deleteSpeed);
        } else {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            setTimeout(() => this.startAnimation(), 500);
        }
    }
    
    pauseBeforeDelete() {
        this.isWaiting = true;
        setTimeout(() => {
            this.isWaiting = false;
            this.isDeleting = true;
            this.startAnimation();
        }, this.options.pauseTime);
    }
    
    stop() {
        this.isWaiting = false;
        this.isDeleting = false;
    }
    
    start() {
        this.startAnimation();
    }
}

/**
 * Initialize everything when DOM is ready
 */
function initializeEnhancedEffects() {
    console.log('Initializing enhanced effects...');
    
    // 1. Fix the theme toggle
    window.modernThemeController = new ModernThemeController();
    
    // 2. Fix the hero typing animation
    const typingTexts = [
        'Career Journey',
        'Future Today',
        'Skills Now', 
        'Dreams Reality'
    ];
    
    // Stop any existing typing animations
    const existingInterval = window.typingInterval;
    if (existingInterval) {
        clearInterval(existingInterval);
    }
    
    // Initialize new smooth typing animation
    window.modernTypingAnimation = new ModernTypingAnimation('typedText', typingTexts, {
        typeSpeed: 150,
        deleteSpeed: 75,
        pauseTime: 3000
    });
    
    // 3. Add enhanced hero entrance animations
    initHeroEntranceAnimations();
    
    // Make functions globally accessible
    window.toggleTheme = () => window.modernThemeController.toggleTheme();
    
    console.log('Enhanced effects initialized successfully!');
}

/**
 * Enhanced hero entrance animations
 */
function initHeroEntranceAnimations() {
    const heroElements = [
        { selector: '.hero-badge', delay: 0 },
        { selector: '.hero-title', delay: 300 },
        { selector: '.hero-subtitle', delay: 600 },
        { selector: '.hero-buttons', delay: 900 },
        { selector: '.course-search', delay: 1200 }
    ];
    
    heroElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            // Reset any existing animations
            element.style.animation = 'none';
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
    
    // Animate hero image separately
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(40px) scale(0.95)';
        heroImage.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0) scale(1)';
        }, 600);
    }
}

/**
 * Clean up conflicting scripts and animations
 */
function cleanupConflictingAnimations() {
    // Stop any existing typing intervals
    if (window.typingInterval) {
        clearInterval(window.typingInterval);
        window.typingInterval = null;
    }
    
    // Remove old animation classes that might conflict
    const typedElements = document.querySelectorAll('.typed-text');
    typedElements.forEach(el => {
        el.style.borderRight = 'none';
        el.classList.remove('blink');
    });
    
    // Clean up old theme toggles
    document.querySelectorAll('[onclick="toggleTheme()"]').forEach(el => {
        if (el.classList.contains('theme-toggle')) {
            el.remove();
        }
    });
}

/**
 * Main initialization function
 */
function initComplete() {
    cleanupConflictingAnimations();
    initializeEnhancedEffects();
}

// Initialize based on document state
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComplete);
} else {
    // DOM already loaded
    setTimeout(initComplete, 100); // Small delay to ensure other scripts have run
}

// Backup initialization - run after 2 seconds regardless
setTimeout(() => {
    if (!window.modernThemeController || !window.modernTypingAnimation) {
        console.log('Running backup initialization...');
        initComplete();
    }
}, 2000);