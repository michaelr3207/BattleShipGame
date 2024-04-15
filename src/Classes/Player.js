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
                console.log('tryung to reemove the ship!...')
                this.playerShips.splice(index, 1);
                this.totalNumberOfSHips--;
            }
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

    // getBoard() {
    //     return this.board;
    // }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getId() {
        return this.playerId;
    }

    setId(value) {
        this.id = value;
    }

    getGrid() {
        return this.grid;
    }
}

export {Player};