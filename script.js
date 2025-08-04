// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar functionality
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.handleScroll();
        this.handleHamburger();
        this.handleNavLinks();
        this.setActiveLink();
        
        // Event listeners
        window.addEventListener('scroll', () => this.handleScroll());
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu when clicking on nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
        
        // Update active link on scroll
        window.addEventListener('scroll', () => this.setActiveLink());
    }
    
    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
    
    handleHamburger() {
        this.hamburger.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
    }
    
    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    handleNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                this.closeMobileMenu();
            });
        });
    }
    
    setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Back to Top Button
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }
    
    init() {
        if (!this.button) return;
        
        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
    }
    
    handleScroll() {
        if (window.scrollY > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Smooth Scrolling for all internal links
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Handle all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Form Handling
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.submitBtn = document.querySelector('.form-submit-btn');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add input validation
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.showLoading();
            
            // Create FormData object
            const formData = new FormData(this.form);
            
            // Submit form using fetch (FormSubmit.co handles the backend)
            fetch(this.form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    this.showSuccess();
                    this.form.reset();
                } else {
                    this.showError();
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                this.showError();
            })
            .finally(() => {
                this.hideLoading();
            });
        }
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        // Remove existing error
        this.clearError(field);
        
        // Check required fields
        if (field.hasAttribute('required') && !value) {
            this.showFieldError(field, 'This field is required');
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                this.showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    showFieldError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
    
    clearError(field) {
        field.style.borderColor = '';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    showLoading() {
        const originalText = this.submitBtn.innerHTML;
        this.submitBtn.innerHTML = '<div class="loading"></div> Sending...';
        this.submitBtn.disabled = true;
        this.submitBtn.dataset.originalText = originalText;
    }
    
    hideLoading() {
        this.submitBtn.innerHTML = this.submitBtn.dataset.originalText;
        this.submitBtn.disabled = false;
    }
    
    showSuccess() {
        this.showMessage('Thank you! Your message has been sent successfully.', 'success');
    }
    
    showError() {
        this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.style.padding = '1rem';
        messageElement.style.borderRadius = '8px';
        messageElement.style.marginTop = '1rem';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontWeight = '500';
        
        if (type === 'success') {
            messageElement.style.backgroundColor = '#d4edda';
            messageElement.style.color = '#155724';
            messageElement.style.border = '1px solid #c3e6cb';
        } else {
            messageElement.style.backgroundColor = '#f8d7da';
            messageElement.style.color = '#721c24';
            messageElement.style.border = '1px solid #f5c6cb';
        }
        
        messageElement.textContent = message;
        this.form.appendChild(messageElement);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.init();
    }
    
    init() {
        // Create intersection observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
}

// Service Card Interactions
class ServiceCards {
    constructor() {
        this.cards = document.querySelectorAll('.service-card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleHover(card));
            card.addEventListener('mouseleave', () => this.handleLeave(card));
        });
    }
    
    handleHover(card) {
        // Add subtle animation or effect
        card.style.transform = 'translateY(-8px)';
    }
    
    handleLeave(card) {
        card.style.transform = 'translateY(-5px)';
    }
}

// WhatsApp Integration
class WhatsAppIntegration {
    constructor() {
        this.init();
    }
    
    init() {
        // Track WhatsApp clicks for analytics (if needed)
        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.addEventListener('click', () => {
                // You can add analytics tracking here
                console.log('WhatsApp link clicked:', link.href);
            });
        });
    }
}

// Email Integration
class EmailIntegration {
    constructor() {
        this.init();
    }
    
    init() {
        // Track email clicks for analytics (if needed)
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
            link.addEventListener('click', () => {
                // You can add analytics tracking here
                console.log('Email link clicked:', link.href);
            });
        });
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images if any are added later
        this.lazyLoadImages();
        
        // Optimize scroll events
        this.optimizeScrollEvents();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }
    
    optimizeScrollEvents() {
        let ticking = false;
        
        function updateScrollElements() {
            // Update scroll-dependent elements here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
}

// Theme System (for future dark mode support)
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        
        // Create theme toggle button (hidden by default)
        this.createThemeToggle();
    }
    
    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.style.display = 'none'; // Hidden for now
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        document.body.appendChild(themeToggle);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new Navigation();
    new BackToTop();
    new SmoothScroll();
    new ContactForm();
    new AnimationObserver();
    new ServiceCards();
    new WhatsAppIntegration();
    new EmailIntegration();
    new PerformanceOptimizer();
    new ThemeManager();
    
    // Add loading states to buttons
    document.querySelectorAll('.btn, .service-btn, .contact-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.service-card, .contact-card, .founder-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

// Service Worker Registration (for future PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when ready to implement PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can add error reporting service here
});

// Console welcome message
console.log('%c🎓 SIR STUDIO - Academic Excellence', 'color: #1F3B73; font-size: 16px; font-weight: bold;');
console.log('%cWebsite developed with modern web technologies', 'color: #F9B233; font-size: 12px;');