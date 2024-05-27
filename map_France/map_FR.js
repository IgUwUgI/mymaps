// Creation de la carte, ouverture centree sur les coordonnees specifiees
// syntaxe : setview([Nord, Est], zoom)
var mymap = L.map('mapid', {
  zoomDelta: 0.25,
  zoomSnap: 0,
  zoomControl: false
}).setView([46.4836, 2.5264], 6);

// fond de carte
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 15,
  minZoom: 3,
  });
CartoDB_Voyager.addTo(mymap);

// Ajout du +/- du zoom
new L.Control.Zoom({position: 'bottomleft'}).addTo(mymap);

// importation des donnees exterieures
import {cityIcon} from "../assets/assets.js";
import "../modules/rotated_markers.js";
import {createMiddleMarker, createMiddleMarkerPath, latLngMoyenne} from "../modules/fonctions_transverses.js";
import {BusGeo} from "./Transports/BusLines/indexBus.js"
import {CarGeo} from "./Transports/CarTrips/indexCar.js"
import {TrainGeo} from "./Transports/TrainLines/indexTrains.js"
import {BoatGeo} from "./Transports/BoatLines/indexBoat.js"
import {VeloGeo} from "./Transports/Velo/indexVelo.js"
import {RandoGeo} from "./Transports/Randos/indexRando.js"
import {AvionsGeo} from "./Transports/Planes/indexPlane.js";
import {DptsGeo} from "./MapSpots/Departements/indexDpt.js"
import {VillesPtsGeo, VillesPolyGeo, VillesDpttmp, VillesRegtmp} from "./MapSpots/Villes/indexVille.js"


// Ajout des json importes sur la carte

// Departements
var dptsLayer = L.layerGroup(DptsGeo);
dptsLayer.addTo(mymap);

// Markers villes
var VillesLayer = L.layerGroup(VillesPtsGeo);
// VillesLayer.addTo(mymap)

// Polygones villes
var VillesPolyLayer = L.layerGroup(VillesPolyGeo);
VillesPolyLayer.addTo(mymap)

// Avion
var AvionsLayer = L.layerGroup(AvionsGeo);
AvionsLayer.addTo(mymap);

// Voiture
var CarLayer = L.layerGroup(CarGeo);
CarLayer.addTo(mymap);

// Bus --> add marker
var BusLayer = L.layerGroup(BusGeo);
BusLayer.addTo(mymap);

// Train --> add marker
var TrainLayer = L.layerGroup(TrainGeo);
TrainLayer.addTo(mymap);

// Bateau --> add marker
var BoatLayer = L.layerGroup(BoatGeo);
BoatLayer.addTo(mymap);

// Velo --> add marker
var VeloLayer = L.layerGroup(VeloGeo);
VeloLayer.addTo(mymap);

// Randonnees
var RandoLayer = L.layerGroup(RandoGeo);
RandoLayer.addTo(mymap)

var VillesDptLayer = L.layerGroup(latLngMoyenne(mymap, VillesDpttmp))
var VillesRegLayer = L.layerGroup(latLngMoyenne(mymap, VillesRegtmp))
console.log(VillesRegLayer)
VillesRegLayer.addTo(mymap)



// Pour afficher une legende des couleurs
// Ne toucher que ce qui est indique

// var legend = L.control({position: 'bottomleft'});
// var legendcontent = "" ;
// legend.onAdd = function (map) {
// this._div = L.DomUtil.create('div', 'info legend');
//      // Mettre la liste des textes de legende ici
//     var grades = ["inférieur à 100", "entre 100 et 133.3", "entre 133.3 et 166.6", "entre 166.6 et 200", "supérieur à 200"];
//      // Mettre les couleurs de la legende ici
//     var colors = ["#ffe5b4", "#ffcc99", "#f4a460", "#ff8c69", "#fe6f5e"];
// legendcontent += '<b>Densité de population en habitants/km²</b><br>';

// for (var i = 0; i < grades.length; i++) {
//     legendcontent +=
//         '<i style="background:' + colors[i] + '"></i> ' +
//         grades[i]+"<br>";
// }
// this._div.innerHTML += legendcontent;
// return this._div;
// };

// legend.update = function(props){
//     this._div.innerHTML = props;
// };
// legend.addTo(mymap);

// transformation en objet facilement manipulable

// Calques
var visite = {
  "Départements visités": dptsLayer,
  "Avions": AvionsLayer
};
var layerControl = L.control.layers(null, visite).addTo(mymap);
// Création d'un encadre qui affiche les infos
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};
// methode de mise a jour de l'encadre
info.update = function (props) {
  this._div.innerHTML = props;
};
info.addTo(mymap);
info.update("");

 

    //Modification de l'encadre au survol d'un objet a la souris, syntaxe generale
    // Les trucs a changer sont monObjet, monTexte, #maNouvelleCouleur

    // monObjet.on('mouseover', function(e){
    //     this.setStyle({"color":"#maNouvelleCouleurHexa"});
    //     var monTexte = "mon texte formalise en HTML";
    //     info.update(monTexte);
    // });

    // Ici on reset le style quand on sort et on vide l'encadre
    // monObjet.on('mouseout', function(e){info.update("");this.setStyle(styleProperty(monObjet));});


    // Ici creation d'un marqueur 
    // var monMarqueur = L.marker([nord, est])

    // Affichage d'un popup au clic d'un objet
    // monObjet.bindPopup("mon texte en HTML")

    // regrouper objets en calque pour gerer facilement leur affichage
    // var mesObjets = L.layerGroup([monObjet1, monObjet2, ...]);
    
    // Afficher des infos au clic de la souris, syntaxe generale
    // monObjet.on('click', function(e){
    //     var monTexte = "mon texte en HTML";
    //     info.update(monTexte);
    // })

    // Apparition disparition de choses selon le zoom
    // function zoomChange(e){
    //     if(mymap.getZoom() < zoomVoulu){
    //         monObjet1.addTo(mymap);
    //         monObjet2.removeFrom(mymap);
    //     } else {
    //         monObjet1.removeFrom(mymap);
    //         monObjet2.addTo(mymap);
    //     }
    // };

    // mymap.on('zoom', zoomChange);



    // depannage, permet d'afficher les coordonnees en cliquant si besoin, ne sera pas dans la version finale
    // var popup = L.popup();
    // function onMapClick(e){
    //     popup.setLatLng(e.latlng);
    //     popup.setContent("You clicked the map at " + e.latlng.toString());
    //     popup.openOn(mymap);
    // }
    // mymap.on('click', onMapClick);
