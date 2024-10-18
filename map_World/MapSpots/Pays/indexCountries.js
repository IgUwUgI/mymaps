// Afrique
const el6 = "./MapSpots/Pays/Afrique/Maroc.json"
const el11 = "./MapSpots/Pays/Afrique/Algerie.json"

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el1 = "./MapSpots/Pays/Europe/France.json"
const el2 = "./MapSpots/Pays/Europe/Allemagne.json"
const el3 = "./MapSpots/Pays/Europe/Autriche.json"
const el4 = "./MapSpots/Pays/Europe/Belgique.json"
const el5 = "./MapSpots/Pays/Europe/Hongrie.json"
const el7 = "./MapSpots/Pays/Europe/Slovaquie.json"
const el8 = "./MapSpots/Pays/Europe/Slovenie.json"
const el9 = "./MapSpots/Pays/Europe/Suisse.json"
const el10 = "./MapSpots/Pays/Europe/Tchequie.json"

// Océanie



var elts = [
  el6, el11,
  el1, el2, el3, el4, el5, el7, el8, el9, el10  
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