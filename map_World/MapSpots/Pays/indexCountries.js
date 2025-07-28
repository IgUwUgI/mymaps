// Afrique
const el6 = "./MapSpots/Pays/Afrique/MAR.json"
const el11 = "./MapSpots/Pays/Afrique/DZA.json"

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el1 = "./MapSpots/Pays/Europe/FRA.json"
const el2 = "./MapSpots/Pays/Europe/DEU.json"
const el3 = "./MapSpots/Pays/Europe/AUT.json"
const el4 = "./MapSpots/Pays/Europe/BEL.json"
const el5 = "./MapSpots/Pays/Europe/HUN.json"
const el7 = "./MapSpots/Pays/Europe/SVK.json"
const el8 = "./MapSpots/Pays/Europe/SVN.json"
const el9 = "./MapSpots/Pays/Europe/CHE.json"
const el10 = "./MapSpots/Pays/Europe/CZE.json"
const el12 = "./MapSpots/Pays/Europe/NLD.json"
const el13 = "./MapSpots/Pays/Europe/ITA.json"
// Océanie



var elts = [
  el6, el11,
  el1, el2, el3, el4, el5, el7, el8, el9, el10, el12, el13
]

var eltsGeo = Array()

async function fetchPays(file) {
    const res = await fetch(file);
    const Pays = await res.json();
    return L.geoJson(Pays, {"style": Pays.features[0].properties.style});
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchPays(elts[i]);
    eltsGeo.push(j);
}

export const PaysGeo = eltsGeo;