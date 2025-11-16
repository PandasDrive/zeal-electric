// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navMenuLeft = document.getElementById('navMenuLeft');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            if (navMenuLeft) navMenuLeft.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                if (navMenuLeft) navMenuLeft.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        if (navMenuLeft) {
            const leftNavLinks = navMenuLeft.querySelectorAll('a');
            leftNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navMenuLeft.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Navbar scroll effect - collapse on scroll
    const navbar = document.getElementById('navbar');
    const logoImg = document.querySelector('.logo-img');
    const heroSection = document.querySelector('.hero');
    const navBrand = document.querySelector('.nav-brand');
    let lastScroll = 0;
    let ticking = false;
    let isCollapsed = false;
    const scrollThreshold = 100; // Pixels to scroll before collapsing
    
    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        const shouldCollapse = currentScroll > scrollThreshold;
        
        if (navbar && shouldCollapse !== isCollapsed) {
            // Use requestAnimationFrame for the actual DOM change to ensure smooth transition
            requestAnimationFrame(function() {
                isCollapsed = shouldCollapse;
                
                if (shouldCollapse) {
                    navbar.classList.add('navbar-collapsed');
                    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
                } else {
                    navbar.classList.remove('navbar-collapsed');
                    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }
            });
        }
        
        if (heroSection) {
            if (currentScroll > scrollThreshold) {
                if (!heroSection.classList.contains('hero-collapsed')) {
                    heroSection.classList.add('hero-collapsed');
                }
            } else {
                if (heroSection.classList.contains('hero-collapsed')) {
                    heroSection.classList.remove('hero-collapsed');
                }
            }
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Form handling
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData);
            
            // Create mailto link (since we don't have a backend)
            const subject = encodeURIComponent(`Quote Request: ${data.service || 'General Inquiry'}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\n` +
                `Email: ${data.email}\n` +
                `Phone: ${data.phone || 'Not provided'}\n` +
                `Address: ${data.address || 'Not provided'}\n` +
                `Service: ${data.service || 'Not specified'}\n\n` +
                `Project Details:\n${data.message || 'No details provided'}`
            );
            
            // Open email client
            window.location.href = `mailto:Admin@Zeal-Electric.com?subject=${subject}&body=${body}`;
            
            // Show success message (optional)
            alert('Thank you! Your email client should open. If not, please email us directly at Admin@Zeal-Electric.com');
        });
    }
    
    // Lazy loading images (if any are added in the future)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add active class to current page navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else if (linkPage !== currentPage && linkPage !== '#quote') {
            link.classList.remove('active');
        }
    });
    
    // Cookie Consent
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent) {
        // Check if user has already accepted cookies
        const cookiesAccepted = localStorage.getItem('zealCookiesAccepted');
        if (!cookiesAccepted) {
            // Show cookie consent after a short delay
            setTimeout(() => {
                cookieConsent.classList.add('show');
            }, 1000);
        }
    }

    // Services Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.service-accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other accordion items (optional - remove if you want multiple open)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    const otherItem = otherHeader.parentElement;
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherItem.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                item.setAttribute('aria-expanded', 'false');
            } else {
                this.setAttribute('aria-expanded', 'true');
                item.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const item = this.parentElement;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                item.setAttribute('aria-expanded', 'false');
            } else {
                this.setAttribute('aria-expanded', 'true');
                item.setAttribute('aria-expanded', 'true');
            }
        });
    });
});

// Cookie consent function
function acceptCookies() {
    localStorage.setItem('zealCookiesAccepted', 'true');
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent) {
        cookieConsent.classList.remove('show');
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);
    }
}
