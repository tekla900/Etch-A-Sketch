const gridContainer = document.querySelector('.grid');

for (let each = 0;  each < 256; each++) {
    const div = document.createElement('div');
    // div.textContent = `${each+1}`;
    div.classList.add('grid-box');
    gridContainer.append(div);
}

// მაშინ შევცვალოთ მიდგომა, ანუ შემოვიღოთ ფუნქცია - ხატვა, 
// სადაც გაჩმების პარამეტრი იქნება 16. 
// ამის შემდეგ აღარ მოგვიწევს 16-ზე ცალკე 
// და სხვა რიცხვებზე ცალკე  ვაკეთოთ ლუპები

const canvasSize = document.querySelector('.size');
canvasSize.addEventListener('click', () => {
    let userInput = prompt('enter size');
    console.log(userInput);
    let child = gridContainer.lastElementChild;
    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }

    gridContainer.setAttribute("style", `grid-template-columns: repeat(${userInput}, auto);`);

    for (let each = 0;  each < userInput**2; each++) {
        console.log(each);
        const newDiv = document.createElement('div');
        // newDiv.textContent = `${each+1}`;
        newDiv.classList.add('grid-box');
        console.log(newDiv.className);
        gridContainer.append(newDiv);
    }
});


const targets = document.querySelectorAll(".grid-box");
console.log(targets.length);
targets.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
        console.log('rato agar shemodis');
    })

})

