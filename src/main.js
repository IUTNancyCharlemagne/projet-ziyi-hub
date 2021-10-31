import Collection from "./models/Collection.js"


window.onload= Collection.init

document.querySelector("#filtrer-all").addEventListener("click", ()=>{
    Collection.buildProductsList(Collection.filterAll())
    Collection.getEdit()
    Collection.removeMedia()
})

document.querySelector("#filtrer-album").addEventListener("click", ()=>{
    Collection.buildProductsList(Collection.filterAlbum())
    Collection.getEdit()
    Collection.removeMedia()
})

document.querySelector("#filtrer-game").addEventListener("click", ()=>{
    Collection.buildProductsList(Collection.filterGame())
    Collection.getEdit()
    Collection.removeMedia()
})

document.querySelector("#filtrer-movie").addEventListener("click", ()=>{
    Collection.buildProductsList(Collection.filterMovie())
    Collection.getEdit()
    Collection.removeMedia()
})