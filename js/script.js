document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. TOP NAVBAR SCROLL FUNCTION 
    // This handles smooth scrolling when a top link is clicked.
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // When using scroll-snap, we just need the element's top offset.
                window.scrollTo({
                    top: targetElement.offsetTop, 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // ----------------------------------------------------
    // 2. SERVICE SECTION TAB FUNCTION (NEW)
    // This handles switching the content tabs in the Service section.
    // ----------------------------------------------------
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetTabId = this.getAttribute('data-tab');

            // Deactivate all tab links and hide all tab panes
            tabLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Activate the clicked tab link
            this.classList.add('active');

            // Show the corresponding tab pane
            const targetPane = document.getElementById(targetTabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Set the first tab as active when the page loads
    if (tabLinks.length > 0) {
        tabLinks[0].click();
    }
});