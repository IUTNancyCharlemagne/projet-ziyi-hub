//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Album from "../../src/models/Album.js";

const album = new Album("Organize office", "2021-10-28", 5, "http://placeimg.com/250/250/tech", "Paul", 5)

/**
 * test1 unitaire de title de la classe Album
 */
test('album.title = Organize office', t => {
    t.is(album.title, "Organize office");
});

/**
 * test2 unitaire de releaseDate de la classe Album
 */
test('album.releaseDate = 2021-10-28', t => {
    t.is(album.releaseDate, "2021-10-28");
});

/**
 * test3 unitaire de rating de la classe Album
 */
test('album.rating = 5', t => {
    t.is(album.rating, 5);
});

/**
 * test4 unitaire d'image de la classe Album
 */
test('album.image = http://placeimg.com/250/250/tech', t => {
    t.is(album.image, "http://placeimg.com/250/250/tech");
});

/**
 * test5 unitaire d'artists de la classe Album
 */
test('album.artists = Paul', t => {
    t.is(album.artists, "Paul");
});

/**
 * test6 unitaire de nbTracks de la classe Album
 */
test('album.nbTracks = 5', t => {
    t.is(album.nbTracks, 5);
});

/**
 * test7 unitaire de type de média
 */
test('album instanceof Album = true', t => {
    t.is(album instanceof Album, true);
});
