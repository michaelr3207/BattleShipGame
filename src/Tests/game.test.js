import {Player} from "../Classes/Player";
import {BattleShipGame} from "../Classes/BattleShipGame";

test('Test player creation, and add to game', () => {
    const battleShipGame = new BattleShipGame('test game');
    const player1 = battleShipGame.createPlayer('Bob');
    expect(player1).toEqual({name: 'Bob' , playerId: 1});

    battleShipGame.addPlayer(player1);
    expect(battleShipGame.getNumberOfPlayers()).toBe(1);
});
