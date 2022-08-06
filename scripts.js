const gridContainer = document.querySelector('.grid');
const targets = document.querySelectorAll(".grid-box");
const getCanvasSize = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
const newColor = document.querySelector('.color-picker');
const randColor = document.querySelector('.random-color');

function reset() {
    let child = gridContainer.lastElementChild;
    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}

function draw(size=16) {
    reset();

    for (let each = 0;  each < size**2; each++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        gridContainer.append(div);
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${size}, auto);`);

    const targets = document.querySelectorAll(".grid-box");

    // randColor.addEventListener('click', () => {
    //     let value = '#' + Math.floor(Math.random()*16777215).toString(16);
    //     console.log(typeof value);
    //     hover(targets, value);
    // })

    newColor.addEventListener('input', () => {
        let value = newColor.value;
        console.log(value);
        hover(targets, value);
    }); 
    
    hover(targets);
}

getCanvasSize.addEventListener('click', () => {
    let userInput = prompt('enter size'); 
    if (userInput > 100) {
        console.error('Enter smaller number');
    } else {
        draw(userInput);
    } 
});


function hover(targets, color='black') {
    targets.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.setAttribute("style", `background-color: ${color};`);
        })
    })
}

function reset() {
    const targets = document.querySelectorAll(".grid-box");
    targets.forEach(element => {
        element.setAttribute("style", `background-color: white;`);
    })
}

resetBtn.addEventListener('click', reset);


draw();
