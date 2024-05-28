import { createMiddleMarkerPath } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/BoatLines/Arcachon-CapFerret.geojson"

var elts = [el1]

var eltsGeo = Array()

async function fetchBoat(file) {
    const res = await fetch(file);
    const Boat = await res.json();
    return Boat;
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchBoat(elts[i]);
    var jBoat = L.geoJson(j);
    jBoat.setStyle({"color": "#042e60"});
    var m = await createMiddleMarkerPath(j, "Boat");
    eltsGeo.push(jBoat);
    eltsGeo.push(m);
}

var eltsLayer = L.layerGroup(eltsGeo);

export const BoatLayer = eltsLayer;