import {Boat} from "./Boat";

class Cell {

    constructor(id) {
        this.cellId = id;
        this.shipOnCell = null;
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
}

export {Cell};