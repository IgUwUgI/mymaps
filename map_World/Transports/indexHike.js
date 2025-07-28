import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Hikes/"
const suffix = ".geojson"

// Intercontiental
// Afrique
const el11 = "DZA-Bejaia-CapCarbon"
const el14 = "DZA-CanyonEssendilene"

// Amérique du Nord
// Amérique du Sud
// Asie
//Europe
const el1 = "ESP-Anaga-1"
const el2 = "ESP-Teide"
const el3 = "ESP-Chio"
const el4 = "ESP-SantiagoDelTeide-Chio"
const el5 = "ESP-ElPaso-LosLLanos"
const el6 = "ESP-Tajogaite"
const el7 = "ESP-Anaga-2"
const el8 = "ESP-Anaga-3"
const el9 = "AUT-Unsterberg"
const el10 = "AUT-Kahlenberg"
const el12 = "ESP-Chio-Guia"
const el13 = "ITA-ClaviereLacGignoux"

// Océanie

async function fetchElt(file) {
  const res = await fetch(file);
  const trace = await res.json();
  return trace
}

var IDsStraight = [
  el11,
  el1, el2, el4, el5, el10, el12
]

var IDsLoop = [
  el3, el6, el7, el8, el9, el13, el14
]

var eltsStraight = new Array(IDsStraight.length)
var data = new Map()

for (var i =  0; i < IDsStraight.length; i++) {
  eltsStraight[i] = prefix + IDsStraight[i] + suffix;
  data.set(IDsStraight[i], await fetchElt(eltsStraight[i]));
}

var eltsLoop = new Array(IDsLoop.length)

for (var i =  0; i < IDsLoop.length; i++) {
  eltsLoop[i] = prefix + IDsLoop[i] + suffix;
  data.set(IDsLoop[i], await fetchElt(eltsLoop[i]));
}

var HikeStraightLayer = await toLayer(eltsStraight, { "color": "#388004", "dashArray": "4 8" }, "HikeStraight", IDsStraight);
var HikeLoopLayer = await toLayer(eltsLoop, { "color": "#388004", "dashArray": "4 8" }, "HikeLoop", IDsLoop);

const HikeLayer0 = new L.LayerGroup();
HikeLayer0.addLayer(HikeStraightLayer);
HikeLayer0.addLayer(HikeLoopLayer);

const HikesTraces = data

export const HikeLayer = HikeLayer0;
export default HikesTraces;