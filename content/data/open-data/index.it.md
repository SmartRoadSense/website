+++
title = "Open Data"
type = "page"
+++

<div class="row">
<div class="col-md-8">

<p class="lead">Tutti i dati raccolti dagli utenti di <i>SmartRoadSense</i> sono rilasciati in forma aggregata come Open Data.</p>

<p>La <a href="{{< langRef "data/map" >}}">mappa disponibile su questo sito</a> rappresenta solo una delle possibili forme di visualizzazione dei dati di <i>SmartRoadSense</i>.
Invitiamo gli utenti ad elaborare e publicare nuove rappresentazioni, eventualmente incrociando i dati disponibili con altri dataset aperti.
Nel caso di interesse o altre domande, vi preghiamo di <a href="mailto:info@smartroadsense.it">mettervi in contatto</a>.</p>

<h3>Come interpreto i dati?</h3>

<p>Il dataset è composto da un singolo file <abbr title="Comma Separated Values">CSV</abbr> compresso.
I dati sull’irregolarità (inglese: “roughness”) del manto stradale sono forniti in modo puntuale.
Ogni punto rappresenta un tratto di strada di circa 20&nbsp;metri ed assume quindi un valore mediato tra tutte le rilevazioni ottenute dagli utenti per quel tratto di strada.</p>

<p>In aggiunta ai dati sulla “roughness”, ogni riga del dataset contiene informazioni di natura geografica o accessoria.
Le colonne della tabella vanno così interpretate:</p>

<ul>
<li><code>LATITUDE</code>, latitudine del punto rappresentativo del tratto di strada,</li>
<li><code>LONGITUDE</code>, longitudine del punto rappresentativo del tratto di strada,</li>
<li><code>PPE</code>, valore medio di irregolarità riportato nel tratto di strada,</li>
<li><code>OSM_ID</code>, identificativo della strada nel dataset <i>OpenStreetMap</i>,</li>
<li><code>HIGHWAY</code>, categoria di strada secondo la classificazione di <i>OpenStreetMap</i>,</li>
<li><code>UPDATED_AT</code>, data dell’ultimo aggiornamento del dato.</li>
</ul>

<h4>Aggiornamento periodico</h4>

<p>Le mappe ed il dataset di Open Data vengono aggiornati <b>ogni 6&nbsp;ore</b>.
Rispetto alla versione precedente del dataset, risultano invariati i punti rappresentativi di tratti di strada per i quali non sono stati conferiti nuovi campioni.
Risultano invece aggiornati tutti gli altri tratti di strada.</p>

<h4>Storicizzazione</h4>

<p>All’inizio di ogni settimana, i dati vengono storicizzati.
I dati nuovi vengono uniti a quelli storicizzati durante la fase di elaborazione.
Questo permette di costruire rappresentazioni evolutive della situazione della qualità delle strade.</p>

<h3>Licenza</h3>

<p>I dati di <i>SmartRoadSense</i> sono generati dai contributi di centinaia di individui e vengono rilasciati come “Open Data” sotto licenza <a href="http://opendatacommons.org/licenses/odbl/">Open Data Commons Open Database License</a>&nbsp;(ODbL).</p>

<p>Chiunque è libero di accedere a, copiare, distribuire, trasmettere ed adattare i dati del servizio, fintantoché i riferimenti a <i>SmartRoadSense</i> ed ai propri contributori vengono lasciati intatti.
In particular, data can be cited indicating “&copy; SmartRoadSense contributors” and including the license above, optionally also providing a link to this page.
Eventuali dati alterati o derivati dai dati originali devono essere distribuiti sotto la medesima licenza.
L’intero testo legale della licenza contiene tutti i diritti e responsabilità.</p>

</div>
<div class="col-md-4 ">

<h3>Download</h3>

<p>Gli ultimi dati aggregati di <i>SmartRoadSense</i> possono essere scaricati come file&nbsp;CSV compresso in formato&nbsp;ZIP.</p>

<p class="text-center"><a href="/open_data.zip" class="btn btn-primary">Scarica Open&nbsp;Data</a></p>

</div>
</div>
