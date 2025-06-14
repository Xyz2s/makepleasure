// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelector('.nav-icons');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navIcons.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navIcons.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this to your backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    showNotification('Message sent successfully! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Newsletter subscription:', email);
    
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    newsletterForm.reset();
});

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
            // Close mobile menu if open
            navLinks.classList.remove('active');
            navIcons.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .notification.error {
        background-color: #f44336;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Search functionality
const searchIcon = document.querySelector('a[href="#search"]');
searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = prompt('Enter your search term:');
    if (searchTerm) {
        // Here you would typically handle the search
        console.log('Searching for:', searchTerm);
        showNotification('Search functionality coming soon!', 'error');
    }
});

// Store link functionality
document.querySelectorAll('a[href="#store"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Redirecting to our store...');
        // Here you would typically redirect to your store
        // window.location.href = 'https://your-store-url.com';
    });
}); 