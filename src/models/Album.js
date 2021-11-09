import Media from "./Media.js";
class Album extends Media{
    constructor(title, releaseDate, rating, image, artists, nbTracks) {
        super(title, releaseDate, rating, image)
        this.artists = artists
        this.nbTracks = nbTracks
        this.length = 6
    }
}

export default Album
