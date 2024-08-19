import './style.css';
import {BattleShipGame} from "./Classes/BattleShipGame";
import {AIBot} from "./Classes/AIBot";


let battleShipGame = new BattleShipGame('Battleship game');

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


function checkShipStartingPositionXAxis(startingPosition, ship, battleShipGame, player) {
    startingPosition = Number.parseInt(startingPosition);
    const finalPosition = startingPosition - ship.getCellSize();
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
        // return true;
    }
    else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length)) {
        if(player === battleShipGame.getPlayer1()) {  // ToDo fix this?
            if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
            else
                alert('not good');
        }
        else {
            if(battleShipGame.playerTwoGameBoard.plotShipOnPlayerGrid(startingPosition, ship, battleShipGame))
                return true;
            else
                alert('not good');
        }
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
            // alert('Invalid coordinates Y axis');
            return false;
        }
       startingPosition = startingPosition + 10;
        counter++;
        console.log('rounder up starting pos: ' + startingPosition);
    }
    // console.log('Result of ccall:' + battleShipGame.playerOneGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, battleShipGame));
    startingPosition = startingPosition - (ship.getCellSize() * 10);
    if(player === battleShipGame.getPlayer1()) {
        if(battleShipGame.playerOneGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, battleShipGame)) {
            return true;
        }
        else {
            console.log('Ship placement failed!!!!!')
        }
    }
    else
        if(battleShipGame.playerTwoGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, battleShipGame)) {
            return true;
        }
        else {
            alert('not good 2');
        }
}

function changeGridColorWithShipXAxis(ship, startingPosition, player, battleShipGame) {
    console.log('Trying to change place ship colour - X AXIS');
    startingPosition = Number.parseInt(startingPosition) - ship.getCellSize();
    console.log('------------->starting pos now:  ' + startingPosition);
    console.log('------------->starting ship now: ' + ship.shipName);
    for(let index = 0; index < ship.getCellSize(); index ++) {
        const gridToBeChanged = document.getElementById(player.getGrid() + startingPosition.toString());
        console.log( '------------------??' + player.getGrid() + startingPosition.toString());
        gridToBeChanged.style.background = 'red';
        startingPosition++;
    }
}

function changeGridColorWithShipYAxis(ship, startingPosition, player, battleShipGame) {
    console.log('Trying to change place ship colour - Y AXIS');
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
        console.log('GRID COLOUR SUCCESSFULLY CHANGED -----------------------------------------');
    }
}

function getPlayer1BoatSelection() {

}

function main() {
    console.log('Start if the game ------------------------------------------------------------------------------>>>');
    const playerTwoStarterPositions = ["85X", "15X", "4X", "63Y", "65X"];
    const playerOneStarterPositions = ["0Y", "47Y", "16X", "34X", "98Y"];
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
    console.log('Player one cells');
    printCells(allCells);
}

const printCells = (allCells) => allCells.forEach(item => {console.log(item)});


