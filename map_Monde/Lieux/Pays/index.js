const el1 = "./Lieux/Pays/France.json"
const el2 = "./Lieux/Pays/Allemagne.json"
const el3 = "./Lieux/Pays/Autriche.json"
const el4 = "./Lieux/Pays/Belgique.json"
const el5 = "./Lieux/Pays/Hongrie.json"
const el6 = "./Lieux/Pays/Maroc.json"
const el7 = "./Lieux/Pays/Slovaquie.json"
const el8 = "./Lieux/Pays/Slovenie.json"
const el9 = "./Lieux/Pays/Suisse.json"
const el10 = "./Lieux/Pays/Tchequie.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10]

var eltsGeo = Array()

async function fetchPays(file) {
    const res = await fetch(file);
    const Pays = await res.json();
    return L.geoJson(Pays);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchPays(elts[i]);
    eltsGeo.push(j);
}

export const PaysGeo = eltsGeo;