// Setting Hooks Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        });
    });
    
    // Email signup functionality
    const emailInput = document.querySelector('.email-input');
    const signupBtn = document.querySelector('.signup-btn');
    
    if (emailInput && signupBtn) {
        signupBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                // Simulate email signup
                showNotification('Thanks! We\'ll notify you when Setting Hooks launches! 🎣', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
        
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                signupBtn.click();
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(11, 20, 38, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(11, 20, 38, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .screenshot-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Download button handlers
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Setting Hooks will be available soon on app stores! 📱', 'info');
        });
    });
    
    // Pricing button handlers
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Setting Hooks will be available soon! Sign up for early access above. 🎣', 'info');
        });
    });
    
    // Hero button handlers
    const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('Download')) {
                showNotification('Coming soon to app stores! Sign up for early access below. 📱', 'info');
            } else if (this.textContent.includes('Demo')) {
                showNotification('Demo video coming soon! 🎥', 'info');
            }
        });
    });
    
    // Statistics counter animation
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Utility Functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#00D4AA' : type === 'error' ? '#ff4444' : '#1A2332'};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border: 2px solid ${type === 'success' ? '#1ADBB1' : type === 'error' ? '#ff6666' : '#243040'};
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function animateCounter(element) {
    const target = element.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (!isNumber) return;
    
    const finalNumber = parseInt(target.match(/\d+/)[0]);
    const suffix = target.replace(/\d+/, '');
    let current = 0;
    const increment = finalNumber / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            element.textContent = finalNumber + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Scroll to section functions
function scrollToDownload() {
    document.getElementById('download').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add mobile menu styles
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(11, 20, 38, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(10px);
            border-top: 1px solid #243040;
            padding: 20px 0;
            gap: 20px;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    }
`;

// Add mobile styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);
