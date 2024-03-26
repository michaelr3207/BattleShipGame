

class  UIDisplay {

    constructor() {
        this.boardPlayer1 = document.getElementById('grid1'); //ToDo - add to UI display class
        this.boardPlayer2 = document.getElementById('grid2'); //ToDo - add to UI display class
    }

    markAttackedTargetOnGrid(targetLocation, player) {
        let targetedGrid;
        if(player.getId() === 0)
            targetedGrid = this.getPlayer1Board().id;
        else
            targetedGrid = this.getPlayer2Board().id;
        const targetedLocationOnGrid = targetedGrid;
    }

    getPlayer1Board() {
        return this.boardPlayer1;
    }

    getPlayer2Board() {
        return this.boardPlayer2;
    }
}