const gridContainer = document.querySelector('.grid');
const targets = document.querySelectorAll(".grid-box");
const canvasSize = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
const newColor = document.querySelector('.color-picker');
const randBtn = document.querySelector('.random-color');
const eraserBtn = document.querySelector('.eraser');

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

canvasSize.addEventListener('input', () => {
    let userInput = canvasSize.value;
    document.querySelector('.sp').textContent = `${userInput} x ${userInput}` ;
    console.log(userInput);
    drawGrid(userInput);
});


function color() {
    const targets = document.querySelectorAll(".grid-box");
    newColor.addEventListener('input', () => {
        let value = newColor.value;
        hover(targets, value);
    }); 
    
    hover(targets);
}

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

eraserBtn.addEventListener('click', eraser);

resetBtn.addEventListener('click', reset);

randBtn.addEventListener('click', () => {
    let size = canvasSize.value;
    let cell = gridContainer.children;
    for (let i = 0; i < size**2; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randColor();
        })
    }
})

drawGrid();

