import {toLayer} from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Bike/"

const el1 = prefix + "Lyon-Saint-Paul-en-Jarez.geojson";
const el2 = prefix + "3_monts-d_or.geojson";

var eltsStraight = [el1];
var eltsLoop = [el2];

var BikeStraightLayer = await toLayer(eltsStraight, { "color": "#228b22", "dashArray": "4 8" }, "BikeStraight");
var BikeLoopLayer = await toLayer(eltsLoop, { "color": "#228b22", "dashArray": "4 8" }, "BikeLoop");

const BikeLayer0 = new L.LayerGroup();
BikeLayer0.addLayer(BikeStraightLayer);
BikeLayer0.addLayer(BikeLoopLayer);

export const BikeLayer = BikeLayer0;