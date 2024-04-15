import {Cell} from "./Cell";
import {CELL_TAKEN_ERROR, CELL_TAKEN_MESSAGE, coordinateReader} from "../Util";
import {UIDisplay} from "./UIDisplay";

class GameBoard {

    constructor(name, player) {
        this.ownerOfBoard = player
        this.name = name;
        this.maxNumberOfCells = 100;
        this.allCells = this.createGameCells();
        this.currentOccupiedGridPoints = [];  //ToDo add all ships to here instead of player class,
    }

    addPointToOccupiedAreas(occupiedCell) {
        this.currentOccupiedGridPoints.push(occupiedCell);
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



    attackShip(targetLocation, battleShipGame) {
        // console.log(`Before testing hit on ship-------------->`);
        // console.log(this.allCells);
        // console.log(`---------------------->>> ${targetLocation}`);  //ToDO add end game logic
        for (let item of this.getAllCells()) {
            // console.log(item);
            // console.log(item.getShipOnCell());
            if (item.getShipOnCell() !== null && targetLocation.toString() === item.getCellId().toString() && !item.getIsMarked()) {
                if(item.getShipOnCell().getNumberOfHits() === 0)
                    alert('0 detecetdd');
                console.log('hit!!!!!!!!!!');
                item.getShipOnCell().hit();
                item.markCell();
                if(item.getShipOnCell().getIsSunk()) {
                    this.ownerOfBoard.changeShipStatus(item.getShipOnCell().getShipName());
                    console.log('first destoryed ship found!!!!');
                    if(this.ownerOfBoard.checkForShip(item.getShipOnCell().getShipName())) {
                        console.log('destoryed ship found!!!!');
                        this.ownerOfBoard.searchAndRemoveShip(item.getShipOnCell().getShipName());
                        battleShipGame.endTheGame();
                    }
                }
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
        startingPosition = startingPosition - ship.getCellSize();  //ToDO - change this maybe?
        if(!this.checkIfGridCellIsAvailable(startingPosition))
            return CELL_TAKEN_ERROR;
        battleShipGame.getPlayer1().getPlayerGameBoard().getAllCells().forEach((item) => {
            if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < ship.getCellSize()){
                this.addPointToOccupiedAreas((startingPosition + counter));
                console.log('plotted!!')
                item.setShipOnCell(ship)
                counter++;
            }
        });
        console.log('dssddsssssssssssssssssssssssssssssssssssssssssssssssssss')
        console.log(`ddd` + this.allCells);
        return "Cell is available"
    }

    checkIfGridCellIsAvailable(startingPosition) {
        const occupiedCells = this.getOccupiedCells();
        if(occupiedCells.includes(startingPosition))
            return false;
        return true;
    }

    getOccupiedCells() {
        return this.currentOccupiedGridPoints;
    }
}

export {GameBoard};