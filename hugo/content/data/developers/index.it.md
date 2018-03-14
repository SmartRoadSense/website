+++
title = "Sviluppatori"
type = "page"
+++

<div class="row">
<div class="col-md-8">

<p class="lead">Tutti i dati raccolti dagli utenti di <i>SmartRoadSense</i> sono accessibili tramite delle API per sviluppatori.</p>

<p>Al momento, soltanto un <i>end-point</i> ai dati è disponibile.
Come nel caso degli <a href="{{< langRef "data/open-data" >}}">Open Data</a> rilasciati tramite questo sito Web, al momento risultano accessibili soltanto i dati aggregati di qualità stradale.</p>

 <h3>Dati aggregati per regione</h3>

<pre>GET http://smartroadsense.it/bb/&lt;xmin&gt;/&lt;ymin&gt;/&lt;xmax&gt;/&lt;ymax&gt;/</pre>

<p>Genera una lista di punti aggregati all’interno di una regione geografica.
Il percorso include 4 parametri: <code>xmin</code> e <code>ymin</code>, coordinate dell’angolo inferiore sinistro della regione, <code>xmax</code> e <code>ymax</code> coordinate dell’angolo superiore destro.
Questo <i>end-point</i> è limitato a regioni con un’area inferiore o uguale a 2.000&nbsp;km<sup>2</sup>.</p>

<p>Esempi di dati ritornati:</p>

<ul>
<li><a href="{{< download "api-tmp-result-200.json" >}}">Successo</a>, HTTP #200,</li>
<li><a href="{{< download "api-tmp-result-400-too-big.json" >}}">Regione troppo grande</a>, HTTP #400,</li>
<li><a href="{{< download "api-tmp-result-400.json" >}}">Parametri non validi</a>, HTTP #400,</li>
<li><a href="{{< download "api-tmp-result-500.json" >}}">Errore interno</a>, HTTP #500,</li>
</ul>

</div>
<div class="col-md-4 ">

<h3>Work in progress</h3>

<p>Le API di accesso ai dati di <i>SmartRoadSense</i> sono momentaneamente sotto sviluppo.
Gli <i>end-point</i> qui documentati <b>cambieranno sicuramente</b> in futuro.</p>

</div>
</div>
