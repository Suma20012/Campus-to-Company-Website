/* ============================================
   SEARCH CONTROLLER
   Campus to Company Website
   ============================================ */

/**
 * Search Controller Class
 */
class SearchController {
    constructor() {
        this.searchData = {
            courses: [
                { name: 'Data Analytics', category: 'technical', keywords: ['data', 'analytics', 'visualization', 'statistics', 'python', 'tableau'] },
                { name: 'Business Analytics', category: 'business', keywords: ['business', 'analytics', 'intelligence', 'kpi', 'dashboard', 'strategy'] },
                { name: 'Executive HR', category: 'business', keywords: ['hr', 'human', 'resources', 'management', 'leadership', 'executive'] },
                { name: 'Digital Marketing', category: 'creative', keywords: ['digital', 'marketing', 'social', 'media', 'seo', 'advertising'] },
                { name: 'SQL', category: 'technical', keywords: ['sql', 'database', 'query', 'mysql', 'postgresql', 'data'] },
                { name: 'Python', category: 'technical', keywords: ['python', 'programming', 'coding', 'development', 'automation'] },
                { name: 'Finance', category: 'business', keywords: ['finance', 'financial', 'investment', 'accounting', 'money'] },
                { name: 'Tally ERP', category: 'technical', keywords: ['tally', 'erp', 'accounting', 'business', 'software'] }
            ],
            suggestions: [
                'Data Science', 'Machine Learning', 'Web Development', 'UI/UX Design',
                'Project Management', 'Cloud Computing', 'Artificial Intelligence',
                'Blockchain', 'Cybersecurity', 'Mobile App Development'
            ]
        };
        
        this.searchElements = {
            searchInput: null,
            courseSearchInput: null,
            searchBtn: null,
            suggestionsContainer: null
        };
        
        this.searchHistory = this.loadSearchHistory();
        this.isInitialized = false;
        
        this.init();
    }
    
    /**
     * Initialize search functionality
     */
    init() {
        if (this.isInitialized) return;
        
        document.addEventListener('DOMContentLoaded', () => {
            this.setupSearchElements();
            this.setupEventListeners();
            this.createSuggestionsContainer();
        });
        
        this.isInitialized = true;
    }
    
