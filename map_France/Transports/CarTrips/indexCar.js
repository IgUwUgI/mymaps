const el1 = "./Transports/CarTrips/Mantry-Plouzane.geojson"

var elts = [el1]

var eltsGeo = Array()

async function fetchCar(file) {
    const res = await fetch(file);
    const Car = await res.json();
    return L.geoJson(Car);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchCar(elts[i]);
    eltsGeo.push(j);
}

export const CarGeo = eltsGeo;