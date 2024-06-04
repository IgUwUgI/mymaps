import { toLayer } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/Hikes/39-Noirmont.geojson"
const el2 = "./Transports/Hikes/50-LaHague.geojson"
const el3 = "./Transports/Hikes/50-MaraisSaire.geojson"
const el4 = "./Transports/Hikes/50-PlageSiouville.geojson"
const el5 = "./Transports/Hikes/86-Lathus.geojson"
const el6 = "./Transports/Hikes/73-Gallopaz.geojson"
const el7 = "./Transports/Hikes/74-Confins.geojson"
const el8 = "./Transports/Hikes/06-CapFerrat.geojson"
const el9 = "./Transports/Hikes/13-EnVau.geojson"
const el10 = "./Transports/Hikes/13-Luminy.geojson"
const el11 = "./Transports/Hikes/13-Sugiton.geojson"
const el12 = "./Transports/Hikes/05-ColletVert1.geojson"
const el13 = "./Transports/Hikes/05-ColletVert2.geojson"
const el14 = "./Transports/Hikes/05-SerreChevalier.geojson"
const el15 = "./Transports/Hikes/05-ValleeClaree.geojson"
const el16 = "./Transports/Hikes/15-PuyMary.geojson"
const el17 = "./Transports/Hikes/36-Lignac.geojson"
const el18 = "./Transports/Hikes/29-Crozon.geojson"
const el19 = "./Transports/Hikes/29-Lanildut.geojson"
const el20 = "./Transports/Hikes/29-Plouzane.geojson"
const el21 = "./Transports/Hikes/29-Plogoff.geojson"
const el22 = "./Transports/Hikes/29-Conquet.geojson"
const el23 = "./Transports/Hikes/29-Locmaria.geojson"


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