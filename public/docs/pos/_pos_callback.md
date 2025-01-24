## Transaction callback

The transaction callback URL provides the Yoyo platform with a means of notifying third parties that a transaction has been completed. Whenever a transaction is completed, successfully or not, a callback can be POSTed to a provided URL. A callback address can be setup on a retailer level, this means that on one callback address can be set for a defined retailer on the Yoyo platform.

### Use case

The transaction callback is intended for retailers that support SITDOWN payments and require a notification when payment for an open bill has been completed. This notification could trigger an action by the merchant to close the bill or in the case of a none successful transaction, assist the client with an alternative payment method.
More details regarding the transaction can requested using the <b>Transaction History V2</b> request.

### Transaction Callback failure

To facilitate synchronisation, the Yoyo Platform has a built-in finite redemption callback retry policy. This is enables better state synchronisation by minimising the number of redemption callback failures. If, for some reason, no response is received across all redemption callback requests, a redemption fallback policy must be followed.

<aside class="notice">Yoyo Platform will retry the callback <b>10</b> times.</aside>

### Webhook URL

The transaction callback should be built using RESTful JSON programming language.

<aside class="warning">This is a POST message from the Yoyo platform to the webhook URL, not an API that is consumed.</aside>

```json

# Example request

{
   "transactionId": 1,
   "basketId": "STRING",
   "storeId": 1050,
   "totalAmountProcessed":100,
   "state":"STRING"
 }

# Example response

HTTP 200 (OK)
```

Endpoint: <font face="Courier New">{your_webhook_url}/</font>

<aside class="notice">The webhook URL needs to be secured with a 3rd party signed <b>SSL certificate</b>.</aside>

Parameter | Type | Description
--------- | ---- | ----------
transactionId | Integer | Unique identifier of the transaction on the Yoyo platform.
basketId | String | Unique identifier of the basket.
storeId | Integer | Unique identifier of a store. Once-off provided by Yoyo.
totalAmountProcessed | Integer | Sum of the processedAmount across each redemption.
state | String | The final transaction status. ENUM: ['S','R','F']


Status | Description
--------- | ----------
S | Success
F | Failed
R | Reverse
