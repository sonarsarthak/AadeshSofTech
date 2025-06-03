// Service details data
const serviceDetails = {
    'Web Development': {
        description: `Our web development services include:
        • Custom website design and development
        • Responsive and mobile-friendly websites
        • E-commerce solutions
        • Content Management Systems (CMS)
        • Website maintenance and support
        • SEO-friendly development
        • Performance optimization`,
        pricing: {
            basic: '₹15,000 - Basic static website (3-5 pages)',
            standard: '₹25,000 - Dynamic website with CMS (5-8 pages)',
            premium: '₹45,000+ - E-commerce/Complex web applications'
        }
    },
    'Mobile Solutions': {
        description: `Our mobile app development services include:
        • Native iOS and Android development
        • Cross-platform app development
        • Progressive Web Apps (PWA)
        • App UI/UX design
        • App testing and quality assurance
        • App maintenance and updates
        • API integration`,
        pricing: {
            basic: '₹30,000 - Basic app with essential features',
            standard: '₹50,000 - Feature-rich app with database integration',
            premium: '₹80,000+ - Complex app with advanced features'
        }
    },
    'Cloud Services': {
        description: `Our cloud services include:
        • Cloud infrastructure setup
        • Cloud migration services
        • Cloud security solutions
        • Backup and disaster recovery
        • Cloud optimization
        • DevOps implementation
        • 24/7 monitoring and support`,
        pricing: {
            basic: '₹20,000 - Basic cloud setup and configuration',
            standard: '₹40,000 - Advanced cloud infrastructure with monitoring',
            premium: '₹75,000+ - Enterprise cloud solutions'
        }
    },
    'CRM Software': {
        description: `Our CRM software solutions include:
        • Custom CRM development
        • Sales and lead management
        • Customer service automation
        • Analytics and reporting
        • Email marketing integration
        • Mobile CRM access
        • Third-party integrations`,
        pricing: {
            basic: '₹25,000 - Basic CRM with essential features',
            standard: '₹45,000 - Advanced CRM with automation',
            premium: '₹85,000+ - Enterprise CRM with full customization'
        }
    },
    'ERP Software': {
        description: `Our ERP software solutions include:
        • Custom ERP development
        • Financial management
        • Inventory management
        • HR management
        • Supply chain management
        • Production planning
        • Business intelligence`,
        pricing: {
            basic: '₹35,000 - Basic ERP with core modules',
            standard: '₹65,000 - Advanced ERP with multiple modules',
            premium: '₹1,20,000+ - Enterprise ERP with full integration'
        }
    },
    'Hardware & Software': {
        description: `Our hardware & software services include:
        • IT infrastructure setup
        • Software installation and configuration
        • Hardware maintenance
        • Network setup and security
        • System upgrades
        • Technical support
        • IT consulting`,
        pricing: {
            basic: '₹10,000 - Basic IT setup and support',
            standard: '₹25,000 - Comprehensive IT solutions',
            premium: '₹50,000+ - Enterprise IT infrastructure'
        }
    }
};

// Industry details data
const industryDetails = {
    'Real Estate': {
        description: `Our Real Estate technology solutions include:
        • Property management systems
        • Real estate CRM solutions
        • Virtual property tours
        • Online booking systems
        • Property listing portals
        • Real estate analytics
        • Document management systems`,
        solutions: {
            basic: 'Property Management System - Starting from ₹25,000',
            standard: 'Real Estate Portal Development - Starting from ₹45,000',
            premium: 'Complete Real Estate Tech Suite - Starting from ₹85,000'
        }
    },
    'Healthcare': {
        description: `Our Healthcare technology solutions include:
        • Hospital management systems
        • Electronic health records (EHR)
        • Telemedicine platforms
        • Medical billing software
        • Patient portal development
        • Healthcare analytics
        • Pharmacy management systems`,
        solutions: {
            basic: 'Clinic Management System - Starting from ₹30,000',
            standard: 'Hospital Management System - Starting from ₹60,000',
            premium: 'Enterprise Healthcare Suite - Starting from ₹1,20,000'
        }
    },
    'Education': {
        description: `Our Education technology solutions include:
        • Learning management systems (LMS)
        • Student information systems
        • Online examination platforms
        • Virtual classroom solutions
        • Educational content management
        • Student performance analytics
        • Library management systems`,
        solutions: {
            basic: 'Basic LMS - Starting from ₹20,000',
            standard: 'Complete School Management System - Starting from ₹45,000',
            premium: 'Enterprise Education Suite - Starting from ₹90,000'
        }
    },
    'E-commerce': {
        description: `Our E-commerce solutions include:
        • Custom e-commerce platforms
        • Multi-vendor marketplaces
        • Inventory management systems
        • Payment gateway integration
        • Order management systems
        • E-commerce analytics
        • Mobile commerce apps`,
        solutions: {
            basic: 'Basic E-commerce Store - Starting from ₹30,000',
            standard: 'Advanced E-commerce Platform - Starting from ₹60,000',
            premium: 'Enterprise E-commerce Suite - Starting from ₹1,20,000'
        }
    },
    'Manufacturing': {
        description: `Our Manufacturing technology solutions include:
        • Production planning systems
        • Inventory control software
        • Quality management systems
        • Supply chain management
        • Manufacturing analytics
        • Machine monitoring systems
        • Warehouse management`,
        solutions: {
            basic: 'Production Management System - Starting from ₹35,000',
            standard: 'Manufacturing ERP - Starting from ₹75,000',
            premium: 'Complete Manufacturing Suite - Starting from ₹1,50,000'
        }
    },
    'Finance': {
        description: `Our Finance technology solutions include:
        • Banking software solutions
        • Financial management systems
        • Payment processing systems
        • Investment management software
        • Financial analytics
        • Risk management systems
        • Trading platforms`,
        solutions: {
            basic: 'Financial Management System - Starting from ₹40,000',
            standard: 'Banking Software Solution - Starting from ₹80,000',
            premium: 'Enterprise Finance Suite - Starting from ₹1,60,000'
        }
    },
    'Logistics': {
        description: `Our Logistics technology solutions include:
        • Fleet management systems
        • Route optimization software
        • Warehouse management systems
        • Order tracking solutions
        • Inventory management
        • Logistics analytics
        • Supply chain optimization`,
        solutions: {
            basic: 'Fleet Management System - Starting from ₹30,000',
            standard: 'Logistics Management System - Starting from ₹60,000',
            premium: 'Enterprise Logistics Suite - Starting from ₹1,20,000'
        }
    },
    'Food & Beverage': {
        description: `Our Food & Beverage technology solutions include:
        • Restaurant management systems
        • Online ordering platforms
        • Kitchen management systems
        • Inventory & recipe management
        • POS systems
        • Food delivery solutions
        • Customer loyalty programs`,
        solutions: {
            basic: 'Restaurant Management System - Starting from ₹25,000',
            standard: 'Complete F&B Solution - Starting from ₹50,000',
            premium: 'Enterprise F&B Suite - Starting from ₹1,00,000'
        }
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeServicePopups();
    initializeIndustryPopups();
    initializeNavigation();
    initializeAnimations();
});

