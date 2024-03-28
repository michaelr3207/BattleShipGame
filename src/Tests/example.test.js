import {BattleShipGame} from "../Classes/BattleShipGame";
import {Boat} from "../Classes/Boat";
import {Cell} from "../Classes/Cell";
import {GameBoard} from "../Classes/GameBoard";
import {coordinateReader} from "../Util";
import expect from "expect";

test('Test player creation, and add to game', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = new Player('Bob', 1);
    expect(player1).toEqual({name: 'Bob' , playerId: 1});

    // battleShipGame.addPlayer(player1);
    // expect(battleShipGame.getNumberOfPlayers()).toBe(1);
});
