+++
title = "Open Data"
type = "page"
+++

<div class="row">
<div class="col-md-8">

<p class="lead">All data collected by <i>SmartRoadSense</i> users is released in aggregated form as Open Data.</p>

<p>The <a href="{{< langRef "data/map" >}}">map available on this website</a> just represents a possible visualization of <i>SmartRoadSense</i> data.
We warmly invite users to develop and publish their own visualizations, eventually crossing our data with other datasets.
If you do so or plan on doing so, please <a href="mailto:info@smartroadsense.it">let us know</a>.</p>

<h3>What does the data mean?</h3>

<p>The dataset is comprised of a single, compressed, <abbr title="Comma Separated Values">CSV</abbr> file.
Road roughness data are provided as punctual data, each of them representing a 20-meters long portion of a road.
Each data point has roughness value which is the average between all the data collected by users referring to that particular road section.</p>

<p>In addition to the roughness level information, each row of the dataset contains geographical and other data.
The columns of the dataset are described below:</p>

<ul>
<li><code>LATITUDE</code>, the latitude coordinate at the center of the section of the road where the roughness value has been estimated,</li>
<li><code>LONGITUDE</code>, the longitude coordinate at the center of the section of the road where the roughness value has been estimated,</li>
<li><code>PPE</code>, the average roughness level of the road section,</li>
<li><code>OSM_ID</code>, the <i>ID</i> of the road in the <i>OpenStreetMap</i> dataset,</li>
<li><code>HIGHWAY</code>, the road category according to the <i>OpenStreetMap</i> classification,</li>
<li><code>UPDATED_AT</code>, the last update of the data for that particular road section.</li>
</ul>

<h4>Periodic updates</h4>

<p>Both maps and Open Data are updated <b>every 6&nbsp;hours</b>.
Each new update differs from the previous one just by the data points associated with roads that have been travelled in the last 6 hours.
The remaining part of the dataset stays the same.</p>

<h4>Archiving</h4>

<p>At the beginning of every week, the dataset is archived.
New data is merged with archived data when computing up to date aggregated points.
This procedure takes into account past informtion and makes it possible to reconstruct and to analyse the road network’s evolution in terms of roughness over time.</p>

<h3>License</h3>

<p><i>SmartRoadSense</i> data are aggregated from contributions of thousands of users.
They are released as “Open Data” under the <a href="http://opendatacommons.org/licenses/odbl/">Open Data Commons Open Database License</a>&nbsp;(ODbL).</p>

<p>Anyone is free to access, copy, distribute, transmit, and adapt works from the database as long as proper attribution to <i>SmartRoadSense</i> and its contributors is given.
In particular, data can be cited indicating “&copy;&nbsp;SmartRoadSense&nbsp;contributors” and including the license above, optionally also providing a link to this page.
If data are modified or adapted from the original database they need to be provided under the same licence.
Check out the whole license agreement for all rights and limitations.</p>

</div>
<div class="col-md-4 ">

<h3>Download</h3>

<p>Get the latest aggregated <i>SmartRoadSense</i> data as a zipped CSV&nbsp;file.</p>

<p class="text-center"><a href="https://data.smartroadsense.it/open_data.zip" class="btn btn-primary">Get Open Data</a></p>

</div>
</div>
