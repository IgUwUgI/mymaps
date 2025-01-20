import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/CarTrips/"
const suffix = ".geojson";

// Intercontinental
// Afrique
const el3 = "DZA-Djanet_RT"

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el1 = "ESP-Teide-LaLaguna"
const el2 = "ESP-Tour_LaPalma"

// Océanie

var IDs = [
  el3,
  el1, el2
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car", IDs);