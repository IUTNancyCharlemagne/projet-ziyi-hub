import Media from "./Media.js";
class Movie extends Media{
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

