+++
date = "2017-05-29"
cover = "index_srs_cover.jpg"
+++

SmartRoadSense è un’applicazione mobile che sfrutta gli accelerometri ed il sensore GPS di un comune smartphone per rilevare e classificare le irregolarità nel manto stradale sul quale si sta guidando.

I dati sono raccolti in maniera anonima e vengono trasmessi ad un servizio centralizzato che aggrega i contributi di tutti gli utenti, in modo da calcolare una mappa complessiva e continuamente aggiornata della qualità dell’infrastruttura stradale.

{{< youtube "hbHNDG4NK1s" >}}

{{< section "Come funziona?" >}}

<div class="row cards-sequence scroll-in">
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-1">
            <div class="card-counter">1</div>
            {{< imgset src="srs_how_1" class="card-img-top" alt="Raccolta dati" >}}
            <div class="card-body">
                <h4 class="card-title">Raccolta dati</h4>
                <p>Attraverso l’analisi dei sensori del tuo smartphone (gli accelerometri ed il GPS), l’app SmartRoadSense rileva la presenza di irregolarità e calcola un “indice di rugosità” o <i>roughness</i>.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-2">
            <div class="card-counter">2</div>
            {{< imgset src="srs_how_2" class="card-img-top" alt="Aggregazione dei dati" >}}
            <div class="card-body">
                <h4 class="card-title">Aggregazione</h4>
                <p>I dati raccolti ed anonimizzati vengono trasmessi al servizio SmartRoadSense, che li aggrega insieme a quelli degli altri utenti.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3">
        <div class="card trans-offset-3">
            <div class="card-counter">3</div>
            {{< imgset src="srs_how_3" class="card-img-top" alt="Visualizzazione dei dati finali" >}}
            <div class="card-body">
                <h4 class="card-title">Visualizzazione</h4>
                <p>I dati aggregati sono poi resi disponibili come <a href="{{< langRef "data/map/index.md" >}}">mappa online</a>, come <a href="{{< langRef "data/open-data/index.md" >}}">dati aperti</a>, e tramite delle <a href="{{< langRef "data/developers/index.md" >}}">API</a>.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-3 align-self-center">
        <div class="not-card text-center trans-offset-4">
            <h4>Vuoi saperne di più?</h4>
            <a href="{{< langRef "project/about/index.md" >}}" class="btn btn-primary">Più informazioni</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-lg-8">
        {{< section "Statistiche" >}}

        <span class="data-counter">4</span> nazioni in cui il servizio è attivo,<br />
        <span class="data-counter data-accel-values">—</span> valori di accelerazione,<br />
        <span class="data-counter data-points">—</span> campioni ricevuti,<br />
        <span class="data-counter data-roads">—</span>&nbsp;kms di strade monitorate… per ora!

        Dai un'occhiata alla <a href="{{< langRef "data/map/index.md" >}}">mappa dei dati raccolti</a>!
    </div>
    <div class="col-md-6 col-lg-4">
        <div class="note">
            <h2>Ultime notizie</h2>
            <div class="content">
                {{< newsLatest >}}

                <p><a href="{{< langRef "news" >}}">Altre notizie…</a></p>
            </div>
        </div>
    </div>
</div>

{{< section "Ci dai una mano?" >}}

Ti interessa il progetto e vuoi darci una mano a monitorare la qualità delle strade?
Clicca sui collegamenti qui sotto per installare l’applicazione SmartRoadSense per il tuo smartphone: ci vorrà soltanto un minuto!

Il servizio di SmartRoadSense è al momento attivo in Italia, in Regno Unito, in Romania ed in Grecia.

<div class="row align-items-center justify-content-center">
    <div class="col-6 col-lg-4 badge">
        <a href="https://itunes.apple.com/app/id1063716780">
            {{< imgset src="badge_app_store" alt="SmartRoadSense per iOS" >}}
        </a>
    </div>
    <div class="col-6 col-lg-4 badge">
        <a href="https://play.google.com/store/apps/details?id=it.uniurb.smartroadsense">
            {{< imgset src="badge_google_play" alt="SmartRoadSense per Android" >}}
        </a>
    </div>
</div>

Domande? Dai un’occhiata a [come funziona il servizio]({{< langRef "project/how" >}}) in dettaglio.
