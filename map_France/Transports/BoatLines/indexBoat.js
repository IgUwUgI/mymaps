const el1 = "./Transports/BoatLines/Arcachon-CapFerret.geojson"

var elts = [el1]

var eltsGeo = Array()

async function fetchBoat(file) {
    const res = await fetch(file);
    const Boat = await res.json();
    return L.geoJson(Boat);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchBoat(elts[i]);
    j.setStyle({"color": "#042e60"})
    eltsGeo.push(j);
}

export const BoatGeo = eltsGeo;