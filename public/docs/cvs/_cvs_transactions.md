### Transactions

Coupon, voucher and gift card transactions may be queried.

### GET /transactions

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/transactions" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST

# Example response

{  
  “transactions”: {[
    “id“: 101694,
    “wiCode“: "528626479",
    “userRef“: "VSP_User_Id_001",
    “merchantId“: 1050,
    “merchantName“: "Test Merchant",
    “retailerId“: 10,
    “retailerName“: "Yoyo Retailer",
    “processedAmount“: 2500,
    “numberOfCoupons“: 1,
    “numberOfGiftcards“: 0,
    “totalCouponProcessedAmount“: 2500,
    “totalGiftcardProcessedAmount“: 0,
    “transactionDate“: "2015-07-23T14:07:24+0200",
    “interfaceIssuerId“: "VSPIssuer",
    “issuerId“: 128,
    “stateId“: "S"
  }]
  ,
  “paging“:    {
    “pageSize“: 10,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

This resource denotes the top level transactions. It will indicate how many coupon and giftcard transactions was processed on the transaction.

Endpoint: <font face="Courier New">{root}/transactions</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
userRef | String | The user reference to filter on.  | &#x2713; | &#x2713;
wiCode | String | To filter transaction on specific wiCode. | &#x2713; | &#x2713;
dateFrom | String | The date from which to return transactions. | &#x2713; |
dateTo  | String | The date to which to return transactions. | &#x2713; |
id | Integer | The transaction id.  |  | &#x2713;
merchantId   | Integer | The merchant id. |  | &#x2713;
merchantName   | String | The merchant name. |  | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
processedAmount    | Integer | The total processed amount for all linked coupon and giftcard transactions. |  | &#x2713;
numberOfCoupons    | Integer | The number of coupons redeemed on transaction.|  | &#x2713;
numberOfGiftcards    | Integer | The number of giftcards redeemed on transaction.|  | &#x2713;
totalCouponProcessedAmount   | Integer | The total processed amount from coupon redemptions.|  | &#x2713;
totalGiftcardProcessedAmount   | Integer | The total processed amount from giftcard redemptions. |  | &#x2713;
transactionDate    | String | The transaction date. |  | &#x2713;
interfaceIssuerId   | Integer | The transaction id. |  | &#x2713;
issuerId    | Integer | The id of the issuer. |  | &#x2713;
stateId | String | The current transaction state.<ul><li><font face="Consolas">N</font> (New)</li> <li><font face="Consolas">P</font> (Processing)</li> <li><font face="Consolas">F</font> (Failed)</li> <li><font face="Consolas">SPR</font> (Successful pending recon)</li> <li><font face="Consolas">S</font> (Successful)</li></ul> | | &#x2713;

### GET /transactions/{id}

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/transactions/{id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST

# Example response

{  
  “transactions”: {[
    “id“: 101694,
    “wiCode“: "528626479",
    “userRef“: "VSP_User_Id_001",
    “merchantId“: 1050,
    “merchantName“: "Test Merchant",
    “retailerId“: 10,
    “retailerName“: "Yoyo Retailer",
    “processedAmount“: 2500,
    “numberOfCoupons“: 1,
    “numberOfGiftcards“: 0,
    “totalCouponProcessedAmount“: 2500,
    “totalGiftcardProcessedAmount“: 0,
    “transactionDate“: "2015-07-23T14:07:24+0200",
    “interfaceIssuerId“: "VSPIssuer",
    “issuerId“: 128,
    “stateId“: "S"
  }]
  ,
  “paging“:    {
    “pageSize“: 10,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

This endpoint will return a specific high level transaction's details.

Endpoint: <font face="Courier New">{root}/transactions/{id}</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The transaction id.  |  | &#x2713;
wiCode | String | To filter transaction on specific wiCode. | &#x2713; | &#x2713;
userRef | String | The user reference to filter on.  | &#x2713; | &#x2713;
merchantId   | Integer | The merchant id. |  | &#x2713;
merchantName   | String | The merchant name. |  | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
processedAmount    | Integer | The total processed amount for all linked coupon and giftcard transactions. |  | &#x2713;
numberOfCoupons    | Integer | The number of coupons redeemed on transaction.|  | &#x2713;
numberOfGiftcards    | Integer | The number of giftcards redeemed on transaction.|  | &#x2713;
totalCouponProcessedAmount   | Integer | The total processed amount from coupon redemptions.|  | &#x2713;
totalGiftcardProcessedAmount   | Integer | The total processed amount from giftcard redemptions. |  | &#x2713;
transactionDate    | String | The transaction date. |  | &#x2713;
interfaceIssuerId   | Integer | The transaction id. |  | &#x2713;
issuerId    | Integer | The id of the issuer. |  | &#x2713;
stateId | String | The current transaction state.<ul><li><font face="Consolas">N</font> (New)</li> <li><font face="Consolas">P</font> (Processing)</li> <li><font face="Consolas">F</font> (Failed)</li> <li><font face="Consolas">SPR</font> (Successful pending recon)</li> <li><font face="Consolas">S</font> (Successful)</li></ul> | | &#x2713;
