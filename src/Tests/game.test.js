import {Player} from "../Classes/Player";
import {BattleShipGame} from "../Classes/BattleShipGame";
import {Boat} from "../Classes/Boat";
import {Cell} from "../Classes/Cell";
import {GameBoard} from "../Classes/GameBoard";
import {coordinateReader} from "../Util";

test('Test player creation, and add to game', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = battleShipGame.createPlayer('Bob');
    expect(player1).toEqual({name: 'Bob' , playerId: 1});

    battleShipGame.addPlayer(player1);
    expect(battleShipGame.getNumberOfPlayers()).toBe(1);
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
