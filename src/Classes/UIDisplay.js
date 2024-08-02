import {NUMBER_OF_SQUARES} from "../Util";


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
    }


    markAttackedSquareWithShipPresentPlayer1Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid1' + targetLocation);
        gridSquareToBeErased.style.background = 'orange';
    }

    markAttackedSquareWithoutAnyShipPresentPlayer1Grid(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid1' + targetLocation);
        gridSquareToBeErased.style.background = 'black';
    }

    showGameOverScreen() {
        document.getElementById('contentBox').className = 'hide';
        document.getElementById('gameOverScreen').className = 'gameOverContainer';
        this.displayTheGameWinnerOnTheUIAfterGameEnds();
    }

    hideGameOverScreen() {
        document.getElementById('contentBox').className = 'appContainer';
        document.getElementById('gameOverScreen').className = 'hide';
        this.clearPreviousGameDataOnUI();
    }

    displayTheGameWinnerOnTheUIAfterGameEnds() {
        document.getElementById('gameResultDiv').innerHTML = 'The Game Winner Is: ' + this.battleShipGame.getGameWinner();
    }

    clearPreviousGameDataOnUI() {
        for(let index = 0; index <= 99; index ++) {
            const player1Grid = document.getElementById('gridPlayer1');
            const player2Grid = document.getElementById('gridPlayer2');
        }
        let allSquares = document.getElementsByClassName('square');
        for(let currentSquare of allSquares) {
            currentSquare.style.background = null;
        }
        // for(let index = 0; index <= NUMBER_OF_SQUARES; index ++) {
        //     document.getElementById('grid1' + index).style.background = 'blue';
        //     document.getElementById('grid2' + index).style.background = 'blue';
        // }
        // document.getElementById('gridPlayer1').innerHTML = '';
        // document.getElementById('gridPlayer2').innerHTML = '';
    }
}

export {UIDisplay};