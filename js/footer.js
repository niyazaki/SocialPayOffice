// Footer component - Shared across all pages
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src="images/logo.svg" alt="Social Pay Office" class="footer-logo-image">
                        </div>
                        <p class="footer-description" data-i18n="footer.description">Professional payroll services for Belgian businesses. Reliable, compliant, and personal.</p>
                    </div>
                    <nav class="footer-nav">
                        <a href="index.html#services" data-i18n="nav.services">Services</a>
                        <a href="about.html" data-i18n="nav.about">About</a>
                        <a href="index.html#contact" data-i18n="nav.contact">Contact</a>
                    </nav>
                    <div class="footer-copyright">
                        <p>&copy; 2025 Social Pay Office. <span data-i18n="footer.rights">All rights reserved.</span></p>
                        <p style="text-align: right; margin-top: 8px; font-size: 0.85em; opacity: 0.75;">made with 🩶 by <a href="https://ksbconsulting.be" target="_blank" rel="noopener" class="ksb-link">KSB Consulting</a></p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // Insert footer before the closing body tag or at the end of main content
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // Re-apply translations after footer is inserted (if i18n is loaded)
    if (window.translatePage && typeof window.translatePage === 'function') {
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        window.translatePage(currentLang);
    }
});
