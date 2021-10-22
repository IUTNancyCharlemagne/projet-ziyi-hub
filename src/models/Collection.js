import Media from "./Media.js"

const media1 = new Media("Organize office", "2021-10-28", 5, "http://placeimg.com/250/250/tech/grayscale")
const media2 = new Media("Pay bills", "2021-11-18", 5, "http://placeimg.com/250/250/nature/grayscale")
const media3 = new Media("Meet George", "2021-12-01", 5, "http://placeimg.com/250/250/arch/grayscale")


let medias = [
    media1,
    media2,
    media3,
]

let displayMedia = function (media){
    return `
        <div class="product">
            <div class="photo">
                <span class="mdi mdi-camera" style="background-image: url(${media.image});width: 250px;height: 250px;"></span>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="title">${media.title}</strong>
                    <div data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</div>
                </div>
                <div class="details-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="details-description">
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

const pList = document.querySelector('#product-list');
let buildProductsList = function (medias){
    pList.innerHTML = '';
    medias.forEach(media => {
        pList.innerHTML += displayMedia(media);
    })
}


let addMedia = function (media){
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
                <div class="details-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="details-description">
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

let removeMedia = function (){
    document.querySelectorAll(".btn-remove").forEach(remove => {
        remove.onclick = () => {
            console.log(remove.parentNode.parentNode.parentNode)
            document.querySelector("#product-list").removeChild(remove.parentNode.parentNode.parentNode)
        }
    })
}

let getNbMedias= function (){

}

let filter = function (keywords){
    return medias.filter(media => {
        return (media.title.indexOf(keywords) !== -1) || (media.releaseDate.indexOf(keywords) !== -1)
    })
}

let init = function (){
    document.querySelector('#product-search').addEventListener('keyup', (event)=>{
        buildProductsList(filter(event.target.value))
    })
    buildProductsList(medias)

    removeMedia()
}

export default {
    medias: medias,
    init: init,
    filter: filter,
    addMedia: addMedia,
    removeMedia: removeMedia,
    buildProductsList: buildProductsList,
}

