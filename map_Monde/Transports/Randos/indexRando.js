const el1 = "./Transports/Randos/01-Anaga-1.geojson"
const el2 = "./Transports/Randos/02-Teide.geojson"
const el3 = "./Transports/Randos/03-Chio.geojson"
const el4 = "./Transports/Randos/04-SantiagoDelTeide-Chio.geojson"
const el5 = "./Transports/Randos/05-ElPaso-LosLLanos.geojson"
const el6 = "./Transports/Randos/06-Tajogaite.geojson"
const el7 = "./Transports/Randos/07-Anaga-2.geojson"
const el8 = "./Transports/Randos/08-Anaga-3.geojson"


var elts = [
  el1, el2, el3, el4, el5, el6, el7, el8
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
