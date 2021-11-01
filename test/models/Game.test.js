//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Game from "../../src/models/Game.js";

const game = new Game("Outlast:Whistleblower", "2013-05-07", 3, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250", "studio", 2, "Se cacher dans l'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants.")

/**
 * test1 unitaire de title de la classe Game
 */
test('game.title = Outlast:Whistleblower', t => {
    t.is(game.title, "Outlast:Whistleblower");
});

/**
 * test2 unitaire de releaseDate de la classe Game
 */
test('game.releaseDate = 2013-05-07', t => {
    t.is(game.releaseDate, "2013-05-07");
});

/**
 * test3 unitaire de rating de la classe Game
 */
test('game.rating = 3', t => {
    t.is(game.rating, 3);
});

/**
 * test4 unitaire d'image de la classe Game
 */
test('game.image = https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250', t => {
    t.is(game.image, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250");
});

/**
 * test5 unitaire de studio de la classe Game
 */
test('game.image = studio', t => {
    t.is(game.studio, "studio");
});

/**
 * test6 unitaire de nbPlayers de la classe Game
 */
test('game.nbPlayers = 2', t => {
    t.is(game.nbPlayers, 2);
});

/**
 * test7 unitaire de plot de la classe Game
 */
test('game.plot = Se cacher dans l\'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants.', t => {
    t.is(game.plot, "Se cacher dans l'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants.");
});

/**
 * test8 unitaire de type de média
 */
test('game instanceof Game = true', t => {
    t.is(game instanceof Game, true);
});