import './style.css';


function createSquares(index){

    let squares = 12;
    const container = document.getElementById('grid' + index);
    container.style.display = "block";

    for(let i = 0; i < squares; i ++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.display = "flex";
        for(let j = 0; j < squares; j ++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

function populateBothGrids() {
    const playerOneIndex = 1;
    const playerTwoIndex = 2;
    createSquares(playerOneIndex);
    createSquares(playerTwoIndex);
}

populateBothGrids();
