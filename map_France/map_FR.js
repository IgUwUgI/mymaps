        
  // Creation de la carte, ouverture centree sur les coordonnees specifiees
  // syntaxe : setview([Nord, Est], zoom)
  var mymap = L.map('mapid').setView([46.4836, 2.5264], 6);

  // fond de carte
  var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 15,
  minZoom: 3,
    });
    CartoDB_Voyager.addTo(mymap);


    import planeIcon from "../assets/assets.js";
    import "../modules/rotated_markers.js";
    import {calcMiddleLatLng, calcRotationAngle, createMiddleMarker} from "../modules/fonctions_transverses.js";
    import {BusGeo} from "./Transports/BusLines/index.js"
    import {TrainGeo} from "./Transports/TrainLines/index.js"
    



    // Import des fichiers json
        async function fetchGoneTo() {
          // Dpts ou je suis alle
          const res = await fetch("./GoneTo.json");
          const GoneTo = await res.json();
          return GoneTo;
        }
        var GoneTo = await fetchGoneTo();
        
        async function fetchToGo() {
          // dpts ou je ne suis pas alle
          const res = await fetch("./ToGo.json");
          const GoneTo = await res.json();
          return GoneTo;
        }
        var ToGo = await fetchToGo();

        async function fetchPref() {
          // villes ou je suis alle taille prefectures
          const res = await fetch("./Lieux/PrefecturesPts.json");
          const prefectures = await res.json();
          return prefectures
        }
        var prefs = await fetchPref();

        async function fetchPrefPoly() {
          // villes ou je suis alle taille prefectures
          const res = await fetch("./Lieux/PrefecturesPoly.json");
          const prefecturesPoly = await res.json();
          return prefecturesPoly
        }
        var prefsPoly = await fetchPrefPoly();

        async function fetchSousPref() {
          // villes ou je suis alle taille sous-prefectures
          const res = await fetch("./Lieux/SousPrefPts.json");
          const SousPrefectures = await res.json();
          return SousPrefectures
        }
        var SousPrefs = await fetchSousPref();

        async function fetchSsPrefPoly() {
          // villes ou je suis alle taille prefectures
          const res = await fetch("./Lieux/SousPrefPoly.json");
          const SsprefecturesPoly = await res.json();
          return SsprefecturesPoly
        }
        var SsprefsPoly = await fetchSsPrefPoly();

        async function fetchPlane() {
          // villes ou je suis alle taille sous-prefectures
          const res = await fetch("./Transports/Avion.json");
          const Avion = await res.json();
          return Avion
        }
        var Avion = await fetchPlane();
    

    // Ajout des json importes sur la carte
    var deptsGoneTo = new Array(GoneTo.features)[0];
    var deptsGoneToGeo = new Array(deptsGoneTo.length);    
    for (var i = 0; i < deptsGoneTo.length;i++) {
      deptsGoneToGeo[i] = L.geoJSON(deptsGoneTo[i], {style : deptsGoneTo[i].properties.style});
    };
    var deptsGoneToLayer = L.layerGroup(deptsGoneToGeo);
    deptsGoneToLayer.addTo(mymap);

    var deptsToGo = new Array(ToGo.features)[0];
    var deptsToGoGeo = new Array(deptsToGo.length);
    for (var i = 0; i < deptsToGo.length;i++) {
      deptsToGoGeo[i] = L.geoJSON(deptsToGo[i], {style : deptsToGo[i].properties.style});
    };
    var deptsToGoLayer = L.layerGroup(deptsToGoGeo);
    // deptsToGoLayer.addTo(mymap);

    var Pref = new Array(prefs.features)[0];
    var PrefGeo = new Array(Pref.length);
    for (var i = 0; i < Pref.length;i++) {
      PrefGeo[i] = L.marker(Pref[i].geometry.coordinates);
    };
    var PrefsLayer = L.layerGroup(PrefGeo);
    PrefsLayer.addTo(mymap)

    var PrefPoly = new Array(prefsPoly.features)[0];
    var PrefPolyGeo = new Array(PrefPoly.length);
    for (var i = 0; i < PrefPoly.length;i++) {
      PrefPolyGeo[i] = L.geoJSON(PrefPoly[i], {"style" : {"color" : "#000000", "opacity": 1}});
    };
    var PrefsPolyLayer = L.layerGroup(PrefPolyGeo);
    PrefsPolyLayer.addTo(mymap)

    var SsPref = new Array(SousPrefs.features)[0];
    var SsPrefGeo = new Array(SsPref.length);
    for (var i = 0; i < SsPref.length;i++) {
      SsPrefGeo[i] = L.marker(SsPref[i].geometry.coordinates);
    };
    var SsPrefsLayer = L.layerGroup(SsPrefGeo);
    SsPrefsLayer.addTo(mymap)

    var SsPrefPoly = new Array(SsprefsPoly.features)[0];
    var SsPrefPolyGeo = new Array(SsPrefPoly.length);
    for (var i = 0; i < SsPrefPoly.length;i++) {
      SsPrefPolyGeo[i] = L.geoJSON(SsPrefPoly[i], {"style" : {"color" : "#000000", "opacity": 1}});
    };
    var SsPrefsPolyLayer = L.layerGroup(SsPrefPolyGeo);
    SsPrefsPolyLayer.addTo(mymap)

    var Avions = new Array(Avion.features)[0];
    var AvionsGeo = new Array(Avions.length);
    var AvionsMarkers = new Array(Avions.length);
    for (var i = 0; i < Avions.length;i++) {
      AvionsGeo[i] = L.geoJSON(Avions[i], {style : {"color":"#FF5500", "weight":2, "opacity":0.75}});
      AvionsMarkers[i] = createMiddleMarker(mymap, Avions[i], planeIcon)
    };
    var AvionsTot = AvionsGeo.concat(AvionsMarkers)
    var AvionsLayer = L.layerGroup(AvionsTot);
    AvionsLayer.addTo(mymap);

    for (var i = 0; i < BusGeo.length; i++) {
      BusGeo[i].setStyle({"color": "#546de5"})
    }
    var BusLayer = L.layerGroup(BusGeo);
    BusLayer.addTo(mymap);

    for (var i = 0; i < TrainGeo.length; i++) {
      TrainGeo[i].setStyle({"color": "#c44569"})
    }
    var TrainLayer = L.layerGroup(TrainGeo);
    TrainLayer.addTo(mymap);

    // Pour afficher une legende des couleurs
    // Ne toucher que ce qui est indique

    // var legend = L.control({position: 'bottomleft'});
    // var legendcontent = "" ;
    // legend.onAdd = function (map) {
    // this._div = L.DomUtil.create('div', 'info legend');
    //      // Mettre la liste des textes de legende ici
    //     var grades = ["inférieur à 100", "entre 100 et 133.3", "entre 133.3 et 166.6", "entre 166.6 et 200", "supérieur à 200"];
    //      // Mettre les couleurs de la legende ici
    //     var colors = ["#ffe5b4", "#ffcc99", "#f4a460", "#ff8c69", "#fe6f5e"];
    // legendcontent += '<b>Densité de population en habitants/km²</b><br>';

    // for (var i = 0; i < grades.length; i++) {
    //     legendcontent +=
    //         '<i style="background:' + colors[i] + '"></i> ' +
    //         grades[i]+"<br>";
    // }
    // this._div.innerHTML += legendcontent;
    // return this._div;
    // };

    // legend.update = function(props){
    //     this._div.innerHTML = props;
    // };
    // legend.addTo(mymap);

    // transformation en objet facilement manipulable
    
      // Calques
      var visite = {
        "Départements visités": deptsGoneToLayer,
        "Départements à visiter": deptsToGoLayer,
        "Préfectures": PrefsLayer,
        "Sous-Préfectures": SsPrefsLayer,
        "Avions": AvionsLayer
      };
      var layerControl = L.control.layers(null, visite).addTo(mymap);
    // Création d'un encadre qui affiche les infos
    var info = L.control();
    
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    // methode de mise a jour de l'encadre
    info.update = function (props) {
        this._div.innerHTML = props;
    };
    info.addTo(mymap);
    info.update("");

    

    //Modification de l'encadre au survol d'un objet a la souris, syntaxe generale
    // Les trucs a changer sont monObjet, monTexte, #maNouvelleCouleur

    // monObjet.on('mouseover', function(e){
    //     this.setStyle({"color":"#maNouvelleCouleurHexa"});
    //     var monTexte = "mon texte formalise en HTML";
    //     info.update(monTexte);
    // });

    // Ici on reset le style quand on sort et on vide l'encadre
    // monObjet.on('mouseout', function(e){info.update("");this.setStyle(styleProperty(monObjet));});


    // Ici creation d'un marqueur 
    // var monMarqueur = L.marker([nord, est])

    // Affichage d'un popup au clic d'un objet
    // monObjet.bindPopup("mon texte en HTML")

    // regrouper objets en calque pour gerer facilement leur affichage
    // var mesObjets = L.layerGroup([monObjet1, monObjet2, ...]);
    
    // Afficher des infos au clic de la souris, syntaxe generale
    // monObjet.on('click', function(e){
    //     var monTexte = "mon texte en HTML";
    //     info.update(monTexte);
    // })

    // Apparition disparition de choses selon le zoom
    // function zoomChange(e){
    //     if(mymap.getZoom() < zoomVoulu){
    //         monObjet1.addTo(mymap);
    //         monObjet2.removeFrom(mymap);
    //     } else {
    //         monObjet1.removeFrom(mymap);
    //         monObjet2.addTo(mymap);
    //     }
    // };

    // mymap.on('zoom', zoomChange);



    // depannage, permet d'afficher les coordonnees en cliquant si besoin, ne sera pas dans la version finale
    // var popup = L.popup();
    // function onMapClick(e){
    //     popup.setLatLng(e.latlng);
    //     popup.setContent("You clicked the map at " + e.latlng.toString());
    //     popup.openOn(mymap);
    // }
    // mymap.on('click', onMapClick);