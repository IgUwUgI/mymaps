import {toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BoatLines/"
const suffix = ".geojson";

// Intercontinental
const el1 = "FRADZA-Marseille-Bejaia"
const el2 = "DZAFRA-Alger-Marseille"

// Afrique
// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
// Océanie

var IDs = [el1, el2]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const BoatLayer = await toLayer(elts, { "color": "#042e60" }, "Boat", IDs);