import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Runs/";
const suffix = ".geojson";

const el1 = "69-Cabornis"
const el2 = "39-Mantry"
const el3 = "39-Baume_les_Mr"
const el4 = "39-Mauffans"
const el5 = "39-Mantry2"
const el6 = "69-LyonLoop"
const el7 = "69-LyonLoop2"
const el8 = "69-LyonTrav1"
const el9 = "69-LyonTrav2"
const el10 = "69-LyonTrav3"
const el11 = "92-FontenayAuxRoses"

var IDsStraight = [
  el8, el9, el10
]

var IDsLoop = [
  el2, el3, el4, el5,
  el1, el6, el7,
  el11
]

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

var RunStraightLayer = await toLayer(eltsStraight, { "color": "#bc6700ff", "dashArray": "4 8" }, "HikeStraight", IDsStraight);
var RunLoopLayer = await toLayer(eltsLoop, { "color": "#bc6700ff", "dashArray": "4 8" }, "HikeLoop", IDsLoop);

const RunLayer0 = new L.LayerGroup();
RunLayer0.addLayer(RunStraightLayer);
RunLayer0.addLayer(RunLoopLayer);
const RunTraces = data

export const RunLayer = RunLayer0;
export default RunTraces;