import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/Hikes/"

const el1 = prefix + "39-Noirmont.geojson"
const el2 = prefix + "50-LaHague.geojson"
const el3 = prefix + "50-MaraisSaire.geojson"
const el4 = prefix + "50-PlageSiouville.geojson"
const el5 = prefix + "86-Lathus.geojson"
const el6 = prefix + "73-Gallopaz.geojson"
const el7 = prefix + "74-Confins.geojson"
const el8 = prefix + "06-CapFerrat.geojson"
const el9 = prefix + "13-EnVau.geojson"
const el10 = prefix + "13-Luminy.geojson"
const el11 = prefix + "13-Sugiton.geojson"
const el12 = prefix + "05-ColletVert1.geojson"
const el13 = prefix + "05-ColletVert2.geojson"
const el14 = prefix + "05-SerreChevalier.geojson"
const el15 = prefix + "05-ValleeClaree.geojson"
const el16 = prefix + "15-PuyMary.geojson"
const el17 = prefix + "36-Lignac.geojson"
const el18 = prefix + "29-Crozon.geojson"
const el19 = prefix + "29-Lanildut.geojson"
const el20 = prefix + "29-Plouzane.geojson"
const el21 = prefix + "29-Plogoff.geojson"
const el22 = prefix + "29-Conquet.geojson"
const el23 = prefix + "29-Locmaria.geojson"


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

export const RandoLayer = await toLayer(elts, { "color": "#388004", "dashArray": "4 8" }, "Hike");