// Initialize service popups
function initializeServicePopups() {
    const serviceCards = document.querySelectorAll('.service-card');
    const popup = document.querySelector('.service-popup');
    const closeBtn = popup ? popup.querySelector('.close-popup') : null;

    console.log('Found service cards:', serviceCards.length);
    console.log('Found popup:', popup);
    console.log('Found close button:', closeBtn);

    if (!popup || !closeBtn || serviceCards.length === 0) {
        console.error('Required elements not found:', {
            popup: !!popup,
            closeBtn: !!closeBtn,
            serviceCards: serviceCards.length
        });
        return;
    }

    // Add click event listeners to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Service card clicked');
            const serviceName = this.querySelector('h3').textContent;
            console.log('Service name:', serviceName);

            const service = serviceDetails[serviceName];
            console.log('Service details:', service);

            if (service) {
                const popupTitle = popup.querySelector('#popup-title');
                const popupDescription = popup.querySelector('.popup-description');
                const pricingDetails = popup.querySelector('.pricing-details');

                if (popupTitle) popupTitle.textContent = serviceName;
                if (popupDescription) popupDescription.innerHTML = service.description;

                if (pricingDetails) {
                    const pricingHTML = Object.entries(service.pricing)
                        .map(([plan, price]) => `
                            <div class="price-plan">
                                <h4>${plan.charAt(0).toUpperCase() + plan.slice(1)}</h4>
                                <p>${price}</p>
                            </div>
                        `).join('');
                    pricingDetails.innerHTML = pricingHTML;
                }

                popup.style.display = 'flex';
                console.log('Popup displayed');
            }
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            popup.style.display = 'none';
        }
    });
}

// Initialize industry popups
function initializeIndustryPopups() {
    const industryButtons = document.querySelectorAll('.industry-btn');
    const popup = document.querySelector('.industry-popup');
    const closeBtn = popup ? popup.querySelector('.close-popup') : null;

    if (!popup || !closeBtn || industryButtons.length === 0) {
        console.error('Required industry elements not found');
        return;
    }

    // Add click event listeners to industry buttons
    industryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const industryName = this.querySelector('span').textContent;
            const industry = industryDetails[industryName];

            if (industry) {
                const popupTitle = popup.querySelector('#popup-title');
                const popupDescription = popup.querySelector('.popup-description');
                const solutionsDetails = popup.querySelector('.solutions-details');

                if (popupTitle) popupTitle.textContent = industryName;
                if (popupDescription) popupDescription.innerHTML = industry.description;

                if (solutionsDetails) {
                    const solutionsHTML = Object.entries(industry.solutions)
                        .map(([plan, solution]) => `
                            <div class="solution-plan">
                                <h4>${plan.charAt(0).toUpperCase() + plan.slice(1)}</h4>
                                <p>${solution}</p>
                            </div>
                        `).join('');
                    solutionsDetails.innerHTML = solutionsHTML;
                }

                popup.style.display = 'flex';
            }
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            popup.style.display = 'none';
        }
    });
}

// Initialize navigation
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (menuToggle && navLinks) {
        // Toggle menu
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && 
                !navLinks.contains(e.target) && 
                navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close menu on window resize (if switching to desktop view)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                // Close mobile menu if open
                if (menuToggle && navLinks && navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }

                // Smooth scroll to target
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    document.querySelectorAll('.member-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    document.querySelectorAll('.social-links a').forEach((link, index) => {
        link.style.setProperty('--link-index', index);
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Scroll reveal animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Form animations
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Animate submit button
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        submitBtn.style.transform = 'scale(1)';
        // Show success message with animation
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    }, 200);
});

// Gradient text animation for section headers
const sectionHeaders = document.querySelectorAll('.section-header h2');
sectionHeaders.forEach(header => {
    header.style.backgroundSize = '200% auto';
});

// WhatsApp Form Integration
function sendWhatsApp(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format the message for WhatsApp
    const formattedMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    // WhatsApp phone number (your business number)
    const phoneNumber = '917720043415'; // Replace with your WhatsApp number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    document.getElementById('whatsappForm').reset();
    
    return false;
} 