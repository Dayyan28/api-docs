# Transaction Models

The Yoyo Platform supports three distinct transaction models, each designed for specific use cases and environments.

## Over-the-Counter (OTC)

There are only three main components involved during a transaction: the Retailer, the wiCode Platform and the VSP. The wiCode Platform connects the retailers and VSPs to enable a VSP's users to transact at retailers connected to the platform. The same transaction flow is applicable for Payment, Withdrawal and Deposits. In the over-the-counter model, the POS requests the value of the transaction into the VSP for authorisation. We encourage all apps to implement the over-the-counter model as well as the <a href='index.html#sit-down'>sit-down model</a> as it increases access to a larger retail footprint.

### Transaction flow
The OTC model involves three main components:
1. Retailer (POS)
2. Yoyo Platform
3. VSP System

<img src="./images/VSP5.png" alt="some text"/>

<ol>
  <li>A customer has access to a mobile channel (i.e mobile application) which is provisioned to them by a VSP. The customer 'signs in' to their mobile wallet to make a payment at a store (does not specify which store).</li>
  <li>The VSP requests a transactional token from the Yoyo Token Manager via the <a href='index.html#token-manager-rest-api'>Token Manager API</a>.</li>
  <li>The token is displayed to the customer through the appropriate mobile channel.</li>
  <li>The cashier selects the "mobile" tender button. At this point; if the POS is integrated directly to YoyoPlatform, the transaction request will be sent to the Transaction Engine via the YoyoPlatform POS API. If the POS is integrated to the YoyoPlatform through a retail switch, a standard "card" transaction is sent through to the switch with the transactional token in the "PAN" field of the ISO message (prefixed with a standard YoyoPlatform BIN number). It is then routed by the switch to the YoyoPlatform.</li>
  <li><i>Optionally</i> the VSP can have the ability to process a tokenInfo request, which is used to relay information about an active user token back to the POS. This is generally not required.</li>
  <li>The Transaction Engine receives the request from POS to process a transaction and interfaces with the Token Manager in order to discover which VSP reserved the token.</li>
  <li>A transaction processing request is sent to the VSP's <a href="index.html#transactional-gateway-callback">Transactional Gateway</a> via the VSP POST API, including transactional information such as the token, the basket value, and the merchant information, in order to execute a transaction (purchase, earn, deposit, refund or withdrawal). At this point the VSP system can request a confirmation from the customer (i.e. Confirm R25 at Retailer X?), but this step is often skipped (especially for coupons/vouchers).</li>
  <li><i>Optionally</i> the customer can be prompted to accept or decline the transaction. This interface is provided by the VSP to the customer. The confirmation process should not materially increase the customer's time at till.</li>
  <li>Should the customer confirm the transaction, and the VSP authorises the transaction based on other criteria (sufficient funds, etc.), the VSP may respond to the transaction processing request from the YoyoPlatform in [7]. This will need to occur within the standard transaction <b>timeout range of less than 15 seconds</b>.</li>
  <li>The YoyoPlatform will provide the response of the transaction to the POS.</li>
  <li>Once the tender has been received by the POS, a transaction advice is sent to the YoyoPlatform, to  <b>FINALISE</b> the transaction with the VSP. Should the POS need to cancel the pending transaction, a <b>REVERSE</b> advice is sent to the YoyoPlatform, and to the VSP.</li>
</ol>

### Important Notes

```json
{
  "timeout": {
    "limit": "15 seconds",
    "action": "Transaction reversed if exceeded"
  },
  "advice_handling": {
    "finalize": "Confirms successful transaction",
    "reverse": "Cancels pending transaction",
    "rules": [
      "Cannot be declined",
      "Indicates final real-world outcome",
      "May be delayed up to 24+ hours"
    ]
  },
  "fund_management": {
    "on_request": "Reserve funds",
    "on_finalize": "Deduct/add funds",
    "on_reverse": "Release reserved funds"
  }
}
```

<aside class="notice">If a transaction response is not received from the VSP within 15 seconds, the transaction will time out and a <b>REVERSE</b> will be sent to the VSP. The POS will receive a applicable failure error message.</aside>

<aside class="warning">The advice instruction cannot be declined, it is merely an instruction from the POS to the YoyoPlatform and VSP to indicate the final real-world outcome of the transaction.</aside>

<aside class="notice">The VSP should reserve funds upon a successful transaction request (Step [7]). Only if the transaction is <b>FINALISED</b> should the funds be deducted in the case of a PAYMENT and added in the case of a DEPOSIT. If the transaction is <b>REVERSED</b> the funds should be released.</aside>

<aside class="notice">The transaction advice is not immediate in all cases, in exceptional cases advises may only arrive after 24 hours or more. This needs to be taken into account when designing the recon and settlement process.</aside>

## Sit-down
In the sit-down model, the user begins a transaction by scanning a QR code off of a bill. Essentially, two steps are carried out to perform a transaction.

<img src="./images/VSP2.png" alt="some text"/>

### Step 1 - QR parsing

In the QR parsing stage the app sends the raw QR data to the VSP, the VSP in turn sends the raw QR data to the <a href="index.html#transaction-engine-vsp-rest-api">Transaction Engine VSP API</a> via the <b>GET /bills</b> call. After the YoyoPlatform decodes the data, all relevant information about the bill is returned to the VSP.

### Step 2 - Transaction

In the second stage the actual financial transaction begins. The VSP uses the bill information to initiate the transaction with the YoyoPlatform by doing the <b>POST /transactions</b> call to the <a href="index.html#transaction-engine-vsp-rest-api">Transaction Engine VSP API</a>.

Once the transaction is initiated the YoyoPlatform will route the request to the VSP's <a href="index.html#transactional-gateway-callback">Transactional Gateway</a> for authorisation. Upon a successful transaction response form the VSP the YoyoPlatform will automatically send the <b>FINALISE</b> advice to the VSP's Transactional Gateway. Payment notification is sent to the app once the transaction outcome is known.

<aside class="warning">Although the advice is automated in this case, dual messaging still applies</aside>

### Transaction flow

This is what the transaction flow would look like for the sit-down model.

<img src="./images/VSP3.png" alt="some text"/>

### Example QR code
<img src="./images/bill_qr.png" alt="An example sit-down QR code."/>

## Informal merchant
If the merchant does not have a physical POS, they might employ a static QR code in the form of a wobbler at the place where they sell their goods/services. This is normally used in informal settings and typically means reduced functionality.

### Transaction flow
This is what the transaction flow would look like for the informal model.

<img src="./images/informal_merchant_flow.png" alt="Informal merchant transaction flow."/>

### Example QR code
<img src="./images/store_qr.png" alt="An example informal QR code."/>

### Implementation Notes

```json
{
  "qr_code": {
    "type": "Static",
    "placement": "Store wobbler/display",
    "content": "Unique store identifier"
  },
  "limitations": {
    "functionality": "Reduced compared to OTC",
    "integration": "No POS system required",
    "verification": "Manual amount entry"
  }
}
```
