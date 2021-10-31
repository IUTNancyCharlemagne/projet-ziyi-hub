import Media from "./Media.js";
class Album extends Media{
    constructor(title, releaseDate, rating, image, artists, nbTracks) {
        super(title, releaseDate, rating, image)
        this.artists = artists
        this.nbTracks = nbTracks
    }
}

export default Album
