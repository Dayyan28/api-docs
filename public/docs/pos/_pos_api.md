## POS Provider SOAP API

This SOAP API enables the point of sale to communicate with the wiPlatform in order to process transactions  Each transaction at point of sale typically requires the POS to communicate with the wiPlatform twice:

<ol>
<li>A transaction request in order to authorise the transaction.
<li>A finalise or reversal, the finalise is to close off the transaction whereas the reversal is to cancel the transaction.
</ol>

### Header Parameters

The following table specifies the header parameters which are required in each web service call.

Fields | Type |Description
------ | ---- | -----------
<font face="Courier New">id</font> | String | The application id.
<font face="Courier New">password</font> | String | Required The application password hashed by SHA1.

### WSDL URL

The QA wiCode platform exposes SOAP web service endpoints by utilizing the following WSDL: 

<aside class="notice"><b>http://rad2.wigroup.co:8080/wigroup-transactionengine/PosProviderWS?wsdl</b></aside>

<aside class="success">The DNS for the QA environment is rad2.wigroup.co, using either a TCP port (8080) or an SLL port connection (8181). This DNS resolves to a load balancer which IP address might change without notice.</aside>

### Monetary Values

Monetary amounts are both accepted and returned in cents.

### Response codes

The most common response codes are:

Response Code | Response Description
---------- | -------
-1  | Successful
2107  | Transaction to VSP timed out.
2108  | VSP not found.
2112  | Store not found.
2117  | VSP does not support Deposits.
2118  | VSP does not support Payments.
2119  | VSP does not support Withdrawals.
2120  | Invalid token.
2128  | VSP does not support Cashbacks.
2129  | Store does not accept VSP.

For a comprehensive list of response codes, please download <a href='./docs/API.pdf'>our API Reference</a>.