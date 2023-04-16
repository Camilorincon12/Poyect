let map = L.map('map').setView([4.639386, -74.082412],6)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.622716, -74.124703]).addTo(map);
var popup = L.popup()
    .setLatLng([4.622716, -74.124703])
    .setContent("nos puedes encontrar aqui")
    .openOn(map);
    function onMapClick(e) {
        alert("nuestra direccion es :carrera 68# 180-30 ");
    }
    
    map.on('click', onMapClick);
    