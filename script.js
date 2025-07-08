// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate cards
    const cards = document.querySelectorAll('.card, .service-card, .pricing-card, .case-study');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate section headers
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(header);
    });

    // Animate solution items
    const solutionItems = document.querySelectorAll('.solution-item');
    solutionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    // Animate dashboard preview
    const dashboard = document.querySelector('.dashboard-preview');
    if (dashboard) {
        dashboard.style.opacity = '0';
        dashboard.style.transform = 'scale(0.95)';
        dashboard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(dashboard);
    }
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(252, 252, 252, 0.98)';
        nav.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'rgba(252, 252, 252, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Add hover effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = isDecimal ? start.toFixed(1) : Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : target;
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = stat.textContent;
                if (value.includes('%')) {
                    animateCounter(stat, parseInt(value));
                    setTimeout(() => {
                        stat.textContent = value;
                    }, 2000);
                } else if (value.includes('x')) {
                    const num = parseFloat(value);
                    animateCounter(stat, num);
                    setTimeout(() => {
                        stat.textContent = value;
                    }, 2000);
                } else if (value.includes('$')) {
                    stat.textContent = '$0M';
                    setTimeout(() => {
                        animateCounter(stat, 2.3);
                        setTimeout(() => {
                            stat.textContent = '$2.3M';
                        }, 2000);
                    }, 100);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Mobile menu toggle (for future implementation)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobile-menu-button';
mobileMenuButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
`;

// Add mobile menu button styles
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-button {
        display: none;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 8px;
        color: var(--color-dark);
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
    }
`;
document.head.appendChild(style);

// Add mobile menu button to nav (for future implementation)
const navContent = document.querySelector('.nav-content');
if (navContent && window.innerWidth <= 768) {
    navContent.appendChild(mobileMenuButton);
}