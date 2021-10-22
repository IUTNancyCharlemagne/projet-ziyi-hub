import Media from "./Media.js";
class Movie extends Media{
    constructor(director, actors, duration, plot) {
        super()
        this.director = director
        this.actors = actors
        this.duration = duration
        this.plot = plot
    }
}

