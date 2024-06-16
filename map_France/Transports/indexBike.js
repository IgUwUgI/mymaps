import {toLayer} from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Bike/"
const suffix = ".geojson";

const el1 = "Lyon-Saint-Paul-en-Jarez";
const el2 = "3_monts-d_or";

var IDsStraight = [el1];
var IDsLoop = [el2];

var eltsStraight = new Array(IDsStraight.length)

for (var i =  0; i < IDsStraight.length; i++) {
  eltsStraight[i] = prefix + IDsStraight[i] + suffix;
}

var eltsLoop = new Array(IDsLoop.length)

for (var i =  0; i < IDsLoop.length; i++) {
  eltsLoop[i] = prefix + IDsLoop[i] + suffix;
}

var BikeStraightLayer = await toLayer(eltsStraight, { "color": "#228b22", "dashArray": "4 8" }, "BikeStraight", IDsStraight);
var BikeLoopLayer = await toLayer(eltsLoop, { "color": "#228b22", "dashArray": "4 8" }, "BikeLoop", IDsLoop);

const BikeLayer0 = new L.LayerGroup();
BikeLayer0.addLayer(BikeStraightLayer);
BikeLayer0.addLayer(BikeLoopLayer);

export const BikeLayer = BikeLayer0;