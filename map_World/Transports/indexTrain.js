import { toLayer } from "../../modules/fonctions_transverses.js"

const prefix = "./Transports/TrainLines/"

const el1 = prefix + "01-Schopfheim-Lorrach.geojson"
const el2 = prefix + "02-Lorrach-Freiburg.geojson"
const el3 = prefix + "03-Lorrach-Basel.geojson"
const el4 = prefix + "04-Basel-Kaiseraugst.geojson"
const el5 = prefix + "05-Lyon-Geneve.geojson"
const el6 = prefix + "06-Geneve-StGall.geojson"
const el7 = prefix + "07-StGall-Munchen.geojson"
const el8 = prefix + "08-Munchen-Salzburg.geojson"
const el9 = prefix + "09-Salzburg-Linz.geojson"
const el10 = prefix + "10-Linz-Prague.geojson"
const el11 = prefix + "11-Prague-Brno.geojson"
const el12 = prefix + "12-Brno-Wien.geojson"
const el13 = prefix + "13-Wien-Bratislava.geojson"
const el14 = prefix + "14-Bratislava-Budapest.geojson"
const el15 = prefix + "15-Budapest-Ljubljana.geojson"
const el16 = prefix + "16-Ljubljana-Zurich.geojson"
const el17 = prefix + "17-Zurich-Basel.geojson"
const el18 = prefix + "18-Basel-Mulhouse.geojson"
const el19 = prefix + "19-Paris-Bruxelles.geojson"
const el20 = prefix + "20-Bruxelles-Anvers.geojson"
const el21 = prefix + "21-Bruxelles-Gand.geojson"
const el22 = prefix + "22-Gand-Brugge.geojson"
const el23 = prefix + "23-Brugge-Knokke.geojson"
const el24 = prefix + "24-Brugge-Lille.geojson"


var elts = [
  el1, el2, el3, el4, 
  el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, 
  el19, el20, el21, el22, el23, el24
]

export const TrainLayer = await toLayer(elts, { "color": "#2a52be"}, "Train")
