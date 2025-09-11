import { createMiddleMarker, mymapX } from "../../modules/fonctions_transverses.js";
import {planeIcon} from "../../assets/assets.js";

const prefix = "./Transports/Planes/"
const suffix = ".json";

// Intercontinental
const el1 = prefix + "FRAMAR-Paris-Agadir" + suffix
const el2 = prefix + "MARFRA-Marrakech-Paris" + suffix

// Afrique
const el8 = prefix + "DZA-Alger-ElOued" + suffix
const el9 = prefix + "DZA-ElOued-Djanet" + suffix
const el10 = prefix + "DZA-Djanet-Alger" + suffix

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el3 = prefix + "FRAESP-Lyon-Barcelona" + suffix
const el4 = prefix + "ESP-Barcelona-TenerifeNorte" + suffix
const el5 = prefix + "ESP-TenerifeSur-LaPalma" + suffix
const el6 = prefix + "ESP-LaPalma-TenerifeNorte" + suffix
const el7 = prefix + "ESPFRA-TenerifeSur-Lyon" + suffix
const el11 = prefix + "FRAGBR-Paris-Bristol" + suffix
const el12 = prefix + "GBRFRA-Bristol-Paris" + suffix

// Océanie

var elts = [
    el1, el2,
    el3, el4, el5, el6, el7, el11, el12,
    el8, el9, el10
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