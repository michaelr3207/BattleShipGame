

class Player {

    constructor(name, id) {
        this.playerId = id;
        this.name = name;
        this.grid = 'grid' + this.getId();
    }

    getBoard() {
        return this.board;
    }

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