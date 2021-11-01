//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Collection from "../../src/models/Collection.js";
import Album from "../../src/models/Album";
import Game from "../../src/models/Game";
import Movie from "../../src/models/Movie";

/**
 * test1 unitaire de medias
 */
test('Collection.medias.length = 3', t => {
    t.is(Collection.medias.length, 3);
});

/**
 * test2 unitaire de filterAll
 */
test('Collection.filterAll().length = 3', t => {
    t.is(Collection.filterAll().length, 3);
});

/**
 * test3 unitaire de filterAlbum
 */
test('Collection.filterAlbum()[0] = {"Organize office", "2021-10-28", 5, "http://placeimg.com/250/250/tech", "Paul", 5}', t => {
    t.is(Collection.filterAlbum().length, 1);
    t.deepEqual(Collection.filterAlbum()[0], new Album("Organize office", "2021-10-28", 5, "http://placeimg.com/250/250/tech", "Paul", 5), "identiques");
});

/**
 * test4 unitaire de filterGame
 */
test('Collection.filterGame()[0] = {"Outlast:Whistleblower", "2013-05-07", 3, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250", "studio", 2, "Se cacher dans l\'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants."}', t => {
    t.is(Collection.filterGame().length, 1);
    t.deepEqual(Collection.filterGame()[0], new Game("Outlast:Whistleblower", "2013-05-07", 3, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250", "studio", 2, "Se cacher dans l'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants."), "identiques");
});

/**
 * test5 unitaire de filterMovie
 */
test('Collection.filterMovie()[0] = {"Resident Evil 7", "2016-07-24", 4, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg", "Capcom", "Milla Jovovich", "1:40:37", "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population."}', t => {
    t.is(Collection.filterMovie().length, 1);
    t.deepEqual(Collection.filterMovie()[0], new Movie("Resident Evil 7", "2016-07-24", 4, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg", "Capcom", "Milla Jovovich", "1:40:37", "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population."), "identiques");
});
