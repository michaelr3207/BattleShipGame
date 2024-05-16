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

function checkShipStartingPositionXAxis(startingPosition, ship, battleShipGame, player) {
    startingPosition = Number.parseInt(startingPosition);
    const finalPosition = startingPosition + ship.getCellSize();
    console.log('starting pos is curremt ------------------> X axis: ' + startingPosition);
    if(finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0)) {
        if(player === battleShipGame.getPlayer1())
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
        else
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
        return true;
    }
    else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length)) {
        if(player === battleShipGame.getPlayer1())
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
            else
                alert('not good');
        else
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
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
    // const playerOneStarterPositions = ["3Y", "34X", "22X", "63Y", "85X"];
    const playerOneStarterPositions = ["50Y", "37Y", "30X", "36X"];
    for(let index = 0; index < playerOneStarterPositions.length; index ++) {
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX: ' + playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1));  //ToDo add in system that checkc all coordinates for ship to be placed
        if(battleShipGame.playerOneGameBoard.checkIfGridCellIsAvailable(playerOneStarterPositions[index])) {  // ToDO potential error here
            if(playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1) === 'Y') {
                console.log('----------------------------------Y is triggerewd ----------------------------------------------->')
                if(checkShipStartingPositionYAxis(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index], battleShipGame, battleShipGame.player1))
                    changeGridColorWithShipYAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index].substring(0, playerOneStarterPositions[index].length - 1), battleShipGame.player1, battleShipGame)
            }
            else if (playerOneStarterPositions[index].charAt(playerOneStarterPositions[index].length - 1) === 'X') {
                console.log('---------------------------------- Here   ----------------------------------------------->')
                if(checkShipStartingPositionXAxis(playerOneStarterPositions[index], battleShipGame.player1.playerShips[index], battleShipGame, battleShipGame.player1))
                    changeGridColorWithShipXAxis(battleShipGame.player1.playerShips[index], playerOneStarterPositions[index].substring(0, playerOneStarterPositions[index].length - 1), battleShipGame.player1, battleShipGame)
                }
        }
        else {
            alert('that has been taken!!')
        }
    }
    const allCells = battleShipGame.playerOneGameBoard.getAllCells();
    console.log(allCells)
    allCells.forEach(item => {console.log(item)});
}


populateBothGrids();
// createAndAddBoatToUI();
main();

export  {changeGridColorWithShipXAxis, createSquares, createAndAddBoatToUI, checkShipStartingPositionYAxis};


