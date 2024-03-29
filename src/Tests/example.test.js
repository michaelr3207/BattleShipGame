import {BattleShipGame} from "../Classes/BattleShipGame";
import expect from "expect";
import {Player} from "../Classes/Player";

test('Test player creation, and add to game', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = new Player('Bob', 1);
    expect(player1).toEqual({name: 'Bob' , playerId: 1, grid: 'grid1'});

    // battleShipGame.addPlayer(player1);
    // expect(battleShipGame.getNumberOfPlayers()).toBe(1);
});




