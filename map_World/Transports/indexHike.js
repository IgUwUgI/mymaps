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


var elts = [
  el1, el2, el3, el4, el5, el6, el7, el8,
  el9, el10
]

export const RandoLayer = await toLayer(elts, { "color": "#388004", "dashArray": "4 8" }, "Hike");
