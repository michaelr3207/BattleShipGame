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