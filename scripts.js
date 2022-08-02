const gridContainer = document.querySelector('.grid');

for (let each = 0;  each < 256; each++) {
    const div = document.createElement('div');
    div.textContent = `${each+1}`;
    div.classList.add('grid-box');
    gridContainer.append(div);
}

// const divs = document.querySelectorAll('.grid-box');
// divs.hover()

const targets = document.querySelectorAll(".grid-box");
targets.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    })

})

function mOver(x) {
    targets.forEach(element => {
        element.setAttribute("style", "background-color:blue;");
    })
}
