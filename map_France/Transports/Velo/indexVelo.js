const el1 = "./Transports/Velo/Lyon-Saint-Paul-en-Jarez.geojson"
const el2 = "./Transports/Velo/3_monts-d_or.geojson"

var elts = [el1, el2]

var eltsGeo = Array()

async function fetchTrain(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Velo = await res.json();
    return L.geoJson(Velo);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchTrain(elts[i]);
    eltsGeo.push(j);
}

export const VeloGeo = eltsGeo;