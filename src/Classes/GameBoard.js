import {Cell} from "./Cell";
import {CELL_TAKEN_ERROR, CELL_TAKEN_MESSAGE, coordinateReader} from "../Util";

class GameBoard {

    constructor(name, player) {
        this.ownerOfBoard = player;
        this.name = name;
        this.maxNumberOfCells = 100;
        this.allCells = this.createGameCells();
        this.currentOccupiedGridPoints = [];  //ToDo add all ships to here instead of player class,
        this.missedShots = [];
        this.markedCells = [];
    }

    clearBoardData() {
        this.currentOccupiedGridPoints = [];
        this.missedShots = [];
        this.markedCells = [];
    }

    checkForMissedShot(targetLocation) {
        for(let currentShot of this.missedShots)
            if(currentShot === targetLocation)
                return true;
        return false;
    }

    checkForAccurateShot(targetLocation) {
       for(let currentShot of this.markedCells)
           if(currentShot === targetLocation)
               return true;
        return false;
    }

    addPointToOccupiedAreas(occupiedCell) {
        this.currentOccupiedGridPoints.push(occupiedCell);
    }

    addMissedShot(targetLocation) {
        this.missedShots.push(targetLocation);
    }

    addMarkedShot(targetLocation) {
        this.markedCells.push(targetLocation);
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

    resetBoard() {
        this.getAllCells().forEach((currentCell) => {
           currentCell.shipOnCell = null;
           currentCell.hasBeenMarked = false;
        });
        this.clearBoardData();
    }

    getCellById(cellId) {
        for(let item of this.allCells)
            if(item.getCellId().toString() === cellId.toString())
                return item;
        return null;
    }



    attackShip(targetLocation) {
        for (let item of this.allCells) {
            console.log('attempting to strike ship...');
            if (item.getShipOnCell() !== null && targetLocation.toString() === item.getCellId().toString() && !item.getIsMarked()) {
                console.log('hit!!!!!!!!!!');
                this.addMarkedShot(targetLocation);
                item.getShipOnCell().hit();
                item.markCell();
                if(item.getShipOnCell().getIsSunk()) {
                    console.log('Owner of board ' + this.ownerOfBoard);
                    this.ownerOfBoard.changeShipStatus(item.getShipOnCell().getShipName());
                    console.log(this.ownerOfBoard + 'ship has been successfully destoryed!');
                    if(this.ownerOfBoard.checkForShip(item.getShipOnCell().getShipName())) {
                        console.log('Now removing the destoyed ship from ' + this.ownerOfBoard.getName() + 'ship list.');
                        this.ownerOfBoard.searchAndRemoveShip(item.getShipOnCell().getShipName());
                        console.log('DIsplaying content before passed to UI');
                        console.log(this.allCells);
                    }
                }
                break;   // ToDO - add in checks to see if a square has been hit before
            }
            else if(targetLocation.toString() === item.getCellId().toString()) {
                if(!item.getIsMarked()) {
                    item.markCell();
                    this.addMissedShot(targetLocation);
                    // alert('Missed Shot!');
                    return false;
                }
                else {
                    // alert('Cannot shoot there! SPot taken');
                    console.log(CELL_TAKEN_ERROR);
                    return false;
                }
            }
        }
        // alert('MISS!!');
        console.log(CELL_TAKEN_MESSAGE);
        return true;
    }

    plotShipOnPlayerGrid(startingPosition, ship) {  //ToDo rename
        console.log('CUrrent brug X AXIS starting position is: ' + startingPosition)
        let counter = 0;
        startingPosition = Number.parseInt(startingPosition);
        startingPosition = startingPosition - ship.getCellSize();  //ToDO - change this maybe?
        let currentPosition = startingPosition;
        let isShipAvailable = true;
       this.getAllCells().forEach((item) => {
            if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < ship.getCellSize()){
                if(this.currentOccupiedGridPoints.includes(currentPosition)) {
                    console.log('ERROR : These coordinates are taken! Returning false!');
                    isShipAvailable = false;
                }
                this.addPointToOccupiedAreas((startingPosition + counter));
                console.log('plotted!!')
                item.setShipOnCell(ship)
                counter++;
                currentPosition += counter;
            }
        });

        console.log('Cell is free X Grid!');
        return isShipAvailable;
    }


    plotShipOnPlayerGridYAxis(startingPosition, ship) {
        console.log('Current occupied coordinates: ' + this.currentOccupiedGridPoints.toString())
        console.log('CUrrent brug starting position is: ' + startingPosition)
        let counter = 0;
        let isShipAvailable = true;
        startingPosition = Number.parseInt(startingPosition);
        let currentPosition = startingPosition;
        this.getAllCells().forEach((item) => {
            if((item.getCellId().toString() ===  (startingPosition + counter).toString()) && counter < (ship.getCellSize() * 10)){
                if(this.currentOccupiedGridPoints.includes(currentPosition)) {
                    console.log('ERROR : These coordinates are taken! Returning false!');
                    isShipAvailable = false;
                }
                this.addPointToOccupiedAreas(startingPosition + counter);
                console.log('plotted!!')
                console.log('current started pos new '  +  startingPosition);
                item.setShipOnCell(ship)
                counter += 10;
                currentPosition += counter;
                // startingPosition = startingPosition + 10;
            }
        });
        console.log('Cell is free! Y grid');
        return isShipAvailable;
    }


    checkIfGridCellIsAvailable(startingPosition, currentShip) {
        console.log(`Current  ship first -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% weird error> ${currentShip.getShipName()}`);
        console.log(`][]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] ${startingPosition.toString()}`);
        let extractedAxis = startingPosition.charAt(startingPosition.length-1);
        console.log(`][]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] this one ${extractedAxis}`);
        startingPosition = Number.parseInt(startingPosition);
        const occupiedCells = this.getOccupiedCells();
        if(extractedAxis === 'Y')
            return this.checkCellAvailabilityYAxis(startingPosition, currentShip, occupiedCells);
        else
            return this.checkCellAvailabilityXAxis(startingPosition, currentShip, occupiedCells);
    }


    checkCellAvailabilityYAxis(startingPosition, ship, occupiedCells) {
        let counter = 0;
        while(counter < ship.getCellSize()) {
            if(occupiedCells.includes(startingPosition)) {
                console.log('--------------> ALREADY EXISTS AS A CELL')
                return false;
            }
            counter ++;
            startingPosition += 10;
        }
        console.log('--------------> DONT EXISTS AS A CELL')
        return true;
    }

    checkCellAvailabilityXAxis(startingPosition, ship, occupiedCells) {
        let counter = 0;
        while(counter < ship.getCellSize()) {
            if(occupiedCells.includes(startingPosition)) {
                console.log('--------------> ALREADY EXISTS AS A CELL');
                return false;
            }
            counter ++;
            startingPosition += 1;
        }
        console.log('--------------> DONT EXISTS AS A CELL')
        return true;
    }

    getOccupiedCells() {
        return this.currentOccupiedGridPoints;
    }
}

export {GameBoard};