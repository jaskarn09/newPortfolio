document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update toggle button based on current theme
    if (currentTheme === 'light') {
        themeIcon.classList.remove('fas', 'fa-moon');
        themeIcon.classList.add('fas', 'fa-sun');
        themeText.textContent = 'Light';
    } else {
        themeIcon.classList.remove('fas', 'fa-sun');
        themeIcon.classList.add('fas', 'fa-moon');
        themeText.textContent = 'Dark';
    }

    themeToggle.addEventListener('click', function() {
        // Get current theme
        const currentTheme = document.documentElement.getAttribute('data-theme');

        // Switch theme
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fas', 'fa-moon');
            themeIcon.classList.add('fas', 'fa-sun');
            themeText.textContent = 'Light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fas', 'fa-sun');
            themeIcon.classList.add('fas', 'fa-moon');
            themeText.textContent = 'Dark';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const scrollTop = document.getElementById('scrollTop');

        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            scrollTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            scrollTop.classList.remove('visible');
        }
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    document.querySelectorAll('.about-card, .project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Simple hover effect for profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    console.log('Portfolio website loaded successfully!');
});