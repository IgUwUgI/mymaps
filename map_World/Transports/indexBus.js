import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/BusLines/"

const el1 = prefix + "AUT-Salzburg-Grodig.geojson"
const el2 = prefix + "AUT-Wien-Kahlenberg.geojson"
const el3 = prefix + "ALL-Polac-Schopfheim.geojson"
const el4 = prefix + "ESP-Adeje-Aeropuerto.geojson"
const el5 = prefix + "ESP-Aeropuerto-ElPaso.geojson"
const el6 = prefix + "ESP-ElPaso-Tazacorte.geojson"
const el7 = prefix + "ESP-Guia-Adeje.geojson"
const el8 = prefix + "ESP-Icod-Chio.geojson"
const el9 = prefix + "ESP-LaLaguna-Anaga.geojson"
const el10 = prefix + "ESP-LaLaguna-Icod.geojson"
const el11 = prefix + "ESP-LaLaguna-PuntaHidalgo.geojson"
const el12 = prefix + "ESP-LaLaguna-SantaCruz.geojson"
const el13 = prefix + "ESP-PuertoCruz-Orotava.geojson"
const el14 = prefix + "ESP-PuertoCruz-Teide.geojson"
const el15 = prefix + "ESP-SantaCruz-Anaga.geojson"
const el16 = prefix + "ESP-SantaCruz-LosCristianos.geojson"


var elts = [
  el1, el2,
  el3,
  el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16
]

export const BusLayer = await toLayer(elts, { "color": "#c62d42"}, "Bus");