const el1 = "./Transports/TrainLines/Annecy-Culoz.geojson"
const el2 = "./Transports/TrainLines/Avgn-Lyon-TER.geojson"
const el3 = "./Transports/TrainLines/Avgn-Mpl-TER.geojson"
const el4 = "./Transports/TrainLines/Avgn-Mpl-TGV.geojson"
const el5 = "./Transports/TrainLines/Avgn-TGV-TER.geojson"
const el6 = "./Transports/TrainLines/Bale-Marseille.geojson"
const el7 = "./Transports/TrainLines/BeB-Genf.geojson"
const el8 = "./Transports/TrainLines/Lyon-Marseille.geojson"
const el9 = "./Transports/TrainLines/Nimes-GDR.geojson"
const el10 = "./Transports/TrainLines/StCham-Lyon.geojson"
const el11 = "./Transports/TrainLines/Dijon-Paris-TGV.geojson"
const el12 = "./Transports/TrainLines/Lyon-Mulhouse-TGV.geojson"
const el13 = "./Transports/TrainLines/Lyon-Paris.geojson"
const el14 = "./Transports/TrainLines/LyonSE-Lille.geojson"
const el15 = "./Transports/TrainLines/Dijon-Paris-TER.geojson"
const el16 = "./Transports/TrainLines/Lyon-AeB.geojson"
const el17 = "./Transports/TrainLines/Kortrijk-Lille.geojson"
const el18 = "./Transports/TrainLines/Cambrai-Lille.geojson"
const el19 = "./Transports/TrainLines/Paris-StQuentin.geojson"
const el20 = "./Transports/TrainLines/LeCroisic-TGVHPic.geojson"
const el21 = "./Transports/TrainLines/Paris-Bdx.geojson"
const el22 = "./Transports/TrainLines/Angers-Lyon.geojson"
const el23 = "./Transports/TrainLines/Paris-Brest.geojson"
const el24 = "./Transports/TrainLines/Paris-Cherbourg.geojson"
const el25 = "./Transports/TrainLines/Paris-Bruxelles.geojson"
const el26 = "./Transports/TrainLines/Rennes-Nantes.geojson"
const el27 = "./Transports/TrainLines/Nantes-Pornic.geojson"
const el28 = "./Transports/TrainLines/Dijon-Troyes.geojson"
const el29 = "./Transports/TrainLines/Paris-Etampes.geojson"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19, el20, el21, el22, el23, el24,
el25, el26, el27, el28, el29]

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