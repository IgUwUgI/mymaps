
// Creation de la carte, ouverture centree sur les coordonnees specifiees
// syntaxe : setview([Nord, Est], zoom)
var mymap = L.map('mapid', {
    zoomDelta: 0.25,
    zoomSnap: 0
}).setView([10, 3], 3);
// var mymap = new WE.map('mapid');
// WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//         attribution: '© OpenStreetMap contributors'
//       }).addTo(mymap);

// fond de carte : ne pas toucher svp c'est relou, et j'ai pas trouvé mieux dans l'aprem
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
maxZoom: 15,
minZoom: 3,
});
CartoDB_Voyager.addTo(mymap);

// Imports
import "../../modules/rotated_markers.js";
import {PaysGeo} from "./MapSpots/Pays/indexCountries.js";
import { RegionsGeo } from "./MapSpots/Regions/indexRegions.js";

var PaysLayer = L.layerGroup(PaysGeo);
var RegionsLayer = L.layerGroup(RegionsGeo)
var RienLayer = L.layerGroup(null);

var layers = {
    "Rien" : RienLayer,
    "Pays" : PaysLayer,
    "Regions" : RegionsLayer
}

var layerControl = L.control.layers(layers);
layerControl.addTo(mymap)
// PaysLayer.addTo(mymap);
