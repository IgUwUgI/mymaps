const el1 = "./MapSpots/Villes/PrefecturesPoly.json"
const el2 = "./MapSpots/Villes/PrefecturesPts.json"
const el3 = "./MapSpots/Villes/SousPrefPoly.json"
const el4 = "./MapSpots/Villes/SousPrefPts.json"
const el5 = "./MapSpots/Villes/AuvergneRhoneAlpesPoly.json"
const el6 = "./MapSpots/Villes/BourgogneFrancheComtePoly.json"
const el7 = "./MapSpots/Villes/BretagnePoly.json"
const el8 = "./MapSpots/Villes/CentrePoly.json"
const el9 = "./MapSpots/Villes/GrandEstPoly.json"
const el10 = "./MapSpots/Villes/HautsDeFrancePoly.json"
const el11 = "./MapSpots/Villes/IleDeFrancePoly.json"
const el12 = "./MapSpots/Villes/NormandiePoly.json"
const el13 = "./MapSpots/Villes/NouvelleAquitainePoly.json"
const el14 = "./MapSpots/Villes/OccitaniePoly.json"
const el15 = "./MapSpots/Villes/PACAPoly.json"
const el16 = "./MapSpots/Villes/PaysDeLoirePoly.json"
const el17 = "./MapSpots/Villes/AuvergneRhoneAlpesPts.json"
const el18 = "./MapSpots/Villes/BourgogneFrancheComtePts.json"
const el19 = "./MapSpots/Villes/BretagnePts.json"
const el20 = "./MapSpots/Villes/CentrePts.json"
const el21 = "./MapSpots/Villes/GrandEstPts.json"
const el22 = "./MapSpots/Villes/HautsDeFrancePts.json"
const el23 = "./MapSpots/Villes/IleDeFrancePts.json"
const el24 = "./MapSpots/Villes/NormandiePts.json"
const el25 = "./MapSpots/Villes/NouvelleAquitainePts.json"
const el26 = "./MapSpots/Villes/OccitaniePts.json"
const el27 = "./MapSpots/Villes/PACAPts.json"
const el28 = "./MapSpots/Villes/PaysDeLoirePts.json"

var eltsPrefPoly = [el1];
var eltsPrefPts = [el2];
var eltsSsPrefPoly = [el3];
var eltsSsPrefPts = [el4];
var eltsPoly = [el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16];
var eltsPts = [el17, el19, el20, el21, el22, el24, el25, el28];
// , el18, el23, el26, el27

var PrefPolyGeo0 = Array();
var PrefGeo0 = Array();
var SsPrefPolyGeo0 = Array();
var SsPrefGeo0 = Array();
var VillesPolyGeo0 = Array();
var VillesPtsGeo0 = Array();

async function fetchPoly(file) {
    const res = await fetch(file);
    const Poly = await res.json();
    return Poly
  }

async function fetchPt(file) {
  const res = await fetch(file);
  const Pt = await res.json();
  return Pt;
}

for(var i = 0; i < eltsPrefPoly.length; i++) {
  var j = await fetchPoly(eltsPrefPoly[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    var style0 = {"color": Pref_j[k].properties.color, "weight": 1, "fillOpacity": 0.30}
    switch (Pref_j[k].properties.type) {
      case "Main":
        style0["fillOpacity"] = 0.30;
        break;
      case "Banlieue":
        style0["fillOpacity"] = 0.15;
        break;
      case "A_completer":
        style0["fillOpacity"] = 0;
        break;
      default:
        break;
    }
    PrefPolyGeo0.push(L.geoJson(Pref_j[k], {"style": style0}));
  }
}

for(var i = 0; i < eltsPrefPts.length; i++) {
  var j = await fetchPt(eltsPrefPts[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    PrefGeo0.push(L.marker(Pref_j[k].geometry.coordinates));
  }
}

for(var i = 0; i < eltsSsPrefPoly.length; i++) {
  var j = await fetchPoly(eltsSsPrefPoly[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    var style0 = {"color": Pref_j[k].properties.color, "weight": 1, "fillOpacity": 0.30}
    switch (Pref_j[k].properties.type) {
      case "Main":
        style0["fillOpacity"] = 0.30;
        break;
      case "Banlieue":
        style0["fillOpacity"] = 0.15;
        break;
      case "A_completer":
        style0["fillOpacity"] = 0;
        break;
      default:
        break;
    }
    SsPrefPolyGeo0.push(L.geoJson(Pref_j[k], {"style": style0}));
  }
}

for(var i = 0; i < eltsSsPrefPts.length; i++) {
  var j = await fetchPt(eltsSsPrefPts[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    SsPrefGeo0.push(L.marker(Pref_j[k].geometry.coordinates));
  }
}

for(var i = 0; i < eltsPoly.length; i++) {
  var j = await fetchPoly(eltsPoly[i]);
  var Ville_j = new Array(j.features)[0];
  for (var k = 0; k <Ville_j.length; k++){
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
        break;
      default:
        style0 = Ville_j[k].properties.style
        break;
    }
    VillesPolyGeo0.push(L.geoJson(Ville_j[k], {"style": style0}));
  }
}

for(var i = 0; i < eltsPts.length; i++) {
  var j = await fetchPt(eltsPts[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++){
    VillesPtsGeo0.push(L.marker(Pref_j[k].geometry.coordinates));
  }
}

export const PrefPolyGeo = PrefPolyGeo0;
export const PrefGeo = PrefGeo0;
export const SsPrefPolyGeo = SsPrefPolyGeo0;
export const SsPrefGeo = SsPrefGeo0;
export const VillesPolyGeo = VillesPolyGeo0;
export const VillesPtsGeo = VillesPtsGeo0;