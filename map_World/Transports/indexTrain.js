import { toLayer } from "../../modules/fonctions_transverses.js"

const prefix = "./Transports/TrainLines/"
const suffix = ".geojson";

const el1 = "01-Schopfheim-Lorrach"
const el2 = "02-Lorrach-Freiburg"
const el3 = "03-Lorrach-Basel"
const el4 = "04-Basel-Kaiseraugst"
const el5 = "05-Lyon-Geneve"
const el6 = "06-Geneve-StGall"
const el7 = "07-StGall-Munchen"
const el8 = "08-Munchen-Salzburg"
const el9 = "09-Salzburg-Linz"
const el10 = "10-Linz-Prague"
const el11 = "11-Prague-Brno"
const el12 = "12-Brno-Wien"
const el13 = "13-Wien-Bratislava"
const el14 = "14-Bratislava-Budapest"
const el15 = "15-Budapest-Ljubljana"
const el16 = "16-Ljubljana-Zurich"
const el17 = "17-Zurich-Basel"
const el18 = "18-Basel-Mulhouse"
const el19 = "19-Paris-Bruxelles"
const el20 = "20-Bruxelles-Anvers"
const el21 = "21-Bruxelles-Gand"
const el22 = "22-Gand-Brugge"
const el23 = "23-Brugge-Knokke"
const el24 = "24-Brugge-Lille"


var IDs = [
  el1, el2, el3, el4, 
  el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, 
  el19, el20, el21, el22, el23, el24
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const TrainLayer = await toLayer(elts, { "color": "#2a52be"}, "Train", IDs)
