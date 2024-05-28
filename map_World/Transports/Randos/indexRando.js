const el1 = "./Transports/Randos/ESP-Anaga-1.geojson"
const el2 = "./Transports/Randos/ESP-Teide.geojson"
const el3 = "./Transports/Randos/ESP-Chio.geojson"
const el4 = "./Transports/Randos/ESP-SantiagoDelTeide-Chio.geojson"
const el5 = "./Transports/Randos/ESP-ElPaso-LosLLanos.geojson"
const el6 = "./Transports/Randos/ESP-Tajogaite.geojson"
const el7 = "./Transports/Randos/ESP-Anaga-2.geojson"
const el8 = "./Transports/Randos/ESP-Anaga-3.geojson"
const el9 = "./Transports/Randos/AUT-Unsterberg.geojson"
const el10 = "./Transports/Randos/AUT-Kahlenberg.geojson"


var elts = [
  el1, el2, el3, el4, el5, el6, el7, el8,
  el9, el10
]

var eltsGeo = Array()

async function fetchRandos(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Randos = await res.json();
    return L.geoJson(Randos);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchRandos(elts[i]);
    eltsGeo.push(j);
}

export const RandoGeo = eltsGeo;
