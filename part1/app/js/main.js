const BURGER = document.querySelector('.js-burger');
const MENU = document.querySelector('.js-menu')


BURGER.addEventListener('click', event => {
    BURGER.classList.add('burger-active');
    MENU.classList.add('menu-active');
})
document.body.addEventListener('click', event => {
    if (!event.target.closest('.js-burger')) {
        BURGER.classList.remove('burger-active');
        MENU.classList.remove('menu-active');
    }
});



$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});