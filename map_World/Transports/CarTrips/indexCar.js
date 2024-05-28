const el1 = "./Transports/CarTrips/ESP-Teide-LaLaguna.geojson"
const el2 = "./Transports/CarTrips/ESP-Tour_LaPalma.geojson"


var elts = [
  el1, el2
]

var eltsGeo = Array()

async function fetchCar(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Car = await res.json();
    return L.geoJson(Car);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchCar(elts[i]);
    eltsGeo.push(j);
}

export const CarGeo = eltsGeo;