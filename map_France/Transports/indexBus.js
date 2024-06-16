import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BusLines/"
const suffix = ".geojson";

const el1 = "Avgn-Gargas"
const el2 = "Bdx-Lacanau"
const el3 = "Dijon-Iter"
const el4 = "Polac-Auvergne"
const el5 = "Polac-SerChe"
const el6 = "Polac-Schopfheim"

var IDs = [el1, el2, el3, el4, el5, el6]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const BusLayer = await toLayer(elts, { "color": "#c62d42"}, "Bus", IDs);