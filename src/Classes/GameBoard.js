import {Cell} from "./Cell";

class GameBoard {

    constructor(name) {
        this.name = name;
        this.maxNumberOfCells = 100;
        this.allCells = this.createGameCells();
    }

    createGameCells() {
        let gameCells = [];
        for(let index = 0; index < this.maxNumberOfCells; index++)
            gameCells.push(new Cell(0));
        return gameCells;
    }

    getAllCells() {
        return this.allCells;
    }
}

export {GameBoard};