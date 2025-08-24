/* ============================================
   ANIMATED COUNTERS CONTROLLER
   Campus to Company Website
   ============================================ */

/**
 * Counter Animation Controller
 */
class CounterController {
    constructor() {
        this.counters = new Map();
        this.observers = new Map();
        this.isInitialized = false;
        
        this.init();
    }
    
    /**
     * Initialize counter functionality
     */
    init() {
        if (this.isInitialized) return;
        
        document.addEventListener('DOMContentLoaded', () => {
            this.setupCounters();
            this.createObservers();
        });
        
        this.isInitialized = true;
    }
    
    /**
     * Setup all counter elements
     */
    setupCounters() {
        const counterElements = document.querySelectorAll('.counter, [data-counter]');
        
        counterElements.forEach(element => {
            this.initializeCounter(element);
        });
    }
    
    /**
     * Initialize individual counter
     */
    initializeCounter(element) {
        const target = this.getTargetValue(element);
        const options = this.getCounterOptions(element);
        
        if (target === null) return;
        
        const counterId = this.generateCounterId(element);
        
        const counterData = {
            element,
            target,
            current: options.startValue || 0,
            hasAnimated: false,
            options: {
                duration: options.duration || 2000,
                startValue: options.startValue || 0,
                suffix: options.suffix || '',
                prefix: options.prefix || '',
                separator: options.separator || '',
                decimal: options.decimal || 0,
                easing: options.easing || 'easeOutCubic',
                ...options
            }
        };
        
        this.counters.set(counterId, counterData);
        
        // Set initial display value
        this.updateCounterDisplay(counterData);
        
        // Setup intersection observer for this counter
        this.setupCounterObserver(counterId, counterData);
    }
    
    /**
     * Get target value from element
     */
    getTargetValue(element) {
        // Try data-target attribute first
        const dataTarget = element.getAttribute('data-target');
        if (dataTarget !== null) {
            return parseFloat(dataTarget);
        }
        
        // Try data-counter attribute
        const dataCounter = element.getAttribute('data-counter');
        if (dataCounter !== null) {
            return parseFloat(dataCounter);
        }
        
        // Try text content as fallback
        const textContent = element.textContent.replace(/[^\d.-]/g, '');
        const parsed = parseFloat(textContent);
        return isNaN(parsed) ? null : parsed;
    }
    
    /**
     * Get counter options from element attributes
     */
    getCounterOptions(element) {
        const options = {};
        
        // Get all data attributes
        Object.keys(element.dataset).forEach(key => {
            if (key.startsWith('counter')) {
                const optionKey = key.replace('counter', '').toLowerCase();
                const value = element.dataset[key];
                
                // Parse numeric values
                if (['duration', 'startvalue', 'decimal'].includes(optionKey)) {
                    options[optionKey] = parseFloat(value) || options[optionKey];
                } else {
                    options[optionKey] = value;
                }
            }
        });
        
        // Get suffix from existing text
        const textContent = element.textContent;
        if (textContent.includes('+')) options.suffix = '+';
        if (textContent.includes('%')) options.suffix = '%';
        if (textContent.includes('K')) options.suffix = 'K';
        if (textContent.includes('m')) options.suffix = 'm';
        if (textContent.includes('$')) options.prefix = '$';
        if (textContent.includes('₹')) options.prefix = '₹';
        
        return options;
    }
    
    /**
     * Generate unique counter ID
     */
    generateCounterId(element) {
        if (element.id) return element.id;
        
        let id = 'counter-' + Math.random().toString(36).substr(2, 9);
        while (this.counters.has(id)) {
            id = 'counter-' + Math.random().toString(36).substr(2, 9);
        }
        
        element.setAttribute('data-counter-id', id);
        return id;
    }
    
