        
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
    import {createMiddleMarker} from "../modules/fonctions_transverses.js";
    import {BusGeo} from "./Transports/BusLines/index.js"
    import {TrainGeo} from "./Transports/TrainLines/index.js"
    import {DptsGeo} from "./MapSpots/Departements/indexDpt.js"
    import {PrefGeo, VillesPtsGeo} from "./MapSpots/Villes/indexVille.js";
    import {PrefPolyGeo} from "./MapSpots/Villes/indexVille.js";
    import {SsPrefGeo} from "./MapSpots/Villes/indexVille.js";
    import {SsPrefPolyGeo} from "./MapSpots/Villes/indexVille.js";
    // import { VillesPtsGeo } from "./MapSpots/Villes/indexVille.js";
    import { VillesPolyGeo } from "./MapSpots/Villes/indexVille.js";
    



    // Import des fichiers json

        async function fetchSousPref() {
          // villes ou je suis alle taille sous-prefectures
          const res = await fetch("./MapSpots/Villes/SousPrefPts.json");
          const SousPrefectures = await res.json();
          return SousPrefectures
        }
        var SousPrefs = await fetchSousPref();

        async function fetchSsPrefPoly() {
          // villes ou je suis alle taille prefectures
          const res = await fetch("./MapSpots/Villes/SousPrefPoly.json");
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
    var dptsLayer = L.layerGroup(DptsGeo);
    dptsLayer.addTo(mymap);

    // var deptsToGo = new Array(ToGo.features)[0];
    // var deptsToGoGeo = new Array(deptsToGo.length);
    // for (var i = 0; i < deptsToGo.length;i++) {
    //   deptsToGoGeo[i] = L.geoJSON(deptsToGo[i], {style : deptsToGo[i].properties.style});
    // };
    // var deptsToGoLayer = L.layerGroup(deptsToGoGeo);
    // deptsToGoLayer.addTo(mymap);

    var PrefsLayer = L.layerGroup(PrefGeo);
    PrefsLayer.addTo(mymap)

    var PrefsPolyLayer = L.layerGroup(PrefPolyGeo);
    PrefsPolyLayer.addTo(mymap)

    var SsPrefsLayer = L.layerGroup(SsPrefGeo);
    SsPrefsLayer.addTo(mymap)

    var SsPrefsPolyLayer = L.layerGroup(SsPrefPolyGeo);
    SsPrefsPolyLayer.addTo(mymap)

    // var VillesLayer = L.layerGroup(VillesPtsGeo);
    // VillesLayer.addTo(mymap)

    var VillesPolyLayer = L.layerGroup(VillesPolyGeo);
    VillesPolyLayer.addTo(mymap)

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
        "Départements visités": dptsLayer,
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
