
class Cell {

    constructor(id) {
        this.cellId = id;
        this.shipOnCell = null;
        this.id = id;
    }

    getCellId() {
        return this.cellId;
    }

    getId() {
        return this.id;
    }

    setI(value) {
        this.id = value;
    }

    getShipOnCell() {
        return this.shipOnCell;
    }

    setShipOnCell(selectedShip) {
        this.shipOnCell = selectedShip;
    }
}

export {Cell};