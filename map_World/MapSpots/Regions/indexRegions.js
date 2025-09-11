// Afrique
const el6 = "./MapSpots/Regions/Afrique/MAR.json"
const el11 = "./MapSpots/Regions/Afrique/DZA.json"
// Asie
// Amérique du Nord
// Amérique du Sud
// Europe
const el1 = "./MapSpots/Regions/Europe/DEU.json"
const el2 = "./MapSpots/Regions/Europe/AUT.json"
const el3 = "./MapSpots/Regions/Europe/BEL.json"
const el4 = "./MapSpots/Regions/Europe/ESP.json"
const el5 = "./MapSpots/Regions/Europe/HUN.json"
const el7 = "./MapSpots/Regions/Europe/SVK.json"
const el8 = "./MapSpots/Regions/Europe/SVN.json"
const el9 = "./MapSpots/Regions/Europe/CHE.json"
const el10 = "./MapSpots/Regions/Europe/CZE.json"
const el12 = "./MapSpots/Regions/Europe/NLD.json"
const el13 = "./MapSpots/Regions/Europe/ITA.json"
const el14 = "./MapSpots/Regions/Europe/GBR.json"
// Océanie

var elts = [
  el6, el11,
  el1, el2, el3, el4, el5, el7, el8, el9, el10, el12, el13, el14
]

var eltsGeo = Array()

async function fetchRegion(file) {
    const res = await fetch(file);
    const Region = await res.json();
    return L.geoJson(Region, {"style": Region.features[0].properties.style});
  }

for(var i = 0; i < elts.length; i++) {
    var j = await fetchRegion(elts[i]);
    eltsGeo.push(j);
}

export const RegionsGeo = eltsGeo;