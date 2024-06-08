import {toLayer } from "../../modules/fonctions_transverses.js";

const prefix = "./map_France/Transports/BoatLines/"

const el1 = prefix + "Arcachon-CapFerret.geojson"

var elts = [el1]

export const BoatLayer = await toLayer(elts, { "color": "#042e60" }, "Boat");