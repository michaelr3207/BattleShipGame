

class AIBot {

    constructor(name, battleShipGame, player1) {
        this.name = name;
        this.numberOfTurns = 0;
        this.game = battleShipGame;
        this.currentAttackedCoordinates = [];
        // ToDO attributes below to be used to make AI more difficult
        this.currentStatusOfPlayer1 = player1;
        this.currentlyDestroyingPlayerOneShip = false;
        this.previousAttackHitShip = false;
        this.currentAttackHitShip = false;
        this.currentPlannedMove = "+1"
        this.coordinatesOfLastSuccesfulAttack = null;
        this.nextAttackOptions = ["+1", "-1", "+10", "-10"];
       this.indexOfCurrentAttackOptions= 0;
       this.currentCoordinatedAttackOnDamagedShip = null;
       this.coordinatesOfFirstSuccessfulAttackOnEnemyShip = null;
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


    attackPlayerOnePosition() {
        let currentNumberOfPlayerOneShipsLeft = this.game.getPlayer1().getNumberOfPlayerShips();
        if(this.game.getCurrentPlayerTurn() === this.game.getPlayer2()) {
            console.log(`AI making a move for player 2`);
            if(this.currentlyDestroyingPlayerOneShip){
                console.log('AIBot: Currentlty in the process of destroying one of player 1 ships');
                this.attemptToAnotherSuccessfulStrikeOnAShipThatIsCurrentBeingDestroyed(currentNumberOfPlayerOneShipsLeft);
            }
            else {
                const randomAttackPosition = this.generateRandomAttackCoordinates();
                console.log(`random generated position is: ` + randomAttackPosition);
                this.attackLocationUsingCoordinates(randomAttackPosition, currentNumberOfPlayerOneShipsLeft);
            }
        }
        else {
            console.log(`ERROR: It is now player 2's turn!!!`);
        }
    }

    attemptToAnotherSuccessfulStrikeOnAShipThatIsCurrentBeingDestroyed(currentNumberOfPlayerOneShipsLeft) {
        if(this.previousAttackHitShip) {
            console.log('AIBot: There has been a previous successful attack on this ship.')
            this.translatePlannedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft);
        }
        else {
            console.log('AIBot: Last shot missed, changing target location.')
            this.indexOfCurrentAttackOptions ++;
            this.currentPlannedMove = this.nextAttackOptions[this.indexOfCurrentAttackOptions];
            this.translateCorrectedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft);
        }
    }

    translatePlannedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft) {
        this.currentCoordinatedAttackOnDamagedShip = this.coordinatesOfLastSuccesfulAttack;
        switch (this.currentPlannedMove) {
            case "+1" : this.currentCoordinatedAttackOnDamagedShip ++; break;
            case "-1" : this.currentCoordinatedAttackOnDamagedShip --; break;
            case "+10" : this.currentCoordinatedAttackOnDamagedShip += 10; break;
            case "-10" : this.currentCoordinatedAttackOnDamagedShip -= 10; break;
        }
        console.log('Next planned attack! : ' + this.currentCoordinatedAttackOnDamagedShip);
        return this.attackLocationUsingCoordinates(this.currentCoordinatedAttackOnDamagedShip, currentNumberOfPlayerOneShipsLeft);
    }

    translateCorrectedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft) {
        let adjustedTarget = this.coordinatesOfFirstSuccessfulAttackOnEnemyShip;
        switch (this.currentPlannedMove) {
            case "+1" : adjustedTarget ++; break;
            case "-1" : adjustedTarget --; break;
            case "+10" : adjustedTarget += 10; break;
            case "-10" : adjustedTarget -= 10; break;
        }
        console.log('Next planned corrected attack! : ' + adjustedTarget);
        return this.attackLocationUsingCoordinates(adjustedTarget, currentNumberOfPlayerOneShipsLeft);
    }

    attackLocationUsingCoordinates(randomAttackPosition, currentNumberOfPlayerOneShipsLeft) {
        if(this.game.playerOneGameBoard.attackShip(randomAttackPosition)) {
            console.log('AIBOt: Attack was successfull!!!');
            if(!this.currentlyDestroyingPlayerOneShip) {
                console.log('AIBot: Coordinates of first successful attack on boat are: ' + randomAttackPosition);
                this.coordinatesOfFirstSuccessfulAttackOnEnemyShip = randomAttackPosition;
                this.currentlyDestroyingPlayerOneShip = true;
            }
            this.coordinatesOfLastSuccesfulAttack = randomAttackPosition;
            this.previousAttackHitShip = true;
            this.game.uIDisplay.markAttackedSquareWithShipPresentPlayer1Grid(randomAttackPosition);
        }
        else {
            this.previousAttackHitShip = false;
            this.game.uIDisplay.markAttackedSquareWithoutAnyShipPresentPlayer1Grid(randomAttackPosition);
        }
        this.checkIfPlayerOneShipWasDestroyedAfterLastAttack(currentNumberOfPlayerOneShipsLeft);
        this.game.setPlayerToPlayer1();
    }

    checkIfPlayerOneShipWasDestroyedAfterLastAttack(currentNumberOfPlayerOneShipsLeft) {
        if(this.game.getPlayer1().getNumberOfPlayerShips() === (currentNumberOfPlayerOneShipsLeft - 1)) {
            this.currentlyDestroyingPlayerOneShip = false;
            this.indexOfCurrentAttackOptions = 0;
            this.coordinatesOfFirstSuccessfulAttackOnEnemyShip = null;
            this.currentCoordinatedAttackOnDamagedShip = null;
            this.currentPlannedMove = '+1';
            console.log('Ship has been destroyed by player 2!!!!!');
            this.game.uIDisplay.removeDestroyedPlayer1ShipFromUI(this.game.playerOneGameBoard.getAllCells());
        }
        if(this.game.getPlayer1().getNumberOfPlayerShips() === 0) {
            console.log('AI bot has won the game!')
            this.game.setGameWinner(this.game.getPlayer2().getName());
            this.game.uIDisplay.showGameOverScreen();
        }
    }


}

export {AIBot};