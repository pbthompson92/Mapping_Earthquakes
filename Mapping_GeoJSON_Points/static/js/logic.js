// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing out GeoJSON data 
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a market on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> " + feature.properties.city + ", " + feature.properties.country)
//     }
// }).addTo(map);

L.geoJSON(sanFranAirport, {
    // We turn each feature into a market on the map
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup();
    }
}).addTo(map);

// // Coordinates for each point to be used in the line.
// let line = [
//     [37.6213, -122.3790],
//     [30.1899, -97.6687],
//     [43.67771, -79.6248],
//     [40.6441,  -73.78222]
//   ];

//   // Create a polyline using the line coordinates and make the line red.
//   L.polyline(line, {
//       color: "blue",
//       weight: 4,
//       opacity: 0.5,
//       dashArray: '7'


//   }).addTo(map);

// // get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         weight: 4,
//         fillcolor: "orange",
//         color: "#ffaa33"
//     })
//     .bindPopup("<h2>" + city.city + ",  " + city.state + "</h2 <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);