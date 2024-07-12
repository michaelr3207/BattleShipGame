
import {GameBoard} from "./GameBoard";


class  UIDisplay {  //ToDO add to game class (battleshipgame object)

    constructor() {
        this.boardPlayer1 = document.getElementById('grid1');
        this.boardPlayer2 = document.getElementById('grid2');
    }

    markAttackedTargetOnGrid(targetLocation, player) {
        let targetedGrid;
        if(player.getId() === 1)
            targetedGrid = this.getPlayer1Board().id;
        else if (player.getId() === 2)
            targetedGrid = this.getPlayer2Board().id;
        const targetedLocationOnGrid = document.getElementById(targetedGrid + targetLocation);
        targetedLocationOnGrid.style.background = 'red';
    }

    getPlayer1Board() {
        return this.boardPlayer1;
    }

    getPlayer2Board() {
        return this.boardPlayer2;
    }

    removeDestroyedPlayer2ShipFromUI(gameboard) {
        for(let item of gameboard){
            if(item.getShipOnCell() !== null){
                console.log( 'test2' + item.getShipOnCell().getIsSunk());
            }
        }
        for(let item of gameboard){
            if(item.getShipOnCell() !== null && item.getShipOnCell().getIsSunk()) {
                const gridSquareToBeErased = document.getElementById('grid2' + item.getCellId());
                gridSquareToBeErased.style.background = 'black';
            }
        }
    }

    markAttackedSquareWithShipPresent(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid2' + targetLocation);
        gridSquareToBeErased.style.background = 'orange';
    }

    markAttackedSquareWithoutAnyShipPresent(targetLocation) {
        const gridSquareToBeErased = document.getElementById('grid2' + targetLocation);
        gridSquareToBeErased.style.background = 'black';
    }
}

export {UIDisplay};