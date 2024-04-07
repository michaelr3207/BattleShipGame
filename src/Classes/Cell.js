import {Boat} from "./Boat";

class Cell {

    constructor(id) {
        this.cellId = id;
        this.shipOnCell = null;
        this.hasBeenMarked = false;
    }

    markCell() {
        this.hasBeenMarked = true;
    }

    getCellId() {
        return this.cellId;
    }

    getId() {
        return this.cellId;
    }

    setI(value) {
        this.cellId = value;
    }

    getShipOnCell() {
        return this.shipOnCell;
    }

    setShipOnCell(selectedShip) {
        this.shipOnCell = selectedShip;
    }

    getIsMarked() {
        return this.hasBeenMarked;
    }
}

export {Cell};