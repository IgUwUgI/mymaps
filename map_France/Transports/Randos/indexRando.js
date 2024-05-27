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
const el17 = "./Transports/Randos/36-Lignac.geojson"
const el18 = "./Transports/Randos/29-Crozon.geojson"
const el19 = "./Transports/Randos/29-Lanildut.geojson"
const el20 = "./Transports/Randos/29-Plouzane.geojson"
const el21 = "./Transports/Randos/29-Plogoff.geojson"
const el22 = "./Transports/Randos/29-Conquet.geojson"
const el23 = "./Transports/Randos/29-Locmaria.geojson"


var elts = [
  el12, el13, el14, el15,
  el8,
  el9, el10, el11,
  el16,
  el18, el19, el20, el21, el22, el23,
  el17,
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

for (var i = 0; i < elts.length; i++) {
  var j = await fetchRandos(elts[i]);
  var jRando = L.geoJson(j);
  jRando.setStyle({ "color": "#388004", "dashArray": "4 8" });
  var m = await createMiddleMarkerPath(j, "Hike");
  eltsGeo.push(jRando);
  eltsGeo.push(m);
}

export const RandoGeo = eltsGeo;
