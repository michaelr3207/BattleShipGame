import {Player} from "./Player";
import {GameBoard} from "./GameBoard";
import {UIDisplay} from "./UIDisplay";
import {AIBot} from "./AIBot";


class BattleShipGame {

    constructor(name) {
        this.name = name;
        this.gameOver = false;
        this.player1 = new Player('Player1', 1);
        this.player2 = new Player('Player2', 2);
        this.player1.addShipsToPlayer();
        this.player2.addShipsToPlayer();
        this.playerOneGameBoard = new GameBoard('Player 1 board', this.player1);
        this.playerTwoGameBoard = new GameBoard('Player 2 board', this.player2);
        this.currentPlayerTurn = this.player1;
        this.uIDisplay = new UIDisplay(this);
        this.AIBot = new AIBot('Player Two bot', this);
        this.gameWinner = null;
        this.indexOfCurrentPlayer1SelectedBoat = 0;
        this.indexOfCurrentPlayer2SelectedBoat = 0;
        this.currentPlayer1SelectedBoat = this.player1.playerShips[this.indexOfCurrentPlayer1SelectedBoat];
        this.currentPlayer2SelectedBoat = this.player2.playerShips[this.indexOfCurrentPlayer2SelectedBoat];
        this.hasGameStarted = false;
    }


    checkShipStartingPositionYAxis(startingPosition, ship, player) {
        let counter = 0;
        startingPosition = Number.parseInt(startingPosition);
        while (counter < ship.getCellSize()) {
            console.log('starting pos is curremt ------------------>: ' + startingPosition)
            if(startingPosition >= 100) {
                console.log('false ------------------------------------>')
                return false;
            }
            startingPosition = startingPosition + 10;
            counter++;
            console.log('rounder up starting pos: ' + startingPosition);
        }
        startingPosition = startingPosition - (ship.getCellSize() * 10);
        if(player === this.getPlayer1()) {
            if(this.playerOneGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, this)) {
                return true;
            }
            else {
                console.log('Ship placement failed!!!!!')
            }
        }
        else
        if(this.playerTwoGameBoard.plotShipOnPlayerGridYAxis(startingPosition, ship, this)) {
            return true;
        }
        //ToDo Return false here??
    }

     checkShipStartingPositionXAxis(startingPosition, ship, player) { // ToDo add to Battleship class
        startingPosition = Number.parseInt(startingPosition);
        const finalPosition = startingPosition - ship.getCellSize();
        console.log('starting pos is curremt ------------------> X axis: ' + startingPosition);
        if(finalPosition.toString().charAt(0) === startingPosition.toString().charAt(0)) {
            console.log('strike!')
            if(player === this.getPlayer1()) {
                if(this.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, this))
                    return true;
            }
            else {
                if(this.playerTwoGameBoard.plotShipOnPlayerGrid(startingPosition, ship, this))
                    return true;
            }
            // return true;
        }
        else if(finalPosition.toString().length === 1 && (finalPosition.toString().length === startingPosition.toString().length)) {
            if(player === this.getPlayer1()) {  // ToDo fix this?
                return this.playerOneGameBoard.plotShipOnPlayerGrid(startingPosition, ship, this);
            }
            else {
                return this.playerTwoGameBoard.plotShipOnPlayerGrid(startingPosition, ship, this);
            }
        }
        return false;
    }



    resetPlayer1BoatSelection() {
        this.indexOfCurrentPlayer1SelectedBoat = 0;
        this.currentPlayer1SelectedBoat = this.player1.playerShips[this.indexOfCurrentPlayer1SelectedBoat];
        this.playerOneGameBoard.resetBoard();
        this.uIDisplay.clearAllHighlightedShips();
    }

    resetBothPlayerBoatSelection() {
        this.resetPlayer1BoatSelection();
        this.resetPlayer2BoatSelection();
        this.player1.addShipsToPlayer();
        this.player2.addShipsToPlayer();
    }

    resetPlayer2BoatSelection() {
        this.indexOfCurrentPlayer2SelectedBoat = 0;
        this.currentPlayer2SelectedBoat = this.player2.playerShips[this.indexOfCurrentPlayer2SelectedBoat];
        this.playerTwoGameBoard.resetBoard();
    }

    changePlayer1BoatSelection() {
        this.indexOfCurrentPlayer1SelectedBoat ++;
        this.currentPlayer1SelectedBoat = this.player1.playerShips[this.indexOfCurrentPlayer1SelectedBoat];
    }

    changePlayer2BoatSelection() {
        this.indexOfCurrentPlayer2SelectedBoat ++;
        this.currentPlayer2SelectedBoat = this.player2.playerShips[this.indexOfCurrentPlayer2SelectedBoat];
    }


    getCurrentPlayer1SelectedBoat() {
        return this.currentPlayer1SelectedBoat;
    }

    getCurrentPlayer2SelectedBoat() {
        return this.currentPlayer2SelectedBoat;
    }

    getHasGameStarted() {
        return this.hasGameStarted;
    }

    getGameWinner() {
        return this.gameWinner;
    }

    setGameWinner(winningPlayer) {
        this.endTheGame();
        this.gameWinner = winningPlayer;
    }

    setPlayerToPlayer1() {
        this.currentPlayerTurn = this.player1;
    }

    setPlayerToPlayer2() {
        this.currentPlayerTurn = this.player2;
    }

    resetBothPlayerBoards() {
        this.playerOneGameBoard.resetBoard();
        this.playerTwoGameBoard.resetBoard();
        this.currentPlayerTurn = this.getPlayer1();
    }

    getCurrentPlayerTurn() {
        return this.currentPlayerTurn;
    }

    getPlayer1() {
        return this.player1;
    }

    getPlayer2() {
        return this.player2;
    }

    endTheGame() {
        this.gameOver = true;
        console.log('GAEM OVER!');
        this.player1.addShipsToPlayer();
        this.player2.addShipsToPlayer();
        this.resetBothPlayerBoatSelection();
        this.resetBothPlayerBoards();
        this.hasGameStarted = false;
    }

}

export {BattleShipGame};