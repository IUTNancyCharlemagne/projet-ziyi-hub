import Collection from "./models/Collection.js"


window.onload= Collection.init
document.querySelector("#btn-add").addEventListener('click', Collection.addMedia)
