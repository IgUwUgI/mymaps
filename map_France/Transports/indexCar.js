import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/CarTrips/";
const suffix = ".geojson";

const el1 = "Mantry-Plouzane"
const el2 = "Cherbourg-Mantry"

var IDs = [el1, el2]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car", IDs);