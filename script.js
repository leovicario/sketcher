const gridContainer = document.querySelector("#gridContainer");
let gridContainerSize = ((window.innerWidth/2 + window.innerHeight/2)/2);

gridContainer.style.width = gridContainerSize + "px";
gridContainer.style.height = gridContainerSize + "px";


const generateButton = document.querySelector("#generate");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#random");
const resetButton = document.querySelector("#reset");

let entireGrid = document.getElementsByClassName("grid");

generateButton.onclick = function() {
    // Reset and delete the previous grid.
    let previousGrid = document.querySelectorAll('.grid');
    for (i = 0; i < previousGrid.length; i++)
    previousGrid[i].remove()

    let gridNum = window.prompt("Choose grid size | ex. 8, 16, 32");
    createGrid(gridNum)
}


function createGrid (gridNum) {
    const gridSize = (gridContainerSize/(gridNum));
    for (let i = 0; i < gridNum*gridNum; i++) {
    grid = document.createElement("div");
    // grid.textContent = i+1;
    grid.className += "grid";
    gridContainer.style.gridTemplateRows = "repeat(" + gridNum + ", 1fr)";
    gridContainer.style.gridTemplateColumns = ("repeat(" + gridNum + ", 1fr)");
    grid.style.height =  gridSize + "px";
    grid.style.width =  gridSize + "px";
    gridContainer.appendChild(grid);
    }
}



// createGrid(gridNum);


blackButton.onclick = function() {
    for (let i = 0; i < entireGrid.length; i++){
    entireGrid[i].addEventListener("mouseover", mouseOver);    
    function mouseOver() {
        entireGrid[i].style.backgroundColor = "black";
    }
    }
}

randomButton.onclick = function() {
    for (let i = 0; i < entireGrid.length; i++){
    entireGrid[i].addEventListener("mouseover", mouseOver);    
    function mouseOver() {
        let randomColor = [Math.floor(Math.random()*16777215).toString(16)];
        entireGrid[i].style.backgroundColor = "#" + randomColor;
    }
    }
}

resetButton.onclick = function() {  
    for (let i = 0; i < entireGrid.length; i++){
    entireGrid[i].style.backgroundColor = null;
    entireGrid[i].addEventListener("mouseover", mouseOver);    
    function mouseOver() {
        entireGrid[i].style.backgroundColor = "";
    }

}
}


function responsiveGUI (){
    if (window.innerWidth < window.innerHeight){
    let GUI = document.getElementById("gui");
    let button = document.getElementsByClassName("boton");
    GUI.style.top = "15%"
    GUI.style.left = "50%"
    for (let i = 0; i < button.length; i ++){
    button[i].style.padding = "2vw 10vw"
    button[i].style.fontSize = "12px"
    }
    }
}

responsiveGUI()