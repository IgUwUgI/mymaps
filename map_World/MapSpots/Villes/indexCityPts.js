const el1 = "./MapSpots/Villes/Europe/DEUPts.json"
const el2 = "./MapSpots/Villes/Europe/AUTPts.json"
const el3 = "./MapSpots/Villes/Europe/BELPts.json"
const el4 = "./MapSpots/Villes/Europe/ESPPts.json"
const el5 = "./MapSpots/Villes/Europe/HUNPts.json"
const el6 = "./MapSpots/Villes/Afrique/MARPts.json"
const el7 = "./MapSpots/Villes/Europe/SVKPts.json"
const el8 = "./MapSpots/Villes/Europe/SVNPts.json"
const el9 = "./MapSpots/Villes/Europe/CHEPts.json"
const el10 = "./MapSpots/Villes/Europe/CZEPts.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10]

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