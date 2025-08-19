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
let StoreIDs = {};


// Creation de la carte pour les projections
// syntaxe : setview([Nord, Est], zoom)
const mymapX = L.map('mapidX', {
  zoomDelta: 0.25,
  zoomSnap: 0,
  zoomControl: false
}).setView([46.4836, 2.5264], 6);

export {mymapX};

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
  var x = window.matchMedia("(max-width: 768px)");
  var sideBarRight = window.getComputedStyle(document.getElementById('sideBar')).right;
  var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
  sideBarRight = sideBarRight.substring(0, sideBarRight.length - 2);
  containerSize = containerSize.substring(0, containerSize.length - 2);
  // If sidebar not displayed
  if (window.getComputedStyle(document.getElementById('sideBar')).display == 'none') {
    document.getElementById('sideBar').style.display = 'block';
    document.getElementById('BtnContainer').style.display= "flex";
    setTimeout(function () {
      // If mobile
    if (x.matches) {
      document.getElementById('sideBar').style.right = '0%';
      document.getElementById('sideBar').style.width = '100vw';
      document.getElementById('BtnContainer').style.right = 'calc(-100% + 60px)';
      // Else = not mobile
    } else {
      document.getElementById('sideBar').style.right = '0%';
      document.getElementById('sideBar').style.width = '50%';
      document.getElementById('BtnContainer').style.right = 'calc(-100% + 105px)';
    }
    enlargeMarker(marker);
    }, 30)
    //If sidebar displayed
  } else {
    if (marker == StoreMarker) {
      document.getElementById('sideBar').style.right = '-100%';
      document.getElementById('BtnContainer').style.right = 'calc(-100% - 50px)';
      reduceMarker(marker);
      setTimeout( function() {
        document.getElementById('sideBar').style.display = 'none';
        document.getElementById('BtnContainer').style.display = 'none';
      }, 500);
      StoreMarker = L.marker()
    } else {
      reduceMarker(StoreMarker);
      enlargeMarker(marker);
      StoreMarker = marker;
    }
  }
  textUpdate(marker.customID)
}

export function closeSidebar() {
  var x = window.matchMedia("(max-width: 768px)");
  reduceMarker(StoreMarker);
  document.getElementById('sideBar').style.right = '-100%';
  document.getElementById('BtnContainer').style.right = 'calc(-100vw - 50px)';
  setTimeout(function () {
    document.getElementById('sideBar').style.display = 'none';
    document.getElementById('BtnContainer').style.display = 'none';
  }
    , 500)
}

export function expandSidebar() {
  var sideSize = window.getComputedStyle(document.getElementById('sideBar')).width;
  var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
  sideSize = sideSize.substring(0, sideSize.length - 2);
  containerSize = containerSize.substring(0, containerSize.length - 2);
  if (sideSize / containerSize == 1) {
    document.getElementById('sideBar').style.width = '50%';
  } else {
    document.getElementById('sideBar').style.width = '100%';
  }
}

export function updateMapOpenSidebar(mymap) {
  var x = window.matchMedia('(max-width: 768px)');
  if (x.matches) { } else {
    var overlayWidth = window.getComputedStyle(document.getElementById('sideBar')).width;
    var overlayLeft = window.getComputedStyle(document.getElementById('sideBar')).left;
    var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
    overlayWidth = overlayWidth.substring(0, overlayWidth.length - 2);
    overlayLeft = overlayLeft.substring(0, overlayLeft.length - 2);
    containerSize = containerSize.substring(0, containerSize.length - 2);
    var limit3 = 3 * containerSize / 4;
    var limit2 = containerSize/ 2;
    var limit1 = containerSize / 4;
    var targetZoom = mymap.getZoom();
    var centerPoint = mymap.getSize().divideBy(2);
    var targetPoint = centerPoint;
    if (overlayLeft >= limit2 && overlayLeft < limit3) {
      targetPoint['x'] = limit1; 
    }
    if (overlayLeft >= limit3) {
      targetPoint['x'] = limit3; 
    }
    var targetLatLng = mymap.containerPointToLatLng(targetPoint);
    mymap.setView(targetLatLng, targetZoom);
  }
}

