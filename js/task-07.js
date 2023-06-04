const sizeContr = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

sizeContr.addEventListener('input', function() {
    const fontSize = sizeContr.value
    textElement.style.fontSize = `${fontSize}px`
})
