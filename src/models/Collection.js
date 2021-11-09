import Media from "./Media.js"
import Movie from "./Movie.js";
import Game from "./Game.js";
import Album from "./Album.js";

const media1 = new Album("Organize office", "2021-10-28", 5, "http://placeimg.com/250/250/tech", "Paul", 5)
const media2 = new Game("Outlast:Whistleblower", "2013-05-07", 3, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250", "studio", 2, "Se cacher dans l'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants.")
const media3 = new Movie("Resident Evil 7", "2016-07-24", 4, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg", "Capcom", "Milla Jovovich", "1:40:37", "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population.")

let medias = [
    media1,
    media2,
    media3,
]

let displayMedia = function (media){
    if (media.length === 7 || media.length === 8){
        return `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image}); width: 250px; height: 250px; background-size: cover;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="title">${media.title}</strong>
                    <div data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                    ${media.plot}
                </div>
                <div class="details-description details-rating">
                    Rating: ${media.rating}
                </div>
                <div class="details-button">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        </div>
    `
    }else{
        return `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image}); width: 250px; height: 250px; background-size: cover;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="title">${media.title}</strong>
                    <div data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                    By ${media.artists}, contains ${media.nbTracks} tracks.
                </div>
                <div class="details-description details-rating">
                    Rating: ${media.rating}
                </div>
                <div class="details-button">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        </div>
    `
    }
}


let displaySpecific = function (){
    let select = document.querySelector("#add-select")
    let option = select.options[select.selectedIndex].value;

    if (option === "option-game"){
        document.querySelector(".add-specific").innerHTML = `
            <p>Studio <input type="text" id="add-studio" placeholder="Nintendo" /></p>
            <p>Number of players <input type="text" id="add-nbPlayers" placeholder="1" /></p>
            <p>Plot <input type="text" id="add-plot" placeholder="Your princess is in another" /></p>
        `
    }else if (option === "option-movie"){
        document.querySelector(".add-specific").innerHTML = `
            <p>Director <input type="text" id="add-director" placeholder="James" /></p>
            <p>Actors <input type="text" id="add-actors" placeholder="Milla Jovovich" /></p>
            <p>Duration <input type="text" id="add-duration" placeholder="1:40:37" /></p>
            <p>Plot <input type="text" id="add-movie-plot" placeholder="Your princess is in another" /></p>
        `
    }else if (option === "option-album"){
        document.querySelector(".add-specific").innerHTML = `
            <p>Artists <input type="text" id="add-artists" placeholder="Nintendo" /></p>
            <p>nbTracks <input type="text" id="add-nbTracks" placeholder="5" /></p>
        `
    }
}


let buildProductsList = function (medias){
    const pList = document.querySelector('#product-list');
    pList.innerHTML = '';
    medias.forEach(media => {
        pList.innerHTML += displayMedia(media);
    })
}


let visible2 = false;
function showAdd(){
    document.querySelector('#window-add').style.display = "block"
    document.querySelector('#window-add').style.position = "absolute"
    visible2=true
}

function hideAdd(){
    document.querySelector('#window-add').style.display = "none"
    visible2=false
}

let getForm = function (){
    document.querySelector("#btn-add").addEventListener('click', () => {
        if(visible2){
            hideAdd()
        }else {
            showAdd()
        }
    })
    document.querySelector(".close2").addEventListener('click', hideAdd)
}


let addMedia = function (media){
    if ((media.length === 7) || (media.length === 8)){
        document.querySelector("#product-list").innerHTML += `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image});width: 250px;height: 250px;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="title">${media.title}</strong>
                    <div data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                ${media.plot}
                </div>
                <div class="details-description details-rating">
                    Rating: ${media.rating}
                </div>
                <div class="details-button">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        </div>
    `
    }else{
        document.querySelector("#product-list").innerHTML += `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image});width: 250px;height: 250px;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="title">${media.title}</strong>
                    <div data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                By ${media.artists}, contains ${media.nbTracks} tracks.
                </div>
                <div class="details-description details-rating">
                    Rating: ${media.rating}
                </div>
                <div class="details-button">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        </div>
    `
    }

    medias.push(media)
    save()
    removeMedia()
    getEdit()
    getNbMedias()
}

let removeMedia = function (){
    document.querySelectorAll(".btn-remove").forEach(remove => {
        remove.onclick = () => {
            document.querySelector("#product-list").removeChild(remove.parentNode.parentNode.parentNode)
        }
    })
}

let getNbMedias= function (){
    document.querySelector(".nbMedia").innerHTML = "Nombre total de médias: " + medias.length;
}

let filterAll= function (){
    return medias.filter(media => {
        return (media instanceof Object)
    })
}

let filterAlbum= function (){
    return medias.filter(media => {
        //return (media instanceof Album)
        return (media.length === 6)
    })
}

let filterGame= function (){
    return medias.filter(media => {
        //return (media instanceof Game)
        return (media.length === 7)
    })
}

let filterMovie= function (){
    return medias.filter(media => {
        //return (media instanceof Movie)
        return (media.length === 8)
    })
}

let filterCollection = function (keywords){
    return medias.filter(media => {
        return (media.title.indexOf(keywords) !== -1) || (media.releaseDate.indexOf(keywords) !== -1)
    })
}

let visible = false;
function show(){
    document.querySelector('#window-edit').style.display = "block"
    document.querySelector('#window-edit').style.position = "absolute"
    visible=true
}

function hide(){
    document.querySelector('#window-edit').style.display = "none"
    visible=false
}

function getEdit(){
    document.querySelectorAll(".btn-edit").forEach(edit => {
        edit.addEventListener('click', () => {
            if(visible){
                hide()
            }else {
                show()
            }
        })
    })
    document.querySelector(".close").addEventListener('click', hide)
}

let save = function (){
    localStorage.removeItem('medias');
    localStorage.setItem('medias', JSON.stringify(medias));
}


let load = function () {
    let tmp = JSON.parse(localStorage.getItem('medias'));
    if (tmp){
        medias = tmp;
    }
}

let init = function (){
    document.querySelector("#add-select").addEventListener("change", displaySpecific)
    document.querySelector('#product-search').addEventListener('keyup', (event)=>{
        buildProductsList(filterCollection(event.target.value))
        getEdit()
        removeMedia()
    })
    load()
    getNbMedias()
    buildProductsList(medias)
    removeMedia()
    getEdit()
    getForm()

    document.querySelector("#add-contenu-btn").addEventListener("click", ()=>{
        let title = document.querySelector("#add-title").value
        let releaseDate = document.querySelector("#add-date").value
        let rating = document.querySelector("#add-rating").value
        let image = document.querySelector("#add-img").value
        let select = document.querySelector("#add-select")
        let option = select.options[select.selectedIndex].value;

        if (option === "option-game"){
            let studio = document.querySelector("#add-studio").value
            let nbPlayers = document.querySelector("#add-nbPlayers").value
            let plot = document.querySelector("#add-plot").value
            let game = new Game(title, releaseDate, rating, image, studio, nbPlayers, plot)
            addMedia(game)

        }else if (option === "option-movie"){
            let director = document.querySelector("#add-director").value
            let actors = document.querySelector("#add-actors").value
            let duration = document.querySelector("#add-duration").value
            let p = document.querySelector("#add-movie-plot").value
            let movie = new Movie(title, releaseDate, rating, image, director, actors, duration, p)
            addMedia(movie)

        }else if (option === "option-album"){
            let artists = document.querySelector("#add-artists").value
            let nbTracks = document.querySelector("#add-nbTracks").value
            let album = new Album(title, releaseDate, rating, image, artists, nbTracks)
            addMedia(album)
        }
    })
}

export default {
    medias: medias,
    init: init,
    filterAll: filterAll,
    getEdit: getEdit,
    filterAlbum: filterAlbum,
    filterGame: filterGame,
    filterMovie: filterMovie,
    filterCollection: filterCollection,
    getForm: getForm,
    removeMedia: removeMedia,
    buildProductsList: buildProductsList,
}

