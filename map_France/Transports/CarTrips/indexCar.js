import { createMiddleMarkerPath } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/CarTrips/Mantry-Plouzane.geojson"

var elts = [el1]

var eltsGeo = Array()

async function fetchCar(file) {
    const res = await fetch(file);
    const Car = await res.json();
    return Car;
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchCar(elts[i]);
    var jCar = L.geoJson(j);
    jCar.setStyle({"color": "#de0a26"});
    var m = await createMiddleMarkerPath(j, "Car");
    eltsGeo.push(jCar);
    eltsGeo.push(m)
}

export const CarGeo = eltsGeo;