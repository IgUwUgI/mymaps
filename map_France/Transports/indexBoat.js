import {toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BoatLines/"
const suffix = ".geojson";

const el1 = "Arcachon-CapFerret"

var IDs = [el1]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const BoatLayer = await toLayer(elts, { "color": "#042e60" }, "Boat", IDs);