export function updateMapCloseSidebar(mymap) {
  var x = window.matchMedia('max-width: 768px');
  if (x.matches) { } else {
    var overlayWidth = window.getComputedStyle(document.getElementById('sideBar')).width;
    var overlayLeft = window.getComputedStyle(document.getElementById('sideBar')).left;
    var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
    overlayWidth = overlayWidth.substring(0, overlayWidth.length - 2);
    overlayLeft = overlayLeft.substring(0, overlayLeft.length - 2);
    containerSize = containerSize.substring(0, containerSize.length - 2);
    var limit1 = containerSize / 4;
    var limit2 = containerSize / 2;
    var limit3 = 3 * containerSize / 4;
    var targetZoom = mymap.getZoom();
    var centerPoint = mymap.getSize().divideBy(2);
    var targetPoint = centerPoint;
    if (overlayLeft == limit2) {
      targetPoint['x'] = limit1;
    }
    var targetLatLng = mymap.containerPointToLatLng(targetPoint);
    setTimeout(function () {
      mymap.setView(targetLatLng, targetZoom);
    }, 50)
  }
}

export function updateMapExpandSidebar(mymap) {
  var x = window.matchMedia('max-width: 768px');
  if (x.matches) { } else {
    var overlayWidth = window.getComputedStyle(document.getElementById('sideBar')).width;
    var overlayLeft = window.getComputedStyle(document.getElementById('sideBar')).left;
    var containerSize = window.getComputedStyle(document.getElementById('mainContainer')).width;
    overlayWidth = overlayWidth.substring(0, overlayWidth.length - 2);
    overlayLeft = overlayLeft.substring(0, overlayLeft.length - 2);
    containerSize = containerSize.substring(0, containerSize.length - 2);
    var limit1 = containerSize / 4;
    var limit2 = containerSize / 2;
    var limit3 = 3 * containerSize / 4;
    var targetZoom = mymap.getZoom();
    var centerPoint = mymap.getSize().divideBy(2);
    var targetPoint = centerPoint;
    if (overlayLeft == limit2) {
      targetPoint['x'] = limit1;
    } else if (overlayLeft == 0) {
      targetPoint['x'] = limit3;
    }
    var targetLatLng = mymap.containerPointToLatLng(targetPoint);
    setTimeout(function () {
      mymap.setView(targetLatLng, targetZoom);
    }, 50)
  }
}

// export function textUpdate(ID) {
//   var props = `
//   <script>
//       $(function () {
//       $("#sideBar").load("../subHTML/` + ID + `.html");
//     });
//   </script>
//   `
//   setTimeout(function() {
//   document.getElementById("sideBar").innerHTML = props;
//   }, 30)
// }

