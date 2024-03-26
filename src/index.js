import './style.css';
import {Boat} from "./Classes/Boat";
import {BattleShipGame} from "./Classes/BattleShipGame";
import {Player} from "./Classes/Player";
import {Cell} from "./Classes/Cell";


function createSquares(index){
    let playerGrid;
    if(index === 1)
        playerGrid = 'grid1';
    else
        playerGrid = 'grid2';

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
            newSquare.id = playerGrid + squareId.toString();
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
    const player1 = new Player('Bob', 2);
    const destroyerBoat = new Boat('Destroyer', 3. )
    const min = 1;
    const max = 100;
    const randomGeneratedShipStaringPosition = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Random generated ship starting position ---------->>  ${randomGeneratedShipStaringPosition}`);
    console.log(`Random generated ship starting position result ---------->>  ${checkShipStartingPosition(randomGeneratedShipStaringPosition, destroyerBoat)}`);
    if(checkShipStartingPosition(randomGeneratedShipStaringPosition, destroyerBoat))
        changeGridColorWithShip(destroyerBoat, randomGeneratedShipStaringPosition, player1);

}

function checkShipStartingPosition(startingPosition, ship) {
    const finalPosition = startingPosition + ship.getCellSize();
    if(finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0)) {
        return true;
    }
    else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length)) {
        return true;
    }
    return false;
}

function changeGridColorWithShip(ship, startingPosition, player) {
    for(let index = 0; index < ship.getCellSize(); index ++) {
        const gridToBeChanged = document.getElementById(player.getGrid() + startingPosition.toString());
        console.log( '------------------??' + player.getGrid() + startingPosition.toString());
        gridToBeChanged.style.background = 'red';
        startingPosition ++;
    }
}

function main() {
    const battleShipGame = new BattleShipGame('Simple BattleShip Game');
    const player = new Player('Player', 1);
    battleShipGame.playerOneGameBoard.attackShip('B2', player);
}

populateBothGrids();
createAndAddBoatToUI();

main();
