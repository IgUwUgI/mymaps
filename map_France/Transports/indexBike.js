import {toLayer} from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/Bike/Lyon-Saint-Paul-en-Jarez.geojson";
const el2 = "./Transports/Bike/3_monts-d_or.geojson";

var elts = [el1, el2];

var eltsGeo = Array();

export const VeloLayer = await toLayer(elts, { "color": "#228b22", "dashArray": "4 8" }, "Velo");