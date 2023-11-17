const el1 = "./Transports/BusLines/Salzburg-Grodig.geojson"
const el2 = "./Transports/BusLines/Wien-Kahlenberg.geojson"
const el3 = "./Transports/BusLines/Polac-Schopfheim.geojson"

var elts = [el1, el2, el3]

var eltsGeo = Array()

async function fetchBus(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Bus = await res.json();
    return L.geoJson(Bus);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchBus(elts[i]);
    eltsGeo.push(j);
}

export const BusGeo = eltsGeo;