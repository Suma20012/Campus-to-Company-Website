/* ============================================
   PARTICLES.JS CONFIGURATION
   Campus to Company Website
   ============================================ */

/**
 * Initialize Particles.js background
 */
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#7c3aed'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#7c3aed',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

/**
 * Responsive particles configuration
 */
function updateParticlesForDevice() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    let particleConfig;
    
    if (isMobile) {
        particleConfig = {
            particles: {
                number: { value: 30 },
                size: { value: 2 },
                move: { speed: 3 },
                line_linked: {
                    distance: 100,
                    opacity: 0.3
                }
            },
            interactivity: {
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false }
                }
            }
        };
    } else if (isTablet) {
        particleConfig = {
            particles: {
                number: { value: 50 },
                size: { value: 2.5 },
                move: { speed: 4 },
                line_linked: {
                    distance: 125,
                    opacity: 0.35
                }
            }
        };
    } else {
        // Desktop configuration (default)
        particleConfig = {
            particles: {
                number: { value: 80 },
                size: { value: 3 },
                move: { speed: 6 },
                line_linked: {
                    distance: 150,
                    opacity: 0.4
                }
            }
        };
    }
    
    // Update existing particles
    if (window.pJSDom && window.pJSDom.length > 0) {
        const pJS = window.pJSDom[0].pJS;
        
        // Update particle count
        pJS.particles.number.value = particleConfig.particles.number.value;
        
        // Update other properties
        if (particleConfig.particles.size) {
            pJS.particles.size.value = particleConfig.particles.size.value;
        }
        if (particleConfig.particles.move) {
            pJS.particles.move.speed = particleConfig.particles.move.speed;
        }
        if (particleConfig.particles.line_linked) {
            pJS.particles.line_linked.distance = particleConfig.particles.line_linked.distance;
            pJS.particles.line_linked.opacity = particleConfig.particles.line_linked.opacity;
        }
        
        // Refresh particles
        pJS.fn.particlesRefresh();
    }
}

/**
 * Handle window resize for particles
 */
function handleParticlesResize() {
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateParticlesForDevice();
        }, 250);
    });
}

/**
 * Pause particles on mobile to save battery
 */
function handleParticlesVisibility() {
    let isVisible = true;
    
    // Handle visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            isVisible = false;
        } else if (!document.hidden && !isVisible) {
            initParticles();
            updateParticlesForDevice();
            isVisible = true;
        }
    });
    
    // Handle page focus/blur
    window.addEventListener('blur', function() {
        if (window.innerWidth <= 768 && window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.particles.move.enable = false;
        }
    });
    
    window.addEventListener('focus', function() {
        if (window.innerWidth <= 768 && window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.particles.move.enable = true;
        }
    });
}

/**
 * Custom particle effects for special sections
 */
function addParticleEffects() {
    // Add special effects on button hover
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (window.pJSDom && window.pJSDom.length > 0 && window.innerWidth > 768) {
                const pJS = window.pJSDom[0].pJS;
                pJS.interactivity.modes.repulse.distance = 300;
                pJS.interactivity.modes.repulse.duration = 0.6;
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (window.pJSDom && window.pJSDom.length > 0 && window.innerWidth > 768) {
                const pJS = window.pJSDom[0].pJS;
                pJS.interactivity.modes.repulse.distance = 200;
                pJS.interactivity.modes.repulse.duration = 0.4;
            }
        });
    });
}

/**
 * Performance optimization for particles
 */
function optimizeParticlesPerformance() {
    // Reduce particles on low-performance devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        if (window.pJSDom && window.pJSDom.length > 0) {
            const pJS = window.pJSDom[0].pJS;
            pJS.particles.number.value = Math.min(pJS.particles.number.value, 30);
            pJS.fn.particlesRefresh();
        }
    }
    
    // Disable particles on very slow connections
    if (navigator.connection && navigator.connection.effectiveType && 
        (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g')) {
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'none';
        }
    }
}

/**
 * Initialize all particle functionality
 */
function initParticleSystem() {
    // Check if particles.js is loaded
    if (typeof particlesJS === 'undefined') {
        console.warn('Particles.js not loaded');
        return;
    }
    
    // Initialize particles
    initParticles();
    
    // Setup responsive behavior
    setTimeout(() => {
        updateParticlesForDevice();
        handleParticlesResize();
        handleParticlesVisibility();
        addParticleEffects();
        optimizeParticlesPerformance();
    }, 1000);
}

/**
 * Fallback for when particles.js fails to load
 */
function createFallbackBackground() {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && !window.pJSDom) {
        particlesContainer.innerHTML = `
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
                animation: pulse 4s ease-in-out infinite;
            "></div>
        `;
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initParticleSystem,
        updateParticlesForDevice,
        createFallbackBackground
    };
}