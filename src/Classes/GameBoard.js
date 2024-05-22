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
                this.addMarkedShot(targetLocation);
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
            else if(targetLocation.toString() === item.getCellId().toString()) {
                if(!item.getIsMarked()) {
                    item.markCell();
                    this.addMissedShot(targetLocation)
                }
                else {
                    console.log(CELL_TAKEN_ERROR);
                    return false;
                }
            }
        }
        // console.log(this.allCells);
        console.log(CELL_TAKEN_MESSAGE);
        return true;
    }

    plotShipOnPlayerGrid(startingPosition, ship) {
        let counter = 0;
        startingPosition = Number.parseInt(startingPosition);
        // startingPosition = startingPosition - ship.getCellSize();  //ToDO - change this maybe?
        // if(!this.checkIfGridCellIsAvailable(startingPosition)) {
        //     console.log(CELL_TAKEN_ERROR);
        //     return false;
        // }
       this.getAllCells().forEach((item) => {
            if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < ship.getCellSize()){
                this.addPointToOccupiedAreas((startingPosition + counter));
                console.log('plotted!!')
                item.setShipOnCell(ship)
                counter++;
            }
        });
        // console.log('dssddsssssssssssssssssssssssssssssssssssssssssssssssssss')
        // console.log(`ddd` + this.allCells);
        console.log('Cell is free!');
        return true;
    }

    // checkIfShipFits(startingPosition, ship) {
    //     let counter = 0;
    //     startingPosition = Number.parseInt(startingPosition);
    //     // startingPosition = startingPosition - ship.getCellSize();  //ToDO - change this maybe?
    //     if(!this.checkIfGridCellIsAvailable(startingPosition)) {
    //         console.log(CELL_TAKEN_ERROR);
    //         return false;
    //     }
    //     this.getAllCells().forEach((item) => {
    //         if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < ship.getCellSize()){
    //             console.log('plotted!!')
    //             counter++;
    //         }
    //     });
    //     // console.log('dssddsssssssssssssssssssssssssssssssssssssssssssssssssss')
    //     // console.log(`ddd` + this.allCells);
    //     console.log('Cell is free!');
    //     return true;
    // }

    plotShipOnPlayerGridYAxis(startingPosition, ship) {
        console.log('CUrrent brug starting position is: ' + startingPosition)
        let counter = 0;
        startingPosition = Number.parseInt(startingPosition);
        // if(!this.checkIfGridCellIsAvailable(startingPosition)) {
        //     console.log(CELL_TAKEN_ERROR);
        //     return false;
        // }
        this.getAllCells().forEach((item) => {
            if((item.getCellId().toString() === (startingPosition + counter).toString()) && counter < (ship.getCellSize() * 10)){
                this.addPointToOccupiedAreas((startingPosition + counter));
                console.log('plotted!!')
                item.setShipOnCell(ship)
                counter = counter + 10;
                // startingPosition = startingPosition + 10;
            }
        });
        console.log('Cell is free! X grid');
        return true;
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

        // if(occupiedCells.includes(startingPosition))
        //     return false;
        // return true;
    }


    checkCellAvailabilityYAxis(startingPosition, ship, occupiedCells) {
        console.log(`Current taken ship positions -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${occupiedCells}`);
        console.log(`Current  ship  -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${ship}`);

        let counter = 0;
        while(counter < ship.getCellSize()) {
            if(occupiedCells.includes(startingPosition))
                return false;
            counter ++;
            startingPosition += 10;
        }
        return true;
    }

    checkCellAvailabilityXAxis(startingPosition, ship, occupiedCells) {
        console.log(`Current  ship  -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${ship}`);
        console.log(`Current taken ship positions X axis version -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${occupiedCells}`);
        let counter = 0;
        while(counter < ship.getCellSize()) {
            if(occupiedCells.includes(startingPosition))
                return false;
            counter ++;
            startingPosition += 1;
        }
        return true;
    }

    getOccupiedCells() {
        return this.currentOccupiedGridPoints;
    }
}

export {GameBoard};