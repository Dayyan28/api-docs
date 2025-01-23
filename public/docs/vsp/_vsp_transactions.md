## Transactions request

```json

# EXAMPLE REQUEST

curl "https://rad2.wigroup.co:8181/wigroup-transactionengine/vsp/transactions"
  -H "apiId: <#apiId#>"
  -H "apiPassword: <#apiPassword#>"
  -H "Content-Type: application/json; charset=UTF-8"
  -X POST
  -d {
    {
    "basketAmount": "100",
    "storeTrxDetails":    {
       "basketId": "180_63631826413",
       "cashierId": "snappy",
       "posId": "861074024300611",
       "storeId": "1050",
       "trxId": "1"
    },
    "token":    {
       "id": "7997560",
       "type": "WICODE"
    },
    "totalAmount": "100",
    "type": "PAYMENT"
 }
  }
```

Once the VSP has received the transaction from the mobile device (and created a Payment Token "wiCode" if needed), the VSP should initiate the transaction on the wiCode Platform. The Payment Token should form part of the request body.

The basic layout of the transaction request looks a follows:


| Fields | Type | Required/Optional | Description | Request |	Response
|--------| ---- | ---------- | ------- | -------- | ------- |
|apiId |_String_| Required |A ID which the VSP authenticates that it is indeed the YoyoPlatform pushing the transaction.| &#x2713;||
|apiPassword |_String_| Required |The password hashed by SHA. | &#x2713;||
| apiClientVersion | _String_| Optional | This field can be used by VSP integrators to send the version of their implementation to the YoyoPlatform.|||
| apiServerVersion | _String_| Optional | This field allows VSP integrators to send the version of the YoyoGroup server in use as at their time of integration, ensuring strict backwards compatibility.|||
|basketAmount |_Integer_| Required |This is the total transaction amount (in cents) of all products in the basket.| &#x2713;|&#x2713;
|<b>storeTrxDetails</b> |_StoreTrxDetails_| Required| This object contains information about the store in which the transaction took place. Find information about the StoreTrxDetails object <a href="index.html#objects">here</a>.|&#x2713;|&#x2713;
|tipAmount| _Integer_| Optional| The tip amount must be included in the total amount in order for the VSP to process the full amount. Not all VSP’s support tip amount.|||
|<b>token</b>| _Token_| Required| This object contains information about the token. Find information about token object <a href="index.html#tokens-request">here</a>.|&#x2713;|&#x2713;
|totalAmount| _Integer_| Required| This is the total transaction amount in cent. This is the sum of the BasketAmount and TipAmount.|&#x2713;|&#x2713;
|type| _String_| Required| The type of transaction; either _Payment_, _Deposit_ or _Withdrawal._|&#x2713;|&#x2713;
```json
# EXAMPLE SUCCESS RESPONSE

{
   "token":    {
      "id": "7997560",
      "type": "WICODE"
   },
   "type": "PAYMENT",
   "storeTrxDetails":    {
      "storeId": 1050,
      "remoteStoreId": "1234512345",
      "retailerId": 999,
      "basketId": "180_63631826413",
      "trxId": "1",
      "posId": "861074024300611",
      "cashierId": "snappy"
   },
   "wiTrxId": 87153,
   "totalAmountProcessed": 100,
   "basketAmountProcessed": 100,
   "tipAmountProcessed": 0,
   "amountToSettle": 100,
   "vsp":    {
      "id": 50099,
      "name": "Eben VSP",
      "trxId": "test_vsp_17-x",
      "responseCode": "-1",
      "responseDesc": "Redemption successful!"
   },
   "discount": [],
   "loyalty": [],
   "responseCode": "-1",
   "responseDesc": "Success"
}
```

```json
# EXAMPLE FAILURE RESPONSE

{
   "token":    {
      "id": "7997560",
      "type": "WICODE"
   },
   "type": "PAYMENT",
   "storeTrxDetails":    {
      "storeId": 1050,
      "remoteStoreId": "1234512345",
      "retailerId": 999,
      "basketId": "180_63631826413",
      "trxId": "1",
      "posId": "861074024300611",
      "cashierId": "snappy"
   },
   "wiTrxId": 87154,
   "totalAmountProcessed": 0,
   "basketAmountProcessed": 0,
   "responseCode": "02120",
   "responseDesc": "Invalid token"
}
```

Each transaction type uses the XML in a (slightly) different manner.

|Fields | Type | Description |
|--------| ---- | ---------- |
|<b>token</b>| _Token_| This object contains information about the token. Find information about products object [here](#objects)|
|type| _String_| The type of transaction; either _Payment_, _Deposit_ or _Withdrawal._|
|<b>storeTrxDetails</b> |_storeTrxDetails_| This object contains information about the store in which the transaction took place. Find information about the StoreTrxDetails object [here](#objects).
|wiTrxId| _Long_| This is the unique Yoyo transaction ID assigned to the transaction. This field is important for processing a subsequent _Advice_ call.
|totalAmountProcessed| _Integer_| This is the total transaction amount in cent. This is the sum of the BasketAmount and TipAmount.
|BasketAmountProcessed| _Integer_| The basket amount that was used in processing the transaction.
|tipAmountProcessed| _Integer_| The tip amount must be included in the total amount in order for the VSP to process the full amount. Not all VSP’s support tip amount.
|amountToSettle| _Integer_| This is the amount, in cent, of the total transaction amount that will be settled to the retailer. The deficit between amountToSettle and totalAmountProcessed is regarded as the discount amount for non/partially-settled campaigns and should be handled as such.
|<b>vspDetails</b>| _VspDetails_| This object contains information about the vsp. Find information about vsp object [here](#objects).
|<b>discountProductDetails</b>| _DiscountProductDetails_| This object contains information about the products on which discounts are applied in this transaction. Find information about discount-product object [here](#objects).
|<b>loyaltyDetails</b>| _LoyaltyDetails_| This object contains information about the loyalty earned on this transaction. Please find information about the Loyalty object here [here](#objects).
| responseCode | _Integer_| The responseCode returned by the VSP. This should not be used to determine whether the transaction was approved or not. This should only be used for logging and error reporting to VSP. Find information about responseCode object [here](#objects).
| responseDesc |_String_ | The VSP’s response description. Can be displayed addition to the transactionResponse.responseDesc if available to give more information on why the transaction failed.  Find information about responseDesc object [here](#objects).
