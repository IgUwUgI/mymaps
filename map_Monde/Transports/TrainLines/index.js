const el1 = "./Transports/TrainLines/Bratislava-Budapest.geojson"
const el2 = "./Transports/TrainLines/Brno-Wien.geojson"
const el3 = "./Transports/TrainLines/Budapest-Ljubljana.geojson"
const el4 = "./Transports/TrainLines/Geneve-StGall.geojson"
const el5 = "./Transports/TrainLines/Ljubljana-Zurich.geojson"
const el6 = "./Transports/TrainLines/Lyon-Geneve.geojson"
const el7 = "./Transports/TrainLines/Munchen-Salzburg.geojson"
const el8 = "./Transports/TrainLines/Prague-Brno.geojson"
const el9 = "./Transports/TrainLines/Salzburg-Prague.geojson"
const el10 = "./Transports/TrainLines/StGall-Munchen.geojson"
const el11 = "./Transports/TrainLines/Wien-Bratislava.geojson"
const el12 = "./Transports/TrainLines/Zurich-Lyon.geojson"
const el13 = "./Transports/TrainLines/Paris-Anvers.geojson"
const el14 = "./Transports/TrainLines/Bruxelles-Knokke.geojson"
const el15 = "./Transports/TrainLines/Brugge-Lille.geojson"
const el16 = "./Transports/TrainLines/Schopfheim-Freiburg.geojson"
const el17 = "./Transports/TrainLines/Basel-Kaiseraugst.geojson"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17]

var eltsGeo = Array()

async function fetchTrain(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Train = await res.json();
    return L.geoJson(Train);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchTrain(elts[i]);
    eltsGeo.push(j);
}

export const TrainGeo = eltsGeo;