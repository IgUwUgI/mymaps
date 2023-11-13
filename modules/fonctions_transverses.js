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
    var res = (Math.atan((p2["y"]-p1["y"])/(p2["x"]-p1["x"]))*180/Math.PI + angleInit);
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
