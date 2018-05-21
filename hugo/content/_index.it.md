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

<p><i>SmartRoadSense</i> è un’<b>applicazione mobile</b> che sfrutta gli accelerometri ed il sensore GPS di un comune smartphone per <b>rilevare e classificare le irregolarità</b> nel manto stradale sul quale si sta guidando.</p>

<p>I dati sono <b>raccolti in maniera anonima</b> e vengono trasmessi ad un servizio centralizzato che <b>aggrega i contributi</b> di tutti gli utenti, in modo da calcolare una mappa complessiva e continuamente aggiornata della <b>qualità dell’infrastruttura stradale</b>.</p>

<p>La raccolta dei dati rispetta la nostra <a href="{{< langRef "data/privacy" >}}">linea di condotta sulla privacy</a> e tutti i dati vengono resi disponibili liberamente come <a href="{{< langRef "data/map" >}}">mappa online</a> o come dataset <a href="{{< langRef "data/open-data" >}}">Open Data</a>.</p>

</div>
<div class="col-md-6 col-lg-7 col-xl-8">

<div id="mapdiv" class="small"></div>

<p><small><img src="{{< absRef "icons/map.svg" >}}" class="icon" alt="Map icon" /> Ti piace la mappa? Vai alla <a href="{{< langRef "data/map" >}}">mappa più grande</a>.</small></p>

</div>
</div>

{{< section "Come funziona?" >}}

{{< youtube "hbHNDG4NK1s" >}}

<div class="row process">
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/wheel-primary.svg" >}}" alt="Ruota" />
            </div>
            <h4>1. Raccolta dati</h4>
        </div>
        <div class="description">
            <p>Attraverso l’analisi dei sensori del tuo smartphone (gli accelerometri ed il GPS), l’app <i>SmartRoadSense</i> rileva la presenza di irregolarità e calcola un “indice di rugosità” o <i>roughness</i>.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/db-primary.svg" >}}" alt="Database" />
            </div>
            <h4>2. Aggregazione</h4>
        </div>
        <div class="description">
            <p>I dati raccolti ed anonimizzati vengono trasmessi al servizio <i>SmartRoadSense</i>, che li aggrega insieme a quelli degli altri utenti.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon">
                <img src="{{< absRef "icons/compass-primary.svg" >}}" alt="Bussola" />
            </div>
            <h4>3. Visualizzazione</h4>
        </div>
        <div class="description">
            <p>I dati aggregati sono poi resi disponibili come <a href="{{< langRef "data/map" >}}">mappa online</a>, come <a href="{{< langRef "data/open-data" >}}">dati aperti</a>, e tramite delle <a href="{{< langRef "data/developers" >}}">API</a>.</p>
        </div>
    </div>
    <div class="col-sm-12 col-lg-6">
        <div class="header">
            <div class="icon"></div>
            <h4>Vuoi saperne di più?</h4>
        </div>
        <div class="description">
            <p>Leggi tutto sul <a href="{{< langRef "project/how" >}}">funzionamento di SmartRoadSense</a>.</p>
        </div>
    </div>
</div>

{{< section >}}

<div class="row stats">
    <div class="col-6 col-lg-3">
        <div class="stat-counter">4</div>
        <div class="stat-description">paesi</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-accel-values">&mdash;</span></div>
        <div class="stat-description">accelerazioni</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-points">&mdash;</span></div>
        <div class="stat-description">campioni</div>
    </div>
    <div class="col-6 col-lg-3">
        <div class="stat-counter"><span class="data-counter data-roads">&mdash;</span></div>
        <div class="stat-description">km di strade</div>
    </div>
</div>

{{< section "Ci dai una mano?" >}}

Ti interessa il progetto e vuoi darci una mano a monitorare la qualità delle strade?
Clicca sui collegamenti qui sotto per installare l’applicazione *SmartRoadSense* per il tuo smartphone: ci vorrà soltanto un minuto!

{{< i18n "srsActivationLine" >}}

<div class="row align-items-center justify-content-center">
    <div class="col-12 col-sm-6 col-lg-5 badge">
        <a href="https://itunes.apple.com/app/id1063716780">
            {{< imgset src="badge_app_store" alt="SmartRoadSense per iOS" >}}
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-5 badge">
        <a href="https://play.google.com/store/apps/details?id=it.uniurb.smartroadsense">
            {{< imgset src="badge_google_play" alt="SmartRoadSense per Android" >}}
        </a>
    </div>
</div>
