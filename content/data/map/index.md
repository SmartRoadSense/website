+++
title = "Road quality map"
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

This map displays the **aggregated road quality** measures collected by *SmartRoadSense*:
each point on the map is computed taking into account contributions by all users of the service.
The same data is also available in the form of freely accessible [Open Data]({{< langRef "data/open-data" >}}).

Each data point aggregates all collected roughness data of approximately **20&nbsp;meters of road**.
*Green* points indicate smooth roads, *red* ones indicate bumps or deteriorated surfaces ([the QGIS style can be found here](http://www.c4rs.eu/wp-content/uploads/2018/09/colour-scale.zip)).

<p>
{{< i18n "srsActivationLine" >}}
</p>
