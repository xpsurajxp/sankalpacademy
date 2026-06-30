// Disable right-click context menu globally
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    const headerActions = document.querySelector('.header-actions');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--surface)';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = 'var(--shadow-md)';
            navLinks.style.zIndex = '999';
            
            // Dropdown menus in mobile
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(menu => {
                menu.style.position = 'static';
                menu.style.boxShadow = 'none';
                menu.style.paddingLeft = '1rem';
                menu.style.display = 'none';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            });

            const dropdownToggles = document.querySelectorAll('.dropdown > a');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    const menu = toggle.nextElementSibling;
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                });
            });
        });
    }

    // Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksList = document.querySelectorAll('.nav-link');
    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href').split('#')[0];
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // Sticky Header
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.style.padding = '0';
                mainHeader.style.boxShadow = 'var(--shadow-md)';
            } else {
                mainHeader.style.padding = '0';
                mainHeader.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // lower is faster
            
            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target + (target > 100 ? '+' : '');
                }
            };
            
            // Trigger animation when in view
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    updateCount();
                    observer.disconnect();
                }
            });
            
            observer.observe(counter);
        });
    }

    animateCounters();
});
