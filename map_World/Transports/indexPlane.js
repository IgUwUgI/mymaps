import { createMiddleMarker } from "../../modules/fonctions_transverses.js";
import {planeIcon} from "../../assets/assets.js";

const prefix = "./Transports/Planes/"
const suffix = ".json";

// Creation de la carte pour les projections
// syntaxe : setview([Nord, Est], zoom)
var mymapX = L.map('mapidX', {
  zoomDelta: 0.25,
  zoomSnap: 0,
  zoomControl: false
}).setView([46.4836, 2.5264], 6);

// Intercontinental
const el1 = prefix + "FRAMAR-Paris-Agadir" + suffix
const el2 = prefix + "MARFRA-Marrakech-Paris" + suffix

// Afrique
const el7 = prefix + "DZA-Alger-ElOued" + suffix
const el8 = prefix + "DZA-ElOued-Djanet" + suffix
const el9 = prefix + "DZA-Djanet-Alger" + suffix

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el3 = prefix + "FRAESP-Lyon-TenerifeNorte" + suffix
const el4 = prefix + "ESP-TenerifeSur-LaPalma" + suffix
const el5 = prefix + "ESP-LaPalma-TenerifeNorte" + suffix
const el6 = prefix + "ESPFRA-TenerifeSur-Lyon" + suffix

// Océanie

var elts = [
    el1, el2, el3, el4, el5, el6, el7, el8, el9
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