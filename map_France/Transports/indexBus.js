import { toLayer } from "../../../modules/fonctions_transverses.js";

const prefix = "./map_France/Transports/BusLines/"

const el1 = prefix + "Avgn-Gargas.geojson"
const el2 = prefix + "Bdx-Lacanau.geojson"
const el3 = prefix + "Dijon-Iter.geojson"
const el4 = prefix + "Polac-Auvergne.geojson"
const el5 = prefix + "Polac-SerChe.geojson"
const el6 = prefix + "Polac-Schopfheim.geojson"

var elts = [el1, el2, el3, el4, el5, el6]

export const BusLayer = await toLayer(elts, { "color": "#c62d42"}, "Bus");