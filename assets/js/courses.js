// ENHANCED COURSES SYSTEM JAVASCRIPT WITH INDIVIDUAL COURSE ENROLLMENT
// File: assets/js/courses.js

// Enhanced Course Data Structure with Individual Courses/Modules
const coursesData = {
    'data-analytics': {
        title: 'Master Data Analytics',
        category: 'technical',
        displayCategory: 'Data & Analytics',
        level: 'Beginner to Advanced',
        duration: '12 Weeks',
        projects: '8 Projects',
        rating: '4.8',
        reviews: '234',
        price: '₹15,000',
        discountPrice: '₹12,000',
        banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        description: 'Master data analysis with Python, SQL, and advanced visualization tools. Learn to extract insights from complex datasets and make data-driven decisions.',
        whyThisCourse: 'Data analysis is one of the fastest-growing fields with high demand across industries. Companies need skilled analysts who can turn raw data into actionable insights.',
        objectives: [
            'Master Python for data manipulation and analysis',
            'Learn SQL for database queries and data extraction',
            'Create compelling visualizations using Tableau and Power BI',
            'Apply statistical methods for data interpretation',
            'Build end-to-end data analysis projects'
        ],
        benefits: [
            'High-demand career with excellent salary prospects',
            'Work across diverse industries from tech to healthcare',
            'Remote work opportunities available',
            'Strong foundation for advanced data science roles'
        ],
        // Individual courses within Data Analytics
        individualCourses: [
            {
                id: 'excel-basics',
                title: 'Excel for Data Analysis',
                duration: '2 Weeks',
                price: '₹2,500',
                discountPrice: '₹2,000',
                description: 'Master Excel for data analysis including pivot tables, charts, and advanced functions.',
                level: 'Beginner',
                modules: ['Basic Functions', 'Pivot Tables', 'Data Visualization', 'Advanced Formulas']
            },
            {
                id: 'python-basics',
                title: 'Python for Beginners',
                duration: '3 Weeks',
                price: '₹3,500',
                discountPrice: '₹3,000',
                description: 'Learn Python fundamentals specifically for data analysis and manipulation.',
                level: 'Beginner',
                modules: ['Python Basics', 'Data Types', 'Pandas Library', 'Basic Analysis']
            },
            {
                id: 'sql-fundamentals',
                title: 'SQL Fundamentals',
                duration: '2 Weeks',
                price: '₹3,000',
                discountPrice: '₹2,500',
                description: 'Master SQL queries, joins, and database operations for data extraction.',
                level: 'Beginner',
                modules: ['Basic Queries', 'Joins', 'Functions', 'Database Design']
            },
            {
                id: 'tableau-visualization',
                title: 'Tableau Data Visualization',
                duration: '3 Weeks',
                price: '₹4,000',
                discountPrice: '₹3,200',
                description: 'Create professional dashboards and visualizations using Tableau.',
                level: 'Intermediate',
                modules: ['Tableau Basics', 'Charts & Graphs', 'Dashboards', 'Advanced Features']
            },
            {
                id: 'statistical-analysis',
                title: 'Statistical Analysis',
                duration: '2 Weeks',
                price: '₹3,500',
                discountPrice: '₹2,800',
                description: 'Learn statistical methods and hypothesis testing for data analysis.',
                level: 'Intermediate',
                modules: ['Descriptive Statistics', 'Hypothesis Testing', 'Regression Analysis', 'ANOVA']
            }
        ]
    },
    'python-programming': {
        title: 'Python Programming Pro',
        category: 'technical',
        displayCategory: 'Programming',
        level: 'Beginner to Expert',
        duration: '10 Weeks',
        projects: '10 Projects',
        rating: '4.9',
        reviews: '189',
        price: '₹18,000',
        discountPrice: '₹14,000',
        banner: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop',
        description: 'Complete Python mastery from basics to advanced topics including web development, automation, and data science.',
        individualCourses: [
            {
                id: 'python-fundamentals',
                title: 'Python Fundamentals',
                duration: '2 Weeks',
                price: '₹3,000',
                discountPrice: '₹2,400',
                description: 'Learn Python basics, syntax, and core programming concepts.',
                level: 'Beginner'
            },
            {
                id: 'web-development',
                title: 'Python Web Development',
                duration: '4 Weeks',
                price: '₹6,000',
                discountPrice: '₹4,800',
                description: 'Build web applications using Django and Flask frameworks.',
                level: 'Intermediate'
            },
            {
                id: 'automation-scripts',
                title: 'Python Automation',
                duration: '2 Weeks',
                price: '₹3,500',
                discountPrice: '₹2,800',
                description: 'Automate tasks and create scripts for efficiency.',
                level: 'Intermediate'
            }
        ]
    },
    'digital-marketing': {
        title: 'Digital Marketing Expert',
        category: 'business',
        displayCategory: 'Marketing',
        level: 'Beginner to Advanced',
        duration: '8 Weeks',
        projects: '6 Campaigns',
        rating: '4.7',
        reviews: '156',
        price: '₹12,000',
        discountPrice: '₹9,600',
        banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        description: 'Master digital marketing strategies including SEO, social media, PPC, and analytics to drive business growth.',
        individualCourses: [
            {
                id: 'seo-mastery',
                title: 'SEO Mastery',
                duration: '2 Weeks',
                price: '₹3,000',
                discountPrice: '₹2,400',
                description: 'Master search engine optimization techniques.',
                level: 'Beginner'
            },
            {
                id: 'social-media-marketing',
                title: 'Social Media Marketing',
                duration: '2 Weeks',
                price: '₹2,800',
                discountPrice: '₹2,200',
                description: 'Create effective social media strategies and campaigns.',
                level: 'Beginner'
            },
            {
                id: 'ppc-advertising',
                title: 'PPC & Google Ads',
                duration: '2 Weeks',
                price: '₹3,500',
                discountPrice: '₹2,800',
                description: 'Master paid advertising on Google and social platforms.',
                level: 'Intermediate'
            }
        ]
    }
    // Add other courses following the same pattern...
};

