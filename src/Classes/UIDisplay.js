

class  UIDisplay {

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
}

export {UIDisplay};