+++
date = "2017-05-29"
cover = "index_srs_cover.jpg"

css = [
    "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css"
]
js = [
    "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js",
    "resources/map.js"
]
+++

<div class="row">
<div class="col-md-6 col-lg-5 col-xl-4">

<p><i>SmartRoadSense</i> is a <b>mobile application</b> that uses your smartphone’s accelerometers and GPS sensor to <b>detect and classify irregularities of the road</b> surface while you are driving.</p>

<p>Data is collected <b>anonymously</b> and transmitted to a centralized service that <b>aggregates contributions</b> from all users, thus computing a continuously updated snapshot of the <b>quality of road infrastructure</b>.</p>

<p>All collected data respects our <a href="{{< langRef "data/privacy" >}}">privacy policy</a> and is freely made available as an <a href="{{< langRef "data/map" >}}">online map</a> or as an <a href="{{< langRef "data/open-data" >}}">Open Data dataset</a>.</p>

</div>
<div class="col-md-6 col-lg-7 col-xl-8">

<div id="mapdiv" class="small"></div>

<p><small><img src="{{< absRef "icons/map.svg" >}}" class="icon" alt="Map icon" /> Like the map? Check out the <a href="{{< langRef "data/map" >}}">bigger online map</a>.</small></p>

</div>
</div>

{{< section "How does it work?" >}}

{{< youtube "vW9NSJ8MlxY" >}}

<div class="row process">
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/wheel-primary.svg" >}}" alt="Wheel" />
            </div>
            <h4>1. Sensing</h4>
        </div>
        <div class="description">
            <p>By processing the input from your smartphone’s sensors (accelerometers and GPS), the <i>SmartRoadSense</i> app detects the bumpiness of the road and computes its “roughness index”.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/db-primary.svg" >}}" alt="Database" />
            </div>
            <h4>2. Aggregation</h4>
        </div>
        <div class="description">
            <p>Collected data is anonymized on your device and transmitted to the <i>SmartRoadSense</i> service, which aggregates the data from multiple users.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/compass-primary.svg" >}}" alt="Compass" />
            </div>
            <h4>3. Display</h4>
        </div>
        <div class="description">
            <p>Aggregated data is mapped on a geographical map and is then made available <a href="{{< langRef "data/map" >}}">online</a>, as <a href="{{< langRef "data/open-data" >}}">open data</a>, and through <a href="{{< langRef "data/developers" >}}">APIs</a>.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon"></div>
            <h4>Want to know more?</h4>
        </div>
        <div class="description">
            <p>Read all about <a href="{{< langRef "project/how" >}}">how SmartRoadSense works</a>.</p>
        </div>
    </div>
</div>

{{< section >}}

<div class="row stats">
    <div class="col-6 col-lg-3">
        <div class="stat-counter">4</div>
        <div class="stat-description">countries</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-accel-values">&mdash;</span></div>
        <div class="stat-description">accelerations</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-points">&mdash;</span></div>
        <div class="stat-description">data points</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-roads">&mdash;</span></div>
        <div class="stat-description">kms of roads</div>
    </div>
</div>

{{< section "Ready to hit the road?" >}}

If you’re interested in the project and would like to help out monitoring road quality, click on the links below to install the *SmartRoadSense* application for your smartphone: you will be ready to go in a couple of minutes!

<p>
{{< i18n "srsActivationLine" >}}
</p>

<div class="row align-items-center justify-content-center">
    <div class="col-12 col-sm-6 col-lg-5 badge">
        <a href="https://itunes.apple.com/app/id1063716780">
            {{< imgset src="badge_app_store" alt="SmartRoadSense for iOS" >}}
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-5 badge">
        <a href="https://play.google.com/store/apps/details?id=it.uniurb.smartroadsense">
            {{< imgset src="badge_google_play" alt="SmartRoadSense for Android" >}}
        </a>
    </div>
</div>
