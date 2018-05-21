+++
title = "How does it work?"
type = "page"
+++

<p class="lead"><i>SmartRoadSense</i> is a crowd-sensing system for the continuous monitoring of road quality.</p>

The system makes use of simple **accelerometers** and **global positioning sensors**&nbsp;(GPS) found on any modern smartphone in order to **detect and classify the roughness of roads**.
Data is collected and processed on device by a mobile application.
It is then **transmitted anonymously** to the *SmartRoadSense* back-end system that maps and **aggregates information** of multiple users in order to produce an interactive, continously updated, [map of road quality]({{< langRef "data/map" >}}).

{{< section "In detail" >}}

{{< youtube "xdWODlEXXGg" >}}

As shown in the video, *SmartRoadSense*'s data collection process can be split up into **4&nbsp;phases**.

<div class="row cards-sequence scroll-in">
    <div class="col-lg-6">
        <div class="card trans-offset-1">
            <div class="card-counter">1</div>
            <div class="card-body">
                <h4 class="card-title">Road sensing</h4>
                <p>
                After <a href="{{< langRef "apps" >}}">installing the mobile application</a>, the user can <b>start the sensing process</b> at any time.
                While recording, the app will collect data from the smartphone's triaxial accelerometers and its GPS.
                Data collection can be performed in the background and runs at high sampling rates (it may significantly affect power consumption).
                </p>
                <p>
                The gathered accelerations feed our magic <i>road roughness classification algorithm</i>&trade;, which <b>generates a numerical “roughness index”</b> (where <code>0.3</code> or lower indicates a smooth road and anything over <code>1.5</code> is pretty bad).
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-2">
            <div class="card-counter">2</div>
            <div class="card-body">
                <h4 class="card-title">Data transmission and mapping</h4>
                <p>
                Data computed and collected by the user’s smartphone is handled in order to <b>prevent any kind of user identification</b>.
                Our users’ privacy is of utmost importance to us and all data is ensured to be <a href="{{< langRef "data/privacy" >}}">fully anonymous</a>.
                </p>
                <p>
                Once the anonymous roughness data is collected by the <i>SmartRoadSense</i> server, the data points are mapped to existing roads and streets.
                In order to do so we employ state of the art <b>map matching</b> algorithms and make use of road data provided by <a href="https://www.openstreetmap.org">OpenStreetMap</a>.
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-3">
            <div class="card-counter">3</div>
            <div class="card-body">
                <h4 class="card-title">Aggregation and archiving</h4>
                <p>
                Each mapped road in our dataset is split up into <b>chunks</b> of approximately <i>20&nbsp;meters</i> of length.
                Individual user contributions are ascribed to one of these chunks and contribute to an <b>aggregated roughness data point</b>:
                distance from the mapped road, accuracy, and other factors are taken into consideration.
                Older contributions are also taken into account, but they are slowly <i>archived</i> when new data for the same road is gathered (their influence on the updated data point exponentially decreases in time).
                </p>
                <p>
                This aggregation process is performed <b>every 6&nbsp;hours</b> on average: your fresh contributions may take some time to appear among the final data.
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-4">
            <div class="card-counter">4</div>
            <div class="card-body">
                <h4 class="card-title">Data publication and display</h4>
                <p>
                The final data set produced by <i>SmartRoadSense</i> is composed of a set of <b>aggregated road roughness points</b> associated to a geographical location (in terms of <code>lat/long</code> coordinates) and an <a href="https://www.openstreetmap.org">OpenStreetMap</a> road.
                </p>
                <p>
                The data set is licensed using an open license and released through this website as <a href="{{< langRef "data/map" >}}">an interactive map</a> and as <a href="{{< langRef "data/open-data" >}}">Open Data</a>.
                We also provide programmatical access to the same live dataset, using a set of <a href="{{< langRef "data/developers" >}}">developer APIs</a>.
                You are welcome to make use of the data.
                </p>
            </div>
        </div>
    </div>
</div>

{{< section "Installation" >}}

*SmartRoadSense* is available for iOS and Android and can be installed on most smartphones or tablets. Check out the [mobile applications]({{< langRef "apps" >}}) and start monitoring your roads!

{{< section "Scientific publications" >}}

{{< bibliography >}}
