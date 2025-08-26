// ENHANCED COURSES SYSTEM JAVASCRIPT
// File: assets/js/courses.js

// Course Data Structure
const coursesData = {
    'data-analyst': {
        title: 'Data Analyst Mastery',
        category: 'Data & Analytics',
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
            name: 'Priya Sharma',
            designation: 'Senior Data Analyst',
            company: 'Microsoft',
            experience: '8+ Years',
            linkedin: 'https://linkedin.com/in/priyasharma',
            photo: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
            expertise: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
            studentsTaught: '500+',
            achievements: [
                'Led data initiatives at Fortune 500 companies',
                'Published researcher in data science journals',
                'Certified Tableau and Power BI expert'
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
        category: 'Programming',
        level: 'Beginner Friendly',
        duration: '16 Weeks',
        projects: '12 Projects',
        rating: '4.9',
        reviews: '456',
        price: '₹18,000',
        discountPrice: '₹14,000',
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
            name: 'Arjun Mehta',
            designation: 'Senior Python Developer',
            company: 'Netflix',
            experience: '10+ Years',
            linkedin: 'https://linkedin.com/in/arjunmehta',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
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
        category: 'Marketing',
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
    'web-development': {
        title: 'Full Stack Web Development',
        category: 'Development',
        level: 'Beginner to Pro',
        duration: '20 Weeks',
        projects: '15 Projects',
        rating: '4.9',
        reviews: '678',
        price: '₹25,000',
        discountPrice: '₹20,000',
        banner: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
        description: 'Build modern web applications from scratch. Learn front-end and back-end technologies to become a complete web developer.',
        whyThisCourse: 'Web development offers the highest job opportunities in tech. Master both frontend and backend to become a complete developer.',
        objectives: [
            'Master HTML, CSS, JavaScript fundamentals',
            'Learn React.js for modern front-end development',
            'Build APIs with Node.js and Express',
            'Work with databases and cloud services',
            'Deploy full-stack applications'
        ],
        benefits: [
            'Highest number of job opportunities',
            'Excellent salary potential',
            'Work remotely from anywhere',
            'Build your own products and startups'
        ],
        modules: [
            {
                title: 'Frontend Fundamentals',
                description: 'Master HTML, CSS, JavaScript and responsive design principles.',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'React.js Development',
                description: 'Build interactive user interfaces with React hooks and state management.',
                theoryPercent: 15,
                practicalPercent: 85
            },
            {
                title: 'Backend with Node.js',
                description: 'Create REST APIs and handle server-side logic with Node.js and Express.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Database Integration',
                description: 'Work with MongoDB and SQL databases for data persistence.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Deployment & DevOps',
                description: 'Deploy applications using AWS, Docker, and CI/CD pipelines.',
                theoryPercent: 40,
                practicalPercent: 60
            }
        ],
        trainer: {
            name: 'Kiran Kumar',
            designation: 'Full Stack Architect',
            company: 'Razorpay',
            experience: '12+ Years',
            linkedin: 'https://linkedin.com/in/kirankumar',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            expertise: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
            studentsTaught: '1000+',
            achievements: [
                'Built payment systems handling billions of transactions',
                'Open source contributor with 50K+ GitHub stars',
                'Tech lead for multiple unicorn startups'
            ]
        },
        learningExperience: {
            practicalPercent: 90,
            theoryPercent: 10,
            features: [
                { icon: 'fas fa-laptop-code', text: '15 Real World Projects' },
                { icon: 'fas fa-github', text: 'GitHub Portfolio Building' },
                { icon: 'fas fa-cloud', text: 'Live Deployment Experience' },
                { icon: 'fas fa-users', text: 'Team Collaboration Projects' },
                { icon: 'fas fa-medal', text: 'Industry Certification' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-code', text: 'Coding Interview Preparation' },
                { icon: 'fas fa-laptop', text: 'Technical Assessment Training' },
                { icon: 'fas fa-building', text: 'Startup & MNC Connections' },
                { icon: 'fas fa-dollar-sign', text: 'Salary Negotiation Coaching' }
            ],
            successStories: [
                {
                    name: 'Anil Verma',
                    company: 'Swiggy',
                    position: 'Full Stack Developer',
                    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-utensils'
                },
                {
                    name: 'Neha Agarwal',
                    company: 'Paytm',
                    position: 'Frontend Developer',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-mobile-alt'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Rajesh Gupta',
                rating: 5,
                text: 'Best web development course! Got placed at Microsoft with 18 LPA package.',
                photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop'
        ]
    },
    'ai-machine-learning': {
        title: 'AI & Machine Learning',
        category: 'Artificial Intelligence',
        level: 'Intermediate to Expert',
        duration: '18 Weeks',
        projects: '10 Models',
        rating: '4.8',
        reviews: '312',
        price: '₹30,000',
        discountPrice: '₹24,000',
        banner: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
        description: 'Dive into artificial intelligence and machine learning. Build intelligent systems and predictive models using cutting-edge technologies.',
        whyThisCourse: 'AI/ML is revolutionizing every industry. Be part of the future by learning the most in-demand skills in technology.',
        objectives: [
            'Master machine learning algorithms and concepts',
            'Learn deep learning with TensorFlow and PyTorch',
            'Build computer vision and NLP applications',
            'Deploy ML models in production',
            'Work on real-world AI projects'
        ],
        benefits: [
            'Highest paying roles in tech industry',
            'Work on cutting-edge technology',
            'Shape the future of technology',
            'Unlimited career growth potential'
        ],
        modules: [
            {
                title: 'Machine Learning Fundamentals',
                description: 'Learn supervised, unsupervised learning and key ML algorithms.',
                theoryPercent: 45,
                practicalPercent: 55
            },
            {
                title: 'Deep Learning & Neural Networks',
                description: 'Build neural networks using TensorFlow and PyTorch frameworks.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Computer Vision',
                description: 'Create image recognition and object detection systems.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Natural Language Processing',
                description: 'Build chatbots, sentiment analysis, and text processing systems.',
                theoryPercent: 35,
                practicalPercent: 65
            },
            {
                title: 'ML Deployment & MLOps',
                description: 'Deploy models to cloud and implement ML operations best practices.',
                theoryPercent: 40,
                practicalPercent: 60
            }
        ],
        trainer: {
            name: 'Dr. Rajesh Singh',
            designation: 'AI Research Lead',
            company: 'OpenAI',
            experience: '15+ Years',
            linkedin: 'https://linkedin.com/in/drrajeshsingh',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
            expertise: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
            studentsTaught: '300+',
            achievements: [
                'Published 50+ research papers in top AI conferences',
                'Led AI team at Google Brain',
                'Patents in machine learning and computer vision'
            ]
        },
        learningExperience: {
            practicalPercent: 70,
            theoryPercent: 30,
            features: [
                { icon: 'fas fa-brain', text: '10 AI Model Development' },
                { icon: 'fas fa-robot', text: 'Build Real AI Applications' },
                { icon: 'fas fa-flask', text: 'Research Project Experience' },
                { icon: 'fas fa-cloud', text: 'Cloud ML Deployment' },
                { icon: 'fas fa-award', text: 'Research Publication Opportunity' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-microscope', text: 'Research Position Guidance' },
                { icon: 'fas fa-industry', text: 'AI Startup Connections' },
                { icon: 'fas fa-graduation-cap', text: 'PhD Program Guidance' },
                { icon: 'fas fa-globe', text: 'International Opportunity Access' }
            ],
            successStories: [
                {
                    name: 'Arjun Patel',
                    company: 'NVIDIA',
                    position: 'AI Engineer',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fas fa-microchip'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Sanjay Kumar',
                rating: 5,
                text: 'Exceptional course quality! Now working as ML Engineer at top AI company.',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop'
        ]
    },
    'ui-ux-design': {
        title: 'UI/UX Design Mastery',
        category: 'Design',
        level: 'Beginner to Advanced',
        duration: '14 Weeks',
        projects: '12 Designs',
        rating: '4.9',
        reviews: '278',
        price: '₹20,000',
        discountPrice: '₹16,000',
        banner: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
        description: 'Create stunning user interfaces and exceptional user experiences. Learn design thinking, prototyping, and modern design tools.',
        whyThisCourse: 'Every digital product needs great design. UI/UX designers are in high demand with excellent growth prospects.',
        objectives: [
            'Master design thinking and user research methods',
            'Learn Figma, Adobe XD, and modern design tools',
            'Create user-centered designs and prototypes',
            'Understand visual design principles and typography',
            'Build a professional design portfolio'
        ],
        benefits: [
            'Creative and fulfilling career path',
            'High demand across all industries',
            'Excellent freelancing opportunities',
            'Shape how people interact with technology'
        ],
        modules: [
            {
                title: 'Design Thinking & User Research',
                description: 'Learn user-centered design process and research methodologies.',
                theoryPercent: 60,
                practicalPercent: 40
            },
            {
                title: 'Visual Design Principles',
                description: 'Master color theory, typography, and visual hierarchy.',
                theoryPercent: 30,
                practicalPercent: 70
            },
            {
                title: 'Prototyping & Wireframing',
                description: 'Create interactive prototypes using Figma and Adobe XD.',
                theoryPercent: 20,
                practicalPercent: 80
            },
            {
                title: 'Mobile & Web UI Design',
                description: 'Design responsive interfaces for web and mobile applications.',
                theoryPercent: 25,
                practicalPercent: 75
            },
            {
                title: 'Portfolio Development',
                description: 'Build a professional portfolio showcasing your design skills.',
                theoryPercent: 10,
                practicalPercent: 90
            }
        ],
        trainer: {
            name: 'Meera Sharma',
            designation: 'Design Director',
            company: 'Airbnb',
            experience: '9+ Years',
            linkedin: 'https://linkedin.com/in/meerasharma',
            photo: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
            expertise: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
            studentsTaught: '600+',
            achievements: [
                'Led design for products used by millions',
                'Award-winning designer with multiple recognitions',
                'Speaker at major design conferences worldwide'
            ]
        },
        learningExperience: {
            practicalPercent: 80,
            theoryPercent: 20,
            features: [
                { icon: 'fas fa-palette', text: '12 Design Projects' },
                { icon: 'fas fa-users', text: 'Real User Testing Sessions' },
                { icon: 'fas fa-mobile-alt', text: 'Mobile & Web Design' },
                { icon: 'fas fa-briefcase', text: 'Portfolio Development' },
                { icon: 'fas fa-handshake', text: 'Client Project Experience' }
            ]
        },
        placementAssistance: {
            features: [
                { icon: 'fas fa-paint-brush', text: 'Portfolio Review & Enhancement' },
                { icon: 'fas fa-building', text: 'Design Agency Connections' },
                { icon: 'fas fa-laptop', text: 'Design Challenge Training' },
                { icon: 'fas fa-comments', text: 'Mock Design Interviews' }
            ],
            successStories: [
                {
                    name: 'Pooja Gupta',
                    company: 'Spotify',
                    position: 'UI/UX Designer',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    companyLogo: 'fab fa-spotify'
                }
            ]
        },
        testimonials: [
            {
                type: 'text',
                name: 'Ravi Patel',
                rating: 5,
                text: 'Amazing design course! Portfolio created here helped me land dream job at top design agency.',
                photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
            }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=200&fit=crop'
        ]
    }
};

// Course System Controller
class CourseSystemController {
    constructor() {
        this.currentCourse = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Modal close events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCourseDetails();
                this.closeEnrollmentModal();
            }
        });

        // Form submission
        const enrollmentForm = document.getElementById('enrollmentForm');
        if (enrollmentForm) {
            enrollmentForm.addEventListener('submit', (e) => this.handleEnrollment(e));
        }
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
        if (!courseData) return;

        this.currentCourse = courseId;
        const modal = document.getElementById('courseDetailsModal');
        const content = document.getElementById('courseDetailsContent');

        if (!modal || !content) return;

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
                                ${course.category}
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
        if (!courseData) return;

        this.currentCourse = courseId;
        const modal = document.getElementById('enrollmentModal');
        const title = document.getElementById('enrollmentCourseTitle');
        
        if (!modal || !title) return;

        title.textContent = courseData.title;
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
                    <h2>Enrollment Successful! 🎉</h2>
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
        // This would open a partnership form modal
        alert('Partnership form would open here. Contact us at partnerships@campustocompany.com or call +91 99009 46207');
    }

    openImageModal(imageUrl) {
        // Create image modal
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
        // Initialize any carousel functionality if needed
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
    courseSystem.openCourseDetails(courseId);
}

function closeCourseDetails() {
    courseSystem.closeCourseDetails();
}

function enrollInCourse(courseId) {
    courseSystem.enrollInCourse(courseId);
}

function closeEnrollmentModal() {
    courseSystem.closeEnrollmentModal();
}

// Initialize the course system
let courseSystem;

document.addEventListener('DOMContentLoaded', () => {
    courseSystem = new CourseSystemController();
    console.log('Enhanced Course System Initialized!');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CourseSystemController, coursesData };
}