// KSB Consulting Sparkle Effect with Firework Particles
document.addEventListener('DOMContentLoaded', function() {
    const ksbLinks = document.querySelectorAll('.ksb-link');

    ksbLinks.forEach(link => {
        let canAnimate = true;
        let hasLeft = true; // Initialize to true to allow first hover animation
        const cooldownTime = 10; // 10 milliseconds cooldown

        // Get the parent paragraph element
        const parentParagraph = link.closest('p');

        // Make the entire paragraph clickable and hoverable
        if (parentParagraph) {
            parentParagraph.style.cursor = 'pointer';

            // Redirect on click
            parentParagraph.addEventListener('click', function(e) {
                window.open('https://ksbconsulting.be', '_blank', 'noopener');
            });
        }

        const targetElement = parentParagraph || link;

        targetElement.addEventListener('mouseenter', function(e) {
            // Only animate if user has left and cooldown has passed
            if (!canAnimate || !hasLeft) return;

            canAnimate = false;
            hasLeft = false; // Reset the flag

            // Create particle container
            const rect = link.getBoundingClientRect();
            const container = document.createElement('div');
            container.className = 'ksb-particles-container';
            container.style.position = 'fixed';
            container.style.top = rect.top + 'px';
            container.style.left = rect.left + 'px';
            container.style.width = rect.width + 'px';
            container.style.height = rect.height + 'px';
            container.style.pointerEvents = 'none';
            container.style.zIndex = '9999';
            document.body.appendChild(container);

            // Create particles
            const particleCount = 20;
            for (let i = 0; i < particleCount; i++) {
                createParticle(container, rect.width, rect.height);
            }

            // Apply glow effect to entire paragraph
            if (parentParagraph) {
                parentParagraph.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)';
                parentParagraph.style.transition = 'text-shadow 0.3s ease';
            }

            // Remove glow after animation
            setTimeout(() => {
                if (parentParagraph) {
                    parentParagraph.style.textShadow = '';
                }
            }, 1000);

            // Remove container after animation
            setTimeout(() => {
                container.remove();
            }, 1500);

            // Reset cooldown
            setTimeout(() => {
                canAnimate = true;
            }, cooldownTime);
        });

        // Track when mouse leaves the element
        targetElement.addEventListener('mouseleave', function(e) {
            hasLeft = true;
        });
    });

    function createParticle(container, containerWidth, containerHeight) {
        const particle = document.createElement('div');
        particle.className = 'ksb-particle';

        // Random starting position within the text bounds
        const startX = Math.random() * containerWidth;
        const startY = containerHeight / 2;

        // Random angle and distance for firework effect
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 50;
        const endX = startX + Math.cos(angle) * distance;
        const endY = startY + Math.sin(angle) * distance;

        // Random size
        const size = 2 + Math.random() * 3;

        // Random grayscale color (black to white)
        const gray = Math.floor(Math.random() * 256);
        const color = `rgb(${gray}, ${gray}, ${gray})`;

        particle.style.position = 'absolute';
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.pointerEvents = 'none';

        container.appendChild(particle);

        // Animate particle
        const duration = 800 + Math.random() * 400;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const eased = 1 - Math.pow(1 - progress, 3);

            // Calculate position
            const currentX = startX + (endX - startX) * eased;
            const currentY = startY + (endY - startY) * eased;

            // Calculate opacity (fade out)
            const opacity = 1 - progress;

            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = opacity;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }

        requestAnimationFrame(animate);
    }
});
