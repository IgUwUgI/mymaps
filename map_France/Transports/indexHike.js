import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Hikes/";
const suffix = ".geojson";

const el1 = "39-Noirmont"
const el2 = "50-LaHague"
const el3 = "50-MaraisSaire"
const el4 = "50-PlageSiouville"
const el5 = "86-Lathus"
const el6 = "73-Gallopaz"
const el7 = "74-Confins"
const el8 = "06-CapFerrat"
const el9 = "13-EnVau"
const el10 = "13-Luminy"
const el11 = "13-Sugiton"
const el12 = "05-ColletVert1"
const el13 = "05-ColletVert2"
const el14 = "05-SerreChevalier"
const el15 = "05-ValleeClaree"
const el16 = "15-PuyMary"
const el17 = "36-Lignac"
const el18 = "29-Crozon"
const el19 = "29-Lanildut"
const el20 = "29-Plouzane"
const el21 = "29-Plogoff"
const el22 = "29-Conquet"
const el23 = "29-Locmaria"
const el24 = "87-Saint-Junien"
const el25 = "74-Aiguilles_rouges"
const el26 = "07-DentDeRez"
const el27 = "69-Cabornis"

var IDsStraight = [
  el12, el13, el14,
  el20, el22, el23,
  el25
]

var IDsLoop = [
  el15,
  el8,
  el26,
  el9, el10, el11,
  el16,
  el18, el19, el21,
  el17,
  el1,
  el2, el3, el4,
  el27,
  el6,
  el7,
  el5,
  el24
]

var eltsStraight = new Array(IDsStraight.length)

for (var i =  0; i < IDsStraight.length; i++) {
  eltsStraight[i] = prefix + IDsStraight[i] + suffix;
}

var eltsLoop = new Array(IDsLoop.length)

for (var i =  0; i < IDsLoop.length; i++) {
  eltsLoop[i] = prefix + IDsLoop[i] + suffix;
}

var HikeStraightLayer = await toLayer(eltsStraight, { "color": "#388004", "dashArray": "4 8" }, "HikeStraight", IDsStraight);
var HikeLoopLayer = await toLayer(eltsLoop, { "color": "#388004", "dashArray": "4 8" }, "HikeLoop", IDsLoop);

const HikeLayer0 = new L.LayerGroup();
HikeLayer0.addLayer(HikeStraightLayer);
HikeLayer0.addLayer(HikeLoopLayer);

export const HikeLayer = HikeLayer0;