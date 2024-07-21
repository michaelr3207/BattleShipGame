import {Boat} from "./Boat";
import {GameBoard} from "./GameBoard";


class Player {

    constructor(name, id) {
        this.playerId = id;
        this.name = name;
        this.grid = 'grid' + this.getId();
        this.playerShips = this.addShipsToPlayer();
        this.totalNumberOfSHips = 5;
        this.playerGameBoard = new GameBoard(`Player${id} board`, this);
    }

    getPlayerGameBoard() {
        return this.playerGameBoard;
    }

    getNumberOfPlayerShips() {
        return this.playerShips.length;
    }

    addShipsToPlayer() {
        const allPlayerShips = [];
        const destroyerShip = new Boat(this.name + 'Destroyer', 5, this);
        const cruiserShip = new Boat(this.name +'Cruiser', 4, this);
        const reconShip = new Boat(this.name +'Recon', 3, this);
        const battleShip = new Boat(this.name +'Battle', 2, this);
        const corvetteShip = new Boat(this.name +'Corvette', 1, this);
        allPlayerShips.push(destroyerShip);
        allPlayerShips.push(cruiserShip);
        allPlayerShips.push(reconShip);
        allPlayerShips.push(battleShip);
        allPlayerShips.push(corvetteShip);
        return allPlayerShips;
    }

    searchAndRemoveShip(nameOfShipToBeRemoved) {
        console.log(nameOfShipToBeRemoved);
        for(let index = 0; index < this.playerShips.length; index++ ){
            if(this.playerShips[index].getShipName() === nameOfShipToBeRemoved && this.playerShips[index].getIsSunk()) {
                console.log('trying to remove the ship!...')
                console.log('Total number of ships before: ' + this.totalNumberOfSHips);
                this.playerShips.splice(index, 1);
                this.totalNumberOfSHips--;
                console.log('Total number of ships after: ' + this.totalNumberOfSHips);
            }
        }
        if(this.totalNumberOfSHips === 0) {
            alert('GAME OVER!');
        }
    }

    getShipByName(nameOfShip) {
        if(!this.checkForShip(nameOfShip))
            return "";
        console.log('ship exists')
        for(let currentShip of this.playerShips)
            if(currentShip.getShipName() === nameOfShip)
                return currentShip;
    }

    changeShipStatus(nameOfShipToBeChanged) {
        for(let currentShip of this.playerShips){
            if(currentShip.getShipName() === nameOfShipToBeChanged)
                currentShip.sinkShip();
        }
    }

    checkForShip(nameOfShipToBeRemoved) {
        for(let currentShip of this.playerShips)
            if(currentShip.getShipName() === nameOfShipToBeRemoved)
                return true;
        return false;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.playerId;
    }

    getGrid() {
        return this.grid;
    }
}

export {Player};