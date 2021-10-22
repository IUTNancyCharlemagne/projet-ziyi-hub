import Media from "./Media.js";
class Game extends Media{
    constructor(studio, nbPlayers, plot) {
        super()
        this.studio = studio
        this.nbPlayers = nbPlayers
        this.plot = plot
    }
}
