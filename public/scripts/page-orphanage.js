// stop moviments on the mapid
const option = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,
}

//create map
const map = L.map('mapid', option).setView([-1.460325,-48.4796917], 15.5);

// The map tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


//Create icons

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//creat and add markers

L.marker([-1.460325,-48.4796917],{ icon })
.addTo(map)

// image gallery //

function selectImage(event){
    
    const button = event.currentTarget


    // remove all  classes .active
    const buttons = document.querySelectorAll(".images button")
    // arrow function
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
    //select clicked image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // update container image
    imageContainer.src = image.src

    //add .active for selected button
    button.classList.add("active")
}