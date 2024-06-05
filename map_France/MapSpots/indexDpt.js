const el1 = "./MapSpots/Departements/AuvergneRhoneAlpes.json"
const el2 = "./MapSpots/Departements/BourgogneFrancheComte.json"
const el3 = "./MapSpots/Departements/Bretagne.json"
const el4 = "./MapSpots/Departements/Centre.json"
const el5 = "./MapSpots/Departements/GrandEst.json"
const el6 = "./MapSpots/Departements/HautsDeFrance.json"
const el7 = "./MapSpots/Departements/IleDeFrance.json"
const el8 = "./MapSpots/Departements/Normandie.json"
const el9 = "./MapSpots/Departements/NouvelleAquitaine.json"
const el10 = "./MapSpots/Departements/Occitanie.json"
const el11 = "./MapSpots/Departements/PACA.json"
const el12 = "./MapSpots/Departements/PaysDeLoire.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12]

var eltsGeo = Array()

async function fetchElt(file) {
    const res = await fetch(file);
    const Dpt = await res.json();
    return L.geoJson(Dpt, {"style": {"color":Dpt.features[0].properties.color, "weight":0.3, "opacity":0.75}});
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchElt(elts[i]);
    eltsGeo.push(j);
}

var eltsLayer = L.layerGroup(eltsGeo);

export const DptsLayer = eltsLayer;