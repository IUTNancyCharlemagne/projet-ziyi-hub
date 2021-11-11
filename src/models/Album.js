import Media from "./Media.js";
class Album extends Media{
    /**
     *
     * @param title d'un album
     * @param releaseDate d'un album
     * @param rating d'un album
     * @param image d'un album
     * @param artists d'un album
     * @param nbTracks d'un album
     */
    constructor(title, releaseDate, rating, image, artists, nbTracks) {
        super(title, releaseDate, rating, image)
        this.artists = artists
        this.nbTracks = nbTracks
        this.length = 6
    }
}

export default Album
