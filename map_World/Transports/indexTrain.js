import { toLayer } from "../../modules/fonctions_transverses.js"

const prefix = "./Transports/TrainLines/"
const suffix = ".geojson";

// Intercontinental
// Afrique
const el25 = "DZA-Bejaia-Alger"

// Amérique du Nord
// Amérique du Sud
// Asie
// Europe
const el1 = "DEU-Schopfheim-Lorrach"
const el2 = "DEU-Lorrach-Freiburg"
const el3 = "DEUCHE-Lorrach-Basel"
const el4 = "CHE-Basel-Kaiseraugst"
const el5 = "FRACHE-Lyon-Geneve"
const el6 = "CHE-Geneve-StGall"
const el7 = "CHEDEU-StGall-Munchen"
const el8 = "DEUAUT-Munchen-Salzburg"
const el9 = "AUT-Salzburg-Linz"
const el10 = "AUTCZE-Linz-Prague"
const el11 = "CZE-Prague-Brno"
const el12 = "CZEAUT-Brno-Wien"
const el13 = "AUTSVK-Wien-Bratislava"
const el14 = "SVKHUN-Bratislava-Budapest"
const el15 = "HUNSVN-Budapest-Ljubljana"
const el16 = "SVNCHE-Ljubljana-Zurich"
const el17 = "CHE-Zurich-Basel"
const el18 = "CHEFRA-Basel-Mulhouse"
const el19 = "FRABEL-Paris-Bruxelles"
const el20 = "BEL-Bruxelles-Anvers"
const el21 = "BEL-Bruxelles-Gand"
const el22 = "BEL-Gand-Brugge"
const el23 = "BEL-Brugge-Knokke"
const el24 = "BELFRA-Brugge-Lille"
const el26 = "FRAGBR-Paris-London"
const el27 = "GBR-London-Edinburgh"

// Océanie


var IDs = [
  el1, el2, el3, el4, 
  el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, 
  el19, el20, el21, el22, el23, el24,
  el25,
  el26, el27
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const TrainLayer = await toLayer(elts, { "color": "#2a52be"}, "Train", IDs)
