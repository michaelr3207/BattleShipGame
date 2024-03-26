

class Player {

    constructor(name, id) {
        this.playerId = id;
        this.name = name;
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
        return this.id;
    }

    setId(value) {
        this.id = value;
    }
}

export {Player};