import {toLayer } from "../../../modules/fonctions_transverses.js";

const el1 = "./Transports/BoatLines/Arcachon-CapFerret.geojson"

var elts = [el1]

export const BoatLayer = await toLayer(elts, { "color": "#042e60" }, "Boat");