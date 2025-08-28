// header.js - Updated with correct navigation
function createHeader() {
    // Get current page to set active state
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    return `
    <header class="header">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <div class="logo-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                Campus To Company
            </a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="about-us.html" class="${currentPage === 'about-us.html' ? 'active' : ''}">About Us</a></li>
                    <li><a href="courses.html" class="${currentPage === 'courses.html' ? 'active' : ''}">Courses</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="nav-controls">
                <div class="theme-toggle" onclick="toggleTheme()">
                    <div class="theme-slider">
                        <i class="fas fa-sun"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;
}

// Function to load header
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    } else {
        // Fallback: insert at beginning of body
        const body = document.querySelector('body');
        if (body) {
            body.insertAdjacentHTML('afterbegin', createHeader());
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadHeader);