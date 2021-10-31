//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Movie from "../../src/models/Movie.js";

const movie = new Movie("Redisent Evil", "2016-12-01", 5, "http://placeimg.com/250/250/arch/grayscale", "James", "Edda", "110 min", "plot")

/**
 * test1 unitaire de title de la classe Movie
 */
test('movie.director = James', t => {
    t.is(movie.director, "James");
});