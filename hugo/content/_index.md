+++
date = "2017-05-29"

cover = "index_srs_cover"
+++

SmartRoadSense is a mobile application that uses your smartphone’s accelerometers and GPS sensor to detect and classify irregularities of the road surface while you are driving.

Data is collected anonymously and transmitted to a centralized service that aggregates contributions from all users, thus collecting a continously updated snapshot of the quality of road infrastructure.

{{< youtube "hbHNDG4NK1s" >}}

{{< section "How does it work?" >}}

<div class="row cards-sequence scroll-in">
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-1">
            <div class="card-counter">1</div>
            {{< imgset src="srs_how_1" class="card-img-top" alt="SmartRoadSense sensing" >}}
            <div class="card-body">
                <h4 class="card-title">Sensing</h4>
                <p class="card-text">By processing the input from your smartphone’s sensors (accelerometers and GPS), the SmartRoadSense app detects the bumpiness of the road and computes its “roughness index”.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-2">
            <div class="card-counter">2</div>
            {{< imgset src="srs_how_2" class="card-img-top" alt="Data aggregation" >}}
            <div class="card-body">
                <h4 class="card-title">Aggregation</h4>
                <p class="card-text">Collected data is anonymized an your device and transmitted to the SmartRoadSense service, which aggregates the data from multiple users.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-3">
            <div class="card-counter">3</div>
            {{< imgset src="srs_how_3" class="card-img-top" alt="Final data display" >}}
            <div class="card-body">
                <h4 class="card-title">Display</h4>
                <p class="card-text">Aggregated data is mapped on a geographical map and is then made available <a href="{{< langRef "data/map/index.md" >}}">online</a>, as <a href="{{< langRef "data/open-data/index.md" >}}">open data</a>, and through <a href="{{< langRef "data/developers/index.md" >}}">APIs</a>.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3 align-self-center">
        <div class="not-card text-center trans-offset-4">
            <h4>Want to know more?</h4>
            <a href="{{< langRef "project/about/index.md" >}}" class="btn btn-primary">More info</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-lg-8">
        {{< section "Stats and data" >}}

        <span class="data-counter">4</span> countries,<br />
        <span class="data-counter data-accel-values">—</span> acceleration values collected,<br />
        <span class="data-counter data-points">—</span> data points received,<br />
        <span class="data-counter data-roads">—</span>&nbsp;kms of roads analyzed… and counting!

        Take a look at the <a href="{{< langRef "data/map/index.md" >}}">real-time map of collected data</a>!
    </div>
    <div class="col-md-6 col-lg-4">
        <div class="note">
            <h2>Latest news</h2>
            <div class="content">
                <ul>
                    <li><a href="#">Ciao</a></li>
                    <li><a href="#">Ciao</a></li>
                </ul>
                <p><a href="{{< langRef "news" >}}">More news…</a></p>
            </div>
        </div>
    </div>
</div>

{{< section "Ready to hit the road?" >}}

If you’re interested in the project and would like to help out monitoring road quality, click on the links below to install the SmartRoadSense application for your smartphone: you will be ready to go in a couple of minutes!

The SmartRoadSense service is currently available in Italy, the United Kingdom, Romania, and Greece.

<div class="row align-items-center justify-content-center">
    <div class="col-6 col-lg-4 badge">
        <a href="https://itunes.apple.com/app/id1063716780">
            <img src="/images/badge_app_store.png" width="650" height="192" alt="Get SmartRoadSense on the Apple App Store" />
        </a>
    </div>
    <div class="col-6 col-lg-4 badge">
        <a href="https://play.google.com/store/apps/details?id=it.uniurb.smartroadsense">
            <img src="/images/badge_google_play.png" width="646" height="250" alt="Get SmartRoadSense for Android from Google Play" />
        </a>
    </div>
</div>
