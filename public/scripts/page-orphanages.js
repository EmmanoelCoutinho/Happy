//revome zoom control
const removeZoom = {zoomControl:false}
const map = L.map('mapid', removeZoom).setView([-1.460325,-48.4796917], 15.5);

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


function addMarker ({id, name ,lat ,lng}) {

    //creat popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240

    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    //creat and add markers

    L.marker([lat,lng],{ icon })
    .addTo(map)
    .bindPopup(popup)
    console.log(lat)
}

const orphanagesSpan = document.querySelectorAll(".orphanages span")
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    
    addMarker(orphanage)
})

