//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Media from "../../src/models/Media.js";
import Album from "../../src/models/Album";

const media = new Media("title1", "2022-12-01", 5, "http://placeimg.com/250/250/arch/grayscale");

/**
 * test1 unitaire de title de la classe Media
 */
test('media.title = title1', t => {
    t.is(media.title, "title1");
});

/**
 * test2 unitaire de releaseDate de la classe Media
 */
test('media.releaseDate = 2022-12-01', t => {
    t.is(media.releaseDate, "2022-12-01");
});

/**
 * test3 unitaire de rating de la classe Media
 */
test('media.rating = 5', t => {
    t.is(media.rating, 5);
});

/**
 * test4 unitaire d'image de la classe Media
 */
test('media.image = http://placeimg.com/250/250/arch/grayscale', t => {
    t.is(media.image, "http://placeimg.com/250/250/arch/grayscale");
});

/**
 * test5 unitaire de type de média
 */
test('media instanceof media = true', t => {
    t.is(media instanceof Media, true);
});