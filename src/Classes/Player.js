import {Boat} from "./Boat";


class Player {

    constructor(name, id) {
        this.playerId = id;
        this.name = name;
        this.grid = 'grid' + this.getId();
        this.playerShips = this.addShipsToPlayer();
        this.totalNumberOfSHips = 5;
    }

    addShipsToPlayer() {
        const allPlayerShips = [];
        const destroyerShip = new Boat('Destroyer', 5, this);
        const cruiserShip = new Boat('Cruiser', 4, this);
        const reconShip = new Boat('Recon', 3, this);
        const battleShip = new Boat('Battle', 2, this);
        const corvetteShip = new Boat('Corvette', 1, this);
        allPlayerShips.push(destroyerShip);
        allPlayerShips.push(cruiserShip);
        allPlayerShips.push(reconShip);
        allPlayerShips.push(battleShip);
        allPlayerShips.push(corvetteShip);
        return allPlayerShips;
    }

    searchAndRemoveShip(nameOfShipToBeRemoved) {
        for(let index = 0; index < this.playerShips.length; index++ ){
            if(this.playerShips[index].getName() === nameOfShipToBeRemoved) {
                this.playerShips.splice(index, 1);
                this.totalNumberOfSHips--;
            }
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