    /**
     * Setup search elements
     */
    setupSearchElements() {
        this.searchElements.searchInput = document.getElementById('searchInput');
        this.searchElements.courseSearchInput = document.getElementById('courseSearchInput');
        this.searchElements.searchBtn = document.querySelector('.search-btn');
        
        // Validate elements exist
        if (!this.searchElements.searchInput && !this.searchElements.courseSearchInput) {
            console.warn('No search input elements found');
            return;
        }
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Main search input
        if (this.searchElements.searchInput) {
            this.setupInputListener(this.searchElements.searchInput, 'email');
        }
        
        // Course search input
        if (this.searchElements.courseSearchInput) {
            this.setupInputListener(this.searchElements.courseSearchInput, 'courses');
        }
        
        // Search button
        if (this.searchElements.searchBtn) {
            this.searchElements.searchBtn.addEventListener('click', () => {
                this.performSearch();
            });
        }
        
        // Global search shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.focusSearch();
            }
        });
        
        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.isSearchElement(e.target)) {
                this.hideSuggestions();
            }
        });
    }
    
    /**
     * Setup input listener
     */
    setupInputListener(input, type) {
        let debounceTimer;
        
        input.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this.handleSearchInput(e.target.value, type, input);
            }, 300);
        });
        
        input.addEventListener('focus', (e) => {
            if (e.target.value.trim()) {
                this.handleSearchInput(e.target.value, type, input);
            } else {
                this.showRecentSearches(input);
            }
        });
        
        input.addEventListener('keydown', (e) => {
            this.handleSearchKeydown(e, input);
        });
        
        input.addEventListener('blur', () => {
            // Delay hiding suggestions to allow for clicks
            setTimeout(() => {
                this.hideSuggestions();
            }, 150);
        });
    }
    
    /**
     * Handle search input
     */
    handleSearchInput(query, type, inputElement) {
        const trimmedQuery = query.trim();
        
        if (!trimmedQuery) {
            this.showRecentSearches(inputElement);
            return;
        }
        
        if (type === 'courses') {
            this.showCourseSuggestions(trimmedQuery, inputElement);
        } else if (type === 'email') {
            this.showEmailSuggestions(trimmedQuery, inputElement);
        }
        
        // Update search analytics
        this.trackSearchQuery(trimmedQuery);
    }
    
    /**
     * Show course suggestions
     */
    showCourseSuggestions(query, inputElement) {
        const suggestions = this.searchCourses(query);
        this.displaySuggestions(suggestions, inputElement, 'courses');
    }
    
    /**
     * Show email suggestions
     */
    showEmailSuggestions(query, inputElement) {
        const suggestions = [];
        
        // Email domain suggestions
        if (query.includes('@')) {
            const [localPart, domain] = query.split('@');
            const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
            
            emailDomains.forEach(emailDomain => {
                if (emailDomain.startsWith(domain.toLowerCase())) {
                    suggestions.push({
                        text: `${localPart}@${emailDomain}`,
                        type: 'email',
                        action: () => this.selectEmailSuggestion(`${localPart}@${emailDomain}`, inputElement)
                    });
                }
            });
        }
        
        this.displaySuggestions(suggestions, inputElement, 'email');
    }
    
    /**
     * Search courses
     */
    searchCourses(query) {
        const queryLower = query.toLowerCase();
        const results = [];
        
        // Search in course names and keywords
        this.searchData.courses.forEach(course => {
            let score = 0;
            
            // Name match
            if (course.name.toLowerCase().includes(queryLower)) {
                score += 10;
            }
            
            // Keyword match
            course.keywords.forEach(keyword => {
                if (keyword.includes(queryLower)) {
                    score += 5;
                }
            });
            
            if (score > 0) {
                results.push({
                    ...course,
                    score,
                    text: course.name,
                    type: 'course',
                    action: () => this.selectCourseSuggestion(course)
                });
            }
        });
        
        // Add general suggestions
        this.searchData.suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(queryLower)) {
                results.push({
                    text: suggestion,
                    type: 'suggestion',
                    score: 1,
                    action: () => this.selectGeneralSuggestion(suggestion)
                });
            }
        });
        
        // Sort by score
        results.sort((a, b) => b.score - a.score);
        
        return results.slice(0, 6); // Limit to 6 suggestions
    }
    
    /**
     * Display suggestions
     */
    displaySuggestions(suggestions, inputElement, type) {
        let container = this.getSuggestionsContainer(inputElement);
        
        if (!container) {
            container = this.createSuggestionsContainer(inputElement);
        }
        
        // Clear previous suggestions
        container.innerHTML = '';
        
        if (suggestions.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        suggestions.forEach((suggestion, index) => {
            const suggestionElement = this.createSuggestionElement(suggestion, index);
            container.appendChild(suggestionElement);
        });
        
        this.positionSuggestions(container, inputElement);
        container.style.display = 'block';
        
        // Store current suggestions for keyboard navigation
        container.suggestions = suggestions;
        container.selectedIndex = -1;
    }
    
    /**
     * Create suggestion element
     */
    createSuggestionElement(suggestion, index) {
        const element = document.createElement('div');
        element.className = 'search-suggestion';
        element.setAttribute('data-index', index);
        
        let icon = 'fas fa-search';
        let categoryText = '';
        
        if (suggestion.type === 'course') {
            icon = 'fas fa-graduation-cap';
            categoryText = `<span class="suggestion-category">${suggestion.category}</span>`;
        } else if (suggestion.type === 'email') {
            icon = 'fas fa-envelope';
        } else if (suggestion.type === 'recent') {
            icon = 'fas fa-clock';
            categoryText = '<span class="suggestion-category">Recent</span>';
        }
        
        element.innerHTML = `
            <div class="suggestion-content">
                <i class="${icon}"></i>
                <span class="suggestion-text">${suggestion.text}</span>
                ${categoryText}
            </div>
        `;
        
        element.addEventListener('click', () => {
            suggestion.action();
        });
        
        element.addEventListener('mouseenter', () => {
            this.highlightSuggestion(element);
        });
        
        return element;
    }
    
    /**
     * Create suggestions container
     */
    createSuggestionsContainer(inputElement = null) {
        // Create global suggestions container if not exists
        if (!this.searchElements.suggestionsContainer) {
            const container = document.createElement('div');
            container.className = 'search-suggestions';
            container.style.cssText = `
                position: absolute;
                background: white;
                border: 1px solid rgba(124, 58, 237, 0.2);
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(20px);
                z-index: 1000;
                max-height: 300px;
                overflow-y: auto;
                display: none;
                min-width: 250px;
            `;
            
            document.body.appendChild(container);
            this.searchElements.suggestionsContainer = container;
            
            // Add styles
            this.addSuggestionStyles();
        }
        
        return this.searchElements.suggestionsContainer;
    }
    
    /**
     * Add suggestion styles
     */
    addSuggestionStyles() {
        if (document.getElementById('search-suggestions-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'search-suggestions-styles';
        style.textContent = `
            .search-suggestions {
                font-family: var(--font-primary);
            }
            
            .search-suggestion {
                padding: 0.75rem 1rem;
                cursor: pointer;
                border-bottom: 1px solid rgba(124, 58, 237, 0.1);
                transition: all 0.2s ease;
            }
            
            .search-suggestion:last-child {
                border-bottom: none;
            }
            
            .search-suggestion:hover,
            .search-suggestion.highlighted {
                background: rgba(124, 58, 237, 0.05);
                color: var(--primary-color);
            }
            
            .suggestion-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .suggestion-content i {
                color: var(--primary-color);
                width: 16px;
                text-align: center;
            }
            
            .suggestion-text {
                flex: 1;
                font-size: 0.9rem;
                color: var(--text-dark);
            }
            
            .suggestion-category {
                font-size: 0.75rem;
                color: var(--text-light);
                background: rgba(124, 58, 237, 0.1);
                padding: 0.25rem 0.5rem;
                border-radius: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .search-suggestion:hover .suggestion-text,
            .search-suggestion.highlighted .suggestion-text {
                color: var(--primary-color);
                font-weight: 500;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    /**
     * Position suggestions container
     */
    positionSuggestions(container, inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        const containerHeight = 300; // Max height
        const viewportHeight = window.innerHeight;
        
        let top = inputRect.bottom + window.scrollY + 5;
        
        // Check if there's enough space below
        if (inputRect.bottom + containerHeight > viewportHeight) {
            // Position above input
            top = inputRect.top + window.scrollY - containerHeight - 5;
        }
        
        container.style.top = `${top}px`;
        container.style.left = `${inputRect.left + window.scrollX}px`;
        container.style.width = `${Math.max(inputRect.width, 250)}px`;
    }
    
    /**
     * Get suggestions container
     */
    getSuggestionsContainer(inputElement) {
        return this.searchElements.suggestionsContainer;
    }
    
    /**
     * Show recent searches
     */
    showRecentSearches(inputElement) {
        const recentSearches = this.searchHistory.slice(0, 5).map(search => ({
            text: search,
            type: 'recent',
            action: () => this.selectRecentSearch(search, inputElement)
        }));
        
        if (recentSearches.length > 0) {
            this.displaySuggestions(recentSearches, inputElement, 'recent');
        }
    }
    
    /**
     * Hide suggestions
     */
    hideSuggestions() {
        if (this.searchElements.suggestionsContainer) {
            this.searchElements.suggestionsContainer.style.display = 'none';
        }
    }
    
    /**
     * Handle keyboard navigation
     */
    handleSearchKeydown(e, inputElement) {
        const container = this.getSuggestionsContainer(inputElement);
        if (!container || container.style.display === 'none') return;
        
        const suggestions = container.suggestions || [];
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navigateSuggestions(container, 1);
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                this.navigateSuggestions(container, -1);
                break;
                
            case 'Enter':
                e.preventDefault();
                this.selectHighlightedSuggestion(container);
                break;
                
            case 'Escape':
                this.hideSuggestions();
                inputElement.blur();
                break;
        }
    }
    
    /**
     * Navigate suggestions with keyboard
     */
    navigateSuggestions(container, direction) {
        const suggestions = container.querySelectorAll('.search-suggestion');
        const currentIndex = container.selectedIndex || -1;
        const newIndex = Math.max(-1, Math.min(suggestions.length - 1, currentIndex + direction));
        
        // Remove previous highlight
        suggestions.forEach(s => s.classList.remove('highlighted'));
        
        // Add new highlight
        if (newIndex >= 0) {
            suggestions[newIndex].classList.add('highlighted');
        }
        
        container.selectedIndex = newIndex;
    }
    
    /**
     * Highlight suggestion
     */
    highlightSuggestion(suggestionElement) {
        const container = suggestionElement.parentElement;
        const suggestions = container.querySelectorAll('.search-suggestion');
        
        suggestions.forEach(s => s.classList.remove('highlighted'));
        suggestionElement.classList.add('highlighted');
        
        container.selectedIndex = parseInt(suggestionElement.getAttribute('data-index'));
    }
    
    /**
     * Select highlighted suggestion
     */
    selectHighlightedSuggestion(container) {
        const highlightedSuggestion = container.querySelector('.search-suggestion.highlighted');
        if (highlightedSuggestion) {
            highlightedSuggestion.click();
        }
    }
    
    /**
     * Select course suggestion
     */
    selectCourseSuggestion(course) {
        this.addToSearchHistory(course.name);
        this.hideSuggestions();
        
        // Navigate to courses section and highlight the course
        this.scrollToCourse(course.name);
        
        // Update input value
        if (this.searchElements.courseSearchInput) {
            this.searchElements.courseSearchInput.value = course.name;
        }
    }
    
    /**
     * Select email suggestion
     */
    selectEmailSuggestion(email, inputElement) {
        inputElement.value = email;
        this.hideSuggestions();
        
        // Move cursor to end
        inputElement.setSelectionRange(email.length, email.length);
    }
    
    /**
     * Select general suggestion
     */
    selectGeneralSuggestion(suggestion) {
        this.addToSearchHistory(suggestion);
        this.hideSuggestions();
        
        // Show "coming soon" message
        this.showComingSoonMessage(suggestion);
    }
    
    /**
     * Select recent search
     */
    selectRecentSearch(search, inputElement) {
        inputElement.value = search;
        this.hideSuggestions();
        
        // Trigger search
        this.handleSearchInput(search, 'courses', inputElement);
    }
    
    /**
     * Scroll to course
     */
    scrollToCourse(courseName) {
        const courseCards = document.querySelectorAll('.course-card');
        let targetCard = null;
        
        courseCards.forEach(card => {
            const cardTitle = card.querySelector('h3');
            if (cardTitle && cardTitle.textContent.includes(courseName)) {
                targetCard = card;
            }
        });
        
        if (targetCard) {
            // Scroll to courses section first
            const coursesSection = document.getElementById('courses');
            if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight the course card
                setTimeout(() => {
                    targetCard.style.transform = 'scale(1.05)';
                    targetCard.style.boxShadow = '0 20px 60px rgba(124, 58, 237, 0.3)';
                    
                    setTimeout(() => {
                        targetCard.style.transform = '';
                        targetCard.style.boxShadow = '';
                    }, 2000);
                }, 1000);
            }
        }
    }
    
    /**
     * Show coming soon message
     */
    showComingSoonMessage(query) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-info-circle"></i>
                <span>"${query}" course coming soon!</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        setTimeout(() => notification.style.transform = 'translateX(100%)', 3000);
        setTimeout(() => notification.remove(), 3500);
    }
    
    /**
     * Perform search
     */
    performSearch() {
        const query = this.searchElements.searchInput?.value.trim();
        if (!query) return;
        
        this.addToSearchHistory(query);
        
        // Simulate search action
        if (query.includes('@')) {
            alert(`We'll send course information to: ${query}`);
        } else {
            alert(`Searching for: ${query}`);
        }
    }
    
    /**
     * Search courses function
     */
    searchCourses() {
        const query = this.searchElements.courseSearchInput?.value.trim();
        if (!query) return;
        
        this.addToSearchHistory(query);
        
        // Filter and highlight courses
        const courses = this.searchCourses(query);
        if (courses.length > 0) {
            this.scrollToCourse(courses[0].name);
        } else {
            this.showComingSoonMessage(query);
        }
    }
    
    /**
     * Focus search input
     */
    focusSearch() {
        if (this.searchElements.courseSearchInput) {
            this.searchElements.courseSearchInput.focus();
        } else if (this.searchElements.searchInput) {
            this.searchElements.searchInput.focus();
        }
    }
    
    /**
     * Check if element is part of search
     */
    isSearchElement(element) {
        return element.closest('.search-box, .course-search, .search-suggestions') !== null;
    }
    
    /**
     * Track search query
     */
    trackSearchQuery(query) {
        // Analytics tracking would go here
        console.log('Search query tracked:', query);
    }
    
    /**
     * Add to search history
     */
    addToSearchHistory(query) {
        if (!query || query.length < 2) return;
        
        // Remove if already exists
        const index = this.searchHistory.indexOf(query);
        if (index > -1) {
            this.searchHistory.splice(index, 1);
        }
        
        // Add to beginning
        this.searchHistory.unshift(query);
        
        // Limit history size
        this.searchHistory = this.searchHistory.slice(0, 10);
        
        // Save to localStorage
        this.saveSearchHistory();
    }
    
    /**
     * Load search history
     */
    loadSearchHistory() {
        try {
            const history = localStorage.getItem('campus-to-company-search-history');
            return history ? JSON.parse(history) : [];
        } catch (e) {
            return [];
        }
    }
    
    /**
     * Save search history
     */
    saveSearchHistory() {
        try {
            localStorage.setItem('campus-to-company-search-history', JSON.stringify(this.searchHistory));
        } catch (e) {
            console.warn('Could not save search history');
        }
    }
    
    /**
     * Clear search history
     */
    clearSearchHistory() {
        this.searchHistory = [];
        this.saveSearchHistory();
    }
}

/**
 * Global search controller instance
 */
const searchController = new SearchController();

/**
 * Global functions for external use
 */
function performSearch() {
    searchController.performSearch();
}

function searchCourses() {
    searchController.searchCourses();
}

function filterCourses(category) {
    const courseCards = document.querySelectorAll('.course-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter course cards
    courseCards.forEach(card => {
        const shouldShow = category === 'all' || card.classList.contains(category);
        
        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = 'slideInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Track filter usage
    console.log('Course filter applied:', category);
}

// Make functions globally available
window.performSearch = performSearch;
window.searchCourses = searchCourses;
window.filterCourses = filterCourses;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SearchController,
        performSearch,
        searchCourses,
        filterCourses,
        searchController
    };
}