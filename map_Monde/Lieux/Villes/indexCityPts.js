const el1 = "./Lieux/Villes/Europe/AllemagnePts.json"
const el2 = "./Lieux/Villes/Europe/AutrichePts.json"
const el3 = "./Lieux/Villes/Europe/BelgiquePts.json"
const el4 = "./Lieux/Villes/Europe/HongriePts.json"
const el5 = "./Lieux/Villes/Afrique/MarocPts.json"
const el6 = "./Lieux/Villes/Europe/SlovaquiePts.json"
const el7 = "./Lieux/Villes/Europe/SloveniePts.json"
const el8 = "./Lieux/Villes/Europe/SuissePts.json"
const el9 = "./Lieux/Villes/Europe/TchequiePts.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9]

var eltsGeo = Array()

async function fetchVille(file) {
    const res = await fetch(file);
    const Ville = await res.json();
    return Ville;
  }

  for(var i = 0; i < elts.length; i++) {
    var j = await fetchVille(elts[i]);
    var Villes_j = new Array(j.features)[0];
    for (var k = 0; k < Villes_j.length; k++) {
      eltsGeo.push(L.marker(Villes_j[k].geometry.coordinates));
    }
  }
// for(var i = 0; i < elts.length; i++) {
//     var j = await fetchVille(elts[i]);
//     console.log(j)
//     var Ville = new Array(j.features)[0];
//     for (var i = 0; i < Ville.length;i++) {
//       eltsGeo.push(L.marker(Ville[i].geometry.coordinates));
//     };
    
// }

export const VillesPtGeo = eltsGeo;