    /**
     * Setup intersection observer for counter
     */
    setupCounterObserver(counterId, counterData) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterData.hasAnimated) {
                    this.animateCounter(counterId);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(counterData.element);
        this.observers.set(counterId, observer);
    }
    
    /**
     * Create intersection observers
     */
    createObservers() {
        // Additional observers for sections containing counters
        const sections = document.querySelectorAll('.hero, .about, .stats');
        
        sections.forEach(section => {
            const sectionCounters = section.querySelectorAll('.counter, [data-counter]');
            
            if (sectionCounters.length > 0) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            sectionCounters.forEach(counter => {
                                const counterId = counter.getAttribute('data-counter-id');
                                if (counterId) {
                                    this.animateCounter(counterId);
                                }
                            });
                        }
                    });
                }, {
                    threshold: 0.3,
                    rootMargin: '0px'
                });
                
                observer.observe(section);
            }
        });
    }
    
    /**
     * Animate counter to target value
     */
    animateCounter(counterId) {
        const counterData = this.counters.get(counterId);
        if (!counterData || counterData.hasAnimated) return;
        
        counterData.hasAnimated = true;
        
        const { element, target, options } = counterData;
        const startValue = options.startValue;
        const duration = options.duration;
        const startTime = performance.now();
        
        // Add animation class for CSS effects
        element.classList.add('counter-animating');
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Apply easing function
            const easedProgress = this.applyEasing(progress, options.easing);
            
            // Calculate current value
            const currentValue = startValue + (target - startValue) * easedProgress;
            
            // Update counter data and display
            counterData.current = currentValue;
            this.updateCounterDisplay(counterData);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Animation complete
                element.classList.remove('counter-animating');
                element.classList.add('counter-complete');
                
                // Trigger completion event
                const event = new CustomEvent('counterComplete', {
                    detail: { counterId, element, finalValue: target }
                });
                element.dispatchEvent(event);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    /**
     * Update counter display
     */
    updateCounterDisplay(counterData) {
        const { element, current, options } = counterData;
        
        let displayValue = current;
        
        // Apply decimal places
        if (options.decimal > 0) {
            displayValue = displayValue.toFixed(options.decimal);
        } else {
            displayValue = Math.floor(displayValue);
        }
        
        // Add thousand separator
        if (options.separator === ',') {
            displayValue = this.addThousandSeparator(displayValue.toString());
        }
        
        // Add prefix and suffix
        const finalValue = `${options.prefix}${displayValue}${options.suffix}`;
        
        element.textContent = finalValue;
        
        // Update aria-label for accessibility
        element.setAttribute('aria-label', `${finalValue} ${element.getAttribute('data-label') || ''}`);
    }
    
    /**
     * Add thousand separator
     */
    addThousandSeparator(numberString) {
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    /**
     * Apply easing function
     */
    applyEasing(progress, easingType = 'easeOutCubic') {
        switch (easingType) {
            case 'linear':
                return progress;
            
            case 'easeInQuad':
                return progress * progress;
            
            case 'easeOutQuad':
                return progress * (2 - progress);
            
            case 'easeInOutQuad':
                return progress < 0.5 
                    ? 2 * progress * progress 
                    : -1 + (4 - 2 * progress) * progress;
            
            case 'easeInCubic':
                return progress * progress * progress;
            
            case 'easeOutCubic':
                return (--progress) * progress * progress + 1;
            
            case 'easeInOutCubic':
                return progress < 0.5 
                    ? 4 * progress * progress * progress 
                    : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
            
            case 'easeInQuart':
                return progress * progress * progress * progress;
            
            case 'easeOutQuart':
                return 1 - (--progress) * progress * progress * progress;
            
            case 'easeInOutQuart':
                return progress < 0.5 
                    ? 8 * progress * progress * progress * progress 
                    : 1 - 8 * (--progress) * progress * progress * progress;
            
            case 'bounce':
                if (progress < 1 / 2.75) {
                    return 7.5625 * progress * progress;
                } else if (progress < 2 / 2.75) {
                    return 7.5625 * (progress -= 1.5 / 2.75) * progress + 0.75;
                } else if (progress < 2.5 / 2.75) {
                    return 7.5625 * (progress -= 2.25 / 2.75) * progress + 0.9375;
                } else {
                    return 7.5625 * (progress -= 2.625 / 2.75) * progress + 0.984375;
                }
            
            default:
                return this.applyEasing(progress, 'easeOutCubic');
        }
    }
    
    /**
     * Reset counter animation
     */
    resetCounter(counterId) {
        const counterData = this.counters.get(counterId);
        if (!counterData) return;
        
        counterData.hasAnimated = false;
        counterData.current = counterData.options.startValue || 0;
        
        counterData.element.classList.remove('counter-animating', 'counter-complete');
        this.updateCounterDisplay(counterData);
    }
    
    /**
     * Reset all counters
     */
    resetAllCounters() {
        this.counters.forEach((_, counterId) => {
            this.resetCounter(counterId);
        });
    }
    
    /**
     * Manually trigger counter animation
     */
    triggerCounter(counterId) {
        const counterData = this.counters.get(counterId);
        if (!counterData) return;
        
        counterData.hasAnimated = false;
        this.animateCounter(counterId);
    }
    
    /**
     * Add new counter dynamically
     */
    addCounter(element, target, options = {}) {
        // Set target value
        element.setAttribute('data-target', target);
        
        // Set options as data attributes
        Object.keys(options).forEach(key => {
            element.setAttribute(`data-counter-${key}`, options[key]);
        });
        
        // Initialize the counter
        this.initializeCounter(element);
    }
    
    /**
     * Remove counter
     */
    removeCounter(counterId) {
        const observer = this.observers.get(counterId);
        if (observer) {
            observer.disconnect();
            this.observers.delete(counterId);
        }
        
        this.counters.delete(counterId);
    }
    
    /**
     * Get counter statistics
     */
    getCounterStats() {
        return {
            totalCounters: this.counters.size,
            animatedCounters: Array.from(this.counters.values())
                .filter(counter => counter.hasAnimated).length,
            activeObservers: this.observers.size
        };
    }
    
    /**
     * Cleanup all counters and observers
     */
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        this.counters.clear();
        this.isInitialized = false;
    }
}

/**
 * Global counter controller instance
 */
const counterController = new CounterController();

/**
 * Utility functions for external use
 */
function animateCounter(element) {
    const counterId = element.getAttribute('data-counter-id');
    if (counterId) {
        counterController.triggerCounter(counterId);
    }
}

function resetCounters() {
    counterController.resetAllCounters();
}

function addCounter(element, target, options = {}) {
    counterController.addCounter(element, target, options);
}

/**
 * Initialize counters when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Additional setup if needed
    });
} else {
    // DOM already loaded
    setTimeout(() => {
        counterController.setupCounters();
        counterController.createObservers();
    }, 100);
}

// Make functions globally available
window.animateCounter = animateCounter;
window.resetCounters = resetCounters;
window.addCounter = addCounter;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CounterController,
        animateCounter,
        resetCounters,
        addCounter,
        counterController
    };
}