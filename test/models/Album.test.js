//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Album from "../../src/models/Album.js";

const album = new Album("title1", "2022-12-01", 5, "http://placeimg.com/250/250/arch/grayscale", "Paul", 5);

/**
 * test1 unitaire de title de la classe Album
 */
test('album.artists = Paul', t => {
    t.is(album.artists, "Paul");
});

/**
 * test2 unitaire de releaseDate de la classe Album
 */
test('album.releaseDate = 2022-12-01', t => {
    t.is(album.releaseDate, "2022-12-01");
});
