import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Hikes/"

const el1 = prefix + "ESP-Anaga-1.geojson"
const el2 = prefix + "ESP-Teide.geojson"
const el3 = prefix + "ESP-Chio.geojson"
const el4 = prefix + "ESP-SantiagoDelTeide-Chio.geojson"
const el5 = prefix + "ESP-ElPaso-LosLLanos.geojson"
const el6 = prefix + "ESP-Tajogaite.geojson"
const el7 = prefix + "ESP-Anaga-2.geojson"
const el8 = prefix + "ESP-Anaga-3.geojson"
const el9 = prefix + "AUT-Unsterberg.geojson"
const el10 = prefix + "AUT-Kahlenberg.geojson"

var eltsStraight = [
  el1, el2, el4, el5, el10
]

var eltsLoop = [
  el3, el6, el7, el8, el9
]

var HikeStraightLayer = await toLayer(eltsStraight, { "color": "#388004", "dashArray": "4 8" }, "HikeStraight");
var HikeLoopLayer = await toLayer(eltsLoop, { "color": "#388004", "dashArray": "4 8" }, "HikeLoop");

const HikeLayer0 = new L.LayerGroup();
HikeLayer0.addLayer(HikeStraightLayer);
HikeLayer0.addLayer(HikeLoopLayer);

export const HikeLayer = HikeLayer0;