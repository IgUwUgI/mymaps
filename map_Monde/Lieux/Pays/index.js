const el1 = "./Lieux/Pays/Europe/France.json"
const el2 = "./Lieux/Pays/Europe/Allemagne.json"
const el3 = "./Lieux/Pays/Europe/Autriche.json"
const el4 = "./Lieux/Pays/Europe/Belgique.json"
const el5 = "./Lieux/Pays/Europe/Hongrie.json"
const el6 = "./Lieux/Pays/Afrique/Maroc.json"
const el7 = "./Lieux/Pays/Europe/Slovaquie.json"
const el8 = "./Lieux/Pays/Europe/Slovenie.json"
const el9 = "./Lieux/Pays/Europe/Suisse.json"
const el10 = "./Lieux/Pays/Europe/Tchequie.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10]

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