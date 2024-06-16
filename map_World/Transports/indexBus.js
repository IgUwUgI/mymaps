import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BusLines/"
const suffix = ".geojson";

const el1 = "AUT-Salzburg-Grodig"
const el2 = "AUT-Wien-Kahlenberg"
const el3 = "ALL-Polac-Schopfheim"
const el4 = "ESP-Adeje-Aeropuerto"
const el5 = "ESP-Aeropuerto-ElPaso"
const el6 = "ESP-ElPaso-Tazacorte"
const el7 = "ESP-Guia-Adeje"
const el8 = "ESP-Icod-Chio"
const el9 = "ESP-LaLaguna-Anaga"
const el10 = "ESP-LaLaguna-Icod"
const el11 = "ESP-LaLaguna-PuntaHidalgo"
const el12 = "ESP-LaLaguna-SantaCruz"
const el13 = "ESP-PuertoCruz-Orotava"
const el14 = "ESP-PuertoCruz-Teide"
const el15 = "ESP-SantaCruz-Anaga"
const el16 = "ESP-SantaCruz-LosCristianos"


var IDs = [
  el1, el2,
  el3,
  el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16
]

var elts = new Array(IDs.length)

for (var i =  0; i < IDs.length; i++) {
  elts[i] = prefix + IDs[i] + suffix;
}

export const BusLayer = await toLayer(elts, { "color": "#c62d42"}, "Bus", IDs);