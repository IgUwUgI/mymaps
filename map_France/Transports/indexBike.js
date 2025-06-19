import {toLayer} from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Bike/"
const suffix = ".geojson";

const el1 = "69-Lyon-Saint-Paul-en-Jarez";
const el2 = "69-Monts_d'or";
const el3 = "44-Le_Croisic-Port_Navalo"
const el4 = "56-Locmariaquer-Auray"
const el5 = "29-Quimperle-Concarneau"
const el6 = "29-Concarneau-Benodet"
const el7 = "29-Sainte_Marine-Ile_Tudy"
const el8 = "29-Loctudy-Plogoff"
const el9 = "38-Lyon-Saint_Marcellin"

var IDsStraight = [
  el5, el6, el7, el8,
  el9,
  el3,
  el4, 
  el1
];
var IDsLoop = [
  el2
];

async function fetchElt(file) {
  const res = await fetch(file);
  const trace = await res.json();
  return trace
}

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

var BikeStraightLayer = await toLayer(eltsStraight, { "color": "#228b22", "dashArray": "4 8" }, "BikeStraight", IDsStraight);
var BikeLoopLayer = await toLayer(eltsLoop, { "color": "#228b22", "dashArray": "4 8" }, "BikeLoop", IDsLoop);

const BikeLayer0 = new L.LayerGroup();
BikeLayer0.addLayer(BikeStraightLayer);
BikeLayer0.addLayer(BikeLoopLayer);
const BikeTraces = data

export const BikeLayer = BikeLayer0;
export default BikeTraces;