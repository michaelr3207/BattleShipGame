import {Cell} from "./Cell";
import {coordinateReader} from "../Util";
import {UIDisplay} from "./UIDisplay";

class GameBoard {

    constructor(name) {
        this.name = name;
        this.maxNumberOfCells = 100;
        this.allCells = this.createGameCells();
        this.uiDisplay = new UIDisplay();
    }

    createGameCells() {
        let gameCells = [];
        for(let index = 0; index < this.maxNumberOfCells; index++)
            gameCells.push(new Cell(index));
        return gameCells;
    }

    getAllCells() {
        return this.allCells;
    }

    attackShip(coordinates, player) {
        const playerBoard = player.getBoard();
        const calculatedCoordinatePosition = coordinateReader(coordinates);
        console.log(`---------------------->>> ${calculatedCoordinatePosition}`);
        this.uiDisplay.markAttackedTargetOnGrid(calculatedCoordinatePosition, player);
        // this.allCells.forEach(item => {
        //     console.log(item.shipOnCell)
        //     if(item.getShipOnCell() !== null) {
        //         console.log('hit!!!!!!!!!!')
        //         item.getShipOnCell.hit();
        //     }
        // });
        console.log('bbdddddd');
        console.log(this.getAllCells());
        for (let item of this.getAllCells()) {
            console.log(item.shipOnCell);
            if (item.getShipOnCell() === null) {
                console.log('hit!!!!!!!!!!');
                item.getShipOnCell.hit();
            }
        }
        console.log(this.allCells);
    }
}

export {GameBoard};