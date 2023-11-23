const el1 = "./MapSpots/Villes/PrefecturesPoly.json"
const el2 = "./MapSpots/Villes/PrefecturesPts.json"
// const el3 = "./MapSpots/Departements/Bretagne.json"
// const el4 = "./MapSpots/Departements/Centre.json"
// const el5 = "./MapSpots/Departements/GrandEst.json"
// const el6 = "./MapSpots/Departements/HautsDeFrance.json"
// const el7 = "./MapSpots/Departements/IleDeFrance.json"
// const el8 = "./MapSpots/Departements/Normandie.json"
// const el9 = "./MapSpots/Departements/NouvelleAquitaine.json"
// const el10 = "./MapSpots/Departements/Occitanie.json"
// const el11 = "./MapSpots/Departements/PACA.json"
// const el12 = "./MapSpots/Departements/PaysDeLoire.json"

var eltsPrefPoly = [el1];
var eltsPrefPts = [el2];

var PrefPolyGeo0 = Array();
var PrefGeo0 = Array();

async function fetchPrefPoly(file) {
    const res = await fetch(file);
    const PrefPoly = await res.json();
    return PrefPoly
    // return L.geoJson(PrefPoly, {"style": PrefPoly.features[0].properties.style});
  }

async function fetchPref(file) {
  const res = await fetch(file);
  const Pref = await res.json();
  return Pref;
}

// for(var i = 0; i < eltsPrefPoly.length; i++) {
//     var j = await fetchPrefPoly(eltsPrefPoly[i]);
//     PrefPolyGeo0.push(j);
// }

for(var i = 0; i < eltsPrefPoly.length; i++) {
  var j = await fetchPrefPoly(eltsPrefPoly[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    PrefPolyGeo0.push(L.geoJson(Pref_j[k], {"style": Pref_j[k].properties.style}));
  }
}

for(var i = 0; i < eltsPrefPts.length; i++) {
  var j = await fetchPref(eltsPrefPts[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    PrefGeo0.push(L.marker(Pref_j[k].geometry.coordinates));
  }
}

export const PrefPolyGeo = PrefPolyGeo0;
export const PrefGeo = PrefGeo0;