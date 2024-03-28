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
        console.log(`Before testing hit on ship-------------->`);
        console.log(this.allCells);
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
        // console.log('bbdddddd');
        // console.log(this.getAllCells());
        for (let item of this.getAllCells()) {
            console.log(item.getShipOnCell());
            if (item.getShipOnCell() !== null && calculatedCoordinatePosition.toString() === item.getCellId().toString()) {
                if(item.getShipOnCell().getNumberOfHits() === 0)
                    alert('0 detecetdd');
                console.log('hit!!!!!!!!!!');
                item.getShipOnCell().hit();
                break;   // ToDO - add in checks to see if a square has been hit before
            }
        }
        // console.log(this.allCells);
    }
}

export {GameBoard};