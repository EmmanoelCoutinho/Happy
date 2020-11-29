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
    iconAnchor: [29,68]
})

let marker;

//creat and add markers

map.on('click', (event) => {

    //getting position of markers
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker) 

    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map);

})

//add photo fieldset
function addPhotoField() {

    // get the photos container #images
    const container = document.getElementById('images');

    // get the container to duplicate 
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // clone the last photo added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verify if input is not empty, if TRUE, don't add to container
    const input = newFieldContainer.children[0];
        if(input.value == ""){
            return;
        }
    
    //clear the field
    input.value = "";

    // add clone to #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {

    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        //clear the value of field
        span.parentNode.children[0].value = ""
            return
    }

    //delete the field
    span.parentNode.remove();

}   

//select yes or no
function toggleSelect(event) {

    //remove .active (both buttons)
    document.querySelectorAll('.button-select button')
    // if you just have one value in ARROW FUNCTIONS can you remove the {}, and the () if just have one argument
    .forEach(button => button.classList.remove('active'));


    //add .active (clicked button)
    const button = event.currentTarget;
    button.classList.add('active');
    

    //update the hidden input if the select value
    const input = document.querySelector('[name="opening_on_weekends"]')
  
    input.value = button.dataset.value;

    console.log(input.value);
}