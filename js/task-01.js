


const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length)


const categoriesEl = document.querySelectorAll('#categories .item')

categoriesEl.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li').length
    console.log(`Category: ${title}`);
    console.log(`Number of items: ${items}`)
});



