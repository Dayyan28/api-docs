## CVS Issuer REST API

The <font face="Courier New">CVS Issuer</font> API is the underlying interface for all of YoyoGroup's Coupon, Voucher, and Gift card related integrations. It is the simplest and most direct way to issue Coupons, Vouchers and Gift cards from YoyoGroup.

Each CVS Issuer API method is accompanied by a table of fields.
<ul>
<li>Each method tabulates the available HTTP verb along with the list of parameters that they accept.</li>
<li>A <b>bold</b> field in the Request column indicates that it's mandatory.</li>
<li>A &#x2713; in the Request column of an operation denotes a field available in the request message.</li>
<li>A &#x2713; in the Response column of an operation denotes its presence in the response payload.</li>
<li>GET methods never have a body. All parameters are sent through as part of the URL as query parameters, <em>e.g.</em> <font face="Courier New">{root}/{resource}?parameter=value.</font></li>
<li>POST/PUT methods always have a body. All request parameters are sent through as part of a JSON object in the body. There is one exception to this rule when issuing a coupon. The issueWiCode parameter must be sent through as a query parameter as it does not form part of the resource.</li>
<li>DELETE methods don't have query parameters or a body. It only takes in a URL parameter which is the resource id to delete, <em>e.g.</em> <font face="Courier New">{root}/{resource}/{id}</font></em>
</ul>

### Date format
A strict ISO 8601 date format is followed for dates. In Java a date can be formatted in the ISO 8601 format with the following snippet:

<aside class="notice"><b>SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");</b></aside>

### Monetary format

Monetary amounts are both accepted and returned in <em>cents</em>.

### Paginated collections

All of the RESTful Web Service calls that return collections accept the following query parameters:

Parameter | Type | Description
--------- | ---- | ----------
pageSize | Integer (Default 20) | The max number of items returned per page.
pageOffset | Integer (Default 0) | Zero‐based page offset into the list of all results.
orderBy | String | A field by which to order the list (when ordering on the collection is available).
orderDirection | String (Default "ASC") | The order direction (when ordering on the list is available).

The following fields are returned in a <font face="Courier New">paging</font> object in the response of collection requests:

Parameter | Type | Description
--------- | ---- | ----------
orderBy | String | The field by which the list was ordered.
orderDirection | String | The order direction.
pageSize | Integer | The max number of items returned per page.
pageOffset | Integer | Zero‐based page offset into the list of all results.
numItemsOnPage | Integer | The number of items returned on the current page.
numItemsInTotal | Integer | Total number of items found for the current set of constraints.
numPages | Integer | The total number of pages found.

### API credentials

This section provides interface definitions to allow for implementation on various platforms and in
different programming languages. Note that:
<ul>
<li> Our APIs were designed using the RESTful architectural style.  </li>
<li> Request and response bodies are formatted as JSON exclusively. </li>
<li> Variables are indicated between angle brackets and the pound sign, <em>e.g.</em> <font face="Courier New">{variable}</font>. </li>
<li> Different request -­‐ response combinations are explored using <em>'Cases'</em>. </li>
</ul>

**Authentication**
All the request make use of the same authentication details and will be provided by the friendly integration team at Yoyo. 
Authentication detail are set in the header of each request and also serve as the authorisation to gain access to specific resources.
Here is a snippet that show what the request header should look like.

_{<br/>
    "apiId":"API_ID_GOES_HERE",<br/>
    "apiPassword":"API_PASSWORD_GOES_HERE",<br/>
    "Content-Type":"application/json"<br/>
}_<br/>

### API references

Once the CVS campaigns have been created via the CVS Web Portal and signed-off, the CVS RESTful web service endpoints may be accessed by utilising the following WADL (<font face="Courier New">{endpointURL}</font>):

<aside class="notice"><b>https://za-vsp-int.wigroup.co/cvs-issuer/rest/application.wadl</b></aside>


### Test credentials
All calls to the wiCode platform or to CVS must contain the issuing channel credentials in the header of the API call. Table 2 contains a set of VSP-specific API credentials that may be used to authenticate all API calls made to CVS and YoyoPlatform.

API ID | API Password
------ | ------------
<font face="Courier New">{apiID}</font> | <font face="Courier New">{apiPassword}</font>

Test API credentials are provided by the Yoyo integration team, and can thereafter be accessed via the CVS Portal. CVS portal login credentials will also be provided by the Yoyo integration team.
