//Lancer le commande : npx ava
//Lancer le commande : npm test
import test from 'ava';
import Movie from "../../src/models/Movie.js";
import Game from "../../src/models/Game";

const movie = new Movie("Resident Evil 7", "2016-07-24", 4, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg", "Capcom", "Milla Jovovich", "1:40:37", "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population.")

/**
 * test1 unitaire de title de la classe Movie
 */
test('movie.title = Resident Evil 7', t => {
    t.is(movie.title, "Resident Evil 7");
});

/**
 * test2 unitaire de releaseDate de la classe Movie
 */
test('movie.releaseDate = 2016-07-24', t => {
    t.is(movie.releaseDate, "2016-07-24");
});

/**
 * test3 unitaire de rating de la classe Movie
 */
test('movie.rating = 4', t => {
    t.is(movie.rating, 4);
});

/**
 * test4 unitaire d'image de la classe Movie
 */
test('movie.image = https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg', t => {
    t.is(movie.image, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg");
});

/**
 * test5 unitaire de director de la classe Movie
 */
test('movie.director = Capcom', t => {
    t.is(movie.director, "Capcom");
});

/**
 * test6 unitaire d'actors de la classe Movie
 */
test('movie.actors = Milla Jovovich', t => {
    t.is(movie.actors, "Milla Jovovich");
});

/**
 * test7 unitaire de duration de la classe Movie
 */
test('movie.duration = 1:40:37', t => {
    t.is(movie.duration, "1:40:37");
});

/**
 * test8 unitaire de plot de la classe Movie
 */
test('movie.plot = In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population.', t => {
    t.is(movie.plot, "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population.");
});

/**
 * test9 unitaire de type de média
 */
test('movie instanceof Movie = true', t => {
    t.is(movie instanceof Movie, true);
});