// Course System Controller with Individual Course Enrollment
class CourseSystemController {
    constructor() {
        this.currentCourse = null;
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCategoryFiltering();
        this.setupSearchFunctionality();
        this.createModalStructure();
        this.initializeAnimations();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            // Close modals when clicking outside
            if (e.target.classList.contains('modal-overlay')) {
                this.closeAllModals();
            }
        });

        // ESC key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    setupCategoryFiltering() {
        const categoryButtons = document.querySelectorAll('.tab-button');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter courses
                const category = button.getAttribute('data-category');
                this.filterCourses(category);
            });
        });
    }

    filterCourses(category) {
        const courseCards = document.querySelectorAll('.course-card');
        
        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    }

    setupSearchFunctionality() {
        const searchInput = document.getElementById('courseSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchCourses(e.target.value.toLowerCase());
            });
        }
    }

    searchCourses(searchTerm) {
        const courseCards = document.querySelectorAll('.course-card');
        
        courseCards.forEach(card => {
            const title = card.querySelector('.course-title').textContent.toLowerCase();
            const description = card.querySelector('.course-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.highlight-tag'))
                .map(tag => tag.textContent.toLowerCase()).join(' ');
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    }

    createModalStructure() {
        // Create course details modal
        const detailsModal = document.createElement('div');
        detailsModal.id = 'courseDetailsModal';
        detailsModal.className = 'modal course-detail-modal';
        detailsModal.innerHTML = `
            <div class="modal-overlay" onclick="closeCourseDetails()"></div>
            <div class="modal-content course-detail-content">
                <button class="modal-close" onclick="closeCourseDetails()">
                    <i class="fas fa-times"></i>
                </button>
                <div id="courseDetailsContent"></div>
            </div>
        `;
        document.body.appendChild(detailsModal);

        // Create individual courses modal
        const individualModal = document.createElement('div');
        individualModal.id = 'individualCoursesModal';
        individualModal.className = 'modal individual-courses-modal';
        individualModal.innerHTML = `
            <div class="modal-overlay" onclick="closeIndividualCoursesModal()"></div>
            <div class="modal-content individual-courses-content">
                <button class="modal-close" onclick="closeIndividualCoursesModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div id="individualCoursesContent"></div>
            </div>
        `;
        document.body.appendChild(individualModal);
    }

    openCourseDetails(courseId) {
        const course = coursesData[courseId];
        if (!course) return;

        const modal = document.getElementById('courseDetailsModal');
        const content = document.getElementById('courseDetailsContent');
        
        content.innerHTML = `
            <div class="course-detail-header">
                <div class="course-banner" style="background-image: url('${course.banner}')">
                    <div class="banner-overlay">
                        <div class="course-header-info">
                            <div class="course-category-badge">
                                <i class="fas fa-tag"></i>
                                ${course.displayCategory}
                            </div>
                            <h1 class="course-detail-title">${course.title}</h1>
                            <div class="course-meta-info">
                                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                                <span><i class="fas fa-project-diagram"></i> ${course.projects}</span>
                                <span><i class="fas fa-star"></i> ${course.rating} (${course.reviews} reviews)</span>
                                <span><i class="fas fa-signal"></i> ${course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="course-detail-body">
                <div class="course-section">
                    <h2><i class="fas fa-info-circle"></i> About This Course</h2>
                    <p class="course-why">${course.description}</p>
                    ${course.whyThisCourse ? `<p class="course-why">${course.whyThisCourse}</p>` : ''}
                </div>

                ${course.objectives ? `
                <div class="course-section">
                    <h2><i class="fas fa-target"></i> What You'll Learn</h2>
                    <div class="objectives-list">
                        ${course.objectives.map(obj => `<div class="objective-item"><i class="fas fa-check"></i>${obj}</div>`).join('')}
                    </div>
                </div>` : ''}

                ${course.benefits ? `
                <div class="course-section">
                    <h2><i class="fas fa-rocket"></i> Career Benefits</h2>
                    <div class="benefits-list">
                        ${course.benefits.map(benefit => `<div class="benefit-item"><i class="fas fa-star"></i>${benefit}</div>`).join('')}
                    </div>
                </div>` : ''}

                <div class="course-section">
                    <h2><i class="fas fa-rupee-sign"></i> Pricing & Enrollment</h2>
                    <div class="pricing-section">
                        <div class="price-display">
                            <span class="original-price">${course.price}</span>
                            <span class="discounted-price">${course.discountPrice}</span>
                            <span class="discount-badge">Save ${Math.round(((parseInt(course.price.replace('₹', '').replace(',', '')) - parseInt(course.discountPrice.replace('₹', '').replace(',', ''))) / parseInt(course.price.replace('₹', '').replace(',', ''))) * 100)}%</span>
                        </div>
                        <div class="enrollment-actions">
                            <button class="btn-enroll-complete" onclick="enrollInCompleteCourse('${courseId}')">
                                <i class="fas fa-graduation-cap"></i> Enroll in Complete Course
                            </button>
                            <button class="btn-view-individual" onclick="openIndividualCourses('${courseId}')">
                                <i class="fas fa-list"></i> View Individual Modules
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    openIndividualCourses(courseId) {
        const course = coursesData[courseId];
        if (!course || !course.individualCourses) return;

        const modal = document.getElementById('individualCoursesModal');
        const content = document.getElementById('individualCoursesContent');
        
        content.innerHTML = `
            <div class="individual-course-header">
                <h2>Choose Your Learning Path: ${course.title}</h2>
                <p>Select the complete course or individual modules that fit your needs</p>
            </div>
            
            <div class="enrollment-options">
                <!-- Complete Course Option -->
                <div class="complete-course-option">
                    <div class="option-card featured">
                        <div class="featured-badge">Most Popular</div>
                        <div class="option-header">
                            <i class="fas fa-graduation-cap"></i>
                            <h3>Complete Course Package</h3>
                        </div>
                        <div class="option-content">
                            <p>Get access to all modules, projects, certification, and placement assistance</p>
                            <div class="features-list">
                                <div class="feature"><i class="fas fa-check"></i> All ${course.individualCourses.length} modules included</div>
                                <div class="feature"><i class="fas fa-check"></i> ${course.projects} hands-on projects</div>
                                <div class="feature"><i class="fas fa-check"></i> Industry certification</div>
                                <div class="feature"><i class="fas fa-check"></i> Placement assistance</div>
                                <div class="feature"><i class="fas fa-check"></i> Lifetime access</div>
                            </div>
                            <div class="pricing-info">
                                <span class="original-price">${course.price}</span>
                                <span class="discounted-price">${course.discountPrice}</span>
                                <span class="savings">Save ${Math.round(((parseInt(course.price.replace('₹', '').replace(',', '')) - parseInt(course.discountPrice.replace('₹', '').replace(',', ''))) / parseInt(course.price.replace('₹', '').replace(',', ''))) * 100)}%</span>
                            </div>
                            <button class="btn-enroll-complete" onclick="enrollInCompleteCourse('${courseId}')">
                                <i class="fas fa-rocket"></i> Enroll in Complete Course
                            </button>
                        </div>
                    </div>
                </div>

                <div class="divider-section">
                    <div class="divider-line"></div>
                    <span class="divider-text">OR CHOOSE INDIVIDUAL MODULES</span>
                    <div class="divider-line"></div>
                </div>

                <!-- Individual Modules -->
                <div class="individual-modules">
                    <h3>Individual Modules</h3>
                    <div class="modules-grid">
                        ${course.individualCourses.map(module => `
                            <div class="module-card">
                                <div class="module-header">
                                    <h4>${module.title}</h4>
                                    <span class="level-badge ${module.level.toLowerCase()}">${module.level}</span>
                                </div>
                                <div class="module-content">
                                    <p>${module.description}</p>
                                    <div class="module-meta">
                                        <span><i class="fas fa-clock"></i> ${module.duration}</span>
                                        ${module.modules ? `<span><i class="fas fa-list"></i> ${module.modules.length} topics</span>` : ''}
                                    </div>
                                    ${module.modules ? `
                                        <div class="module-topics">
                                            ${module.modules.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                                        </div>
                                    ` : ''}
                                    <div class="module-pricing">
                                        <span class="original-price">${module.price}</span>
                                        <span class="discounted-price">${module.discountPrice}</span>
                                    </div>
                                    <button class="btn-enroll-module" onclick="enrollInIndividualModule('${courseId}', '${module.id}')">
                                        <i class="fas fa-plus"></i> Enroll in This Module
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="help-section">
                    <div class="help-card">
                        <i class="fas fa-question-circle"></i>
                        <h3>Need Help Choosing?</h3>
                        <p>Our experts can help you select the right learning path based on your goals and experience.</p>
                        <button class="btn-contact-expert" onclick="contactExpert()">
                            <i class="fas fa-phone"></i> Talk to Expert
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Close course details modal if open
        this.closeCourseDetails();
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    enrollInCompleteCourse(courseId) {
        const course = coursesData[courseId];
        if (!course) return;

        // Show enrollment confirmation
        this.showEnrollmentSuccess({
            type: 'complete',
            courseTitle: course.title,
            price: course.discountPrice,
            duration: course.duration
        });
    }

    enrollInIndividualModule(courseId, moduleId) {
        const course = coursesData[courseId];
        if (!course) return;

        const module = course.individualCourses.find(m => m.id === moduleId);
        if (!module) return;

        // Show enrollment confirmation
        this.showEnrollmentSuccess({
            type: 'module',
            courseTitle: course.title,
            moduleTitle: module.title,
            price: module.discountPrice,
            duration: module.duration
        });
    }

    showEnrollmentSuccess(enrollmentData) {
        // Close all modals first
        this.closeAllModals();

        const successModal = document.createElement('div');
        successModal.className = 'modal enrollment-success-modal active';
        successModal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content success-content">
                <div class="success-animation">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Enrollment Successful! 🎉</h2>
                <div class="enrollment-details">
                    ${enrollmentData.type === 'complete' 
                        ? `<p>You've successfully enrolled in <strong>${enrollmentData.courseTitle}</strong></p>`
                        : `<p>You've successfully enrolled in <strong>${enrollmentData.moduleTitle}</strong> from ${enrollmentData.courseTitle}</p>`
                    }
                    <div class="enrollment-info">
                        <div><i class="fas fa-rupee-sign"></i> Amount: ${enrollmentData.price}</div>
                        <div><i class="fas fa-clock"></i> Duration: ${enrollmentData.duration}</div>
                    </div>
                </div>
                <div class="next-steps">
                    <h3>What's Next?</h3>
                    <div class="steps-list">
                        <div class="step"><i class="fas fa-envelope"></i> Check your email for course access details</div>
                        <div class="step"><i class="fas fa-phone"></i> Our team will contact you within 24 hours</div>
                        <div class="step"><i class="fas fa-calendar"></i> Course starts within 3 working days</div>
                    </div>
                </div>
                <div class="success-actions">
                    <button class="btn-primary" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-home"></i> Back to Courses
                    </button>
                    <button class="btn-secondary" onclick="contactSupport()">
                        <i class="fas fa-headset"></i> Contact Support
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(successModal);
        
        // Auto remove after 10 seconds
        setTimeout(() => {
            if (successModal.parentNode) {
                successModal.remove();
            }
        }, 10000);
    }

    closeCourseDetails() {
        const modal = document.getElementById('courseDetailsModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    closeIndividualCoursesModal() {
        const modal = document.getElementById('individualCoursesModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    closeAllModals() {
        this.closeCourseDetails();
        this.closeIndividualCoursesModal();
    }

    initializeAnimations() {
        // Animate course cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const courseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.course-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            courseObserver.observe(card);
        });
    }
}

// Global functions for onclick handlers
function openCourseDetails(courseId) {
    window.location.href = `course-detail.html?course=${courseId}`;
}

function openEnrollment(courseId) {
  window.location.href = `enrollment.html?course=${courseId}`;
}

function closeCourseDetails() {
    if (window.courseSystem) {
        window.courseSystem.closeCourseDetails();
    }
}

function openIndividualCourses(courseId) {
    window.location.href = "course-detail.html?id=" + courseId + "#enroll";
}

function closeIndividualCoursesModal() {
    if (window.courseSystem) {
        window.courseSystem.closeIndividualCoursesModal();
    }
}

function enrollInCompleteCourse(courseId) {
    if (window.courseSystem) {
        window.courseSystem.enrollInCompleteCourse(courseId);
    }
}

function enrollInIndividualModule(courseId, moduleId) {
    if (window.courseSystem) {
        window.courseSystem.enrollInIndividualModule(courseId, moduleId);
    }
}

function contactExpert() {
    alert('Expert consultation feature coming soon! For now, please call +91 99009 46207');
}

function contactSupport() {
    alert('For support, please email support@campustocompany.com or call +91 99009 46207');
}

// Initialize the course system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.courseSystem = new CourseSystemController();
    console.log('Enhanced Course System with Individual Enrollment Initialized!');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CourseSystemController, coursesData };
}