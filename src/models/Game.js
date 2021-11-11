import Media from "./Media.js";
class Game extends Media{
    /**
     *
     * @param title d'un game
     * @param releaseDate d'un game
     * @param rating d'un game
     * @param image d'un game
     * @param studio d'un game
     * @param nbPlayers d'un game
     * @param plot d'un game
     */
    constructor(title, releaseDate, rating, image, studio, nbPlayers, plot) {
        super(title, releaseDate, rating, image)
        this.studio = studio
        this.nbPlayers = nbPlayers
        this.plot = plot
        this.length = 7
    }
}
export default Game
