const el1 = "./Lieux/Villes/Europe/AllemagnePts.json"
const el2 = "./Lieux/Villes/Europe/AutrichePts.json"
const el3 = "./Lieux/Villes/Europe/BelgiquePts.json"
const el4 = "./Lieux/Villes/Europe/HongriePts.json"
const el5 = "./Lieux/Villes/Afrique/MarocPts.json"
const el6 = "./Lieux/Villes/Europe/SlovaquiePts.json"
const el7 = "./Lieux/Villes/Europe/SloveniePts.json"
const el8 = "./Lieux/Villes/Europe/SuissePts.json"
const el9 = "./Lieux/Villes/Europe/Tchequie.Ptsjson"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9]

var eltsGeo = Array()

async function fetchVille(file) {
    const res = await fetch(file);
    const Ville = await res.json();
    return L.geoJson(Ville);
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchVille(elts[i]);
    eltsGeo.push(j);
}

export const VillesPtGeo = eltsGeo;