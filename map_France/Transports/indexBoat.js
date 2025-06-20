import {toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BoatLines/"
const suffix = ".geojson";

const el1 = "33-Arcachon-CapFerret"
const el2 = "56-Port_Navalo-Locmariaquer"
const el3 = "29-Benodet-Sainte_Marine"
const el4 = "29-Concarneau"
const el5 = "29-Ile_Tudy-Loctudy"
const el6 = "83-Hyeres-PortCros"

var IDs = [
  el3, el4, el5,
  el1, 
  el2,
  el6
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const BoatLayer = await toLayer(elts, { "color": "#042e60" }, "Boat", IDs);