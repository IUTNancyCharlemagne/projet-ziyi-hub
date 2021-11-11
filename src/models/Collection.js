import Media from "./Media.js"
import Movie from "./Movie.js";
import Game from "./Game.js";
import Album from "./Album.js";


/**
 * il permet de créer plusieurs types de médias
 * @type {Album}
 * @type {Game}
 * @type {Movie}
 */
const media1 = new Album("White day", "2021-10-28", 5, "https://i.scdn.co/image/ab67616d0000b273372ff8c142ed226c20bb5e26", "Cotton Candy", 5)
const media2 = new Game("Outlast:Whistleblower", "2013-05-07", 3, "https://image.api.playstation.com/cdn/EP4467/CUSA00409_00/NSTpvqNs6vZqdNmm2uLtKYSSkX3n81mF.png?w=250", "studio", 2, "Se cacher dans l'ombre, ou dans divers éléments du décor pour échapper à ses poursuivants.")
const media3 = new Movie("Resident Evil 7", "2016-07-24", 4, "https://fr.web.img2.acsta.net/c_310_420/pictures/16/11/24/15/35/032101.jpg", "Capcom", "Milla Jovovich", "1:40:37", "In September 1998, Raccoon City becomes overrun with zombies after the T-virus contaminates its water supply, infecting much of its population.")

let medias = [
    media1,
    media2,
    media3,
]

/**
 * il permet d'intégrer des infos de médias dans html
 * @param media
 * @returns {string}
 */
let displayMedia = function (media){
    if (media.length === 7 || media.length === 8){
        return `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image}); width: 250px; height: 250px; background-size: cover;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type=${media.title}>${media.title}</strong>
                    <div data-type=${media.releaseDate}>Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                    ${media.plot}
                </div>
                <div class="details-description details-rating">` +
                    rating(media.rating) +  `
                </div>
                <div class="details-button">
                    <button class="btn btn-dark btn-edit">Edit</button>
                    <button class="btn btn-success btn-remove">Remove</button>
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
                    <strong class="bigger" data-type=${media.title}>${media.title}</strong>
                    <div data-type=${media.releaseDate}>Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                    By ${media.artists}, contains ${media.nbTracks} tracks.
                </div>
                <div class="details-description details-rating">` +
                    rating(media.rating)
            +  `</div>
                <div class="details-button">
                    <button class="btn btn-dark btn-edit">Edit</button>
                    <button class="btn btn-success btn-remove">Remove</button>
                </div>
            </div>
        </div>
    `
    }
}

/**
 * il permet d'intégrer des étoiles d'un rating
 * @param rating
 * @returns {string}
 */
let rating = function (rating){
    let res = `
    <div class="star">
    <label for="rating"><b>Rating</b></label>
    `
    for (let i = 0; i < rating; i++){
        res += `
        <span class="fa fa-star checked"></span>
        `
    }
    for (let i = 0; i < 5-rating; i++){
        res += `
        <span class="fa fa-star"></span>
        `
    }
    res += `</div>`
    return res
}

/**
 * il permet de changer la formulaire de la requête spéciale
 */
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

/**
 * il permet d'afficher une liste de médias
 * @param medias
 */
let buildProductsList = function (medias){
    const pList = document.querySelector('#product-list');
    pList.innerHTML = '';
    medias.forEach(media => {
        pList.innerHTML += displayMedia(media);
    })
}


let visible2 = false;

/**
 * il permet d'afficher la fenêtre Add
 */
function showAdd(){
    document.querySelector('#window-add').style.display = "block"
    document.querySelector('#window-add').style.position = "absolute"
    visible2=true
}

/**
 * il permet de cacher la fenêtre Add
 */
function hideAdd(){
    document.querySelector('#window-add').style.display = "none"
    visible2=false
}

/**
 * il permet d'appliquer la fonction showAdd et fonction hideAdd
 */
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

/**
 * il permet d'annuler la formulaire
 * @constructor
 */
let CancelForm = function (){
    document.querySelector("#add-cancel-btn").addEventListener('click', () => {
        if(visible2){
            hideAdd()
        }
    })
}

/**
 * il permet d'ajouter un média
 * @param media
 */
