


class AIBot {

    constructor(name, battleShipGame, player1) {
        this.name = name;
        this.game = battleShipGame;
        this.currentAttackedCoordinates = [];

        // attributes below to be used to make AI more intelligent
        this.currentlyDestroyingPlayerOneShip = false;
        this.previousAttackHitShip = false;
        this.currentPlannedMove = "+1"
        this.coordinatesOfLastSuccesfulAttack = null;
        this.nextAttackOptions = ["+1", "-1", "+10", "-10"];
       this.indexOfCurrentAttackOptions= 0;
       this.currentCoordinatedAttackOnDamagedShip = null;
       this.coordinatesOfFirstSuccessfulAttackOnEnemyShip = null;
    }


    generateRandomPlayer2Boats() {
        console.log('AIBOT: Attempting to generate random player 2 boats.')
        let randomGeneratedAxis = 'Y';
        const allCells = this.game.playerTwoGameBoard.getAllCells();
        let index = 0;
        do {
            const randomGeneratedNumber = Math.floor(Math.random() * 99);
            const builtUpCoordinate = randomGeneratedNumber + randomGeneratedAxis;
            console.log('Random build up coordinate: ' + builtUpCoordinate);
            if(randomGeneratedAxis === 'Y') {
                if(this.game.checkShipStartingPositionYAxis(builtUpCoordinate, this.game.getCurrentPlayer2SelectedBoat(), this.game, this.game.player2)) {
                    console.log('Player 2 boat placed succesfully!!!');
                    this.game.changePlayer2BoatSelection();
                    index ++;
                    console.log(allCells)
                    randomGeneratedAxis = 'X'
                }
                else {
                    console.log('Player 2 boat failure');
                    index = 0;
                    this.game.resetPlayer2BoatSelection();
                    console.log(allCells)

                }
            }
            else {
                if(this.game.checkShipStartingPositionXAxis(builtUpCoordinate, this.game.getCurrentPlayer2SelectedBoat(), this.game, this.game.player2)) {
                    console.log('Player 2 boat placed succesfully!!!');
                    this.game.changePlayer2BoatSelection();
                    index ++;
                    console.log(allCells)
                    randomGeneratedAxis = 'Y'
                }
                else {
                    console.log('Player 2 boat failure');
                    this.game.resetPlayer2BoatSelection();
                    index = 0;
                    console.log(allCells)
                }
            }
            if(this.game.indexOfCurrentPlayer2SelectedBoat === 5) {
                alert('All player 2 boats successfully placed!');
                this.game.hasGameStarted = true;
                // this.game.uIDisplay.addShipsToPlayerTwoGrid();
                break;
            }
        }
        while (true);
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
            this.translateFollowUpAttackAfterPreviousSuccessfulAttack(currentNumberOfPlayerOneShipsLeft);
        }
        else {
            console.log('AIBot: Last shot missed, changing target location.')
            this.indexOfCurrentAttackOptions ++;
            this.currentPlannedMove = this.nextAttackOptions[this.indexOfCurrentAttackOptions];
            this.translateCorrectedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft);
        }
    }

    translateFollowUpAttackAfterPreviousSuccessfulAttack(currentNumberOfPlayerOneShipsLeft) {
        this.currentCoordinatedAttackOnDamagedShip = this.coordinatesOfLastSuccesfulAttack;
        switch (this.currentPlannedMove) {
            case "+1" : this.currentCoordinatedAttackOnDamagedShip ++; break;
            case "-1" : this.currentCoordinatedAttackOnDamagedShip --; break;
            case "+10" : this.currentCoordinatedAttackOnDamagedShip += 10; break;
            case "-10" : this.currentCoordinatedAttackOnDamagedShip -= 10; break;
        }
        console.log('Next planned attack! : ' + this.currentCoordinatedAttackOnDamagedShip);
        if(this.currentAttackedCoordinates.includes(this.currentCoordinatedAttackOnDamagedShip)  || this.currentCoordinatedAttackOnDamagedShip < 0 || this.currentCoordinatedAttackOnDamagedShip > 99) {
            this.currentCoordinatedAttackOnDamagedShip = this.generateRandomAttackCoordinates();
        }
        else {
            this.currentAttackedCoordinates.push(this.currentCoordinatedAttackOnDamagedShip);
        }
        this.attackLocationUsingCoordinates(this.currentCoordinatedAttackOnDamagedShip, currentNumberOfPlayerOneShipsLeft);
    }

    /*
    This method will be triggered if the AI failed on its previous shot when trying to destroy a boat that is damaged,
    the code allows the original successful strike to be altered to ensure the targeted boat is eventually sunk.
    * */
    translateCorrectedMoveIntoAnAttack(currentNumberOfPlayerOneShipsLeft) {
        let adjustedTarget = this.coordinatesOfFirstSuccessfulAttackOnEnemyShip;
        switch (this.currentPlannedMove) {
            case "+1" : adjustedTarget ++; break;
            case "-1" : adjustedTarget --; break;
            case "+10" : adjustedTarget += 10; break;
            case "-10" : adjustedTarget -= 10; break;
        }
        console.log('Next planned corrected attack! : ' + adjustedTarget);
        if(this.currentAttackedCoordinates.includes(adjustedTarget) || adjustedTarget < 0 || adjustedTarget > 99 ) {
            adjustedTarget = this.generateRandomAttackCoordinates();
        }
        else {
            this.currentAttackedCoordinates.push(adjustedTarget);
        }
        this.attackLocationUsingCoordinates(adjustedTarget, currentNumberOfPlayerOneShipsLeft);
    }

    attackLocationUsingCoordinates(randomAttackPosition, currentNumberOfPlayerOneShipsLeft) {
        if(this.game.playerOneGameBoard.attackShip(randomAttackPosition)) {
            console.log('AIBOt: Attack was successful!!!');
            this.checkIfAttackWasFirstStrikeOnEnemyBoat(randomAttackPosition);
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

    checkIfAttackWasFirstStrikeOnEnemyBoat(randomAttackPosition) {
        if(!this.currentlyDestroyingPlayerOneShip) {
            console.log('AIBot: Coordinates of first successful attack on boat are: ' + randomAttackPosition);
            this.coordinatesOfFirstSuccessfulAttackOnEnemyShip = randomAttackPosition;
            this.currentlyDestroyingPlayerOneShip = true;
        }
        else {
            console.log('AIBot: This is not the fist strike to take place on this enemy boat.: ');
        }
    }

    checkIfPlayerOneShipWasDestroyedAfterLastAttack(currentNumberOfPlayerOneShipsLeft) {
        if(this.game.getPlayer1().getNumberOfPlayerShips() === (currentNumberOfPlayerOneShipsLeft - 1)) {
            this.currentlyDestroyingPlayerOneShip = false;
            this.indexOfCurrentAttackOptions = 0;
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