document.addEventListener('DOMContentLoaded', function () {
    const accountButton = document.querySelector('.dsw-account-nav__menu-icon');
    const menuButton = document.querySelector('.header__flex-container__icon--menu');

    accountButton.addEventListener('click', function () {
        const isExpanded = accountButton.getAttribute('aria-expanded') === 'true';
        accountButton.setAttribute('aria-expanded', !isExpanded);
    });

    menuButton.addEventListener('click', function () {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });
});
