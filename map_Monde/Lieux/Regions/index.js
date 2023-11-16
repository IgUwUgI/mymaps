const el1 = "./Lieux/Regions/Europe/Allemagne.json"
const el2 = "./Lieux/Regions/Europe/Autriche.json"
const el3 = "./Lieux/Regions/Europe/Belgique.json"
const el4 = "./Lieux/Regions/Europe/Hongrie.json"
const el5 = "./Lieux/Regions/Afrique/Maroc.json"
const el6 = "./Lieux/Regions/Europe/Slovaquie.json"
const el7 = "./Lieux/Regions/Europe/Slovenie.json"
const el8 = "./Lieux/Regions/Europe/Suisse.json"
const el9 = "./Lieux/Regions/Europe/Tchequie.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9]

var eltsGeo = Array()

async function fetchRegion(file) {
    const res = await fetch(file);
    const Region = await res.json();
    return L.geoJson(Region);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchRegion(elts[i]);
    eltsGeo.push(j);
}

export const RegionsGeo = eltsGeo;