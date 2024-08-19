import {Player} from "./Player";
import {GameBoard} from "./GameBoard";
import {UIDisplay} from "./UIDisplay";
import {AIBot} from "./AIBot";


class BattleShipGame {

    constructor(name) {
        this.name = name;
        this.noOfPlayers = 0;
        this.gamePlayers = [];
        this.totalNumberOfShips = 0;
        this.player1Ships = [];
        this.player2Ships = [];
        this.gameOver = false;
        this.player1 = new Player('Player1', 1);
        this.player2 = new Player('Player2', 2);
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
    }

    addShip(player, ship) {
        if(!ship)
            return null;
        if(player.playerId === 1)
            this.player1Ships.push(ship);
        else
            this.player2Ships.push(ship);
        this.totalNumberOfShips++;
    }

    getPlayerOneGameBoard() {
        return this.playerOneGameBoard;
    }

    getPlayerTwoGameBoard() {
        return this.playerTwoGameBoard;
    }

    findShip(shipName, player) {
        let arrayOfShips;
        if(player.getId() === 1)
            arrayOfShips = this.player1Ships;
        else
            arrayOfShips = this.player2Ships;
        return arrayOfShips.filter((currentShip) => currentShip.getShipName() !== shipName);
    }

    addPlayer(player) {
        if(player){
            this.gamePlayers.push(player);
            this.noOfPlayers++;
        }
        else
            alert('ERRIR');
    }

    createPlayer(name) {
        return new Player(name, 1);
    }


    getNumberOfShips() {
        return this.totalNumberOfShips;
    }

}

export {BattleShipGame};