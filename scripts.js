const gridContainer = document.querySelector('.grid');
const targets = document.querySelectorAll(".grid-box");
const getCanvasSize = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
const newColor = document.querySelector('.color-picker');
const randBtn = document.querySelector('.random-color');


function removePrevGrid() {
    let child = gridContainer.lastElementChild;
    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}

function randColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function drawGrid(size=16) {
    removePrevGrid();

    for (let each = 0;  each < size**2; each++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        gridContainer.append(div);
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${size}, auto);`);

    color();
}

function color() {
    const targets = document.querySelectorAll(".grid-box");
    
    randBtn.addEventListener('click', () => {
        let value = '#' + Math.floor(Math.random()*16777215).toString(16);
        console.log(typeof value);
        hover(targets, value);
    })
    newColor.addEventListener('input', () => {
        let value = newColor.value;
        hover(targets, value);
    }); 
    
    hover(targets);
}

getCanvasSize.addEventListener('click', () => {
    let userInput = prompt('enter size'); 
    if (userInput > 100) {
        console.error('Enter smaller number');
    } else {
        drawGrid(userInput);
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

function eraser() {
    const targets = document.querySelectorAll(".grid-box");

    targets.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.setAttribute("style", `background-color: white;`);
        })
    })
}

const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', eraser);

resetBtn.addEventListener('click', reset);


drawGrid();

randBtn.addEventListener('click', () => {
    let cell = gridContainer.children;
    for (let i = 0; i < 16**2; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randColor();
        })
    }
})