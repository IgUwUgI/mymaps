import { createMiddleMarkerPath } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/Randos/39-Noirmont.geojson"
const el2 = "./Transports/Randos/50-LaHague.geojson"
const el3 = "./Transports/Randos/50-MaraisSaire.geojson"
const el4 = "./Transports/Randos/50-PlageSiouville.geojson"
const el5 = "./Transports/Randos/86-Lathus.geojson"
const el6 = "./Transports/Randos/73-Gallopaz.geojson"
const el7 = "./Transports/Randos/74-Confins.geojson"
const el8 = "./Transports/Randos/06-CapFerrat.geojson"
const el9 = "./Transports/Randos/13-EnVau.geojson"
const el10 = "./Transports/Randos/13-Luminy.geojson"
const el11 = "./Transports/Randos/13-Sugiton.geojson"
const el12 = "./Transports/Randos/05-ColletVert1.geojson"
const el13 = "./Transports/Randos/05-ColletVert2.geojson"
const el14 = "./Transports/Randos/05-SerreChevalier.geojson"
const el15 = "./Transports/Randos/05-ValleeClaree.geojson"
const el16 = "./Transports/Randos/15-PuyMary.geojson"

var elts = [
  el12, el13, el14, el15,
  el8,
  el9, el10, el11,
  el16,
  el1,
  el2, el3, el4,
  el6,
  el7,
  el5
]

var eltsGeo = Array()

async function fetchRandos(file) {
    // villes ou je suis alle taille sous-prefectures
    const res = await fetch(file);
    const Randos = await res.json();
    return Randos;
  }

for(var i = 0; i < elts.length; i++) {
  var j = await fetchRandos(elts[i]);
  var jRando = L.geoJson(j);
  jRando.setStyle({"color": "#388004", "dashArray": "4 8"});
  var m = await createMiddleMarkerPath(j, "Hike");
  eltsGeo.push(jRando);
  eltsGeo.push(m);
}

export const RandoGeo = eltsGeo;
