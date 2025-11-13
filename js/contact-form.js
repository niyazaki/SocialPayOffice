// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('formModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Translations for modal
    const translations = {
        en: {
            success: 'Success!',
            successMessage: 'Your message has been sent successfully. We will get back to you soon.',
            error: 'Error',
            errorMessage: 'An error occurred while sending your message. Please try again.',
            sending: 'Sending...',
            send: 'Send Message',
            close: 'Close'
        },
        fr: {
            success: 'Succès !',
            successMessage: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt.',
            error: 'Erreur',
            errorMessage: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
            sending: 'Envoi en cours...',
            send: 'Envoyer le message',
            close: 'Fermer'
        },
        nl: {
            success: 'Succes!',
            successMessage: 'Uw bericht is succesvol verzonden. We nemen spoedig contact met u op.',
            error: 'Fout',
            errorMessage: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw.',
            sending: 'Verzenden...',
            send: 'Bericht versturen',
            close: 'Sluiten'
        }
    };

    // Get current language
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'fr';
    }

    // Show modal
    function showModal(isSuccess, message) {
        const lang = getCurrentLanguage();
        const t = translations[lang];

        modal.style.display = 'flex';

        if (isSuccess) {
            modalIcon.innerHTML = '✓';
            modalIcon.style.backgroundColor = '#10b981';
            modalTitle.textContent = t.success;
            modalMessage.textContent = message || t.successMessage;
        } else {
            modalIcon.innerHTML = '✕';
            modalIcon.style.backgroundColor = '#ef4444';
            modalTitle.textContent = t.error;
            modalMessage.textContent = message || t.errorMessage;
        }

        modalCloseBtn.textContent = t.close;
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Close modal on button click
    modalCloseBtn.addEventListener('click', closeModal);

    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const lang = getCurrentLanguage();
        const t = translations[lang];

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = t.sending;

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            employees: formData.get('employees'),
            message: formData.get('message'),
            _gotcha: formData.get('_gotcha') // honeypot field
        };

        try {
            // Send data to server
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success
                showModal(true, result.message);
                contactForm.reset();
            } else {
                // Error
                showModal(false, result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            showModal(false, t.errorMessage);
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = t.send;
        }
    });
});
