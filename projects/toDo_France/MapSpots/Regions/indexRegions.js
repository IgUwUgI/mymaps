const el1 = "./MapSpots/Regions/Europe/Allemagne.json"
const el2 = "./MapSpots/Regions/Europe/Autriche.json"
const el3 = "./MapSpots/Regions/Europe/Belgique.json"
const el4 = "./MapSpots/Regions/Europe/Hongrie.json"
const el5 = "./MapSpots/Regions/Afrique/Maroc.json"
const el6 = "./MapSpots/Regions/Europe/Slovaquie.json"
const el7 = "./MapSpots/Regions/Europe/Slovenie.json"
const el8 = "./MapSpots/Regions/Europe/Suisse.json"
const el9 = "./MapSpots/Regions/Europe/Tchequie.json"

var elts = [el1, el2, el3, el4, el5, el6, el7, el8, el9]

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