+++
title = "Mappa stradale"
type = "page"

css = [
    "http://cdn.leafletjs.com/leaflet/v1.3.4/leaflet.css"
]
js = [
    "http://cdn.leafletjs.com/leaflet/v1.3.4/leaflet.js",
    "js/map.js"
]
+++

<div id="mapdiv"></div>

Questa mappa mostra i **dati aggregati sulla qualità stradale** raccolti da *SmartRoadSense*:
ogni punto sulla mappa è frutto dei contributi degli utenti del servizio.
Gli stessi dati sono anche disponibili come [Open Data]({{< langRef "data/open-data" >}}) liberamente scaricabili.

Ogni punto sulla mappa rappresenta in forma aggregata i dati relativi a circa **20&nbsp;metri di strada**.
Punti *verdi* indicano strade di buona qualità, mentre i punti *rossi* indicano la presenza di dossi, buche o strade deteriorate (lo stile QGIS per la colorazione è disponibile [qui](http://www.c4rs.eu/wp-content/uploads/2018/09/colour-scale.zip)).

<p>
{{< i18n "srsActivationLine" >}}
</p>
