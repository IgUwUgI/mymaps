import { toLayer } from "./modules/fonctions_transverses.js";

const prefix = "./map_France/Transports/CarTrips/"

const el1 = prefix + "Mantry-Plouzane.geojson"
const el2 = prefix + "Cherbourg-Mantry.geojson"

var elts = [el1, el2]

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car");