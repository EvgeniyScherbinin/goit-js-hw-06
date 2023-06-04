const value = document.getElementById('value');
const incButton = document.querySelector('[data-action="increment"]');
const decButton = document.querySelector('[data-action="decrement"]');

let count = 0;

incButton.addEventListener('click', () => {
    count += 1;
    value.textContent = count;
});

decButton.addEventListener('click', () => {
    count -= 1;
    value.textContent = count;
});























 


