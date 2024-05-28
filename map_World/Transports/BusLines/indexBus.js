const el1 = "./Transports/BusLines/AUT-Salzburg-Grodig.geojson"
const el2 = "./Transports/BusLines/AUT-Wien-Kahlenberg.geojson"
const el3 = "./Transports/BusLines/ALL-Polac-Schopfheim.geojson"
const el4 = "./Transports/BusLines/ESP-Adeje-Aeropuerto.geojson"
const el5 = "./Transports/BusLines/ESP-Aeropuerto-ElPaso.geojson"
const el6 = "./Transports/BusLines/ESP-ElPaso-Tazacorte.geojson"
const el7 = "./Transports/BusLines/ESP-Guia-Adeje.geojson"
const el8 = "./Transports/BusLines/ESP-Icod-Chio.geojson"
const el9 = "./Transports/BusLines/ESP-LaLaguna-Anaga.geojson"
const el10 = "./Transports/BusLines/ESP-LaLaguna-Icod.geojson"
const el11 = "./Transports/BusLines/ESP-LaLaguna-PuntaHidalgo.geojson"
const el12 = "./Transports/BusLines/ESP-LaLaguna-SantaCruz.geojson"
const el13 = "./Transports/BusLines/ESP-PuertoCruz-Orotava.geojson"
const el14 = "./Transports/BusLines/ESP-PuertoCruz-Teide.geojson"
const el15 = "./Transports/BusLines/ESP-SantaCruz-Anaga.geojson"
const el16 = "./Transports/BusLines/ESP-SantaCruz-LosCristianos.geojson"


var elts = [
  el1, el2,
  el3,
  el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16
]

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