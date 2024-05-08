import './style.css';
import {Boat} from "./Classes/Boat";
import {BattleShipGame} from "./Classes/BattleShipGame";
import {Player} from "./Classes/Player";
import {Cell} from "./Classes/Cell";
import {coordinateReader, randomNumberGenerator} from "./Util";
import {UIDisplay} from "./Classes/UIDisplay";
import {GameBoard} from "./Classes/GameBoard";

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

function populateBothGrids() {  // ToDo add to UI display class on initilization
    const playerOneIndex = 1;
    const playerTwoIndex = 2;
    createSquares(playerOneIndex);
    createSquares(playerTwoIndex);
}

function createAndAddBoatToUI() {
    const uIDisplay = new UIDisplay();
    const battleShipGame = new BattleShipGame('Simple BattleShip Game');
    const player1 = new Player('Bob', 1);
    const destroyerBoat = new Boat(player1.getName() + 'Destroyer', 5, player1)
   // const randomGeneratedShipStaringPosition = randomNumberGenerator();
    const randomGeneratedShipStaringPosition = 14;
    const randomGeneratedShipStaringPosition2 = 9;
    console.log(`Random generated ship starting position ---------->>  ${randomGeneratedShipStaringPosition}`);
    console.log(`Random generated ship starting position result ---------->>  ${checkShipStartingPositionXAxis(randomGeneratedShipStaringPosition, destroyerBoat)}`);
    // if(checkShipStartingPositionYAxis(randomGeneratedShipStaringPosition2, destroyerBoat))
    //     changeGridColorWithShipYAxis(destroyerBoat, randomGeneratedShipStaringPosition2, player1, battleShipGame);
    // if(checkShipStartingPositionXAxis(randomGeneratedShipStaringPosition, destroyerBoat))
    //     changeGridColorWithShipXAxis(destroyerBoat, randomGeneratedShipStaringPosition, player1, battleShipGame);
    // playerAttackAnotherPlayersShip(battleShipGame, 'E5', player1, uIDisplay);
    // playerAttackAnotherPlayersShip(battleShipGame, 'E6', player1, uIDisplay);
    // playerAttackAnotherPlayersShip(battleShipGame, 'E7', player1, uIDisplay);
}

function playerAttackAnotherPlayersShip(battleShipGame, coordinates, player, uIDisplay) {
    const targetLocation = coordinateReader(coordinates);
    battleShipGame.playerOneGameBoard.attackShip(targetLocation, player);
    uIDisplay.markAttackedTargetOnGrid(targetLocation, player);

}

function checkShipStartingPositionXAxis(startingPosition, ship) {
    const finalPosition = startingPosition + ship.getCellSize();
    if(finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0))
        return true;
    else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length))
        return true;
    return false;
}

function checkShipStartingPositionYAxis(startingPosition, ship) {
   let counter = 0;
   while (counter < ship.getCellSize()) {
       startingPosition = startingPosition + 10;
       console.log('starting pos: ' + startingPosition)
        if(startingPosition > 100) {
            console.log('false')
            return false;
        }
        counter++;
    }
   return true;
}

function changeGridColorWithShipXAxis(ship, startingPosition, player, battleShipGame) {
    console.log('sdfsdfsdf ff');
    for(let index = 0; index < ship.getCellSize(); index ++) {
        const gridToBeChanged = document.getElementById(player.getGrid() + startingPosition.toString());
        console.log( '------------------??' + player.getGrid() + startingPosition.toString());
        gridToBeChanged.style.background = 'red';
        startingPosition ++;
    }
    // let count = 0;
    // startingPosition = startingPosition - ship.getCellSize();
    // battleShipGame.getPlayerOneGameBoard().getAllCells().forEach((item) => {
    //     if((item.getCellId().toString() === (startingPosition + count).toString()) && count < ship.getCellSize()){
    //         console.log('nfdjnjdfnjsfjsfs')
    //         item.setShipOnCell(ship)
    //         count++;
    //     }
    // });
    battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame);
    // console.log('-----------> efusfdsdd' + battleShipGame.getPlayerOneGameBoard().getAllCells().map(obj => obj.shipOnCell));
    // console.log( battleShipGame.getPlayerOneGameBoard().getAllCells());
}

function changeGridColorWithShipYAxis(ship, startingPosition, player, battleShipGame) {
    let counter = 0;
    startingPosition = Number.parseInt(startingPosition);
    console.log('starting pos now ' + startingPosition);
    console.log('starting ship now ' + ship.shipName);
    while (counter < ship.getCellSize()) {
        const gridToBeChanged = document.getElementById(player.getGrid() + startingPosition.toString());
        console.log( '------------------??' + player.getGrid() + startingPosition.toString());
        gridToBeChanged.style.background = 'red';
        startingPosition = startingPosition + 10;  // changing grid row
        counter++;
    }
    battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame);
}

function main() {
    const battleShipGame = new BattleShipGame('Simple BattleShip Game');
    const uIDisplay = new UIDisplay();
    // const playerOneStarterPositions = ["3Y", "34X", "22X", "63Y", "85X"];
    const playerOneStarterPositions = ["3Y", "45Y", "31Y", "70Y", "86Y"];
    for(let index = 0; index < playerOneStarterPositions.length; index ++) {
        if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index])) {
            if(playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1) === 'Y')
                if(checkShipStartingPositionYAxis(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index]))
                    changeGridColorWithShipYAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index].substring(0, playerOneStarterPositions[index].length - 1), battleShipGame.player1, battleShipGame)
            // else
            //     checkShipStartingPositionXAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index], battleShipGame.player1, battleShipGame);
        }
    }
}


populateBothGrids();
createAndAddBoatToUI();
main();

export  {changeGridColorWithShipXAxis, createSquares, createAndAddBoatToUI, checkShipStartingPositionYAxis};


