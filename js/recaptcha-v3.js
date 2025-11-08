// reCAPTCHA v3 Handler
function showModal(type, title, message) {
    const modal = document.getElementById('formModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.getElementById('modalCloseBtn');

    modalIcon.className = 'modal-icon ' + type;
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    closeBtn.textContent = window.i18n.getTranslation('modal.closeButton');

    modal.classList.add('active');

    closeBtn.onclick = function() {
        modal.classList.remove('active');
    };

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

grecaptcha.ready(function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            submitButton.disabled = true;
            submitButton.textContent = window.i18n.getTranslation('modal.verifying');

            try {
                const token = await grecaptcha.execute('6Ldw6QUsAAAAAEfljJ61RFnDbohXuWpjIob3B5_o', {
                    action: 'submit'
                });

                submitButton.textContent = window.i18n.getTranslation('modal.sending');

                let tokenInput = contactForm.querySelector('input[name="g-recaptcha-response"]');
                if (!tokenInput) {
                    tokenInput = document.createElement('input');
                    tokenInput.type = 'hidden';
                    tokenInput.name = 'g-recaptcha-response';
                    contactForm.appendChild(tokenInput);
                }
                tokenInput.value = token;

                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const successTitle = window.i18n.getTranslation('modal.successTitle');
                    const successMessage = window.i18n.getTranslation('modal.successMessage');
                    showModal('success', successTitle, successMessage);
                    contactForm.reset();
                    if (tokenInput) tokenInput.remove();
                } else {
                    const errorTitle = window.i18n.getTranslation('modal.errorTitle');
                    const baseError = window.i18n.getTranslation('modal.errorMessage');
                    const retryMessage = window.i18n.getTranslation('modal.errorRetry');

                    let serverError = '';
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        const data = await response.json();
                        if (data.errors) {
                            serverError = data.errors.map(error => error.message).join(', ');
                        } else if (data.error) {
                            serverError = data.error;
                        }
                    }

                    const fullMessage = serverError ? `${baseError} (${serverError}) ${retryMessage}` : `${baseError} ${retryMessage}`;
                    showModal('error', errorTitle, fullMessage);
                }
            } catch (error) {
                const errorTitle = window.i18n.getTranslation('modal.errorTitle');
                const errorMessage = window.i18n.getTranslation('modal.errorMessage');
                showModal('error', errorTitle, errorMessage);
            }

            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }, true);
    }
});
