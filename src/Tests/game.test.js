import {Player} from "../Classes/Player";
import {BattleShipGame} from "../Classes/BattleShipGame";
import {Boat} from "../Classes/Boat";
import {GameBoard} from "../Classes/GameBoard";
import {CELL_TAKEN_ERROR, CELL_TAKEN_MESSAGE, coordinateReader} from "../Util";
import expect from "expect";
// import {changeGridColorWithShip, checkShipStartingPosition} from "../index";

test('Test player creation', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = new Player('Bob', 1);
    expect(player1).toEqual({name: 'Bob' , playerId: 1, grid: 'grid1', playerShips: player1.addShipsToPlayer(), totalNumberOfSHips: 5, playerGameBoard: player1.getPlayerGameBoard()});
});

test('Test ship creation and also adding the ship to the game', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = battleShipGame.createPlayer('Bob');
    const testShip = new Boat('test', 3, player1);
    expect(battleShipGame.getNumberOfShips()).toBe(0);

    battleShipGame.addShip(player1, testShip);
    expect(battleShipGame.getNumberOfShips()).toBe(1);
});

test('100 cells are made by gameboard', () => {
    const gameBoard = new GameBoard('test board');
    expect(gameBoard.getAllCells().length).toBe(100);
});

test('Test the attack ship method and coordinate generator', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const player = new Player('Player', 0);
    const coordinateForTest = 'D4';
    expect(coordinateReader(coordinateForTest)).toBe("34");
});

test('Test the attack ship method to see if a  destroyer ship can be hit and destroyed', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const destroyerBoat = battleShipGame.getPlayer1().getShipByName(battleShipGame.getPlayer1().name + 'Destroyer');
    const randomGeneratedShipStaringPosition = 43;
    expect(battleShipGame.getPlayer1().checkForShip(destroyerBoat.getShipName())).toBeTruthy();
    expect(destroyerBoat.getIsSunk()).toBe(false);
    battleShipGame.player1.playerGameBoard.plotShipOnPlayerGrid(randomGeneratedShipStaringPosition, destroyerBoat, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(0);
    battleShipGame.player1.playerGameBoard.attackShip(38, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(1);
    battleShipGame.player1.playerGameBoard.attackShip(39, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(2);
    battleShipGame.player1.playerGameBoard.attackShip(40, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(3);
    battleShipGame.player1.playerGameBoard.attackShip(41, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(4);
    battleShipGame.player1.playerGameBoard.attackShip(42, battleShipGame);
    expect(destroyerBoat.getNumberOfHits()).toBe(5);  // sunk after 5 hits to the ship
    expect(destroyerBoat.getIsSunk()).toBe(true);
    expect(battleShipGame.getPlayer1().checkForShip(destroyerBoat.getShipName())).toBeFalsy();
    expect(battleShipGame.getPlayer1().playerShips.length).toBe(4);
});

test('Test the attack ship method to see if a recon ship can be hit and destroyed', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const reconBoat = battleShipGame.getPlayer1().getShipByName(battleShipGame.getPlayer1().name + 'Recon');
    const randomGeneratedShipStaringPosition = 30;
    expect(battleShipGame.getPlayer1().checkForShip(reconBoat.getShipName())).toBeTruthy();
    expect(reconBoat.getIsSunk()).toBe(false);
    battleShipGame.player1.playerGameBoard.plotShipOnPlayerGrid(randomGeneratedShipStaringPosition, reconBoat, battleShipGame);
    expect(reconBoat.getNumberOfHits()).toBe(0);
    battleShipGame.player1.playerGameBoard.attackShip(27, battleShipGame);
    expect(reconBoat.getNumberOfHits()).toBe(1);
    battleShipGame.player1.playerGameBoard.attackShip(28, battleShipGame);
    expect(reconBoat.getNumberOfHits()).toBe(2);
    battleShipGame.player1.playerGameBoard.attackShip(29, battleShipGame);
    expect(reconBoat.getNumberOfHits()).toBe(3);
    expect(reconBoat.getIsSunk()).toBeTruthy();
    expect(battleShipGame.getPlayer1().checkForShip(reconBoat.getShipName())).toBeFalsy();
    expect(battleShipGame.getPlayer1().playerShips.length).toBe(4);
});

test('Test to ensure an empty square can be hit', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const player1 = new Player('Player', 0);
    const destroyerBoat = new Boat(player1.getName() + 'Destroyer', 5, player1)
    const coordinateForTest = 'D4';
    const randomGeneratedShipStaringPosition = 43;
    expect(battleShipGame.playerOneGameBoard.getCellById(45).getIsMarked()).toBe(false);
    expect(battleShipGame.playerOneGameBoard.attackShip(45, player1)).toBe(CELL_TAKEN_MESSAGE);
    console.log(battleShipGame.playerOneGameBoard.getAllCells());
    expect(battleShipGame.playerOneGameBoard.getCellById(45).getIsMarked()).toBe(true);
});

test('Test to ensure an already taken square cannot be striked', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const player1 = new Player('Player', 0);
    const destroyerBoat = new Boat(player1.getName() + 'Destroyer', 5, player1)
    const coordinateForTest = 'D4';
    const randomGeneratedShipStaringPosition = 43;
    expect(battleShipGame.playerOneGameBoard.getCellById(45).getIsMarked()).toBe(false);
    battleShipGame.playerOneGameBoard.attackShip(45, player1);
    expect(battleShipGame.playerOneGameBoard.attackShip(45, player1)).toBe(CELL_TAKEN_ERROR);
});

test('Ensure two boats cannot be placed in the same cells', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const player1 = new Player('Player', 0);
    const destroyerBoat = new Boat(player1.getName() + 'Destroyer', 5, player1)
    const destroyerBoatTwo = new Boat(player1.getName() + 'DestroyerTwo', 5, player1)
    const randomGeneratedShipStaringPosition = 43;
    expect(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(randomGeneratedShipStaringPosition, destroyerBoat, battleShipGame)).toBe("Cell is available");
    expect(battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(randomGeneratedShipStaringPosition, destroyerBoatTwo, battleShipGame)).toBe("ERROR: Cell has been taken.");
    console.log(battleShipGame.playerOneGameBoard.allCells)

});

test('Ensure gameboards can track missed and on target hits from players', () => {
    const battleShipGame = new BattleShipGame('test BattleShip Game');
    const startingPositionOfTestShip = 54;
    battleShipGame.playerOneGameBoard.plotShipOnPlayerGrid(startingPositionOfTestShip, battleShipGame.getPlayer1().getShipByName(battleShipGame.getPlayer1().getName() + 'Destroyer'));
    expect(battleShipGame.playerOneGameBoard.checkForAccurateShot(52)).toBeFalsy();
    battleShipGame.playerOneGameBoard.attackShip(52, battleShipGame);
    expect(battleShipGame.playerOneGameBoard.checkForAccurateShot(52)).toBeTruthy();
    expect(battleShipGame.playerOneGameBoard.checkForMissedShot(52)).toBeFalsy();
    expect(battleShipGame.playerOneGameBoard.checkForMissedShot(85)).toBeFalsy();
    battleShipGame.playerOneGameBoard.attackShip(85, battleShipGame);
    expect(battleShipGame.playerOneGameBoard.checkForMissedShot(85)).toBeTruthy();
    expect(battleShipGame.playerOneGameBoard.checkForAccurateShot(85)).toBeFalsy();
});
