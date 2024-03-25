import {Player} from "./Player";


class BattleShipGame {

    constructor(name) {
        this.name = name;
        this.noOfPlayers = 0;
        this.gamePlayers = [];
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
}

export {BattleShipGame};