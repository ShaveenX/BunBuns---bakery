const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        siteNav.classList.toggle('active');
    });
}

const pageLinks = document.querySelectorAll('a[href^="#"]');
pageLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (siteNav && siteNav.classList.contains('active')) {
                siteNav.classList.remove('active');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
        }
    });
});