function addEventListenerToPlayerTwoSquares(battleshipGame) {
    alert('Current game player is: ' + battleshipGame.getCurrentPlayerTurn().getName());
    const GRID_KEYWORD = 'grid2';   //ToDO add to util class
    const allCells = battleshipGame.playerTwoGameBoard.getAllCells();
    console.log(allCells)
    allCells.forEach(item => {console.log(item)});
    for(let item = 0; item < 100; item++) {
        document.getElementById(GRID_KEYWORD + item).addEventListener("click", (event) => {
            if(battleshipGame.getCurrentPlayerTurn() === battleshipGame.getPlayer1()) {
                let extractedGridCoordinates = extractGridCoordinatesFromGridTitle(event.target.id.toString());
                if(allCells[item].getShipOnCell()) {
                    let currentNumberOfPlayerTwoShipsLeft = battleshipGame.getPlayer2().getNumberOfPlayerShips();
                    console.log('looking to attack a ship!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                    // alert('Found a ship!!!');
                    battleshipGame.playerTwoGameBoard.attackShip(extractedGridCoordinates);
                    battleshipGame.uIDisplay.markAttackedSquareWithShipPresentPlayer2Grid(Number.parseInt(extractedGridCoordinates));
                    if(battleshipGame.getPlayer2().getNumberOfPlayerShips() === (currentNumberOfPlayerTwoShipsLeft - 1)) {
                        console.log('Ship has been destroyed by player 1!!!!!');
                        battleshipGame.uIDisplay.removeDestroyedPlayer2ShipFromUI(battleshipGame.playerTwoGameBoard.getAllCells());
                    }
                    if((battleshipGame.getPlayer2().getNumberOfPlayerShips() === 0)) {
                        battleshipGame.setGameWinner(battleshipGame.getPlayer1().getName());
                        battleshipGame.uIDisplay.showGameOverScreen();
                    }
                    console.log('updated player two board after strike: \n ' + allCells);
                    allCells.forEach(item => {console.log(item)});
                }
                else {
                    // alert('No a ship!!!');
                    battleshipGame.playerTwoGameBoard.attackShip(extractedGridCoordinates);
                    battleshipGame.uIDisplay.markAttackedSquareWithoutAnyShipPresentPlayer2Grid(extractedGridCoordinates);
                }
                if(!battleShipGame.gameOver) {
                    battleshipGame.setPlayerToPlayer2();
                    battleshipGame.AIBot.attackPlayerOnePosition();
                }
                // alert('Current game player is: ' + battleshipGame.getCurrentPlayerTurn().getName());
            }
        });
    }

}

function extractGridCoordinatesFromGridTitle(event) {
    if(event.length === 6)
        return event.slice(-1);
    else
        return event.slice(-2);
}

function addEventListenerToRestartBtn(battleShipGame) {
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener("click", () => {
        battleShipGame.uIDisplay.hideGameOverScreen();
        battleShipGame.gameOver = false;
        battleShipGame.AIBot = new AIBot('New game bot', battleShipGame, battleShipGame.getPlayer1());
        main();
    });
}

function addEventListenersToBoatSelectorButtons() {
    const axisButton = document.getElementById('axisBtn');

    axisButton.addEventListener("click", (event) => {
        console.log('axis btn has been clicked!');
        if(event.target.value === 'Y') {
            event.target.value = 'X';
            event.target.innerHTML = 'X'
        }
        else {
            event.target.value = 'Y';
            event.target.innerHTML = 'Y'
        }
    });
}

function addEventListenerToPlayerOneSquares(battleShipGame) {
    alert('Current game player is: ' + battleShipGame.getCurrentPlayerTurn().getName());
    const GRID_KEYWORD = 'grid1';
    const allCells = battleShipGame.playerOneGameBoard.getAllCells();
    allCells.forEach(item => {console.log(item)});
    for(let item = 0; item < 100; item++) {
        document.getElementById(GRID_KEYWORD + item).addEventListener("click", (event) => {
            if(!battleShipGame.getHasGameStarted()) {
                const currentSelectedAxis = document.getElementById('axisBtn').value;
                let extractedCoordinate;
                if(event.target.id.length === 7)
                     extractedCoordinate = event.target.id.slice(-2) + currentSelectedAxis;
                else
                    extractedCoordinate = event.target.id.slice(-1) + currentSelectedAxis;
                console.log(extractedCoordinate + '<---------------------');
                if(currentSelectedAxis === 'Y') {
                    if(checkShipStartingPositionYAxis(extractedCoordinate, battleShipGame.getCurrentPlayer1SelectedBoat(), battleShipGame, battleShipGame.player1)) {
                        console.log('Player 1 boat placed succesfully!!!');
                        battleShipGame.changePlayer1BoatSelection();
                        console.log(allCells)
                    }
                    else {
                        console.log('Player 1 boat failure');
                        battleShipGame.resetPlayer1BoatSelection();
                        console.log(allCells)

                    }
                }
                else {
                    if(checkShipStartingPositionXAxis(extractedCoordinate, battleShipGame.getCurrentPlayer1SelectedBoat(), battleShipGame, battleShipGame.player1)) {
                        console.log('Player 1 boat placed succesfully!!!');
                        battleShipGame.changePlayer1BoatSelection();
                        console.log(allCells)
                    }
                    else {
                        console.log('Player 1 boat failure');
                        battleShipGame.resetPlayer1BoatSelection();
                        console.log(allCells)
                    }
                }
                if(battleShipGame.indexOfCurrentPlayer1SelectedBoat === 5) {
                    alert('All player 1 boats successfully placed!');
                    battleShipGame.uIDisplay.addShipsToPlayerOneGrid();
                    battleShipGame.AIBot.generateRandomPlayer2Boats();
                }
            }
        });
    }

}


// createAndAddBoatToUI();
addEventListenersToBoatSelectorButtons();
populateBothGrids();
addEventListenerToPlayerOneSquares(battleShipGame);
// main();
addEventListenerToRestartBtn(battleShipGame);
addEventListenerToPlayerTwoSquares(battleShipGame);

export  {changeGridColorWithShipXAxis, createSquares, checkShipStartingPositionYAxis, printCells, checkShipStartingPositionXAxis};