let addMedia = function (media){
    if ((media.length === 7) || (media.length === 8)){
        document.querySelector("#product-list").innerHTML += `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image});width: 250px;height: 250px;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type=${media.title}>${media.title}</strong>
                    <div data-type=${media.releaseDate}>Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                ${media.plot}
                </div>
                <div class="details-description details-rating">` +
                    rating(media.rating) +`
                </div>
                <div class="details-button">
                    <button class="btn btn-dark btn-edit">Edit</button>
                    <button class="btn btn-success btn-remove">Remove</button>
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
                    <strong class="bigger" data-type=${media.title}>${media.title}</strong>
                    <div data-type=${media.releaseDate}>Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description details-plot">
                By ${media.artists}, contains ${media.nbTracks} tracks.
                </div>
                <div class="details-description details-rating">` +
                    rating(media.rating) +`
                </div>
                <div class="details-button">
                    <button class="btn btn-dark btn-edit">Edit</button>
                    <button class="btn btn-success btn-remove">Remove</button>
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

/**
 * il permet de supprimer un média
 */
let removeMedia = function (){
    document.querySelectorAll(".btn-remove").forEach(remove => {
        remove.onclick = () => {
            document.querySelector("#product-list").removeChild(remove.parentNode.parentNode.parentNode)
        }
    })
}

/**
 * il permet de compter le nombre total de média existant
 */
let getNbMedias= function (){
    document.querySelector(".nbMedia").innerHTML = "Nombre total de médias: " + medias.length;
}

/**
 * il permet de filtrer tout les médias
 * @returns {(Movie|Game)[]}
 */
let filterAll= function (){
    return medias.filter(media => {
        return (media instanceof Object)
    })
}

/**
 * il permet de filtrer l’affichage par type d'Album
 * @returns {(Movie|Game)[]}
 */
let filterAlbum= function (){
    return medias.filter(media => {
        //return (media instanceof Album)
        return (media.length === 6)
    })
}

/**
 * il permet de filtrer l’affichage par type de Game
 * @returns {(Movie|Game)[]}
 */
let filterGame= function (){
    return medias.filter(media => {
        //return (media instanceof Game)
        return (media.length === 7)
    })
}

/**
 * il permet de filtrer l’affichage par type de Movie
 * @returns {(Movie|Game)[]}
 */
let filterMovie= function (){
    return medias.filter(media => {
        //return (media instanceof Movie)
        return (media.length === 8)
    })
}

/**
 * il permet de filtrer l’affichage par titre ou date de sortie
 * @param keywords
 * @returns {(Movie|Game)[]}
 */
let filterCollection = function (keywords){
    return medias.filter(media => {
        return (media.title.indexOf(keywords) !== -1) || (media.releaseDate.indexOf(keywords) !== -1)
    })
}

let visible = false;

/**
 * il permet d'afficher une fenêtre d'Edit
 */
function show(){
    document.querySelector('#window-edit').style.display = "block"
    document.querySelector('#window-edit').style.position = "absolute"
    visible=true
}

/**
 * il permet de cacher une fenêtre d'Edit
 */
function hide(){
    document.querySelector('#window-edit').style.display = "none"
    visible=false
}

/**
 * il permet d'appliquer fonction show et fonction hide
 */
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

/**
 * il permet d'enregistrer la coolection en local
 */
let save = function (){
    localStorage.removeItem('medias');
    localStorage.setItem('medias', JSON.stringify(medias));
}

/**
 * il permet de récupérer la collection en local
 */
let load = function () {
    let tmp = JSON.parse(localStorage.getItem('medias'));
    if (tmp){
        medias = tmp;
    }
}

/**
 * il permet d'initialiser l'application
 */
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
    CancelForm()

    document.querySelector("#filtrer-all").addEventListener("click", ()=>{
        buildProductsList(filterAll())
        getEdit()
        removeMedia()
    })

    document.querySelector("#filtrer-album").addEventListener("click", ()=>{
        buildProductsList(filterAlbum())
        getEdit()
        removeMedia()
    })

    document.querySelector("#filtrer-game").addEventListener("click", ()=>{
        buildProductsList(filterGame())
        getEdit()
        removeMedia()
    })

    document.querySelector("#filtrer-movie").addEventListener("click", ()=>{
        buildProductsList(filterMovie())
        getEdit()
        removeMedia()
    })

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
            alert("Ajout réussie")

        }else if (option === "option-movie"){
            let director = document.querySelector("#add-director").value
            let actors = document.querySelector("#add-actors").value
            let duration = document.querySelector("#add-duration").value
            let p = document.querySelector("#add-movie-plot").value
            let movie = new Movie(title, releaseDate, rating, image, director, actors, duration, p)
            addMedia(movie)
            alert("Ajout réussie")

        }else if (option === "option-album"){
            let artists = document.querySelector("#add-artists").value
            let nbTracks = document.querySelector("#add-nbTracks").value
            let album = new Album(title, releaseDate, rating, image, artists, nbTracks)
            addMedia(album)
            alert("Ajout réussie")
        }
    })
}

export default {
    medias: medias,
    init: init,
    getEdit: getEdit,
    getForm: getForm,
    removeMedia: removeMedia,
    filterAll: filterAll,
    filterAlbum: filterAlbum,
    filterGame: filterGame,
    filterMovie: filterMovie,
    filterCollection: filterCollection,
    buildProductsList: buildProductsList,
}

