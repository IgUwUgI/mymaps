import { toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./Transports/CarTrips/"

const el1 = prefix + "ESP-Teide-LaLaguna.geojson"
const el2 = prefix + "ESP-Tour_LaPalma.geojson"

var elts = [
  el1, el2
]

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car");