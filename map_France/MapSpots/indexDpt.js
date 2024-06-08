const prefix = "./map_France/MapSpots/Departements/"

const el1 = prefix + "AuvergneRhoneAlpes.json"
const el2 = prefix + "BourgogneFrancheComte.json"
const el3 = prefix + "Bretagne.json"
const el4 = prefix + "Centre.json"
const el5 = prefix + "GrandEst.json"
const el6 = prefix + "HautsDeFrance.json"
const el7 = prefix + "IleDeFrance.json"
const el8 = prefix + "Normandie.json"
const el9 = prefix + "NouvelleAquitaine.json"
const el10 = prefix + "Occitanie.json"
const el11 = prefix + "PACA.json"
const el12 = prefix + "PaysDeLoire.json"

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