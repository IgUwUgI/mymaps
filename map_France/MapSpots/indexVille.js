const prefix = "./map_France/MapSpots/Villes/"

const el5 = prefix + "AuvergneRhoneAlpesPoly.json"
const el6 = prefix + "BourgogneFrancheComtePoly.json"
const el7 = prefix + "BretagnePoly.json"
const el8 = prefix + "CentrePoly.json"
const el9 = prefix + "GrandEstPoly.json"
const el10 = prefix + "HautsDeFrancePoly.json"
const el11 = prefix + "IleDeFrancePoly.json"
const el12 = prefix + "NormandiePoly.json"
const el13 = prefix + "NouvelleAquitainePoly.json"
const el14 = prefix + "OccitaniePoly.json"
const el15 = prefix + "PACAPoly.json"
const el16 = prefix + "PaysDeLoirePoly.json"
const el17 = prefix + "AuvergneRhoneAlpesPts.json"
const el18 = prefix + "BourgogneFrancheComtePts.json"
const el19 = prefix + "BretagnePts.json"
const el20 = prefix + "CentrePts.json"
const el21 = prefix + "GrandEstPts.json"
const el22 = prefix + "HautsDeFrancePts.json"
const el23 = prefix + "IleDeFrancePts.json"
const el24 = prefix + "NormandiePts.json"
const el25 = prefix + "NouvelleAquitainePts.json"
const el26 = prefix + "OccitaniePts.json"
const el27 = prefix + "PACAPts.json"
const el28 = prefix + "PaysDeLoirePts.json"

var eltsPoly = [el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16];
var eltsPts = [el17, el18, el19, el20, el21, el22, el23, el24, el25, el26, el27, el28];

var Regions = {
  "Auvergne-Rhône-Alpes": 0,
  "Bourgogne-Franche-Comté": 1,
  "Bretagne": 2,
  "Centre-Val-de-Loire": 3,
  "Corse": 4,
  "Grand-Est": 5,
  "Hauts-de-France": 6,
  "Île-de-France": 7,
  "Normandie": 8,
  "Nouvelle-Aquitaine": 9,
  "Occitanie": 10,
  "Provence-Alpes-Côte-d'Azur": 11,
  "Pays-de-Loire": 12,
  "Guadeloupe": 13,
  "Guyane": 14,
  "La Réunion": 15,
  "Martinique": 16,
  "Mayotte": 17
}
// 

var VillesPolyGeo0 = Array();
var VillesPtsGeo0 = Array();

var VillesDpttmp0 = Array(96);
var VillesRegtmp0 = Array(18);

for (i = 0; i < 96; i++) {
  VillesDpttmp0[i] = []
}
for (i = 0; i < 18; i++) {
  VillesRegtmp0[i] = []
}

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

for (var i = 0; i < eltsPoly.length; i++) {
  var j = await fetchPoly(eltsPoly[i]);
  var Ville_j = new Array(j.features)[0];
  for (var k = 0; k < Ville_j.length; k++) {
    var style0 = { "color": Ville_j[k].properties.color, "weight": 1, "fillOpacity": 0.30 }
    switch (Ville_j[k].properties.type) {
      case "Main":
        style0["fillOpacity"] = 0.30;
        break;
      case "Banlieue":
        style0["fillOpacity"] = 0.15;
        break;
      case "A_completer":
        style0["fillOpacity"] = 0;
        style0["opacity"] = 0.5;
        break;
      default:
        style0 = Ville_j[k].properties.style
        break;
    }
    VillesPolyGeo0.push(L.geoJson(Ville_j[k], { "style": style0 }));
  }
}

for (var i = 0; i < eltsPts.length; i++) {
  var j = await fetchPt(eltsPts[i]);
  var Pref_j = new Array(j.features)[0];
  for (var k = 0; k < Pref_j.length; k++) {
    VillesPtsGeo0.push(L.marker(Pref_j[k].geometry.coordinates));
    VillesDpttmp0[Math.floor(Pref_j[k].properties.Code / 1000)].push(Pref_j[k]);
    VillesRegtmp0[Regions[Pref_j[k].properties.Region]].push(Pref_j[k]);
  }
}

export const VillesPolyLayer = L.layerGroup(VillesPolyGeo0);
export const VillesPtsLayer = L.layerGroup(VillesPtsGeo0);
export const VillesDpttmp = VillesDpttmp0;
export const VillesRegtmp = VillesRegtmp0;