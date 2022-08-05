const gridContainer = document.querySelector('.grid');
const targets = document.querySelectorAll(".grid-box");
const getCanvasSize = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');

function remove() {
    let child = gridContainer.lastElementChild;
    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}

function draw(size=16) {
    remove();

    for (let each = 0;  each < size**2; each++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        gridContainer.append(div);
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${size}, auto);`);

    const targets = document.querySelectorAll(".grid-box");

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


function hover(targets) {
    targets.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('hover');
        })
    })
}

function reset() {
    const targets = document.querySelectorAll(".grid-box");
    targets.forEach(element => {
        element.classList.remove('hover');
    })
}

resetBtn.addEventListener('click', reset);


draw();

