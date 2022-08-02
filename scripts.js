const gridContainer = document.querySelector('.grid-16');
const targets = document.querySelectorAll(".grid-box");
const canvasSize = document.querySelector('.size');

for (let each = 0;  each < 256; each++) {
    const div = document.createElement('div');
    div.textContent = `${each+1}`;
    div.classList.add('grid-box');
    gridContainer.append(div);
}

targets.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    })
})

canvasSize.addEventListener('click', () => {
    let userInput = prompt('enter size');
    console.log(userInput);
    var child = gridContainer.lastElementChild;
    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }

    gridContainer.setAttribute("style", `grid-template-columns: repeat(${userInput}, auto);`);

    for (let each = 0;  each < userInput**2; each++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `${each+1}`;
        newDiv.classList.add('grid-box');
        gridContainer.append(newDiv);
    }
});