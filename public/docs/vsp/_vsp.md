# Overview - Value Store Provider

The Yoyo Platform is an open, interoperable platform that facilitates transactions between a Retailer, Customer and Value Service Provider (VSP) at a Point of Sale/eCommerce. A single integration with the Yoyo Platform enables a Point of Sale/eCommerce to interact with any Mobile Application and enable a Customer to transact using a wiCode (token) in store.

### Transaction types facilitated by the Yoyo Platform include:
- Pay in store
- Earn & Burn loyalty
- Redeem coupon/voucher/gift card
- Cash Withdrawal/Cashback
- Cash Deposit

All transactions across different value store providers occur at point of sale through the exact same transaction process, thus cashiers do not require special knowledge of each provider, and cashier training is not required per application that is accepted by a merchant. Similarly, recon and settlement mechanisms are aggregated across all providers so that the merchant need only process recon and settlement once. It should be noted that low-level reporting is provided per transaction provider, to ensure that the merchant has access to all data potentially useful for business intelligence activities.

<img src="./images/POS:VSP Flow.jpg" alt="some text"/>

### Platform Achitecture

For any transaction to occur, there are primarily three entities: a Value Store Provider (VSP), storing some redeemable value on behalf of a customer, the retailer themselves, and the Yoyo Platform, facilitating the routing (low-level) and settlement (high-level) legs of the transaction.

The diagram below shows how these various role-players interact. The VSP platform will be entirely responsible for communicating with the mobile device of the customer through whichever channel is applicable for that particular VSP (USSD, mobisite, app, etc.). As shown in Figure 2, the Yoyo Platform aggregates a number of VSP’s, each containing their own customer treasury system. The Yoyo Platform interacts with this VSP system on behalf of the retailer, and offers the retailer access to multiple VSP’s with one single technical integration.

<img src="./images/Platform Achitecture.jpg" alt="some text"/>

### Transactional Process Flow
**Full Overview**

<img src="./images/Transactional Process Flow.png" alt="some text"/>

#### Step 1

A customer has access to a mobile channel (i.e mobile application) which is provisioned to them by a VSP. The customer ‘signs in’ to their mobile wallet to make a payment at a store (does not specify which store).


#### Step 2

The VSP requests a transactional token from the wiGroup Token Manager via the Token Manager API.

  "method": "POST",
  "url": "https://rad2.wigroup.co:8181/wigroup-tokenmanager/vsp/tokens (NOT PRODUCTION)",
  "headers": {"apiId": "", "sha1Password": "", "Content-Type": "application/json"},
   
```json
{
    "discountWicodes": null,
    "loyaltyWicodes": null,
    "maxTrxAmount": null,
    "tokenLifeInMin": 15,
    "vspReference": "API Reference Docs",
    "transactionType": "PAYMENT", 
    "tipAmount": 0
}
```


#### Step 3

The token is displayed to the customer through the appropriate mobile channel.


#### Step 4

The cashier selects the “mobile” tender button. At this point; if the POS is integrated directly to Yoyo, the transaction request will be sent to the Transaction Engine via the wiPlatform POS API. If the POS is integrated to the Yoyo through a retail switch, a standard “card” transaction is sent through to the switch with the transactional token in the “PAN” field of the ISO message (prefixed with a standard Yoyo Platform BIN number). It is then routed by the switch to the Yoyo Platform.


#### Step 5

The Transaction Engine receives the request from POS to process a transaction and interfaces with the Token Manager in order to discover which VSP reserved the token.

#### Step 6

A transaction processing request is sent to the VSP via the VSP POST API, including transactional information such as the token, the basket value, and the merchant information, in order to execute a transaction (purchase, earn, load or withdrawal).

```json
{
   "wiTrxId": 430376,
   "wiVspTrxId": 657439,
   "token":{
      "id": "3021869",
      "type": "WICODE",
      "vspReference": "VSP API Documentation"
   },
   "type": "PAYMENT",
   "storeTrxDetails": {
      "storeId": 1050,
      "remoteStoreId": "10501",
      "retailerId": 999,
      "basketId": "basket1",
      "trxId": "1",
      "posId": "workstation1",
      "cashierId": "cashier1"
   },
   "totalAmount": 8500,
   "basketAmount": 8500,
   "vspCredentials": {
      "id": "",
      "password": ""
   },
   "discount":[
      
   ]
}
```

#### Step 7

After the VSP has received the transaction processing request, the VSP is then free to apply any business logic such as checking if the token booked out in Step 2 is indeed in their own database, does the client/user have enough balance in their wallet to complete the said inbound transaction.

The VSP **MUST** reply back within the standard transaction timeout range (< 15s). Should the VSP not reply back within this time frame, then the transaction will fail completely and Yoyo will respond back to the POS with `Timeout while waiting for vsp response.`

Below is what the absolute minimum response body should look like:

```json
{
  "responseCode": -1,
  "responseDesc": "Success",
  "vspTrxId": "0001",
  "totalAmountProcessed": 8500,
  "basketAmountProcessed": 8500,
  "cashbackAmountProcessed": 0
}
```

Field | Description
---------|----------
 responseCode | The authorization response code. ‐1 is Authorized. All other codes are treated as failed. |
 responseDesc | Readable discription of responseCode, typically used to give the user and cashier context of the transaction outcome (Insufficient funds, Max Transaction Limit Reached etc.)
 vspTrxId | This would be your internal transaction ID


#### Step 8 & 9

Step 8: The Yoyo Platform will provide the response of the transaction to the point of sale.
Step 9: Once the tender has been received by POS, a transaction advice is sent to the Yoyo Platform, finalising the transaction. Should the POS need to cancel the pending transaction, a reversal is sent to the Yoyo Platform, and the transaction is reversed.

After the POS has advised the transaction as `FINALISE` or `REVERSE` then Yoyo will also POST the transaction advice status to the VSP.

```json
{
   "action": "FINALISE",
   "originalTrx": {
      "storeTrxDetails": {
         "storeId": 1050,
         "remoteStoreId": "10501",
         "retailerId": 999,
         "basketId": "basket1",
         "trxId": "12345",
         "posId": "workstation1",
         "cashierId": "cashier1"
      },
      "wiTrxId": 430407,
      "wiVspTrxId": 657469,
      "token": {
         "id": "7664530",
         "type": "WICODE",
         "vspReference": "VSP API Documentation"
      },
      "type": "PAYMENT",
      "vspTrxId": "0001",
      "totalAmountProcessed": 1000,
      "basketAmountProcessed": 1000,
      "cashbackAmountProcessed": 0,
      "tipAmountProcessed": 0
   },
   "vspCredentials": {
      "id": "",
      "password": ""
   }
}
```




