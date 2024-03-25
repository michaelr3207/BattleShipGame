

class Player {

    constructor(name, id) {
        this.playerId = id;
        this.name = name;
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