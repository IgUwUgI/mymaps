import { cityIcon0 } from "../assets/assets.js";
import { cityIcon1 } from "../assets/assets.js";
import { cityIcon2 } from "../assets/assets.js";
import { cityIcon3 } from "../assets/assets.js";
import { cityIcon4 } from "../assets/assets.js";
import { carMarker } from "../assets/assets.js";
import { carMarkerBig } from "../assets/assets.js";
import { busMarker } from "../assets/assets.js";
import { busMarkerBig } from "../assets/assets.js";
import { boatMarker } from "../assets/assets.js";
import { boatMarkerBig } from "../assets/assets.js";
import { hikeMarker } from "../assets/assets.js";
import { hikeMarkerBig } from "../assets/assets.js";
import { trainMarker } from "../assets/assets.js";
import { trainMarkerBig } from "../assets/assets.js";
import { bikeMarker } from "../assets/assets.js";
import { bikeMarkerBig } from "../assets/assets.js";

let StoreMarker = L.marker();

export function enlargeMarker(marker) {
  StoreMarker = marker;
  var markerIcon = marker.getIcon();
  var markerURL = markerIcon.options.iconUrl;
  switch (markerURL) {
    case "../assets/carMarker.png":
      var icon = carMarkerBig;
      break;
    case "../assets/busMarker.png":
      var icon = busMarkerBig;
      break
    case "../assets/boatMarker.png":
      var icon = boatMarkerBig;
      break
    case "../assets/hikeMarker.png":
      var icon = hikeMarkerBig;
      break
    case "../assets/bikeMarker.png":
      var icon = bikeMarkerBig;
      break
    case "../assets/trainMarker.png":
      var icon = trainMarkerBig;
      break
  }
  marker.setIcon(icon);
}

export function reduceMarker(marker) {
  StoreMarker = marker;
  var markerIcon = marker.getIcon();
  var markerURL = markerIcon.options.iconUrl;
  switch (markerURL) {
    case "../assets/carMarker.png":
      var icon = carMarker;
      break;
    case "../assets/busMarker.png":
      var icon = busMarker;
      break
    case "../assets/boatMarker.png":
      var icon = boatMarker;
      break
    case "../assets/hikeMarker.png":
      var icon = hikeMarker;
      break
    case "../assets/bikeMarker.png":
      var icon = bikeMarker;
      break
    case "../assets/trainMarker.png":
      var icon = trainMarker;
      break
  }
  marker.setIcon(icon);
}

export function interactSidebar(marker) {
  var sideBarLeft = window.getComputedStyle(document.getElementById('sideBar')).right;
  var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
  sideBarLeft = sideBarLeft.substring(0, sideBarLeft.length - 2);
  containerSize = containerSize.substring(0, containerSize.length - 2);
  console.log(sideBarLeft / containerSize)
  if (sideBarLeft / containerSize == -1) {
      document.getElementById('sideBar').style.right = '0%';
      document.getElementById('BtnContainer').style.right = 'calc(-50% + 50px)';
      enlargeMarker(marker);
  } else {
      if(marker == StoreMarker) {
        document.getElementById('sideBar').style.right = '-100%';
        document.getElementById('BtnContainer').style.right = 'calc(-100% - 50px)';
        reduceMarker(marker);
      } else {
        reduceMarker(StoreMarker);
        enlargeMarker(marker);
        StoreMarker = marker;
      }
  }
}

export function closeSidebar() {
  reduceMarker(StoreMarker);
  document.getElementById('sideBar').style.right = '-100%';
  document.getElementById('sideBar').style.width = '50%';
  document.getElementById('BtnContainer').style.right = 'calc(-100% - 50px)';
}

export function expandSidebar() {
  var sideSize = window.getComputedStyle(document.getElementById('sideBar')).width;
  var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
  sideSize = sideSize.substring(0, sideSize.length - 2);
  containerSize = containerSize.substring(0, containerSize.length - 2);
  console.log(sideSize);
  if (sideSize / containerSize == 1) {
    document.getElementById('sideBar').style.width = '50%';
    document.getElementById('expandContent').style
  } else {
    document.getElementById('sideBar').style.width = '100%';
  }
}

export function textUpdate(elt, props) {
  document.getElementById(elt)._div.innerHTML = props;
}

export function calcMiddleLatLng(map, latlng1, latlng2) {
  // calcule le milieu de deux coordonnees
  const p1 = map.project(latlng1);
  const p2 = map.project(latlng2);
  return map.unproject(p1._add(p2)._divideBy(2));
};


