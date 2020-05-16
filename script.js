const gridContainer = document.querySelector("#gridContainer");
let gridNum = window.prompt("numero");
let gridContainerSize = ((window.innerWidth/2 + window.innerHeight/2)/2);
gridContainer.style.width = gridContainerSize + "px";
gridContainer.style.height = gridContainerSize + "px";
console.log(gridContainerSize)
let gridSize = (gridContainerSize/(gridNum));


function createGrid (gridNum) {
    for (let i = 0; i < gridNum*gridNum; i++) {
    grid = document.createElement("div");
    // grid.textContent = i+1;
    grid.className += "grid";
    gridContainer.style.gridTemplateRows = "repeat(" + gridNum + ", 1fr)";
    gridContainer.style.gridTemplateColumns = ("repeat(" + gridNum + ", 1fr)");
    grid.style.height =  gridSize + "px";
    grid.style.width =  gridSize + "px";
    gridContainer.appendChild(grid);

    // (window.innerWidth/2) (window.innerHeight/2)
    }
}

createGrid(gridNum);

// function highlightBG () {
//     let (divs+i);
//     divs = document.querySelector("div.div" + i);
//     console.log(divs);
//     divs.addEventListener("mouseover", mouseOver);
//     divs.addEventListener("mouseout", mouseOut);
    
//     function mouseOver() {
//         divs.style.backgroundColor = "blue";
//     }
//     function mouseOut() {
        
//         divs.style.backgroundColor = "white";
//     }
//     }