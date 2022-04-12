let btnReset = document.getElementById('reset');
let gridContainer = document.getElementById('grid-container');
let color = "white";
createGrid(16);

btnReset.addEventListener('click', function(e){
    let size = Number(prompt("What's the new size?"));
    if(size < 0 || size > 100){
        alert("Invalid size!");
        return;
    }
    createGrid(size);
})

const buttons = document.querySelectorAll('.color-change');

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    color = button.dataset.color;
  });
});


function createGrid(size){
    gridContainer.textContent = ''; // removes all divs;
    let pixelSize = 800 / size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${pixelSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, ${pixelSize}px)`
    for (let index = 0; index < (size*size); index++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(e){
            div.style.backgroundColor = color;
        })
        gridContainer.appendChild(div);
    }    
}