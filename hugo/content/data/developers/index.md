+++
title = "Developers"
type = "page"
+++

<div class="row">
<div class="col-md-8">

<p class="lead">All data collected by <i>SmartRoadSense</i> users is accessible through data access APIs.</p>

<p>Currently, a single data access end-point is provided.
Like in the case of <a href="{{< langRef "data/open-data" >}}">Open Data</a> provided through the website, currently only aggregated roughness data points are provided.</p>

<h3>Aggregated data points in region</h3>

<pre>GET http://smartroadsense.it/bb/&lt;xmin&gt;/&lt;ymin&gt;/&lt;xmax&gt;/&lt;ymax&gt;/</pre>

<p>Retrieves a list of aggregated data points from a geographical region. The path includes 4 parameters: <code>xmin</code> and <code>ymin</code>, coordinates of the region’s bottom-left corner, <code>xmax</code> and <code>ymax</code> coordinates of the region’s top-right corner. The end-point is constrained to regions no larger than 2.000 km<sup>2</sup>.</p>

<p>Sample results:</p>

<ul>
<li><a href="{{< download "api-tmp-result-200.json" >}}">Success</a>, HTTP #200,</li>
<li><a href="{{< download "api-tmp-result-400-too-big.json" >}}">Region too big</a>, HTTP #400,</li>
<li><a href="{{< download "api-tmp-result-400.json" >}}">Parameters not valid</a>, HTTP #400,</li>
<li><a href="{{< download "api-tmp-result-500.json" >}}">Internal error</a>, HTTP #500,</li>
</ul>

</div>
<div class="col-md-4 ">

<h3>Work in progress</h3>

<p>The data access API for <i>SmartRoadSense</i> is currently under development.
Please take note that the APIs documented on this page are <b>guaranteed to change</b> in the future.</p>

</div>
</div>