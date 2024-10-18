// Afrique
const el6 = "./MapSpots/Villes/Afrique/MarocPoly.json"
const el11 = "./MapSpots/Villes/Afrique/AlgeriePoly.json"
// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el1 = "./MapSpots/Villes/Europe/AllemagnePoly.json"
const el2 = "./MapSpots/Villes/Europe/AutrichePoly.json"
const el3 = "./MapSpots/Villes/Europe/BelgiquePoly.json"
const el4 = "./MapSpots/Villes/Europe/EspagnePoly.json"
const el5 = "./MapSpots/Villes/Europe/HongriePoly.json"
const el7 = "./MapSpots/Villes/Europe/SlovaquiePoly.json"
const el8 = "./MapSpots/Villes/Europe/SloveniePoly.json"
const el9 = "./MapSpots/Villes/Europe/SuissePoly.json"
const el10 = "./MapSpots/Villes/Europe/TchequiePoly.json"
const el99 = "./MapSpots/Villes/Europe/FrancePoly.json"

// Océanie



var elts = [
  el6, el11,
  el1, el2, el3, el4, el5, el7, el8, el9, el10
]

var eltsGeo = Array()

async function fetchVille(file) {
    const res = await fetch(file);
    const Ville = await res.json();
    return Ville
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchVille(elts[i]);
    var Ville_j = new Array(j.features)[0];
    for (var k = 0; k < Ville_j.length; k++){
      var style0 = {"color": Ville_j[k].properties.color, "weight": 1, "fillOpacity": 0.30}
      switch (Ville_j[k].properties.type) {
        case "Main":
          style0["fillOpacity"] = 0.30;
          break;
        case "Banlieue":
          style0["fillOpacity"] = 0.15;
          break;
        case "A_completer":
          style0["fillOpacity"] = 0;
          style0["opacity"] = 0.4;
          break;
        default:
          break;
      }
    eltsGeo.push(L.geoJson(Ville_j[k], {"style": style0}));
  }
}


export const VillesPolyGeo = eltsGeo;