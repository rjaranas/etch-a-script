const container = document.getElementById('container');
const setSizeBtn = document.getElementById('size-button');
const colourBtn = document.getElementById('colour-button');
const blackBtn = document.getElementById('black-button');
const clearBtn = document.getElementById('clear-button');
const eraseBtn = document.getElementById('erase-button');


const getSize = (n) => {
    container.innerHTML = '';
    let size = Math.floor(800 / n);
    size = Math.min(size, 35);
    container.style.width = `${n * size}px`;
    container.style.height = `${n * size}px`;
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.className = 'pixel';
        div.style.width = `${size - 2}px`;
        div.style.height = `${size - 2}px`;
        container.appendChild(div);
    }
}

clearBtn.addEventListener('click', () => {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.firstChild.remove();
        }
    }
    return;
})

blackBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((el) => {
        el.id = '';
        el.id = 'black';
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'black';
        })
    })
})

setSizeBtn.addEventListener('click', () => {
    let sizePrompt = window.prompt("Max size: 100px, Min size: 2px", 16);
    console.log(sizePrompt);
    if (sizePrompt > 100) {
        alert('Over maximum size')
    } 
    if (isNaN(sizePrompt)) {
        alert('Not a number')
    }
    if (sizePrompt <= 1) {
        alert(`Can't be less than 1`)
    }
    if (sizePrompt > 1 && sizePrompt <= 100) {
        getSize(sizePrompt);
    }
})