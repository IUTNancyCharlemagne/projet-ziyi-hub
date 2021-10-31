//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Game from "../../src/models/Game.js";

const game = new Game("title1", "2022-12-01", 5, "http://placeimg.com/250/250/arch/grayscale", "studio", 2, "plot")

/**
 * test1 unitaire de title de la classe Game
 */
test('game.plot = plot', t => {
    t.is(game.plot, "plot");
});
