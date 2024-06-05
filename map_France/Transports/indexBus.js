import { toLayer } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/BusLines/Avgn-Gargas.geojson"
const el2 = "./Transports/BusLines/Bdx-Lacanau.geojson"
const el3 = "./Transports/BusLines/Dijon-Iter.geojson"
const el4 = "./Transports/BusLines/Polac-Auvergne.geojson"
const el5 = "./Transports/BusLines/Polac-SerChe.geojson"
const el6 = "./Transports/BusLines/Polac-Schopfheim.geojson"

var elts = [el1, el2, el3, el4, el5, el6]

export const BusLayer = await toLayer(elts, { "color": "#c62d42"}, "Bus");