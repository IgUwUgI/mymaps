import { toLayer } from "../../modules/fonctions_transverses.js"

const prefix = "./Transports/TrainLines/"
const suffix = ".geojson";

const el1 = "Annecy-Culoz"
const el2 = "Avgn-Lyon-TER"
const el3 = "Avgn-Mpl-TER"
const el4 = "Avgn-Mpl-TGV"
const el5 = "Avgn-TGV-TER"
const el6 = "Bale-Marseille"
const el7 = "BeB-Genf"
const el8 = "Lyon-Marseille"
const el9 = "Nimes-GDR"
const el10 = "StCham-Lyon"
const el11 = "Dijon-Paris-TGV"
const el12 = "Lyon-Mulhouse-TGV"
const el13 = "Lyon-Paris"
const el14 = "LyonSE-Lille"
const el15 = "Dijon-Paris-TER"
const el16 = "Lyon-AeB"
const el17 = "Kortrijk-Lille"
const el18 = "Cambrai-Lille"
const el19 = "Paris-StQuentin"
const el20 = "LeCroisic-TGVHPic"
const el21 = "Paris-Bdx"
const el22 = "Angers-Lyon"
const el23 = "Paris-Brest"
const el24 = "Paris-Cherbourg"
const el25 = "Paris-Bruxelles"
const el26 = "Rennes-Nantes"
const el27 = "Nantes-Pornic"
const el28 = "Dijon-Troyes"
const el29 = "Paris-Etampes"
const el30 = "Bordeaux-Arcachon"
const el31 = "Montmorillon-Poitiers"

var IDs = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19, el20, el21, el22, el23, el24,
  el25, el26, el27, el28, el29, el30, el31]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const TrainLayer = await toLayer(elts, { "color": "#2a52be"}, "Train", IDs)