export function calcRotationAngle(map, line, angleInit) {
  // calcule l'angle d'une ligne par rappport à un angle initial le tout en degres
  var latlngs = line.geometry.coordinates;
  var latlng1 = latlngs[0]
  var latlng2 = latlngs[1]
  const p1 = map.project(latlng1);
  const p2 = map.project(latlng2);
  var res = (Math.atan((p2["y"] - p1["y"]) / (p2["x"] - p1["x"])) * 180 / Math.PI + angleInit + 90 * (1 + Math.sign(p1["x"] - p2["x"])));
  return res;
};

export function createMiddleMarker(map, line, icon) {
  //cree un marqueur au milieu d'une ligne
  var latlngs = line.geometry.coordinates;

  for (var i = 1; i < latlngs.length; i++) {
    var left = latlngs[i - 1];
    var right = latlngs[i];
    var newLatLng = calcMiddleLatLng(map, left.reverse(), right.reverse());
    return L.marker(newLatLng, { icon: icon }).setRotationAngle(calcRotationAngle(map, line, 45));
  }
};

export function latLngMoyenne(map, aray) {
  var res = new Array()

  for (var i = 0; i < aray.length; i++) {
    if (aray[i].length == 0) {
    }
    else if (aray[i].length == 1) {
      var tmpMarker = new L.Marker(aray[i][0].geometry.coordinates, { icon: cityIcon0 });
      tmpMarker.bindTooltip(aray[i].length.toString() //specific number
        , {
          permanent: true,
          direction: 'center',
          className: "my-labels"
        }
      ).openTooltip();
      res.push(tmpMarker);
    }
    else {
      var sumProjLatLng = map.project(map.unproject([0, 0]));
      var sumX = 0;
      var sumY = 0;
      var n = aray[i].length;
      var iconToUse = cityIcon0
      for (var j = 0; j < aray[i].length; j++) {
        var projection = map.project(aray[i][j].geometry.coordinates);
        sumX = sumX + projection["x"];
        sumY = sumY + projection["y"];
      }
      sumProjLatLng["x"] = sumX / n
      sumProjLatLng["y"] = sumY / n
      if (n < 9) {
        iconToUse = cityIcon0
      }
      else if (n < 18) {
        iconToUse = cityIcon1
      }
      else if (n < 36) {
        iconToUse = cityIcon2
      }
      else if (n < 72) {
        iconToUse = cityIcon3
      }
      else {
        iconToUse = cityIcon4
      }
      var tmpMarker = new L.Marker(map.unproject(sumProjLatLng), { icon: iconToUse });
      tmpMarker.bindTooltip(aray[i].length.toString() //specific number
        , {
          permanent: true,
          direction: 'center',
          className: "my-labels"
        }
      ).openTooltip();
      res.push(tmpMarker);
    }
  }
  return res
};

export function createMarkerPath(path, type) {
  //cree un marqueur au milieu d'un chemin
  const coordsTot = path.features[0].geometry.coordinates
  var coordsMid = coordsTot[(coordsTot.length - coordsTot.length % 2) / 2];
  var tmp = coordsMid[0];
  coordsMid[0] = coordsMid[1];
  coordsMid[1] = tmp;
  var coords0 = coordsTot[0];
  tmp = coords0[0];
  coords0[0] = coords0[1];
  coords0[1] = tmp;
  var coords = coordsMid
  switch (type) {
    case "Car":
      var icon = carMarker;
      break;
    case "Bus":
      var icon = busMarker;
      break;
    case "Boat":
      var icon = boatMarker;
      break;
    case "HikeStraight":
      var icon = hikeMarker;
      break;
    case "HikeLoop":
      var icon = hikeMarker;
      var coords = coords0;
      break;
    case "Train":
      var icon = trainMarker;
      break;
    case "BikeStraight":
      var icon = bikeMarker;
      break;
    case "BikeLoop":
      var icon = bikeMarker;
      var coords = coords0;
      break;
  }
  var addMark = new L.marker(coords, { icon: icon });
  addMark.on('click', function() {
    interactSidebar(addMark)
});
  return addMark;
};

async function fetchElt(file) {
  const res = await fetch(file);
  const renvoi = await res.json();
  return renvoi;
};

export async function toLayer(elts, style, type) {
  var eltsGeo = Array();
  for (var i = 0; i < elts.length; i++) {
    var j = await fetchElt(elts[i]);
    var jGeo = L.geoJson(j);
    jGeo.setStyle(style);
    var m = await createMarkerPath(j, type);
    eltsGeo.push(jGeo);
    eltsGeo.push(m);
  }
  var eltsLayer = L.layerGroup(eltsGeo);
  return eltsLayer;
};

