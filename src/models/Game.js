import Media from "./Media.js";
class Game extends Media{
    constructor(title, releaseDate, rating, image, studio, nbPlayers, plot) {
        super(title, releaseDate, rating, image)
        this.studio = studio
        this.nbPlayers = nbPlayers
        this.plot = plot
    }
}
export default Game
