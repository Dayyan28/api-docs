## Coupon Transactions

### GET /coupontransactions

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupontransactions" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “couponTransactions“: [ {
    “id“: 123499,
    “transactionId“: 101694,
    “couponId“: 183980,
    “wiCode“: "528626479",
    “userRef“: "VSP_User_Id_001",
    “merchantId“: 1050,
    “merchantName“: "Test Merchant",
    “retailerId“: 10,
    “retailerName“: "YourRetailer",
    “processedAmount“: 2500,
    “transactionDate“: "2015-07-23T14:07:24+0200",
    “interfaceIssuerId“: "AAIssuer",
    “issuerId“: 128,
    “stateId“: "S"
  }],
  “paging“:
  {
    “pageSize“: 20,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode“: "-1",
  “responseDesc“: "Success"
}
```

This endpoint can be used to retrieve all coupon related transactions. If no filters are specified it will return all coupon transactions ordered by date.

Endpoint: <font face="Courier New">{root}/coupontransactions</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
transactionId | Integer | The top level transaction id. All transactions are linked to a high level transaction. The high level transaction groups multiple coupon transactions as well as gift card transactions. | &#x2713; | &#x2713;
userRef | String | If the user reference is specified on transactions linked to the user will be returned. | &#x2713; | &#x2713;
couponId | Integer | To filter on specific coupon Id. | &#x2713; | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
campaignId | Integer | Filter transactions for specific campaign. | &#x2713; | &#x2713;
dateFrom | String | The date from which to return transactions.  | &#x2713; |   
dateTo | String | The date to which to return transactions.  | &#x2713; |   
id | Integer | The coupon transaction id. | | &#x2713;
merchantId  | Integer | The merchant id. | | &#x2713;
merchantName  | String | The merchant name. | | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
processedAmount | Integer | The processed amount. | | &#x2713;
transactionDate | String | The transaction date. | | &#x2713;
interfaceIssuerId  | String | The id of the interface issuer.  | | &#x2713;
issuerId | String | The id of the issuer.  | | &#x2713;
stateId | Integer | The current transaction state.<ul><li><font face="Consolas">N</font> (New)</li><li><font face="Consolas">P</font>  (Processing)</li><li><font face="Consolas">F</font> (Failed)</li><li><font face="Consolas">SPR</font> (Successful pending recon)</li><li><font face="Consolas">S</font> (Successful)</li><li><font face="Consolas">RV</font> (Reversed)</li></ul>| | &#x2713;

### GET /coupontransactions/{id}

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupontransactions/{id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “couponTransactions“: [ {
    “id“: 123499,
    “transactionId“: 101694,
    “couponId“: 183980,
    “wiCode“: "528626479",
    “userRef“: "VSP_User_Id_001",
    “merchantId“: 1050,
    “merchantName“: "Test Merchant",
    “retailerId“: 10,
    “retailerName“: "YourRetailer",
    “processedAmount“: 2500,
    “transactionDate“: "2015-07-23T14:07:24+0200",
    “interfaceIssuerId“: "AAIssuer",
    “issuerId“: 128,
    “stateId“: "S"
  }],
  “paging“:
  {
    “pageSize“: 20,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode“: "-1",
  “responseDesc“: "Success"
}
```

This resource returns a specific coupon transaction.

Endpoint: <font face="Courier New">{root}/coupontransactions/{id}</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The coupon transaction id. | &#x2713; | &#x2713;
transactionId | Integer | The top level transaction id. All transactions are linked to a high level transaction. The high level transaction groups multiple coupon transactions as well as gift card transactions. | | &#x2713;
couponId | Integer | To filter on specific coupon Id. | | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
userRef | String | If the user reference is specified on transactions linked to the user will be returned. |  | &#x2713;
merchantId  | Integer | The merchant id. | | &#x2713;
merchantName  | String | The merchant name. | | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
processedAmount | Integer | The processed amount. | | &#x2713;
transactionDate | String | The transaction date. | | &#x2713;
interfaceIssuerId  | String | The id of the interface issuer.  | | &#x2713;
issuerId | String | The id of the issuer.  | | &#x2713;
stateId | Integer | The current transaction state.<ul><li><font face="Consolas">N</font> (New)</li><li><font face="Consolas">P</font>  (Processing)</li><li><font face="Consolas">F</font> (Failed)</li><li><font face="Consolas">SPR</font> (Successful pending recon)</li><li><font face="Consolas">S</font> (Successful)</li><li><font face="Consolas">RV</font> (Reversed)</li></ul>| | &#x2713;
