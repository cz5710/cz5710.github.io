window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var shrinkNavbar = function () {
        const navCollapsible = document.body.querySelector('#mainNav');
        if (!navCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navCollapsible.classList.remove('navbar-shrink')
        } else {
            navCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    shrinkNavbar();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', shrinkNavbar);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const togglerNavbar = document.body.querySelector('.navbar-toggler');
    const navItemsResponsive = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    navItemsResponsive.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(togglerNavbar).display !== 'none') {
                togglerNavbar.click();
            }
        });
    });

});