export function textUpdate(ID) {
      $(function () {
      $("#sideBar").load("../subHTML/" + ID + ".html");
    });
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

export function createMarkerPath(path, type, ID) {
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
  addMark.customID = ID;
  addMark.on('click', function () {
    interactSidebar(addMark)
  });
  StoreIDs[ID] = addMark;
  return addMark;
};

async function fetchElt(file) {
  const res = await fetch(file);
  const renvoi = await res.json();
  return renvoi;
};

export async function toLayer(elts, style, type, IDs) {
  var eltsGeo = Array();
  for (var i = 0; i < elts.length; i++) {
    var j = await fetchElt(elts[i]);
    var jGeo = L.geoJson(j);
    var ID = IDs[i];
    jGeo.setStyle(style);
    var m = await createMarkerPath(j, type, ID);
    eltsGeo.push(jGeo);
    eltsGeo.push(m);
  }
  var eltsLayer = L.layerGroup(eltsGeo);
  return eltsLayer;
};

export async function profilAltiData(trace) {
  var xValuesAll = new Array();
  var yValuesAll = new Array();
  var slopes = new Array();

  var coordinates = trace.features[0].geometry.coordinates;

  xValuesAll.push(0);
  yValuesAll.push(coordinates[0][2]);

  var R = 6371;
  var latlng1 = [coordinates[0][1], coordinates[0][0]];
  var latlng2 = [coordinates[1][1], coordinates[1][0]];
  var dlat = (latlng2[0] - latlng1[0]) * Math.PI / 180;
  var dlng = (latlng2[1] - latlng1[1]) * Math.PI / 180;
  var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(latlng1[0] * Math.PI / 180) * Math.cos(latlng2[0] * Math.PI / 180) * Math.sin(dlng / 2) * Math.sin(dlng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = (R * c);
  slopes.push(100 * (coordinates[1][2] - coordinates[0][2]) / (d * 1000));

  for (var i = 1; i < coordinates.length; i++) {
    var R = 6371;
    var latlng1 = [coordinates[i - 1][1], coordinates[i - 1][0]];
    var latlng2 = [coordinates[i][1], coordinates[i][0]];
    var dlat = (latlng2[0] - latlng1[0]) * Math.PI / 180;
    var dlng = (latlng2[1] - latlng1[1]) * Math.PI / 180;
    var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(latlng1[0] * Math.PI / 180) * Math.cos(latlng2[0] * Math.PI / 180) * Math.sin(dlng / 2) * Math.sin(dlng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = (R * c)
    var appendD = (xValuesAll[i - 1] + d)//.toFixed(2)
    xValuesAll.push(parseFloat(appendD));
    if (coordinates[i][2] == undefined) {
      yValuesAll.push(yValuesAll[yValuesAll.length - 1])
    } else {
      yValuesAll.push(coordinates[i][2]);
    }
    if (i < coordinates.length - 1) {
      var latlng1 = [coordinates[i - 1][1], coordinates[i - 1][0]];
      var latlng2 = [coordinates[i + 1][1], coordinates[i + 1][0]];
      var dlat = (latlng2[0] - latlng1[0]) * Math.PI / 180;
      var dlng = (latlng2[1] - latlng1[1]) * Math.PI / 180;
      var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(latlng1[0] * Math.PI / 180) * Math.cos(latlng2[0] * Math.PI / 180) * Math.sin(dlng / 2) * Math.sin(dlng / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = (R * c)
      if (d == 0) {
        slopes.push(0.0)
      } else {
        if (coordinates[i + 1][2] == undefined) {
          console.log(latlng2)
          slopes.push(100 * (yValuesAll[yValuesAll.length - 1] - yValuesAll[yValuesAll.length - 2]) / (d * 1000))
        } else {
          slopes.push(100 * (coordinates[i + 1][2] - yValuesAll[yValuesAll.length - 2]) / (d * 1000))
        }
      }
    }
  }

  var latlng1 = [coordinates[coordinates.length - 2][1], coordinates[coordinates.length - 2][0]];
  var latlng2 = [coordinates[coordinates.length - 1][1], coordinates[coordinates.length - 1][0]];
  var dlat = (latlng2[0] - latlng1[0]) * Math.PI / 180;
  var dlng = (latlng2[1] - latlng1[1]) * Math.PI / 180;
  var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(latlng1[0] * Math.PI / 180) * Math.cos(latlng2[0] * Math.PI / 180) * Math.sin(dlng / 2) * Math.sin(dlng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = (R * c);
  slopes.push(100 * (coordinates[coordinates.length - 1][2] - coordinates[coordinates.length - 2][2]) / (d * 1000));
  console.log(yValuesAll)
  console.log(xValuesAll)

  return [xValuesAll, yValuesAll, slopes]
}

const generateSlopeColors = (data, x) => {
  return data.map((d, idx) => {
      var color = "#ffffff";
      if (d < -20) {
          color = "#08376f"
      } else if (d < -2) {
          color = "#34bfff"
      } else if (d < 2) {
          color = '#22c55f'
      } else if (d < 5) {
          color = "#fab90a"
      } else if (d < 10) {
          color = "#f77f01"
      } else if (d < 15) {
          color = '#ef4544'
      } else {
          color = "#920f3d"
      }

      return {
          offset: x[idx] / (x[x.length - 1]) * 100,
          color,
          opacity: 1
      }
  })
}
export {generateSlopeColors}

export async function chartOptions(trace) {
  const profAltiData = await profilAltiData(trace);

  const xValuesAll = profAltiData[0];
  const yValuesAll = profAltiData[1];
  const slopes = profAltiData[2];

  var options = {
    chart: {
      type: "line"
    },
    series: [{
      name: "",
      data: yValuesAll
    }],
    xaxis: {
      categories: xValuesAll,
      type: "numeric"
    },
    animations: {
      enabled: true,
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: generateSlopeColors(slopes, xValuesAll)
      }
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return '<div class="arrow_box">' +
          '<span>' + series[seriesIndex][dataPointIndex] + '</span><br><span>↗ ' + (slopes[dataPointIndex]).toFixed(1) + '%</span>' +
          '</div>'
      }
    }
  }
  return options
}