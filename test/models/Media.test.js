//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Media from "../../src/models/Media.js";

const media = new Media("title1", "2022-12-01", 5, "http://placeimg.com/250/250/arch/grayscale");

/**
 * test1 unitaire de title de la classe Media
 */
test('media.title = title1', t => {
    t.is(media.title, "title1");
});
