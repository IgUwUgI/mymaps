const el1 = "./Transports/TrainLines/01-Schopfheim-Lorrach.geojson"
const el2 = "./Transports/TrainLines/02-Lorrach-Freiburg.geojson"
const el3 = "./Transports/TrainLines/03-Lorrach-Basel.geojson"
const el4 = "./Transports/TrainLines/04-Basel-Kaiseraugst.geojson"
const el5 = "./Transports/TrainLines/05-Lyon-Geneve.geojson"
const el6 = "./Transports/TrainLines/06-Geneve-StGall.geojson"
const el7 = "./Transports/TrainLines/07-StGall-Munchen.geojson"
const el8 = "./Transports/TrainLines/08-Munchen-Salzburg.geojson"
const el9 = "./Transports/TrainLines/09-Salzburg-Linz.geojson"
const el10 = "./Transports/TrainLines/10-Linz-Prague.geojson"
const el11 = "./Transports/TrainLines/11-Prague-Brno.geojson"
const el12 = "./Transports/TrainLines/12-Brno-Wien.geojson"
const el13 = "./Transports/TrainLines/13-Wien-Bratislava.geojson"
const el14 = "./Transports/TrainLines/14-Bratislava-Budapest.geojson"
const el15 = "./Transports/TrainLines/15-Budapest-Ljubljana.geojson"
const el16 = "./Transports/TrainLines/16-Ljubljana-Zurich.geojson"
const el17 = "./Transports/TrainLines/12-Brno-Wien.geojson"


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