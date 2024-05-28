import { toLayer } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/CarTrips/Mantry-Plouzane.geojson"
const el2 = "./Transports/CarTrips/Cherbourg-Mantry.geojson"

var elts = [el1, el2]

export const CarLayer = await toLayer(elts, { "color": "#de0a26" }, "Car");