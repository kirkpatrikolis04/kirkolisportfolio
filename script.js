document.addEventListener('DOMContentLoaded', function() {

    // CSS-only marquee fallback for better performance
    function initCSSMarquee() {
        const marquee = document.querySelector('.marquee');
        if (!marquee) return;

        // Add CSS classes for animation
        marquee.classList.add('css-marquee');
        
        // Duplicate content for seamless loop
        const items = marquee.querySelectorAll('li');
        if (items.length > 0) {
            items.forEach(item => {
                const clone = item.cloneNode(true);
                marquee.appendChild(clone);
            });
        }

        // Add CSS animation styles
        const style = document.createElement('style');
        style.textContent = `
            .css-marquee {
                display: flex;
                animation: marquee 30s linear infinite;
                width: max-content;
            }
            
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            
            @media (max-width: 768px) {
                .css-marquee {
                    animation-duration: 50s;
                }
            }
        `;
        document.head.appendChild(style);
    }
    initCSSMarquee();
});


