## Redemption callback

The redemption callback URL provides the YoyoPlatform with a means of notifying third parties that a redemption has occurred. Whenever a transaction containing a redemption request is successfully processed by the wiCode platform, a redemption callback will be POSTed to the configured callback URL.

### Redemption Callback failure

To facilitate synchronization, the YoyoPlatform has a built-in finite redemption callback retry policy. This is enables better state synchronization by minimizing the number of redemption callback failures. If, for some reason, no response is received across all redemption callback requests, a redemption fallback policy must be followed.

<aside class="notice">Yoyo's CVS will retry the callback <b>10</b> times.</aside>

### Webhook URL

Each redemption notification will include three key parameters: <font face="Courier New">itemId</font>, <font face="Courier New">processedAmount</font>, and <font face="Courier New">totalProcessed</font>. The <font face="Courier New">itemId</font> corresponds to the ID of the coupon, or giftcard that was redeemed. The <font face="Courier New">processedAmount</font> corresponds to the monetary value of the redemption, i.e. the value of the coupon or the value of the giftcard that was spent. <font face="Courier New">totalProcessedAmount</font> is the sum of the processed amount across all redemptions in the transaction.

The redemption callback should be built using RESTful JSON programming language.

<aside class="warning">This is a POST message from CVS to the webhook URL, not an API that is consumed.</aside>

```json

# Example request

{
 "id" : 115796,
 "userRef" : "0813584314",
 "basketId" : "wiPOS--2016-07-06 08:34:18",
 "storeId" : 1050,
 "totalProcessedAmount" : 1200,
 "createDate" : "2016-07-06T10:34:20+0200",
 "wiCode" : "4461707",
 "interfaceIssuerId" : "your_qa_channel",
 "wiTrxId" : "48711",
 "redemption" : [{
   "id" : 173608,
   "processedAmount" : 300,
   "createDate" : "2016-07-06T10:34:20+0200",
   "type" : "COUPON",
   "itemId" : 219086,
   "campaignId" : 5943,
   "wiCode" : "4461707"
  }, {
   "id" : 173609,
   "processedAmount" : 400
   "createDate" : "2016-07-06T10:34:20+0200",
   "type" : "COUPON",
   "itemId" : 219087,
   "campaignId" : 5915,
   "wiCode" : "4461707"
  }, {
   "id" : 173610,
   "processedAmount" : 500,
   "createDate" : "2016-07-06T10:34:20+0200",
   "type" : "COUPON",
   "itemId" : 219088,
   "campaignId" : 5905,
   "wiCode" : "4461707"
  }
 ]
}

# Example response

HTTP 200 (OK)
```

Endpoint: <font face="Courier New">{your_webhook_url}/</font>

<aside class="notice">The webhook URL needs to be secured with a 3rd party signed <b>SSL certificate</b>.</aside>

Parameter | Type | Description
--------- | ---- | ----------
id | Integer | Unique identifier of the redemption callback.
userRef | String | Unique identifier of the user (against which the Gift Card is issued).
basketId | String | Unique identifier of the basket.
storeId | Integer | Unique identifier of a store. Once-off provided by Yoyo.
totalProcessedAmount | Integer | Sum of the processedAmount across each redemption.
createDate | String | The date on which the transaction was created.
wiCode | String | Number of digits for the desired wiCode.
wiTrxId | String | Unique Transaction Identifier for wiCode platform.
interfaceIssuerId | String | The channel which issued the wiCode for redemption.

### Redemption object

Parameter | Type | Description
--------- | ---- | ----------
id | Integer | Unique identifier of the redemption.
processedAmount | Integer | Value of the redemption.
createDate | String | The date of redemption of the item.
type | String | COUPON, VOUCHER or GIFTCARD.
itemId | Integer | Unique identifier of the item. E.g. Gift Card Id.
campaignId | Integer | Campaign against which the item was issued.
