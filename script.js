const container = document.getElementById('container');
const setSizeBtn = document.getElementById('size-button');
const colourBtn = document.getElementById('colour-button');
const blackBtn = document.getElementById('black-button');
const clearBtn = document.getElementById('clear-button');
const eraseBtn = document.getElementById('erase-button');


const getSize = (n = 16) => {
    container.innerHTML = '';
    let size = Math.floor(800 / n);
    size = Math.min(size, 35);
    container.style.width = `${n * size}px`;
    container.style.height = `${n * size}px`;
    container.style.border = `2px solid white`
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.className = 'pixel';
        div.style.width = `${size - 2}px`;
        div.style.height = `${size - 2}px`;
        container.appendChild(div);
    }
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((el) => {
        el.dataset.opacity = 0;
        el.addEventListener('mouseover', () => {
            el.dataset.opacity = Math.min(parseFloat(el.dataset.opacity) + 0.1, 1);
            el.style.opacity = el.dataset.opacity;
            el.style.backgroundColor = 'black';
        })
    })
}

clearBtn.addEventListener('click', () => {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.firstChild.remove();
            
        }
    }
    container.style.removeProperty('width')
    container.style.removeProperty('height');
    container.style.removeProperty('border');
    return;
})

blackBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((el) => {
        el.dataset.opacity = 0;
        el.addEventListener('mouseover', () => {
            el.dataset.opacity = Math.min(parseFloat(el.dataset.opacity) + 0.1, 1);
            el.style.opacity = el.dataset.opacity;
            el.style.backgroundColor = 'black';
        })
     
    })
})

eraseBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((el) => {
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'white';
        })
    })
})

colourBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((el) => {
        const r = Math.floor((Math.random() * 256));
        const g = Math.floor((Math.random() * 256));
        const b = Math.floor((Math.random() * 256));
        el.dataset.opacity = 0;
        el.addEventListener('mouseover', () => {
            el.dataset.opacity = Math.min(parseFloat(el.dataset.opacity) + 0.1, 1);
            el.style.opacity = el.dataset.opacity;
            el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            
    

        })
    })
})

setSizeBtn.addEventListener('click', () => {
    let sizePrompt = window.prompt("Max size: 100px, Min size: 2px", 16);
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

