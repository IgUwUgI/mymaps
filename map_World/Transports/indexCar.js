import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/CarTrips/"
const suffix = ".geojson";

const el1 = "ESP-Teide-LaLaguna"
const el2 = "ESP-Tour_LaPalma"

var IDs = [
  el1, el2
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car", IDs);