import {Player} from "./Player";


class BattleShipGame {

    constructor(name) {
        this.name = name;
        this.noOfPlayers = 0;
        this.gamePlayers = [];
        this.totalNumberOfShips = 0;
        this.player1Ships = [];
        this.player2Ships = [];
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

    getNumberOfPlayers() {
        return this.noOfPlayers;
    }

    getNumberOfShips() {
        return this.totalNumberOfShips;
    }
}

export {BattleShipGame};