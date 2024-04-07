import {Cell} from "./Cell";
import {CELL_TAKEN_ERROR, CELL_TAKEN_MESSAGE, coordinateReader} from "../Util";
import {UIDisplay} from "./UIDisplay";

class GameBoard {

    constructor(name) {
        this.name = name;
        this.maxNumberOfCells = 100;
        this.allCells = this.createGameCells();
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

    getCellById(cellId) {
        for(let item of this.allCells)
            if(item.getCellId().toString() === cellId.toString())
                return item;
        return null;
    }



    attackShip(targetLocation, player) {
        // console.log(`Before testing hit on ship-------------->`);
        // console.log(this.allCells);
        const playerBoard = player.getBoard();
        // console.log(`---------------------->>> ${targetLocation}`);
        for (let item of this.getAllCells()) {
            // console.log(item)
            // console.log(item.getShipOnCell());
            if (item.getShipOnCell() !== null && targetLocation.toString() === item.getCellId().toString() && !item.getIsMarked()) {
                if(item.getShipOnCell().getNumberOfHits() === 0)
                    alert('0 detecetdd');
                console.log('hit!!!!!!!!!!');
                item.getShipOnCell().hit();
                item.markCell();
                break;   // ToDO - add in checks to see if a square has been hit before
            }
            else if(targetLocation.toString() === item.getCellId().toString()){
                if(!item.getIsMarked())
                    item.markCell();
                else
                    return CELL_TAKEN_ERROR;
            }
        }
        // console.log(this.allCells);
        return CELL_TAKEN_MESSAGE;
    }

    plotShipOnPlayerGrid(startingPosition, ship, battleShipGame) {
        let counter = 0;
        startingPosition = startingPosition - ship.getCellSize();
        battleShipGame.getPlayerOneGameBoard().getAllCells().forEach((item) => {
            if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < ship.getCellSize()){
                console.log('plotted!!')
                item.setShipOnCell(ship)
                counter++;
            }
        });
        console.log('dssddsssssssssssssssssssssssssssssssssssssssssssssssssss')
        console.log(`ddd` + this.allCells);
    }
}

export {GameBoard};