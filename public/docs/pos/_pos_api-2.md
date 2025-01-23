
## POS Provider API

This RPC API (also referred to as REST) enables the Point of Sale to communicate with the Yoyo Platform in order to process transactions. Each transaction at Point of Sale typically requires the POS to communicate with the Yoyo Platform twice:

<ol>
<li>A Transaction Request - in order to authorise the transaction.
<li>An Advice Request with either finalise or reversal as the action - a finalise is to close off the transaction whereas a reversal is to cancel the transaction.
</ol>

### Header Parameters

The following table specifies the header parameters which are required in each web service call.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
<font face="Courier New">id</font> | String | Required | The application id.
<font face="Courier New">password</font> | String | Required | The application password hashed by SHA1.
<font face="Courier New">apiClientVersion</font> | String | Required | This field can be used by POS integrators to send the version of their implementation to the YoyoPlatform.
<font face="Courier New">apiServerVersion</font> | String | Required | This field allows POS integrators to send the version of the Yoyo server in use as at their time of integration, ensuring strict backwards compatibility.


### HOST URL

The QA wiCode platform exposes REST service endpoints by utilizing the following host and path:

<aside class="notice"><b>https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-provider/</b></aside>

<aside class="success">The DNS for the QA environment is rad2.wigroup.co, using an SLL port connection (8181). This DNS resolves to a load balancer of which the IP address might change without notice.</aside>

### Monetary values
Monetary amounts are both accepted and returned in minor denominations.

### Versioning
This API exposes two required versioning fields.

```json 
#HEADER 

id: {{api_id}}
password: {{api_password}}
apiClientVersion: {{api_client_version}}
apiServerVersion: {{api_server_version}}
Content-Type: application/json
```


#### API server versions
The following API server versions are currently being supported:

`apiServerVersion` | Description | Environment(s)
------------------ | ----------- | --------------
1.5 | Base | Integration, Production
1.8 | Support added for loyalty on split tender. VSP Name included on `Transaction History`. | Integration, Production
1.9 | List Redemptions in transaction API. | Integration, Production
1.10 | `tokenInfo` flags added. | Integration, Production
1.11 | `getVasToken` API call added. Enable main VSP for loyalty redemption. | Integration, Production
1.14 |  Enables Over the Counter tipping, billAmount and Discount/Payment split. | Integration, Production
