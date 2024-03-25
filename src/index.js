import './style.css';
import {Boat} from "./Classes/Boat";
import {BattleShipGame} from "./Classes/BattleShipGame";
import {Player} from "./Classes/Player";
import {Cell} from "./Classes/Cell";


function createSquares(index){
    let squareId = 0;
    let squares = 10;
    let rows = 10;
    const container = document.getElementById('grid' + index);
    container.style.display = "block";

    for(let i = 0; i < squares; i ++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.display = "flex";
        for(let j = 0; j < rows; j ++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.id = squareId.toString();
            newRow.appendChild(newSquare);
            squareId++;
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

function createAndAddBoatToUI() {
    const player1 = new Player('Bob', 1);
    const destroyerBoat = new Boat('Destroyer', 3. )
    const min = 1;
    const max = 120;
    const randomGeneratedShipStaringPosition = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Random generated ship starting position ---------->>  ${randomGeneratedShipStaringPosition}`);
    console.log(`Random generated ship starting position result ---------->>  ${checkShipStartingPosition(randomGeneratedShipStaringPosition, destroyerBoat)}`);
    if(checkShipStartingPosition(randomGeneratedShipStaringPosition, destroyerBoat))
        changeGridColorWithShip(destroyerBoat, randomGeneratedShipStaringPosition);

}

function checkShipStartingPosition(startingPosition, ship) {
    const finalPosition = startingPosition + ship.getCellSize();
    return finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0);
}

function changeGridColorWithShip(ship, startingPosition) {
    for(let index = 0; index < ship.getCellSize(); index ++) {
        const gridToBeChanged = document.getElementById(startingPosition.toString());
        console.log(startingPosition.toString());
        gridToBeChanged.style.background = 'red';
        startingPosition ++;
    }
}

populateBothGrids();
createAndAddBoatToUI();
