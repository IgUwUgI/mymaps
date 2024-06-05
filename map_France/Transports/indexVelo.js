import {toLayer} from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/Velo/Lyon-Saint-Paul-en-Jarez.geojson";
const el2 = "./Transports/Velo/3_monts-d_or.geojson";

var elts = [el1, el2];

var eltsGeo = Array();

export const VeloLayer = await toLayer(elts, { "color": "#228b22", "dashArray": "4 8" }, "Velo");