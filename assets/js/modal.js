/* ============================================
   MODAL CONTROLLER
   Campus to Company Website
   ============================================ */

/**
 * Modal Controller Class
 */
class ModalController {
    constructor() {
        this.activeModal = null;
        this.previousFocus = null;
        this.isAnimating = false;
        
        this.init();
    }
    
    /**
     * Initialize modal functionality
     */
    init() {
        this.createModalStyles();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
    }
    
    /**
     * Create modal styles if not exists
     */
    createModalStyles() {
        if (document.getElementById('modal-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal {
                display: none;
                position: fixed;
                z-index: 9999;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(10px);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal.show {
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 1;
            }
            
            .modal-content {
                background: white;
                padding: 2rem;
                border-radius: 20px;
                max-width: 90vw;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                transform: scale(0.7) translateY(50px);
                transition: all 0.3s ease;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(124, 58, 237, 0.1);
            }
            
            .modal.show .modal-content {
                transform: scale(1) translateY(0);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(124, 58, 237, 0.1);
            }
            
            .modal-title {
                margin: 0;
                color: var(--primary-color);
                font-size: 1.8rem;
                font-weight: 600;
            }
            
            .modal-body {
                margin-bottom: 1.5rem;
            }
            
            .modal-footer {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(124, 58, 237, 0.1);
            }
            
            .close {
                position: absolute;
                top: 1rem;
                right: 1.5rem;
                font-size: 1.8rem;
                cursor: pointer;
                color: var(--text-light);
                transition: all 0.3s ease;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: transparent;
                border: none;
            }
            
            .close:hover {
                color: var(--primary-color);
                background: rgba(124, 58, 237, 0.1);
                transform: rotate(90deg);
            }
            
            .close:focus {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    margin: 1rem;
                    padding: 1.5rem;
                    max-width: calc(100vw - 2rem);
                }
                
                .modal-title {
                    font-size: 1.5rem;
                }
                
                .close {
                    top: 0.75rem;
                    right: 1rem;
                }
                
                .modal-footer {
                    flex-direction: column;
                }
            }
            
            /* Loading state */
            .modal-loading {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 200px;
            }
            
            .modal-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(124, 58, 237, 0.1);
                border-top: 4px solid var(--primary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            /* Animation classes */
            .modal-fade-in {
                animation: modalFadeIn 0.3s ease;
            }
            
            .modal-fade-out {
                animation: modalFadeOut 0.3s ease;
            }
            
            .modal-slide-in {
                animation: modalSlideIn 0.3s ease;
            }
            
            .modal-zoom-in {
                animation: modalZoomIn 0.3s ease;
            }
            
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes modalFadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            @keyframes modalSlideIn {
                from { transform: translateY(100px) scale(0.9); opacity: 0; }
                to { transform: translateY(0) scale(1); opacity: 1; }
            }
            
            @keyframes modalZoomIn {
                from { transform: scale(0.3); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });
        
        // Close modal with close button
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close')) {
                this.closeModal();
            }
        });
    }
    
    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.activeModal) return;
            
            // Close modal with Escape key
            if (e.key === 'Escape') {
                this.closeModal();
                return;
            }
            
            // Trap focus within modal
            if (e.key === 'Tab') {
                this.trapFocus(e);
            }
        });
    }
    
    /**
     * Open modal
     */
    openModal(modalId, options = {}) {
        if (this.isAnimating) return;
        
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal with id '${modalId}' not found`);
            return;
        }
        
        this.isAnimating = true;
        this.activeModal = modal;
        this.previousFocus = document.activeElement;
        
        // Set modal content if provided
        if (options.title) {
            const titleElement = modal.querySelector('#modalTitle, .modal-title');
            if (titleElement) titleElement.textContent = options.title;
        }
        
        if (options.content) {
            const contentElement = modal.querySelector('#modalContent, .modal-body');
            if (contentElement) contentElement.innerHTML = options.content;
        }
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        setTimeout(() => {
            const firstFocusable = this.getFirstFocusableElement(modal);
            if (firstFocusable) {
                firstFocusable.focus();
            }
            this.isAnimating = false;
        }, 300);
        
        // Add animation class
        if (options.animation) {
            modal.classList.add(`modal-${options.animation}`);
        }
        
        // Trigger custom event
        const event = new CustomEvent('modalOpened', {
            detail: { modalId, options }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * Close modal
     */
    closeModal(modalId = null) {
        if (this.isAnimating) return;
        
        const modal = modalId ? document.getElementById(modalId) : this.activeModal;
        if (!modal || !modal.classList.contains('show')) return;
        
        this.isAnimating = true;
        
        // Start closing animation
        modal.style.opacity = '0';
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.7) translateY(50px)';
        }
        
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
            
            // Reset styles
            modal.style.opacity = '';
            if (modalContent) {
                modalContent.style.transform = '';
            }
            
            // Remove animation classes
            const animationClasses = Array.from(modal.classList).filter(cls => cls.startsWith('modal-'));
            animationClasses.forEach(cls => modal.classList.remove(cls));
            
            // Restore focus
            if (this.previousFocus && typeof this.previousFocus.focus === 'function') {
                this.previousFocus.focus();
            }
            
            this.activeModal = null;
            this.previousFocus = null;
            this.isAnimating = false;
            
            // Trigger custom event
            const event = new CustomEvent('modalClosed', {
                detail: { modalId: modal.id }
            });
            document.dispatchEvent(event);
        }, 300);
    }
    
    /**
     * Get first focusable element in modal
     */
    getFirstFocusableElement(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        return focusableElements[0];
    }
    
    /**
     * Get last focusable element in modal
     */
    getLastFocusableElement(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        return focusableElements[focusableElements.length - 1];
    }
    
    /**
     * Trap focus within modal
     */
    trapFocus(e) {
        if (!this.activeModal) return;
        
        const firstFocusable = this.getFirstFocusableElement(this.activeModal);
        const lastFocusable = this.getLastFocusableElement(this.activeModal);
        
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
    
    /**
     * Create dynamic modal
     */
    createModal(id, options = {}) {
        // Remove existing modal with same id
        const existingModal = document.getElementById(id);
        if (existingModal) {
            existingModal.remove();
        }
        
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', `${id}-title`);
        
        const modalContent = `
            <div class="modal-content">
                <button class="close" aria-label="Close modal">&times;</button>
                ${options.header ? `
                    <div class="modal-header">
                        <h2 class="modal-title" id="${id}-title">${options.title || ''}</h2>
                    </div>
                ` : ''}
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                ${options.footer ? `
                    <div class="modal-footer">
                        ${options.footer}
                    </div>
                ` : ''}
            </div>
        `;
        
        modal.innerHTML = modalContent;
        document.body.appendChild(modal);
        
        return modal;
    }
    
    /**
     * Show loading state in modal
     */
    showLoading(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        const modalBody = modal.querySelector('.modal-body, #modalContent');
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="modal-loading">
                    <div class="modal-spinner"></div>
                </div>
            `;
        }
    }
    
    /**
     * Show error state in modal
     */
    showError(modalId, message = 'An error occurred') {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        const modalBody = modal.querySelector('.modal-body, #modalContent');
        if (modalBody) {
            modalBody.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--error);">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>${message}</p>
                </div>
            `;
        }
    }
}

/**
 * Initialize modal controller
 */
const modalController = new ModalController();

/**
 * Global functions for easy access
 */
function openModal(modalId = 'demoModal', options = {}) {
    modalController.openModal(modalId, options);
}

function closeModal(modalId = null) {
    modalController.closeModal(modalId);
}

function openCourseModal(courseName) {
    const courseData = {
        'Data Analytics': {
            title: 'Data Analytics Course',
            content: `
                <div style="text-align: left;">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Master Data Analysis & Visualization</h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-light);">Transform raw data into actionable insights with our comprehensive Data Analytics course.</p>
                    
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">What You'll Learn:</h4>
                    <ul style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.6;">
                        <li>Statistical analysis and data interpretation</li>
                        <li>Data visualization with tools like Tableau & Power BI</li>
                        <li>SQL for data manipulation and querying</li>
                        <li>Python/R for advanced analytics</li>
                        <li>Machine learning fundamentals</li>
                    </ul>
                    
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                        <p style="margin: 0; color: var(--primary-color); font-weight: 600;">Duration: 6 months | Price: ₹25,000 | Certificate Included</p>
                    </div>
                </div>
            `,
            footer: `
                <button class="btn-primary" onclick="closeModal(); alert('Enrollment feature coming soon!');">
                    <i class="fas fa-graduation-cap"></i> Enroll Now
                </button>
                <button class="btn-secondary" onclick="closeModal();">
                    <i class="fas fa-info-circle"></i> More Info
                </button>
            `
        },
        'Business Analytics': {
            title: 'Business Analytics Course',
            content: `
                <div style="text-align: left;">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Strategic Business Intelligence</h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-light);">Learn to make data-driven business decisions and drive organizational growth.</p>
                    
                    <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Course Highlights:</h4>
                    <ul style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.6;">
                        <li>Business intelligence tools and frameworks</li>
                        <li>KPI development and dashboard creation</li>
                        <li>Market analysis and competitor research</li>
                        <li>Financial modeling and forecasting</li>
                        <li>Strategic planning and execution</li>
                    </ul>
                    
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                        <p style="margin: 0; color: var(--primary-color); font-weight: 600;">Duration: 4 months | Price: ₹30,000 | Industry Projects</p>
                    </div>
                </div>
            `
        }
        // Add more course data as needed
    };
    
    const course = courseData[courseName] || {
        title: courseName,
        content: `
            <p>Learn ${courseName} with hands-on projects and expert mentorship. Our comprehensive curriculum is designed to make you industry-ready.</p>
            <div style="text-align: center; margin: 2rem 0;">
                <i class="fas fa-graduation-cap" style="font-size: 3rem; color: var(--primary-color);"></i>
            </div>
            <p style="text-align: center; color: var(--text-light);">Course details and enrollment options coming soon!</p>
        `
    };
    
    modalController.createModal('courseModal', {
        title: course.title,
        content: course.content,
        footer: course.footer || `
            <button class="btn-primary" onclick="closeModal(); alert('Enrollment feature coming soon!');">
                <i class="fas fa-graduation-cap"></i> Enroll Now
            </button>
        `,
        header: true
    });
    
    modalController.openModal('courseModal', {
        animation: 'slide-in'
    });
}

// Make functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
window.openCourseModal = openCourseModal;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ModalController,
        openModal,
        closeModal,
        openCourseModal
    };
}