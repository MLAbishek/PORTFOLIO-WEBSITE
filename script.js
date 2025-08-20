// Navigation scroll effects
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Skill progress bars animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress-width', width + '%');
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        try {
            // Add your form submission logic here
            console.log('Form submitted:', Object.fromEntries(formData));
            // Reset form after successful submission
            contactForm.reset();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error sending message. Please try again.');
        }
    });
}

// Typing animation for hero section
const typingText = document.querySelector('.animated-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

// Download CV button
const downloadCV = document.getElementById('downloadCV');
if (downloadCV) {
    downloadCV.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your CV download logic here
        alert('CV download started!');
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    // Add any other initialization code here
});

// Preloader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Particle background effect (optional)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 100}%`);
        particle.style.setProperty('--y', `${Math.random() * 100}%`);
        particle.style.setProperty('--duration', `${Math.random() * 20 + 10}s`);
        particle.style.setProperty('--delay', `${Math.random() * 10}s`);
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Theme toggling functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference (default to dark if none)
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return 'dark';
};

// Set theme
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update icon
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

// Initialize theme
setTheme(getPreferredTheme());

// Handle theme toggle click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});