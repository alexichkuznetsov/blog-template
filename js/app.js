var form = document.querySelector('#header-form');
var inputField = form.querySelector('.search-form__input');

inputField.addEventListener('focus', function(e) {
    form.classList.add('search-form--focus');
});

inputField.addEventListener('blur', function(e) {
    form.classList.remove('search-form--focus');
});
