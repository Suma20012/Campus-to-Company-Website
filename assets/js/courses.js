// ENHANCED COURSES SYSTEM JAVASCRIPT WITH CATEGORY FILTERING
// File: assets/js/courses.js

// Course Data Structure with Categories
const coursesData = {
    'data-analytics': {
        title: 'Data Analytics',
        category: 'technical',
        displayCategory: 'Data & Analytics',
        level: 'Beginner to Advanced',
        duration: '12 Weeks',
        projects: '8 Projects',
        rating: '4.8',
        reviews: '234',
        price: '₹5,000',
        discountPrice: '₹3,000',
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
        modules: [
            {
                title: 'Python Fundamentals & Data Structures',
                description: 'Learn Python basics, data types, and essential libraries like Pandas and NumPy for data manipulation.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'SQL Mastery & Database Operations',
                description: 'Master SQL queries, joins, and advanced database operations for efficient data extraction.',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'Data Visualization & Storytelling',
                description: 'Create impactful visualizations using Matplotlib, Seaborn, Tableau, and Power BI.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Statistical Analysis & Insights',
                description: 'Apply statistical methods, hypothesis testing, and correlation analysis to derive insights.',
                theoryPercent: 40,
                practicalPercent: 60
            },
            {
                title: 'Real-world Capstone Projects',
                description: 'Work on industry-standard projects including sales analysis, customer segmentation, and market research.',
                theoryPercent: 10,
                practicalPercent: 90
            }
        ],
        trainer: {
            name: 'Lohith Raju R',
            designation: 'Project Manager',
            company: 'Scontinent Technologies',
            experience: '3+ Years',
            linkedin: 'https://www.linkedin.com/in/lohith-raj-084ba1161/',
            photo: 'https://www.linkedin.com/in/lohith-raj-084ba1161/overlay/photo/',
            expertise: ['Python', 'SQL', 'Excel', 'Power BI'],
            studentsTaught: '500+',
            achievements: [
                'Led data initiatives at Fortune 500 companies',
                'Published researcher in data science journals',
                'Certified Excel and Power BI expert'
            ]
        },
        learningExperience: {
            practicalPercent: 80,
            theoryPercent: 20,
            features: [
                { icon: 'fas fa-tasks', text: '15+ Hands-on Assignments' },
                { icon: 'fas fa-users', text: 'Interactive Group Projects' },
                { icon: 'fas fa-laptop-code', text: 'Live Coding Sessions' },
                { icon: 'fas fa-user-tie', text: 'One-on-one Mentoring' },
                { icon: 'fas fa-certificate', text: 'Industry-recognized Certification' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-file-alt', text: 'Professional Resume Building' },
                { icon: 'fas fa-comments', text: 'Mock Interview Sessions' },
                { icon: 'fas fa-handshake', text: 'Job Consultant Network Access' },
                { icon: 'fas fa-chart-line', text: 'Salary Negotiation Support' }
            ],
            successStories: [
                {
                    name: 'Rahul Kumar',
                    company: 'Amazon',
                    position: 'Data Analyst',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-amazon'
                },
                {
                    name: 'Sneha Patel',
                    company: 'Google',
                    position: 'Business Analyst',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fab fa-google'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Amit Singh',
                rating: 5,
                text: 'The course structure is excellent and the practical approach helped me land a job at TCS within 3 months of completion.',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
            },
            {
                type: 'text',
                name: 'Kavya Reddy',
                rating: 5,
                text: 'Priya mam is an amazing instructor. The real-world projects gave me confidence to tackle any data challenge.',
                photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=300&h=200&fit=crop'
        ]
    },
    'python-programming': {
        title: 'Python Programming Pro',
        category: 'technical',
        displayCategory: 'Programming',
        level: 'Beginner to Advanced',
        duration: '16 Weeks',
        projects: '12 Projects',
        rating: '4.9',
        reviews: '456',
        price: '₹5,000',
        discountPrice: '₹3,000',
        banner: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&h=400&fit=crop',
        description: 'From basics to advanced Python development. Build web applications, automate tasks, and develop scalable solutions using Python frameworks.',
        whyThisCourse: 'Python is the most versatile programming language, used in web development, data science, AI, and automation. It\'s beginner-friendly yet powerful enough for enterprise applications.',
        objectives: [
            'Master Python fundamentals and advanced concepts',
            'Build web applications using Django and Flask',
            'Develop automation scripts and tools',
            'Work with databases and APIs',
            'Deploy applications to cloud platforms'
        ],
        benefits: [
            'Versatile language applicable to multiple domains',
            'High-paying job opportunities in tech companies',
            'Strong foundation for data science and AI careers',
            'Active community support and continuous learning'
        ],
        modules: [
            {
                title: 'Python Fundamentals & OOP',
                description: 'Learn Python syntax, data structures, functions, and object-oriented programming concepts.',
                theoryPercent: 35,
                practicalPercent: 65
            },
            {
                title: 'Web Development with Django',
                description: 'Build dynamic web applications using Django framework with database integration.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'API Development & Integration',
                description: 'Create RESTful APIs and integrate third-party services into your applications.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Database Operations & ORM',
                description: 'Work with SQL and NoSQL databases using Python ORMs and direct queries.',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'Deployment & DevOps Basics',
                description: 'Deploy applications to cloud platforms and learn basic DevOps practices.',
                theoryPercent: 40,
                practicalPercent: 60
            }
        ],
        trainer: {
            name: 'Lohith Raju R',
            designation: 'CEO',
            company: 'SparkeeTech Solutions',
            experience: '3+ Years',
            linkedin: 'https://www.linkedin.com/in/lohith-raj-084ba1161/',
            photo: 'https://www.linkedin.com/in/lohith-raj-084ba1161/overlay/photo/',
            expertise: ['Python', 'Django', 'FastAPI', 'AWS', 'Docker'],
            studentsTaught: '800+',
            achievements: [
                'Architected scalable systems handling millions of requests',
                'Open source contributor to major Python libraries',
                'Technical speaker at PyCon conferences'
            ]
        },
        learningExperience: {
            practicalPercent: 85,
            theoryPercent: 15,
            features: [
                { icon: 'fas fa-code', text: '20+ Coding Challenges' },
                { icon: 'fas fa-project-diagram', text: 'Build Real Applications' },
                { icon: 'fas fa-bug', text: 'Debug & Optimize Code' },
                { icon: 'fas fa-users-cog', text: 'Code Review Sessions' },
                { icon: 'fas fa-cloud', text: 'Deploy to Production' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-file-code', text: 'GitHub Portfolio Development' },
                { icon: 'fas fa-laptop-code', text: 'Technical Interview Prep' },
                { icon: 'fas fa-network-wired', text: 'Tech Community Networking' },
                { icon: 'fas fa-trophy', text: 'Coding Challenge Training' }
            ],
            successStories: [
                {
                    name: 'Deepak Jain',
                    company: 'Flipkart',
                    position: 'Python Developer',
                    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-shopping-cart'
                },
                {
                    name: 'Ananya Gupta',
                    company: 'Uber',
                    position: 'Backend Engineer',
                    photo: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fab fa-uber'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Vikash Kumar',
                rating: 5,
                text: 'Excellent course structure! The projects helped me build a strong portfolio that impressed employers.',
                photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
        ]
    },
    'digital-marketing': {
        title: 'Digital Marketing Expert',
        category: 'business',
        displayCategory: 'Marketing',
        level: 'Intermediate',
        duration: '10 Weeks',
        projects: '6 Campaigns',
        rating: '4.7',
        reviews: '189',
        price: '₹12,000',
        discountPrice: '₹9,000',
        banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        description: 'Master modern digital marketing strategies including SEO, social media marketing, PPC campaigns, and analytics to drive business growth.',
        whyThisCourse: 'Digital marketing is essential for every business today. Learn to create effective online campaigns and drive real business results.',
        objectives: [
            'Master SEO and content marketing strategies',
            'Create effective social media campaigns',
            'Understand Google Ads and PPC advertising',
            'Learn analytics and performance measurement',
            'Build comprehensive marketing funnels'
        ],
        benefits: [
            'High demand across all industries',
            'Excellent freelancing opportunities',
            'Measurable impact on business growth',
            'Constantly evolving field with new opportunities'
        ],
        modules: [
            {
                title: 'Digital Marketing Fundamentals',
                description: 'Understanding digital marketing landscape, customer journey, and key metrics.',
                theoryPercent: 50,
                practicalPercent: 50
            },
            {
                title: 'SEO & Content Marketing',
                description: 'Learn search engine optimization and create compelling content that ranks.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Social Media Marketing',
                description: 'Master Facebook, Instagram, LinkedIn, and Twitter marketing strategies.',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'Google Ads & PPC',
                description: 'Create and optimize paid advertising campaigns for maximum ROI.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Analytics & Performance Tracking',
                description: 'Measure campaign performance and optimize for better results.',
                theoryPercent: 40,
                practicalPercent: 60
            }
        ],
        trainer: {
            name: 'Suman Raj',
            designation: 'Digital Marketing Head',
            company: 'Zomato',
            experience: '7+ Years',
            linkedin: 'https://linkedin.com/in/sumanraj',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
            expertise: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
            studentsTaught: '400+',
            achievements: [
                'Grew startup revenue by 300% through digital campaigns',
                'Google Ads certified expert',
                'Speaker at major marketing conferences'
            ]
        },
        learningExperience: {
            practicalPercent: 75,
            theoryPercent: 25,
            features: [
                { icon: 'fas fa-chart-line', text: 'Live Campaign Management' },
                { icon: 'fas fa-bullhorn', text: 'Real Brand Collaborations' },
                { icon: 'fas fa-analytics', text: 'Performance Analysis' },
                { icon: 'fas fa-tools', text: 'Industry Tools Training' },
                { icon: 'fas fa-trophy', text: 'Campaign Competition' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-briefcase', text: 'Portfolio Development' },
                { icon: 'fas fa-handshake', text: 'Agency Partnerships' },
                { icon: 'fas fa-user-graduate', text: 'Certification Guidance' },
                { icon: 'fas fa-rocket', text: 'Freelance Setup Support' }
            ],
            successStories: [
                {
                    name: 'Priya Singh',
                    company: 'ByteDance',
                    position: 'Digital Marketing Manager',
                    photo: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-video'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Rohit Sharma',
                rating: 5,
                text: 'The practical approach and real campaigns helped me understand digital marketing deeply.',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop'
        ]
    },
    'tally-erp': {
        title: 'Tally ERP 9',
        category: 'business',
        displayCategory: 'Accounting',
        level: 'Beginner to Intermediate',
        duration: '6 Weeks',
        projects: '5 Projects',
        rating: '4.6',
        reviews: '156',
        price: '₹10,000',
        discountPrice: '₹7,000',
        banner: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
        description: 'Master financial accounting and inventory management with Tally ERP 9 software. Learn GST compliance and business accounting fundamentals.',
        whyThisCourse: 'Tally ERP 9 is essential for modern business accounting and inventory management. High demand for skilled Tally professionals in SMEs and corporations.',
        objectives: [
            'Master complete accounting processes and workflows',
            'Learn inventory management and stock control techniques',
            'Generate comprehensive financial reports and statements',
            'Understand GST compliance and tax management',
            'Handle payroll management and employee records'
        ],
        benefits: [
            'High demand in accounting and finance sector',
            'Essential skill for finance professionals and CA students',
            'Immediate job opportunities in SMEs and corporations',
            'Excellent freelancing and consulting potential'
        ],
        modules: [
            {
                title: 'Introduction to Tally',
                description: 'Basic concepts, software installation, company creation, and fundamental accounting principles',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Accounting Fundamentals',
                description: 'Creating ledgers, groups, voucher entries, and basic transaction processing',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'Advanced Features',
                description: 'Inventory management, GST implementation, advanced reporting, and data backup',
                theoryPercent: 15,
                practicalPercent: 85
            }
        ],
        trainer: {
            name: 'Lohith Raju',
            designation: 'Project Manager',
            company: 'Scontinent Technologies',
            experience: '3+ Years',
            linkedin: 'https://www.linkedin.com/in/lohith-raj-084ba1161/',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
            expertise: ['Tally ERP', 'GST', 'Accounting', 'Finance'],
            studentsTaught: '500+',
            achievements: [
                'Expertise in Data Analytics, Business Intelligence, and Project Management',
                'Certified Tally professional',
                'Trained 500+ students successfully'
            ]
        },
        learningExperience: {
            practicalPercent: 80,
            theoryPercent: 20,
            features: [
                { icon: 'fas fa-calculator', text: 'Real Accounting Scenarios' },
                { icon: 'fas fa-file-invoice', text: 'GST Return Filing Practice' },
                { icon: 'fas fa-chart-bar', text: 'Financial Report Generation' },
                { icon: 'fas fa-warehouse', text: 'Inventory Management' },
                { icon: 'fas fa-certificate', text: 'Tally Certification' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-briefcase', text: 'Accounting Job Placement' },
                { icon: 'fas fa-building', text: 'CA Firm Connections' },
                { icon: 'fas fa-handshake', text: 'Corporate Finance Roles' },
                { icon: 'fas fa-user-tie', text: 'Freelance Consultant Setup' }
            ],
            successStories: [
                {
                    name: 'Rajesh Kumar',
                    company: 'KPMG',
                    position: 'Accounts Executive',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-building'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Suresh Patel',
                rating: 5,
                text: 'Excellent Tally training! Got placed in accounts department of MNC within 2 months.',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300&h=200&fit=crop'
        ]
    },
    'sql-database': {
        title: 'SQL Database Management',
        category: 'technical',
        displayCategory: 'Database',
        level: 'Beginner to Advanced',
        duration: '6 Weeks',
        projects: '8 Databases',
        rating: '4.8',
        reviews: '312',
        price: '₹12,000',
        discountPrice: '₹8,000',
        banner: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
        description: 'Master SQL for database management, queries, and data manipulation. Learn database design principles and optimization techniques.',
        whyThisCourse: 'SQL is essential for all data-related roles. Master database management and become proficient in data querying and manipulation.',
        objectives: [
            'Master SQL query writing and database operations',
            'Understand database design principles and normalization',
            'Learn advanced data manipulation and transformation techniques',
            'Work with different database systems (MySQL, PostgreSQL, SQL Server)',
            'Optimize query performance and database efficiency'
        ],
        benefits: [
            'Essential foundational skill for all data-related roles',
            'High demand across industries and technology sectors',
            'Strong foundation for database administration careers',
            'Perfectly complements other technical skills like Python and analytics'
        ],
        modules: [
            {
                title: 'SQL Fundamentals',
                description: 'Basic queries, SELECT statements, filtering, sorting, and basic joins',
                theoryPercent: 15,
                practicalPercent: 85
            },
            {
                title: 'Advanced Queries',
                description: 'Complex joins, subqueries, window functions, and advanced SQL operations',
                theoryPercent: 10,
                practicalPercent: 90
            },
            {
                title: 'Database Design',
                description: 'Normalization, indexing, stored procedures, and performance tuning techniques',
                theoryPercent: 20,
                practicalPercent: 80
            }
        ],
        trainer: {
            name: 'Vikram Singh',
            designation: 'Database Architect',
            company: 'Oracle',
            experience: '12+ Years',
            linkedin: 'https://linkedin.com/in/vikramsingh',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            expertise: ['SQL', 'MySQL', 'PostgreSQL', 'Database Design'],
            studentsTaught: '700+',
            achievements: [
                'Oracle Certified Database Professional',
                'Led database migrations for Fortune 500 companies',
                'Database performance optimization expert'
            ]
        },
        learningExperience: {
            practicalPercent: 85,
            theoryPercent: 15,
            features: [
                { icon: 'fas fa-database', text: '8 Database Projects' },
                { icon: 'fas fa-search', text: 'Complex Query Writing' },
                { icon: 'fas fa-tachometer-alt', text: 'Performance Optimization' },
                { icon: 'fas fa-cogs', text: 'Database Administration' },
                { icon: 'fas fa-shield-alt', text: 'Security & Backup' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-server', text: 'Database Admin Roles' },
                { icon: 'fas fa-chart-line', text: 'Data Analyst Positions' },
                { icon: 'fas fa-code', text: 'Backend Developer Roles' },
                { icon: 'fas fa-industry', text: 'Enterprise Database Roles' }
            ],
            successStories: [
                {
                    name: 'Amit Kumar',
                    company: 'TCS',
                    position: 'Database Administrator',
                    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-building'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Neha Sharma',
                rating: 5,
                text: 'Best SQL course ever! Now I can write complex queries with confidence.',
                photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop'
        ]
    },
    'hr-management': {
        title: 'HR Management Pro',
        category: 'business',
        displayCategory: 'Human Resources',
        level: 'Intermediate to Advanced',
        duration: '8 Weeks',
        projects: '6 Case Studies',
        rating: '4.7',
        reviews: '278',
        price: '₹15,000',
        discountPrice: '₹11,000',
        banner: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop',
        description: 'Comprehensive HR management course covering recruitment, training, employee relations, and performance management for modern organizations.',
        whyThisCourse: 'Master human resource management strategies and best practices for modern organizations. HR professionals are in high demand across all industries.',
        objectives: [
            'Understand end-to-end recruitment and selection processes',
            'Learn performance management and appraisal systems',
            'Master employee engagement and retention strategies',
            'Handle HR compliance, policies, and legal requirements',
            'Develop leadership and people management skills'
        ],
        benefits: [
            'Growing HR industry with excellent career opportunities',
            'Essential for management and leadership roles',
            'Develop critical people management skills',
            'Strong career advancement and salary growth potential'
        ],
        modules: [
            {
                title: 'HR Fundamentals',
                description: 'Basic HR concepts, organizational behavior, and workplace psychology',
                theoryPercent: 40,
                practicalPercent: 60
            },
            {
                title: 'Recruitment & Selection',
                description: 'Job analysis, hiring processes, interview techniques, and employee onboarding',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Performance Management',
                description: 'Performance appraisals, training programs, and employee development strategies',
                theoryPercent: 20,
                practicalPercent: 80
            }
        ],
        trainer: {
            name: 'Priya Reddy',
            designation: 'HR Director',
            company: 'Wipro',
            experience: '15+ Years',
            linkedin: 'https://linkedin.com/in/priyareddy',
            photo: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
            expertise: ['Recruitment', 'Performance Management', 'Employee Relations', 'HR Analytics'],
            studentsTaught: '400+',
            achievements: [
                'Built HR teams for multiple Fortune 500 companies',
                'Expert in talent acquisition and retention',
                'Certified HR professional with multiple awards'
            ]
        },
        learningExperience: {
            practicalPercent: 70,
            theoryPercent: 30,
            features: [
                { icon: 'fas fa-users', text: 'Live Recruitment Drives' },
                { icon: 'fas fa-comments', text: 'Mock Interview Sessions' },
                { icon: 'fas fa-chart-line', text: 'Performance Analysis' },
                { icon: 'fas fa-balance-scale', text: 'HR Compliance Training' },
                { icon: 'fas fa-handshake', text: 'Employee Relations' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-briefcase', text: 'HR Generalist Roles' },
                { icon: 'fas fa-search', text: 'Talent Acquisition Positions' },
                { icon: 'fas fa-building', text: 'Corporate HR Departments' },
                { icon: 'fas fa-user-tie', text: 'HR Consultant Opportunities' }
            ],
            successStories: [
                {
                    name: 'Kavitha Nair',
                    company: 'Infosys',
                    position: 'HR Manager',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-building'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Ravi Kumar',
                rating: 5,
                text: 'Comprehensive HR course that prepared me for senior HR roles. Highly recommended!',
                photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop'
        ]
    }
};

// Course System Controller with Category Filtering
class CourseSystemController {
    constructor() {
        this.currentCourse = null;
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.createModalStructure();
        this.initializeCategoryFiltering();
        this.setupCourseCardMapping();
        this.reduceHeroSpacing();
        
    }

    setupCourseCardMapping() {
        // Enhanced course ID detection for existing course cards
        const courseCards = document.querySelectorAll('.course-card');
        
        courseCards.forEach(card => {
            const courseId = this.detectCourseId(card);
            if (courseId) {
                card.setAttribute('data-course-id', courseId);
                // Update existing buttons with correct course ID
                this.updateCourseCardButtons(card, courseId);
            }
        });
    }

    reduceHeroSpacing() {
    // Find the hero area ("Choose Your Career Path") and reduce its top/bottom space
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
        if (
            h.textContent.trim().toLowerCase().includes('choose your career path')
        ) {
            h.style.margin = "0";
            h.style.padding = "0";
            let parent = h.parentElement;
            while (parent && parent !== document.body) {
                 parent.style.marginTop = "0";
                 parent.style.paddingTop = "0";
                 parent = parent.parentElement;
            }
        }
    });
}

    detectCourseId(card) {
        // Multiple strategies to detect course ID
        const titleElement = card.querySelector('.course-title, h3, h4, .card-title');
        const descElement = card.querySelector('.course-description, .card-text, p');
        
        if (titleElement) {
            const title = titleElement.textContent.trim().toLowerCase();
            
            // Direct title matching with variations
            const titleMappings = {
                'data analytics': 'data-analytics',
                'python programming pro': 'python-programming',
                'python programming': 'python-programming',
                'python pro': 'python-programming',
                'digital marketing expert': 'digital-marketing',
                'digital marketing': 'digital-marketing',
                'tally erp 9': 'tally-erp',
                'tally erp': 'tally-erp',
                'sql database management': 'sql-database',
                'sql database': 'sql-database',
                'sql': 'sql-database',
                'hr management pro': 'hr-management',
                'hr management': 'hr-management',
                'human resources': 'hr-management'
            };

            for (const [searchTitle, courseId] of Object.entries(titleMappings)) {
                if (title.includes(searchTitle)) {
                    return courseId;
                }
            }
        }

        // Fallback: check description content
        if (descElement) {
            const desc = descElement.textContent.trim().toLowerCase();
            if (desc.includes('python') && desc.includes('programming')) return 'python-programming';
            if (desc.includes('sql') && desc.includes('database')) return 'sql-database';
            if (desc.includes('hr') || desc.includes('human resource')) return 'hr-management';
            if (desc.includes('data') && desc.includes('analytics')) return 'data-analytics';
            if (desc.includes('digital') && desc.includes('marketing')) return 'digital-marketing';
            if (desc.includes('tally') && desc.includes('erp')) return 'tally-erp';
        }

        return null;
    }

    updateCourseCardButtons(card, courseId) {
        const knowMoreBtn = card.querySelector('.btn-know-more, .btn-primary, .btn-info');
        const joinNowBtn = card.querySelector('.btn-join-now, .btn-success, .btn-warning');
        
        if (knowMoreBtn) {
            knowMoreBtn.setAttribute('onclick', `openCourseDetails('${courseId}')`);
            knowMoreBtn.style.cursor = 'pointer';
        }
        
        if (joinNowBtn) {
            joinNowBtn.setAttribute('onclick', `enrollInCourse('${courseId}')`);
            joinNowBtn.style.cursor = 'pointer';
        }
    }

    createModalStructure() {
        // Create course details modal if it doesn't exist
        if (!document.getElementById('courseDetailsModal')) {
            const courseDetailsModal = document.createElement('div');
            courseDetailsModal.id = 'courseDetailsModal';
            courseDetailsModal.className = 'course-details-modal';
            courseDetailsModal.innerHTML = `
                <div class="modal-overlay" onclick="courseSystem.closeCourseDetails()"></div>
                <div class="course-details-container">
                    <button class="close-modal" onclick="courseSystem.closeCourseDetails()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="course-details-content" id="courseDetailsContent">
                        <!-- Dynamic content will be loaded here -->
                    </div>
                </div>
            `;
            document.body.appendChild(courseDetailsModal);
        }

        // Create enrollment modal if it doesn't exist
        if (!document.getElementById('enrollmentModal')) {
            const enrollmentModal = document.createElement('div');
            enrollmentModal.id = 'enrollmentModal';
            enrollmentModal.className = 'enrollment-modal';
            enrollmentModal.innerHTML = `
                <div class="modal-overlay" onclick="courseSystem.closeEnrollmentModal()"></div>
                <div class="enrollment-container">
                    <button class="close-modal" onclick="courseSystem.closeEnrollmentModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="enrollment-content">
                        <div class="enrollment-header">
                            <h2>Enroll in <span id="enrollmentCourseTitle">Course</span></h2>
                            <p>Limited seats available - Secure your spot today!</p>
                        </div>
                        <form class="enrollment-form" id="enrollmentForm">
                            <div class="form-group">
                                <label for="studentName">Full Name *</label>
                                <input type="text" id="studentName" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="studentEmail">Email Address *</label>
                                <input type="email" id="studentEmail" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="studentPhone">Phone Number *</label>
                                <input type="tel" id="studentPhone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="studentCollege">College/Organization *</label>
                                <input type="text" id="studentCollege" name="college" required>
                            </div>
                            <div class="form-group">
                                <label for="studentExperience">Current Experience Level</label>
                                <select id="studentExperience" name="experience">
                                    <option value="beginner">Complete Beginner</option>
                                    <option value="some-knowledge">Some Knowledge</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div class="enrollment-pricing">
                                <div class="price-breakdown">
                                    <div class="price-item">
                                        <span>Course Fee:</span>
                                        <span id="coursePrice">₹15,000</span>
                                    </div>
                                    <div class="price-item discount">
                                        <span>Early Bird Discount:</span>
                                        <span>-₹3,000</span>
                                    </div>
                                    <div class="price-item total">
                                        <span>Total Amount:</span>
                                        <span id="totalPrice">₹12,000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-options">
                                <h4>Choose Payment Method:</h4>
                                <div class="payment-methods">
                                    <label class="payment-method">
                                        <input type="radio" name="payment" value="full" checked>
                                        <span class="payment-label">
                                            <strong>Pay Full Amount</strong>
                                            <small>Get additional 5% discount</small>
                                        </span>
                                    </label>
                                    <label class="payment-method">
                                        <input type="radio" name="payment" value="installment">
                                        <span class="payment-label">
                                            <strong>Pay in Installments</strong>
                                            <small>2 EMIs of ₹6,500 each</small>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn-enroll-submit">
                                <i class="fas fa-credit-card"></i>
                                Proceed to Payment
                            </button>
                            <div class="secure-payment-notice">
                                <i class="fas fa-shield-alt"></i>
                                <span>Secure payment powered by Razorpay</span>
                            </div>
                        </form>
                    </div>
                </div>
            `;
            document.body.appendChild(enrollmentModal);
        }
    }

    initializeCategoryFiltering() {
        // Look for specific placement options for category tabs
        let targetElement = null;
        
        // Priority 1: Look for elements containing "choose your career path"
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const heading of headings) {
            if (heading.textContent.toLowerCase().includes('choose your career path')) {
                targetElement = heading.parentElement;
                break;
            }
        }
        
        // Priority 2: Look for courses hero section
        if (!targetElement) {
            targetElement = document.querySelector('.courses-hero, .hero-section, .courses-section');
        }
        
        // Priority 3: Look for the courses container
        if (!targetElement) {
            targetElement = document.querySelector('.courses-container, .container');
        }
        
        // Priority 4: Before courses grid
        if (!targetElement) {
            const coursesGrid = document.querySelector('.courses-grid, .row');
            if (coursesGrid && coursesGrid.parentElement) {
                targetElement = coursesGrid.parentElement;
            }
        }

        // Add category tabs if they don't exist and we found a target
        if (targetElement && !document.querySelector('.course-categories')) {
    const categorySection = document.createElement('section');
    categorySection.className = 'course-categories';
    categorySection.innerHTML = `
        <div class="courses-tabs-outer">
          <div class="courses-tabs-inner">
            <button class="modern-tab active" data-category="all" onclick="courseSystem.filterCourses('all')">
              <span>
                <i class="fas fa-th-large"></i>
                All Courses
                <b class="tab-badge">${Object.keys(coursesData).length}</b>
              </span>
            </button>
            <button class="modern-tab" data-category="technical" onclick="courseSystem.filterCourses('technical')">
              <span>
                <i class="fas fa-code"></i>
                Technical
                <b class="tab-badge">${Object.values(coursesData).filter(c => c.category === 'technical').length}</b>
              </span>
            </button>
            <button class="modern-tab" data-category="business" onclick="courseSystem.filterCourses('business')">
              <span>
                <i class="fas fa-briefcase"></i>
                Business
                <b class="tab-badge">${Object.values(coursesData).filter(c => c.category === 'business').length}</b>
              </span>
            </button>
          </div>
          <div class="tab-sub-summary"><span id="filterSummary">Showing all ${Object.keys(coursesData).length} courses</span></div>
        </div>
    `;

            
            // Insert after the target element
            targetElement.insertAdjacentElement('afterend', categorySection);
            
            // Add enhanced CSS for modern look
            this.addCategoryTabsCSS();
        }

        // Update existing course cards with category attributes
        this.updateExistingCourseCards();
    }

    addCategoryTabsCSS() {
        // Check if CSS is already added
        if (document.getElementById('modernTabsCSS')) return;
    const style = document.createElement('style');
    style.id = 'modernTabsCSS';
    style.textContent = `
        .courses-tabs-outer {
            display: flex; flex-direction: column; align-items: center; gap: 6px;
            margin-top: 0 !important; margin-bottom: 10px !important; padding: 0; background: none;
        }
        .courses-tabs-inner {
            display: flex; 
            gap: 36px;
            background: rgba(255,255,255,0.83);
            border-radius: 36px;
            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.13), 0 1.5px 15px 0 rgba(162, 94, 255, 0.09);
            padding: 3px 10px; position: relative; backdrop-filter: blur(18px);
            border: 1.5px solid #edeaff;
        }
        .modern-tab {
            font-family: inherit;
            font-weight: 700;
            font-size: 1.13rem;
            color: #5c28e9;
            background: linear-gradient(90deg, #f4f0fe 0%, #efeaff 100%);
            border: none;
            border-radius: 30px;
            padding: 16px 40px;
            transition: all 0.22s cubic-bezier(.17,.67,.83,.67);
            cursor: pointer;
            box-shadow: 0 2px 16px 0 rgba(155,113,255,0.12);
            outline: none;
            position: relative;
            z-index: 1;
            letter-spacing:0.3px;
            border: 2px solid transparent;
        }
        .modern-tab span {
            display: flex; align-items: center; gap:11px;
        }
        .modern-tab i { font-size: 1.3rem; }
        .modern-tab .tab-badge {
            background: #ede9fe;
            color: #8b5cf6;
            font-size: .89rem;
            font-weight: 700;
            border-radius: 12px; padding: 2px 8px; margin-left: 3px;
            border: 1px solid #edeaff;
            letter-spacing: 0.4px;
            display: inline-block; min-width: 24px; text-align: center;
        }
        .modern-tab.active,
        .modern-tab:focus-visible.active {
            background: linear-gradient(90deg, #6366f1 38%, #a855f7 97%);
            color: #fff;
            box-shadow: 0 6px 28px 0 rgba(140,90,255,0.22);
            transform: scale(1.13);
            border: 2.5px solid #7745e4;
        }
        .modern-tab.active .tab-badge {
            background: rgba(255,255,255,0.23); color: #fff; border: 1px solid #ffffff40;
        }
        .modern-tab.active i { filter: drop-shadow(0 0 8px #fff7ff) drop-shadow(0 2px 6px #a855f799);}
        .modern-tab:not(.active):hover { background: #ede9fe; color: #7c3aed;  box-shadow: 0 4px 18px 0 rgba(141,87,246,0.13); transform: scale(1.04); border: 1.5px solid #c5bbee;}
        .modern-tab:focus { outline: 2px solid #8b5cf6;}
        .modern-tab:not(.active) .tab-badge {
            background: #ede9fe; color: #804fe9; border: none;
        }
        .tab-sub-summary {
            margin-top: 7px; color: #7c8499; font-size: .98rem;
            font-weight: 500; background: rgba(255,255,255,0.70);
            border-radius: 10px; padding: 4px 18px;
            text-align: center; min-height: 20px;
            box-shadow: 0 2px 8px 0 rgba(99,102,241,0.06);
            animation: fadeInTabSummary .45s;
        }
        @keyframes fadeInTabSummary {
            from { opacity: 0; transform: translateY(8px);}
            to { opacity:1; transform:none;}
        }
        @media (max-width: 900px) {
            .courses-tabs-inner { gap: 8px; padding: 3px 4px;}
            .modern-tab { padding: 10px 9px; font-size: .97rem;}
            .modern-tab .tab-badge { background: linear-gradient(90deg, #7b5afd 20%, #ec5bb7 100%); color: #fff; font-weight: 800; border: none; box-shadow: 0 2px 8px #c2abff51;}
        }
        @media (max-width:650px) {
            .courses-tabs-inner { flex-direction: column; gap: 4px; padding: 4px 2px;}
            .modern-tab { width: 95vw; min-width: unset; max-width:98vw;
                font-size:.96rem; border-radius:18px; justify-content:left; padding: 11px 8vw;}
        }
    `;
    document.head.appendChild(style);
}

    updateExistingCourseCards() {
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            const courseId = this.detectCourseId(card);
            if (courseId && coursesData[courseId]) {
                card.setAttribute('data-category', coursesData[courseId].category);
            }
        });
    }

    // Enhanced category filtering functionality
    filterCourses(category) {
        const courseCards = document.querySelectorAll('.course-card');
        const categoryTabs = document.querySelectorAll('.category-tab');
        const coursesGrid = document.querySelector('.courses-grid, .row');
        const filterSummary = document.getElementById('filterSummary');
        
        this.currentCategory = category;
        
        // Add filtering class to grid for loading effect
        if (coursesGrid) {
            coursesGrid.classList.add('filtering');
        }
        
        // Update active tab with smooth transition
        categoryTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === category) {
                tab.classList.add('active');
            }
        });
        
        // Count visible courses
        let visibleCount = 0;
        
        // Filter course cards with staggered animation
        courseCards.forEach((card, index) => {
            const cardCategory = card.dataset.category;
            
            // Add filtering-out class first
            card.classList.add('filtering-out');
            
            setTimeout(() => {
                if (category === 'all' || cardCategory === category) {
                    // Show the card
                    card.style.display = 'block';
                    card.classList.remove('filtering-out');
                    card.classList.add('filtering-in');
                    visibleCount++;
                    
                    // Remove filtering-in class after animation
                    setTimeout(() => {
                        card.classList.remove('filtering-in');
                    }, 600);
                } else {
                    // Hide the card
                    card.style.display = 'none';
                    card.classList.remove('filtering-out', 'filtering-in');
                }
            }, index * 100);
        });
        
        // Update filter summary
        setTimeout(() => {
            if (filterSummary) {
                let summaryText = '';
                if (category === 'all') {
                    summaryText = `Showing all ${Object.keys(coursesData).length} courses`;
                } else if (category === 'business') {
                    const businessCount = Object.values(coursesData).filter(course => course.category === 'business').length;
                    summaryText = `${businessCount} business courses to accelerate your career`;
                } else if (category === 'technical') {
                    const technicalCount = Object.values(coursesData).filter(course => course.category === 'technical').length;
                    summaryText = `${technicalCount} technical courses to master cutting-edge skills`;
                }
                
                filterSummary.style.opacity = '0';
                setTimeout(() => {
                    filterSummary.textContent = summaryText;
                    filterSummary.style.opacity = '1';
                }, 150);
            }
        }, 300);
        
        // Remove filtering class from grid
        setTimeout(() => {
            if (coursesGrid) {
                coursesGrid.classList.remove('filtering');
            }
        }, 500);
        
        // Analytics tracking
        this.trackCategoryFilter(category);
    }

    trackCategoryFilter(category) {
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'filter_courses', {
                'category': category,
                'event_category': 'engagement',
                'event_label': 'course_filtering'
            });
        }
        console.log('Category filter tracked:', category);
    }

    setupEventListeners() {
        // Modal close events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCourseDetails();
                this.closeEnrollmentModal();
            }
        });

        // Form submission - use event delegation
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'enrollmentForm') {
                this.handleEnrollment(e);
            }
        });
    }

    initializeAnimations() {
        // Animate course cards on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-fade-in-up');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.course-card').forEach(card => {
            observer.observe(card);
        });
    }

    openCourseDetails(courseId) {
        const courseData = coursesData[courseId];
        if (!courseData) {
            console.error('Course not found:', courseId);
            alert(`Course "${courseId}" not found. Please try again or contact support.`);
            return;
        }

        this.currentCourse = courseId;
        const modal = document.getElementById('courseDetailsModal');
        const content = document.getElementById('courseDetailsContent');

        if (!modal || !content) {
            console.error('Modal elements not found');
            return;
        }

        content.innerHTML = this.generateCourseDetailsHTML(courseData);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Initialize testimonial carousel if present
        setTimeout(() => this.initTestimonialCarousel(), 100);
    }

    generateCourseDetailsHTML(course) {
        return `
            <div class="course-details-header">
                <div class="course-banner" style="background-image: url('${course.banner}');">
                    <div class="banner-overlay">
                        <div class="course-header-info">
                            <div class="course-category-badge">
                                <i class="fas fa-tag"></i>
                                ${course.displayCategory}
                            </div>
                            <h1 class="course-detail-title">${course.title}</h1>
                            <div class="course-meta-info">
                                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                                <span><i class="fas fa-star"></i> ${course.rating} (${course.reviews} reviews)</span>
                                <span><i class="fas fa-signal"></i> ${course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="course-details-body">
                <!-- Course Overview -->
                <section class="course-section">
                    <h2><i class="fas fa-info-circle"></i> Course Overview</h2>
                    <p class="course-why">${course.whyThisCourse}</p>
                    <div class="objectives-benefits">
                        <div class="objectives">
                            <h3>Learning Objectives</h3>
                            <ul>
                                ${course.objectives.map(obj => `<li><i class="fas fa-check"></i> ${obj}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="benefits">
                            <h3>Career Benefits</h3>
                            <ul>
                                ${course.benefits.map(benefit => `<li><i class="fas fa-arrow-up"></i> ${benefit}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Course Modules -->
                <section class="course-section">
                    <h2><i class="fas fa-book"></i> Course Modules</h2>
                    <div class="modules-accordion">
                        ${course.modules.map((module, index) => `
                            <div class="module-item">
                                <div class="module-header" onclick="courseSystem.toggleModule(${index})">
                                    <div class="module-title">
                                        <span class="module-number">Module ${index + 1}</span>
                                        <h4>${module.title}</h4>
                                    </div>
                                    <div class="module-stats">
                                        <div class="theory-practical">
                                            <span class="theory-badge">${module.theoryPercent}% Theory</span>
                                            <span class="practical-badge">${module.practicalPercent}% Practical</span>
                                        </div>
                                        <i class="fas fa-chevron-down module-toggle"></i>
                                    </div>
                                </div>
                                <div class="module-content">
                                    <p>${module.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Trainer Profile -->
                <section class="course-section">
                    <h2><i class="fas fa-chalkboard-teacher"></i> Meet Your Trainer</h2>
                    <div class="trainer-profile">
                        <div class="trainer-photo">
                            <img src="${course.trainer.photo}" alt="${course.trainer.name}">
                        </div>
                        <div class="trainer-info">
                            <h3>${course.trainer.name}</h3>
                            <p class="trainer-designation">${course.trainer.designation} at ${course.trainer.company}</p>
                            <div class="trainer-stats">
                                <div class="stat">
                                    <i class="fas fa-briefcase"></i>
                                    <span>${course.trainer.experience} Experience</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-users"></i>
                                    <span>${course.trainer.studentsTaught} Students Taught</span>
                                </div>
                                <div class="stat">
                                    <a href="${course.trainer.linkedin}" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                        <span>LinkedIn Profile</span>
                                    </a>
                                </div>
                            </div>
                            <div class="trainer-expertise">
                                <h4>Expertise:</h4>
                                <div class="expertise-tags">
                                    ${course.trainer.expertise.map(skill => `<span class="expertise-tag">${skill}</span>`).join('')}
                                </div>
                            </div>
                            <div class="trainer-achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                    ${course.trainer.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Learning Experience -->
                <section class="course-section">
                    <h2><i class="fas fa-graduation-cap"></i> Learning Experience</h2>
                    <div class="learning-experience">
                        <div class="experience-timeline">
                            <div class="timeline-item theory">
                                <div class="timeline-icon"><i class="fas fa-book"></i></div>
                                <div class="timeline-content">
                                    <h4>${course.learningExperience.theoryPercent}% Theory</h4>
                                    <p>Conceptual learning and fundamentals</p>
                                </div>
                            </div>
                            <div class="timeline-item practical">
                                <div class="timeline-icon"><i class="fas fa-laptop-code"></i></div>
                                <div class="timeline-content">
                                    <h4>${course.learningExperience.practicalPercent}% Practical</h4>
                                    <p>Hands-on projects and real-world applications</p>
                                </div>
                            </div>
                        </div>
                        <div class="experience-features">
                            ${course.learningExperience.features.map(feature => `
                                <div class="feature-item">
                                    <i class="${feature.icon}"></i>
                                    <span>${feature.text}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- Placement Assistance -->
                <section class="course-section">
                    <h2><i class="fas fa-handshake"></i> Placement Assistance</h2>
                    <div class="placement-assistance">
                        <div class="placement-features">
                            ${course.placementAssistance.features.map(feature => `
                                <div class="placement-feature">
                                    <i class="${feature.icon}"></i>
                                    <h4>${feature.text}</h4>
                                </div>
                            `).join('')}
                        </div>
                        <div class="success-stories">
                            <h3>Success Stories</h3>
                            <div class="success-carousel">
                                ${course.placementAssistance.successStories.map(story => `
                                    <div class="success-story">
                                        <div class="story-photo">
                                            <img src="${story.photo}" alt="${story.name}">
                                        </div>
                                        <div class="story-info">
                                            <h4>${story.name}</h4>
                                            <p>${story.position}</p>
                                            <div class="company-logo">
                                                <i class="${story.companyLogo}"></i>
                                                <span>${story.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Testimonials -->
                <section class="course-section">
                    <h2><i class="fas fa-quote-left"></i> What Students Say</h2>
                    <div class="testimonials-section">
                        ${course.testimonials.map(testimonial => `
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <img src="${testimonial.photo}" alt="${testimonial.name}">
                                    <div class="testimonial-info">
                                        <h4>${testimonial.name}</h4>
                                        <div class="rating">
                                            ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                                        </div>
                                    </div>
                                </div>
                                <p class="testimonial-text">"${testimonial.text}"</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- College Collaboration -->
                <section class="course-section">
                    <h2><i class="fas fa-university"></i> College Partnerships</h2>
                    <div class="college-collaboration">
                        <div class="partner-logos">
                            <div class="logo-scroll">
                                <div class="logo-item">🎓 VIT University</div>
                                <div class="logo-item">🎓 BITS Pilani</div>
                                <div class="logo-item">🎓 IIT Delhi</div>
                                <div class="logo-item">🎓 NIT Trichy</div>
                                <div class="logo-item">🎓 IIIT Hyderabad</div>
                                <div class="logo-item">🎓 SRM University</div>
                            </div>
                        </div>
                        <div class="partnership-cta">
                            <button class="btn-partner" onclick="courseSystem.openPartnershipForm()">
                                <i class="fas fa-handshake"></i>
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Gallery -->
                <section class="course-section">
                    <h2><i class="fas fa-images"></i> Training Gallery</h2>
                    <div class="course-gallery">
                        ${course.gallery.map(image => `
                            <div class="gallery-item" onclick="courseSystem.openImageModal('${image}')">
                                <img src="${image}" alt="Training session" loading="lazy">
                                <div class="gallery-overlay">
                                    <i class="fas fa-expand"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Enrollment Section -->
                <section class="course-section enrollment-section">
                    <h2><i class="fas fa-rocket"></i> Ready to Start Your Journey?</h2>
                    <div class="enrollment-cta">
                        <div class="course-pricing">
                            <div class="price-original">${course.price}</div>
                            <div class="price-discounted">${course.discountPrice}</div>
                            <div class="price-badge">Limited Time Offer!</div>
                        </div>
                        <button class="btn-enroll-large" onclick="courseSystem.enrollInCourse('${this.currentCourse}')">
                            <i class="fas fa-credit-card"></i>
                            Enroll Now - ${course.discountPrice}
                        </button>
                        <div class="enrollment-features">
                            <div class="feature"><i class="fas fa-calendar-alt"></i> Flexible Schedule</div>
                            <div class="feature"><i class="fas fa-certificate"></i> Certification Included</div>
                            <div class="feature"><i class="fas fa-headset"></i> 24/7 Support</div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    toggleModule(index) {
        const moduleItems = document.querySelectorAll('.module-item');
        const moduleItem = moduleItems[index];
        if (!moduleItem) return;
        
        const content = moduleItem.querySelector('.module-content');
        const toggle = moduleItem.querySelector('.module-toggle');

        moduleItem.classList.toggle('active');
        
        if (moduleItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            toggle.style.transform = 'rotate(180deg)';
        } else {
            content.style.maxHeight = '0';
            toggle.style.transform = 'rotate(0deg)';
        }
    }

    closeCourseDetails() {
        const modal = document.getElementById('courseDetailsModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.currentCourse = null;
        }
    }

    enrollInCourse(courseId) {
        const courseData = coursesData[courseId];
        if (!courseData) {
            console.error('Course not found:', courseId);
            alert(`Course "${courseId}" not found. Please try again or contact support.`);
            return;
        }

        this.currentCourse = courseId;
        const modal = document.getElementById('enrollmentModal');
        const title = document.getElementById('enrollmentCourseTitle');
        const coursePrice = document.getElementById('coursePrice');
        const totalPrice = document.getElementById('totalPrice');
        
        if (!modal || !title) {
            console.error('Enrollment modal elements not found');
            return;
        }

        title.textContent = courseData.title;
        if (coursePrice) coursePrice.textContent = courseData.price;
        if (totalPrice) totalPrice.textContent = courseData.discountPrice;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Close course details modal if open
        this.closeCourseDetails();
    }

    closeEnrollmentModal() {
        const modal = document.getElementById('enrollmentModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    handleEnrollment(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const enrollmentData = Object.fromEntries(formData);
        
        // Add course information
        enrollmentData.course = this.currentCourse;
        enrollmentData.courseTitle = coursesData[this.currentCourse]?.title || '';
        
        // Simulate payment processing
        this.processPayment(enrollmentData);
    }

    processPayment(enrollmentData) {
        // Show loading state
        const submitBtn = document.querySelector('.btn-enroll-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Payment...';
        submitBtn.disabled = true;

        // Simulate payment processing
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            this.showEnrollmentSuccess(enrollmentData);
            
            // In a real application, you would integrate with a payment gateway
            console.log('Enrollment Data:', enrollmentData);
        }, 2000);
    }

    showEnrollmentSuccess(enrollmentData) {
        this.closeEnrollmentModal();
        
        // Create success modal
        const successModal = document.createElement('div');
        successModal.className = 'enrollment-success-modal active';
        successModal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="success-container">
                <div class="success-content">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>Enrollment Successful!</h2>
                    <p>Welcome to <strong>${enrollmentData.courseTitle}</strong></p>
                    <div class="next-steps">
                        <h3>What's Next?</h3>
                        <ul>
                            <li><i class="fas fa-envelope"></i> Check your email for course access details</li>
                            <li><i class="fas fa-calendar"></i> Join the orientation session</li>
                            <li><i class="fas fa-users"></i> Connect with your batch mates</li>
                        </ul>
                    </div>
                    <button class="btn-success-ok" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-rocket"></i>
                        Let's Get Started!
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(successModal);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (successModal.parentNode) {
                successModal.remove();
            }
        }, 5000);
    }

    openPartnershipForm() {
        alert('Partnership form would open here. Contact us at partnerships@campustocompany.com or call +91 99009 46207');
    }

    openImageModal(imageUrl) {
        const imageModal = document.createElement('div');
        imageModal.className = 'image-modal active';
        imageModal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
            <div class="image-container">
                <button class="close-image" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
                <img src="${imageUrl}" alt="Gallery Image">
            </div>
        `;
        
        document.body.appendChild(imageModal);
    }

    initTestimonialCarousel() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials.forEach((testimonial, index) => {
            setTimeout(() => {
                testimonial.classList.add('animate-fade-in-up');
            }, index * 200);
        });
    }
}

// Global functions for onclick handlers
function openCourseDetails(courseId) {
    if (window.courseSystem) {
        window.courseSystem.openCourseDetails(courseId);
    } else {
        console.error('Course system not initialized');
        alert('System not ready. Please refresh the page and try again.');
    }
}

function closeCourseDetails() {
    if (window.courseSystem) {
        window.courseSystem.closeCourseDetails();
    }
}

function enrollInCourse(courseId) {
    if (window.courseSystem) {
        window.courseSystem.enrollInCourse(courseId);
    } else {
        console.error('Course system not initialized');
        alert('System not ready. Please refresh the page and try again.');
    }
}

function closeEnrollmentModal() {
    if (window.courseSystem) {
        window.courseSystem.closeEnrollmentModal();
    }
}

// Initialize the course system
document.addEventListener('DOMContentLoaded', () => {
    window.courseSystem = new CourseSystemController();
    console.log('Enhanced Course System with Fixed Navigation Initialized!');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CourseSystemController, coursesData };
}