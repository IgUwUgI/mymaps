const el1 = "./MapSpots/Villes/Europe/AllemagnePoly.json"
const el2 = "./MapSpots/Villes/Europe/AutrichePoly.json"
const el3 = "./MapSpots/Villes/Europe/BelgiquePoly.json"
const el4 = "./MapSpots/Villes/Europe/HongriePoly.json"
const el5 = "./MapSpots/Villes/Afrique/MarocPoly.json"
const el6 = "./MapSpots/Villes/Europe/SlovaquiePoly.json"
const el7 = "./MapSpots/Villes/Europe/SloveniePoly.json"
const el8 = "./MapSpots/Villes/Europe/SuissePoly.json"
const el9 = "./MapSpots/Villes/Europe/TchequiePoly.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9]

var eltsGeo = Array()

async function fetchVille(file) {
    const res = await fetch(file);
    const Ville = await res.json();
    return L.geoJson(Ville, {"style": Ville.features[0].properties.style});
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchVille(elts[i]);
    eltsGeo.push(j);
}

export const VillesPolyGeo = eltsGeo;