document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init();

    const languageButtons = document.querySelectorAll('.lang-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.getAttribute('data-lang');
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            window.i18n.translate(selectedLanguage);
            updateModalLanguage();
        });
    });

    function updateModalLanguage() {
        const modal = document.getElementById('formModal');
        if (modal && modal.classList.contains('active')) {
            const modalIcon = document.getElementById('modalIcon');
            const isSuccess = modalIcon.classList.contains('success');
            const type = isSuccess ? 'success' : 'error';

            const title = window.i18n.getTranslation(`modal.${isSuccess ? 'successTitle' : 'errorTitle'}`);
            const message = window.i18n.getTranslation(`modal.${isSuccess ? 'successMessage' : 'errorMessage'}`);
            const closeText = window.i18n.getTranslation('modal.closeButton');

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalMessage').textContent = message;
            document.getElementById('modalCloseBtn').textContent = closeText;
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});
