import { createMiddleMarker } from "../../../modules/fonctions_transverses.js";
import {planeIcon} from "../../../assets/assets.js";

// Creation de la carte pour les projections
// syntaxe : setview([Nord, Est], zoom)
var mymapX = L.map('mapidX', {
  zoomDelta: 0.25,
  zoomSnap: 0,
  zoomControl: false
}).setView([46.4836, 2.5264], 6);

const el1 = "./Transports/Planes/01-Paris-Agadir.json"
const el2 = "./Transports/Planes/02-Marrakech-Paris.json"
const el3 = "./Transports/Planes/03-Lyon-TenerifeNorte.json"
const el4 = "./Transports/Planes/04-TenerifeSur-LaPalma.json"
const el5 = "./Transports/Planes/05-LaPalma-TenerifeNorte.json"
const el6 = "./Transports/Planes/06-TenerifeSur-Lyon.json"

var elts = [
    el1, el2, el3, el4, el5, el6
]

var eltsGeo = Array()

async function fetchElt(file) {
  const res = await fetch(file);
  const Avions = await res.json();
  return Avions
}

for(var i = 0; i < elts.length; i++) {
  var j = await fetchElt(elts[i]);
  var jPlane = L.geoJson(j);
  jPlane.setStyle({"color":"#FF5500", "opacity":0.75});
  var m = await createMiddleMarker(mymapX, j, planeIcon);
  eltsGeo.push(jPlane);
  eltsGeo.push(m);
}

var eltsLayer = L.layerGroup(eltsGeo);

export const AvionsLayer = eltsLayer;