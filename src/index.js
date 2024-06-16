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
    const container = document.getElementById('gridPlayer' + index);
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

function checkShipStartingPositionXAxis(startingPosition, ship, battleShipGame, player) {
    startingPosition = Number.parseInt(startingPosition);
    const finalPosition = startingPosition + ship.getCellSize();
    console.log('starting pos is curremt ------------------> X axis: ' + startingPosition);
    if(finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0)) {
        console.log('strike!')
        if(player === battleShipGame.getPlayer1()) {
            console.log('strike 2')
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
        }
        else {
                console.log('strike 3')
                if(battleShipGame.playerTwoGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                    return true;
            }
        return true;
    }
    else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length)) {
        if(player === battleShipGame.getPlayer1())
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
            else
                alert('not good');
        else
            if(battleShipGame.playerTwoGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
            else
                alert('not good');
    }
    console.log('false ------------------------------------>')
    alert('Invalid coordinates');
    return false;
}

function checkShipStartingPositionYAxis(startingPosition, ship, battleShipGame, player) {
   let counter = 0;
   startingPosition = Number.parseInt(startingPosition);
   while (counter < ship.getCellSize()) {
       console.log('starting pos is curremt ------------------>: ' + startingPosition)
        if(startingPosition >= 100) {
            console.log('false ------------------------------------>')
            alert('Invalid coordinates Y axis');
            return false;
        }
       startingPosition = startingPosition + 10;
        counter++;
        console.log('rounder up starting pos: ' + startingPosition);
    }
    startingPosition = startingPosition - (ship.getCellSize() * 10);
    if(player === battleShipGame.getPlayer1()) {
        if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, battleShipGame))
            return true;
        else
            alert('not good 1' );
        console.log('slaintee')
    }
    else
        if(battleShipGame.playerTwoGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, battleShipGame))
            return true;
        else
            alert('not good 2');

}

function changeGridColorWithShipXAxis(ship, startingPosition, player, battleShipGame) {
    startingPosition = Number.parseInt(startingPosition);
    console.log('starting pos now X ' + startingPosition);
    console.log('starting ship now X ' + ship.shipName);
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
}

function main() {
    const battleShipGame = new BattleShipGame('Simple BattleShip Game');
    const uIDisplay = new UIDisplay();
    const playerTwoStarterPositions = ["84X", "34X", "4X", "63Y", "67X"];
    // const playerTwoStarterPositions = ["84X"];
    const playerOneStarterPositions = ["10Y", "47Y", "16X", "34X", "98Y"];
    console.log('jereeee ======================================' + battleShipGame.player1.playerShips[0]);
    let counter = 0;
    for(let index = 0; index < playerOneStarterPositions.length; index ++) {
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX: ' + playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1));  //ToDo add in system that checkc all coordinates for ship to be placed
        console.log('jereeee ======================================' + battleShipGame.player1.playerShips[index].toString());
        let currentShip = battleShipGame.player1.playerShips[index];
        let currentShipPlayerTwo = battleShipGame.player2.playerShips[index];
        if(battleShipGame.playerOneGameBoard.checkIfGridCellIsAvailable(playerOneStarterPositions[index], currentShip)) {  // ToDO potential error here
            if(playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1) === 'Y') {
                console.log('----------------------------------Y is triggerewd ----------------------------------------------->')
                if(checkShipStartingPositionYAxis(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index], battleShipGame, battleShipGame.player1))
                    changeGridColorWithShipYAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index].substring(0, playerOneStarterPositions[index].length - 1), battleShipGame.player1, battleShipGame)
            }
            else if (playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1) === 'X') {
                console.log('---------------------------------- X is triggered   ----------------------------------------------->')
                if(checkShipStartingPositionXAxis(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index], battleShipGame, battleShipGame.player1))
                    changeGridColorWithShipXAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index].substring(0, playerOneStarterPositions[index].length - 1), battleShipGame.player1, battleShipGame)
                }
        }
        else {
            alert('that has been taken!!')
        }
        console.log('-------------------------------------->HELLO////////////////////////////' + playerTwoStarterPositions[counter] + counter);
        if(battleShipGame.playerTwoGameBoard.checkIfGridCellIsAvailable(playerTwoStarterPositions[counter], currentShipPlayerTwo)) {  // ToDO potential error here
            if(playerTwoStarterPositions[counter].charAt(playerTwoStarterPositions[counter].length - 1) === 'Y') {
                console.log('----------------------------------Y is triggerewd ----------------------------------------------->')
                if(checkShipStartingPositionYAxis(playerTwoStarterPositions[counter], battleShipGame.player2.playerShips[counter], battleShipGame, battleShipGame.player2))
                    changeGridColorWithShipYAxis(battleShipGame.player2.playerShips[counter], playerTwoStarterPositions[counter].substring(0, playerTwoStarterPositions[counter].length - 1), battleShipGame.player2, battleShipGame)
            }
            else if (playerTwoStarterPositions[counter].charAt(playerTwoStarterPositions[counter].length - 1) === 'X') {
                console.log('---------------------------------- X is triggered   ----------------------------------------------->')
                if(checkShipStartingPositionXAxis(playerTwoStarterPositions[counter], battleShipGame.player2.playerShips[counter], battleShipGame, battleShipGame.player2))
                    changeGridColorWithShipXAxis(battleShipGame.player2.playerShips[counter], playerTwoStarterPositions[counter].substring(0, playerTwoStarterPositions[counter].length - 1), battleShipGame.player2, battleShipGame)
            }
        }
        else {
            alert('that has been taken!!')
        }
        counter ++;

        //ToDo above code needs to be refactored
    }
    const allCells = battleShipGame.playerOneGameBoard.getAllCells();
    console.log(allCells)
    allCells.forEach(item => {console.log(item)});
    addEventListenerToPlayerTwoSquares(battleShipGame)
}


function addEventListenerToPlayerTwoSquares(battleshipGame) {
    const GRID_KEYWORD = 'grid2';   //ToDO add to util class
    const allCells = battleshipGame.playerTwoGameBoard.getAllCells();
    console.log(allCells)
    allCells.forEach(item => {console.log(item)});
    for(let item = 0; item < 100; item++) {
        document.getElementById(GRID_KEYWORD + item).addEventListener("click", () => {
            alert('You have hit grid number ' + item);
            if(allCells[item].getShipOnCell()) {
                alert('Found a ship!!!');
            }
            else
                alert('No a ship!!!')
        });
    }

}

populateBothGrids();
// createAndAddBoatToUI();
main();

export  {changeGridColorWithShipXAxis, createSquares, createAndAddBoatToUI, checkShipStartingPositionYAxis};


