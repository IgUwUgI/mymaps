import { toLayer } from "../../../modules/fonctions_transverses.js";


const el1 = "./Transports/Hikes/ESP-Anaga-1.geojson"
const el2 = "./Transports/Hikes/ESP-Teide.geojson"
const el3 = "./Transports/Hikes/ESP-Chio.geojson"
const el4 = "./Transports/Hikes/ESP-SantiagoDelTeide-Chio.geojson"
const el5 = "./Transports/Hikes/ESP-ElPaso-LosLLanos.geojson"
const el6 = "./Transports/Hikes/ESP-Tajogaite.geojson"
const el7 = "./Transports/Hikes/ESP-Anaga-2.geojson"
const el8 = "./Transports/Hikes/ESP-Anaga-3.geojson"
const el9 = "./Transports/Hikes/AUT-Unsterberg.geojson"
const el10 = "./Transports/Hikes/AUT-Kahlenberg.geojson"


var elts = [
  el1, el2, el3, el4, el5, el6, el7, el8,
  el9, el10
]

export const RandoLayer = await toLayer(elts, { "color": "#388004", "dashArray": "4 8" }, "Hike");
