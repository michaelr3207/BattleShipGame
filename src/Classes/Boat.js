

class Boat {
    constructor(name, cellSize, player) {
        this.shipName = name;
        this.shipOwner = player;
        this.cellSize = cellSize;
        this.isSunk = false;
        this.numberOfHits = 0;
    }

    sinkShip() {
        this.isSunk = true;
    }

    hit() {
        this.numberOfHits++;
        if(this.getNumberOfHits() === this.getCellSize())
            this.sinkShip();
    }

    getNumberOfHits() {
        return this.numberOfHits;
    }

    getIsSunk() {
        return this.isSunk;
    }

    getShipName() {
        return this.shipName;
    }

    getShipOwner() {
        return this.shipOwner;
    }

    setName(value) {
        this.name = value;
    }

    getCellSize() {
        return this.cellSize;
    }

    setCellSize(value) {
        this.cellSize = value;
    }
}

export {Boat};