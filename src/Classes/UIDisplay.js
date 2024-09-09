import {getCurrentSelectedAxisFromButton, NUMBER_OF_SQUARES} from "../Util";


class  UIDisplay {  //ToDO add to game class (battleshipgame object)

    constructor(battleShipGame) {
        this.battleShipGame = battleShipGame;
    }

    removeDestroyedPlayer2ShipFromUI(allGameBoardCells) {
        for(let item of allGameBoardCells){
            if(item.getShipOnCell() !== null && item.getShipOnCell().getIsSunk()) {
                console.log('Found destroyed ship!!!');
                const gridSquareToBeErased = document.getElementById('grid2' + item.getCellId());
                gridSquareToBeErased.style.background = 'yellow';
            }
        }
    }

    getCurrentAxisButtonValue() {
        this.currentSelectedAxis = getCurrentSelectedAxisFromButton();
    }


    removeDestroyedPlayer1ShipFromUI(gameboard) {
        for(let item of gameboard){
            if(item.getShipOnCell() !== null){
                console.log( 'test2' + item.getShipOnCell().getIsSunk());
            }
        }
        for(let item of gameboard){
            if(item.getShipOnCell() !== null && item.getShipOnCell().getIsSunk()) {
                console.log('found destroyed ship!!!');
                const gridSquareToBeErased = document.getElementById('grid1' + item.getCellId());
                gridSquareToBeErased.style.background = 'yellow';
            }
        }
    }

    markAttackedSquareWithShipPresentPlayer2Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid2' + targetLocation);
        gridSquareToBeErased.style.background = 'orange';
    }

    markAttackedSquareWithoutAnyShipPresentPlayer2Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid2' + targetLocation);
        gridSquareToBeErased.style.background = 'black';
        gridSquareToBeErased.style.border = '1px solid white'
    }


    markAttackedSquareWithShipPresentPlayer1Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid1' + targetLocation);
        gridSquareToBeErased.style.background = 'orange';
    }

    markAttackedSquareWithoutAnyShipPresentPlayer1Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid1' + targetLocation);
        gridSquareToBeErased.style.background = 'black';
        gridSquareToBeErased.style.border = '1px solid white'
    }

    showGameOverScreen() {
        document.getElementById('contentBox').className = 'hide';
        document.getElementById('gameOverScreen').className = 'gameOverContainer';
        this.displayTheGameWinnerOnTheUIAfterGameEnds();
    }

    hideGameOverScreen() {
        document.getElementById('contentBox').className = 'appContainer';
        document.getElementById('gameOverScreen').className = 'hide';
        this.clearBothPlayerBoards();
    }

    displayTheGameWinnerOnTheUIAfterGameEnds() {
        document.getElementById('gameResultDiv').innerHTML = 'The Game Winner Is: ' + this.battleShipGame.getGameWinner();
    }

    clearBothPlayerBoards() {
        let allSquares = document.getElementsByClassName('square');
        for(let currentSquare of allSquares) {
            currentSquare.style.background = null;  // clearing the board UI for the next round
            currentSquare.style.border = '1px solid black';
            currentSquare.style.borderRadius = '0%';
        }
    }

    addShipsToPlayerOneGrid() {
       this.battleShipGame.playerOneGameBoard.getAllCells().forEach((item) => {
          if(item.getShipOnCell()) {
              const gridSquareToBeChanged = document.getElementById('grid1' + item.getCellId());
              gridSquareToBeChanged.style.background = 'red';
              gridSquareToBeChanged.style.borderRadius = '35%';
          }
       });
    }

    highlightCurrentSelectedShip() {
        switch (this.battleShipGame.currentPlayer1SelectedBoat.getShipName()) {
            case "Player1Destroyer" : this.highlightPlayerOneShipOnBoatSelectionMenu(document.getElementById('5CellBoat')); break;
            case "Player1Cruiser" : this.highlightPlayerOneShipOnBoatSelectionMenu(document.getElementById('4CellBoat')); break;
            case "Player1Recon" : this.highlightPlayerOneShipOnBoatSelectionMenu(document.getElementById('3CellBoat')); break;
            case "Player1Battle" : this.highlightPlayerOneShipOnBoatSelectionMenu(document.getElementById('2CellBoat')); break;
            case "Player1Corvette" : this.highlightPlayerOneShipOnBoatSelectionMenu(document.getElementById('1CellBoat')); break;
        }
    }

    clearAllHighlightedShips() {
        for(let index = 1; index < 6; index ++) {
            const highlightedBoat = document.getElementById(index + 'CellBoat');
            highlightedBoat.style.border = 'black';
        }
    }

    highlightPlayerOneShipOnBoatSelectionMenu(shipToBeHighlighted) {
        shipToBeHighlighted.style.border = '2px solid blue'
    }

    addShipsToPlayerTwoGrid() {
        this.battleShipGame.playerTwoGameBoard.getAllCells().forEach((item) => {
            if(item.getShipOnCell()) {
                const gridSquareToBeChanged = document.getElementById('grid2' + item.getCellId());
                gridSquareToBeChanged.style.background = 'red';
                // gridSquareToBeChanged.style.borderRadius = '35%';
                // gridSquareToBeChanged.style.border = 'none';
            }
        });
    }
}

export {UIDisplay};