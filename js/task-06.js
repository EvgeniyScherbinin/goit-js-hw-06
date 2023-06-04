const input = document.getElementById('validation-input');
input.addEventListener('blur', function() {
    const length = Number(input.getAttribute('data-length'))
    const inputValue = input.value;
    const inputLength = inputValue.length;

    if (inputLength === length) { 
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };

    
});