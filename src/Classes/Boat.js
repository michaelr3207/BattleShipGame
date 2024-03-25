

class Boat {
    constructor(name, cellSize, player) {
        this.shipName = name;
        this.shipOwner = player;
        this.cellSize = cellSize;
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