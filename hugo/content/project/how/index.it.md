+++
title = "Come funziona?"
type = "page"
+++

<p class="lead"><i>SmartRoadSense</i> è un sistema di crowd-sensing per il monitoraggio continuo della qualità stradale.</p>

Il sistema fa uso di semplici **accelerometri** e del sistema di posizionamento globale&nbsp;**GPS**, disponibili sulla maggior parte degli smartphone, per **rilevare e classificare la ruvidità delle strade**.
I dati sono raccolti e processati sul dispositivo stesso.
Successivamente sono **trasmessi in maniera anonima** al sistema back-end di *SmartRoadSense*, che **aggrega le informazioni** di tutti gli utenti e produce una [mappa della qualità stradale]({{< langRef "data/map" >}}) interattiva ed aggiornata in maniera continua.

{{< section "In dettaglio" >}}

{{< youtube "xdWODlEXXGg" >}}

Come mostrato nel video, il processo di raccolta dati di *SmartRoadSense* può essere diviso in **4&nbsp;fasi**.

<div class="row cards-sequence scroll-in">
    <div class="col-lg-6">
        <div class="card trans-offset-1">
            <div class="card-counter">1</div>
            <div class="card-body">
                <h4 class="card-title">Rilevamento della strada</h4>
                <p>
                Dopo aver <a href="{{< langRef "apps" >}}">installato l’applicazione mobile</a>, l’utente può <b>avviare il processo di registrazione</b> in qualsiasi momento.
                Durante la registrazione, l’applicazione raccoglie continuamente i dati dagli accelerometri triassali e dal GPS.
                La raccolta dati può avvenire in sottofondo ed avviene ad alte frequenze di campionamento (può avere un impatto sulla durata della batteria).
                </p>
                <p>
                Le accelerazioni raccolte vengono utilizzate dal nostro magico <i>algoritmo di classificazione della ruvidità stradale</i>&trade; e <b>produce un “indicatore di ruvidità” numerico</b> (dove un valore di <code>0,3</code> o inferiore indica una strada liscia, mentre tutto ciò oltre <code>1,5</code> è considerato di cattiva qualità).
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-2">
            <div class="card-counter">2</div>
            <div class="card-body">
                <h4 class="card-title">Trasmissione e raccolta dei dati</h4>
                <p>
                Tutti i dati elaborati e raccolti su smartphone vengono gestiti in maniera tale da <b>impedire qualsiasi identificazione dell’utente</b>.
                La privacy degli utenti è di assoluta importanza per il servizio <i>SmartRoadSense</i> e tutte le informazioni raccolte sono <a href="{{< langRef "data/privacy" >}}">completamente anonime</a>.
                </p>
                <p>
                Dopo aver raccolto gli indici di ruvidità anonimi, i dati vengono mappati su vie e strade note, sfruttando algoritmi di <i>map matching</i> allo stato dell’arte ed i dati offerti da <a href="https://www.openstreetmap.org">OpenStreetMap</a>.
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-3">
            <div class="card-counter">3</div>
            <div class="card-body">
                <h4 class="card-title">Aggregazione e storicizzazione</h4>
                <p>
                Tutte le strade mappate nel nostro <i>dataset</i> sono suddivise in <b>spezzoni</b> di circa 20&nbsp;metri di lunghezza.
                I contributi individuali degli utenti sono mappati ad uno degli spezzoni, contribuendo quindi al suo <b>indice di ruvidità aggregato</b>: la distanza dalla strada mappata, l’accuratezza e diversi altri fattori sono presi in considerazione in questo calcolo.
                Anche i dati passati contribuiscono all’elaborazione del dato finale: i dati precedenti vengono progressivamente <i>storicizzati</i> quando sono disponibili informazioni più recenti (l’influenza dei dati esistenti si dimezza progressivamente col tempo).
                </p>
                <p>
                Questo processo di aggregazione è svolto <b>una volta ogni 6&nbsp;ore</b> in media: i contributi più recenti possono quindi richiedere un po’ di tempo prima di apparire sulla mappa del sito.
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card trans-offset-4">
            <div class="card-counter">4</div>
            <div class="card-body">
                <h4 class="card-title">Rilascio dei dati</h4>
                <p>
                Il <i>dataset</i> finale prodotto da <i>SmartRoadSense</i> è composto da un insieme di <b>punti di ruvidità aggregati</b> che rappresentano la qualità delle strade in un dato punto geografico, espresso come coordinate di latitudine e longitudine, ed associati ad una determinata strada, sulla base dei dati stradali di <a href="https://www.openstreetmap.org">OpenStreetMap</a>.
                </p>
                <p>
                I dati così prodotti sono rilasciati sotto una licenza aperta e pubblicati tramite questo sito come <a href="{{< langRef "data/map" >}}">mappa interattiva</a> e come <a href="{{< langRef "data/open-data" >}}">Open Data</a>.
                È anche possibile ottenere accesso ai dati tramite delle <a href="{{< langRef "data/developers" >}}">API per sviluppatori</a>.
                </p>
            </div>
        </div>
    </div>
</div>

{{< section "Installazione" >}}

*SmartRoadSense* è disponibile per iOS e per Android ed è compatibile con la maggior parte di smartphone e tablet. [Installa l’app]({{< langRef "apps" >}}) e comincia a monitorare le strade da subito!

{{< section "Pubblicazioni scientifiche" >}}

{{< bibliography >}}
