import { cityIcon0 } from "../assets/assets.js";
import { cityIcon1 } from "../assets/assets.js";
import { cityIcon2 } from "../assets/assets.js";
import { cityIcon3 } from "../assets/assets.js";
import { cityIcon4 } from "../assets/assets.js";
import { carMarker } from "../assets/assets.js";
import { busMarker } from "../assets/assets.js";
import { boatMarker } from "../assets/assets.js";
import { hikeMarker } from "../assets/assets.js";
import { trainMarker } from "../assets/assets.js";
import { veloMarker } from "../assets/assets.js";

export function calcMiddleLatLng(map, latlng1, latlng2) {
    // calcule le milieu de deux coordonnees
    const p1 = map.project(latlng1);
    const p2 = map.project(latlng2);
    return map.unproject(p1._add(p2)._divideBy(2));
  }


export function calcRotationAngle(map, line, angleInit) {
    // calcule l'angle d'une ligne par rappport à un angle initial le tout en degres
    var latlngs = line.geometry.coordinates;
    var latlng1 = latlngs[0]
    var latlng2 = latlngs[1]
    const p1 = map.project(latlng1);
    const p2 = map.project(latlng2);
    var res = (Math.atan((p2["y"]-p1["y"])/(p2["x"]-p1["x"]))*180/Math.PI + angleInit + 90*(1+Math.sign(p1["x"]-p2["x"])));
    return res;
  }

export function createMiddleMarker(map, line, icon) {
    //cree un marqueur au milieu d'une ligne
    var latlngs = line.geometry.coordinates;

    for(var i = 1; i < latlngs.length; i++){
      var left = latlngs[i - 1];
      var right = latlngs[i];
      var newLatLng = calcMiddleLatLng(map, left.reverse(), right.reverse());
      return L.marker(newLatLng, {icon : icon}).setRotationAngle(calcRotationAngle(map, line, 45));
    }
  }

  export function latLngMoyenne(map, aray) {
    var res = new Array()

    for (var i = 0; i < aray.length; i++) {
      if (aray[i].length == 0) {
      }
      else if (aray[i].length == 1) {
        var tmpMarker = new L.Marker(aray[i][0].geometry.coordinates, {icon: cityIcon0});
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
        for (var j = 0; j < aray[i].length; j++){
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
        var tmpMarker = new L.Marker(map.unproject(sumProjLatLng), {icon: iconToUse});
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
  }

  export function createMiddleMarkerPath(path, type) {
    //cree un marqueur au milieu d'un chemin
    const coordsTot = path.features[0].geometry.coordinates
    var coords = coordsTot[(coordsTot.length - coordsTot.length % 2) / 2];
    var tmp = coords[0]
    coords[0] = coords[1]
    coords[1] = tmp

    switch (type) {
      case "Car":
        var icon = carMarker ;
        break ;
      case "Bus":
        var icon = busMarker ;
        break
      case "Boat":
        var icon = boatMarker ;
        break
      case "Hike":
        var icon = hikeMarker ;
        break
      case "Train":
        var icon = trainMarker ;
        break
      case "Velo":
        var icon = veloMarker ;
        break
    }

      return L.marker(coords, {icon : icon});
  }