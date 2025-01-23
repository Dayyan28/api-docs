## Transaction Engine VSP REST API

The TE VSP API (Scan Model API) is exposed off the wiCode Platform. This API exposes two methods: a GET method named <font face="Courier New">bill</font>, and a POST method named <font face="Courier New">transactions</font>.

### API credentials

This section provides interface definitions to allow for implementation on various platforms and in
different programming languages. Note that:
<ul>
<li> Our APIs were designed using the RESTful architectural style.</li>
<li> Request and response bodies are formatted as JSON exclusively.</li>
<li> Variables are indicated between angle brackets and the pound sign, <em>e.g.</em> <font face="Courier New"><#variable#></font>. </li>
<li> Different request -­‐ response combinations are explored using <em>'Cases'</em>. </li>
</ul>

### API references

The Token Manager VSP API RESTful web service endpoints may be accessed by utilising the following WADL (<font face="Courier New"><#endpointURL#></font>):

<aside class="notice"><b>https://rad2.wigroup.co:8181/wigroup-transactionengine/vsp/application.wadl</b></aside>

### Test credentials
All calls to the wiCode platform must contain the issuing channel credentials in the header of the API call. This table contains a set of VSP-specific API credentials that may be used to authenticate all API calls made to CVS and YoyoPlatform.

API ID | API Password
------ | ------------
<font face="Courier New"><#apiID#></font> | <font face="Courier New"><#apiPassword#></font>

<aside class="notice">Test API credentials are provided by the Yoyo integration team.</aside>
