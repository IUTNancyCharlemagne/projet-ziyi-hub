import Media from "./Media.js";
class Movie extends Media{
    /**
     *
     * @param title d'un film
     * @param releaseDate d'un film
     * @param rating d'un film
     * @param image d'un film
     * @param director d'un film
     * @param actors d'un film
     * @param duration d'un film
     * @param plot d'un film
     */
    constructor(title, releaseDate, rating, image, director, actors, duration, plot) {
        super(title, releaseDate, rating, image)
        this.director = director
        this.actors = actors
        this.duration = duration
        this.plot = plot
        this.length = 8
    }
}

export default Movie

