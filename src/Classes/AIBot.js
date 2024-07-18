

class AIBot {

    constructor(name, battleShipGame, player1) {
        this.name = name;
        this.numberOfTurns = 0;
        this.game = battleShipGame;
        this.currentAttackedCoordinates = [];
        // ToDO attributes below to be used to make AI more difficult
        this.currentStatusOfPlayer1 = player1;
        this.currentDestroyingPlayerOneShip = false;
        this.previousAttackHitShip = false;
        this.currentAttackHitShip = false;
    }

    generateRandomAttackCoordinates() {
        const randomNumber = Math.floor(Math.random() * 99);
        if(!this.currentAttackedCoordinates.includes(randomNumber)) {
            console.log('Got a new random numnber! This will be used to attack player one!');
            this.currentAttackedCoordinates.push(randomNumber);
            return randomNumber;
        }
        else{
            console.log('number already has been used by the bot! Tyring again!')
            return this.generateRandomAttackCoordinates();
        }
    }


    attackRandomPlayerOnePosition() {
        let currentNumberOfPlayerOneShipsLeft = this.game.getPlayer1().getNumberOfPlayerShips();
        if(this.game.getCurrentPlayerTurn() === this.game.getPlayer2()) {
            console.log(`AI making a move for player 2`);
            const randomAttackPosition = this.generateRandomAttackCoordinates();
            console.log(`random generated position is: ` + randomAttackPosition);
            this.attackLocationUsingCoordinates(randomAttackPosition, currentNumberOfPlayerOneShipsLeft);
        }
        else {
            console.log(`ERROR: It is now player 2's turn!!!`);
        }
    }

    attackLocationUsingCoordinates(randomAttackPosition, currentNumberOfPlayerOneShipsLeft) {
        if(this.game.playerOneGameBoard.attackShip(randomAttackPosition)){
            this.game.uIDisplay.markAttackedSquareWithShipPresentPlayer1Grid(randomAttackPosition);
        }
        else{
            this.game.uIDisplay.markAttackedSquareWithoutAnyShipPresentPlayer1Grid(randomAttackPosition);
        }
        this.checkIfPlayerOneShipWasDestroyedAfterLastAttack(currentNumberOfPlayerOneShipsLeft);
        this.game.setPlayerToPlayer1();
    }

    checkIfPlayerOneShipWasDestroyedAfterLastAttack(currentNumberOfPlayerOneShipsLeft) {
        if(this.game.getPlayer1().getNumberOfPlayerShips() === (currentNumberOfPlayerOneShipsLeft - 1)) {
            console.log('Ship has been destroyed by player 2!!!!!');
            this.game.uIDisplay.removeDestroyedPlayer1ShipFromUI(this.game.playerOneGameBoard.getAllCells());
        }
        if(this.game.getPlayer1().getNumberOfPlayerShips() === 0) {
            console.log('AI bot has won the game!')
            this.game.uIDisplay.showGameOverScreen();
        }
    }


}

export {AIBot};