## Transaction Gateway

### POST Transaction Request

## Transactional Gateway (callback)
The wiCode Platform requires the VSP to implement a transactional API to which Transaction Engine can POST the transactional requests as JSON objects. This section describes the methods that <b>need to be implemented by the VSP</b>.

<aside class="warning">This is a POST message from the Yoyo Platform to your API.</aside>

### Authorisation
The YoyoPlatform will send the API id and password to the VSP for additional security.

### Error handling
Test cases will be provided for negative tests, however we do request that the VSP provide us with a list of Errors and that they be as accurate and as informative as possible so that the Customer and the Merchant teller will understand what the errors mean.  The more accurate the human readable error message is the less support requests the VSP will receive.

### POST Transaction Request Callback

```json
# Request Example
{
    "token": {
        "id": "1234567",
        "type": "WICODE"
    },
    "storeTrxDetails": {
        "storeId": 1050,
        "basketId": "basket1",
        "cashierId": "cashier1",
        "posId": "workstation1",
        "trxId": "1"
    }
}
```

This call can be used to obtain information about a YoyoGroup Coupon or Voucher. The Coupon/Voucher ID is specified as a path parameter in this case.
<ul>
  <li>Requests authorisation of funds against the wiCode.</li>
  <li>The VSP is required to reserve the funds on a successful Transaction Request Response. </li>
  <li>A successful transaction Request will also put the wiCode into a <b><font face="Consolas">SPR</font></b> (success pending recon) state.</li>
</ul>

Endpoint: <font face="Courier New">{your_endpoint}/<#your_context#></font>

Available methods: <b>POST</b>

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>wiTrxId</strong></td>
    <td>The Yoyo Platform unique transaction identifier.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>token</strong> <br> <em>ID</em> <br> <em>Type</em> <em>vspReference</em></td>
    <td>The ID is the unique token which the YoyoPlatform uses to identify and route the transaction to the VSP to authorize. The token type is derived from how the token is received at the POS and can be either <b><font face="Courier New">WICODE</font></b>, <b><font face="Courier New">WIQR</font></b> or <b><font face="Courier New">BIN</font></b>. vspReference is the VSP's reference linked to this token.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>type</strong></td>
    <td>This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>storeTrxDetails</strong> <br> <em>basketId</em> <br> <em>cashierId</em> <br> <em>posID</em> <br> <em>remoteStoreID</em> <br> <em>retailerID</em> <br> <em>storeID</em> <br> <em>trxID</em></td>
    <td><br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by Yoyo. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>totalAmount</strong></td>
    <td>This is the total transaction amount in cent. This is the sum of the basketAmount and the cashbackAmount.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>basketAmount</strong></td>
    <td>This is the total transaction amount in cent for all products in the basket. If the transaction type is DEPOSIT, this is the deposit amount. It the transaction type is WITHDRAWAL this is the amount to withdraw.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>cashBackAmount</strong></td>
    <td>This is the amount of cash in cent being withdrawn as part of the transaction. It can either be used in conjunction with a basked payment or on its own. This is only for use with <b><font face="Courier New">PAYMENT</font></b> type.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>products</strong> <br> <em>ID</em> <br> <em>PricePerUnit</em> <br> <em>Units</em></td>
    <td>The id refers to the actual SKU number of the product. The price per unit at the POS and the number of units. It is recommended that the POS provides a list of products for each transaction.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>vspCredentials</strong></td>
    <td>The VSP's API credentials are passed in the body of the message for authentication over and above SSL.</td>
  </tr>
</table>

### Transaction Response

```json
# Response Example
{
    "responseCode": "-1",
    "responseDesc": "Success",
    "vspTrxId": "0001",
    "totalAmountProcessed": 100,
    "basketAmountProcessed": 100,
    "cashbackAmountProcessed": 0,
    "id": 1234,
    "name": "vsp_name"
}
```

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseCode</strong></td>
    <td>The authorization response code. ‐1 is Authorized. All other codes are treated as failed.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseDescription</strong></td>
    <td>Readable description of responseCode, typically used to give the user and cashier context of the transaction outcome.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>vspTrxId</strong></td>
    <td>The VSP's unique transaction id. It is required should the transaction on successful authorization.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>totalAmountProcessed</strong></td>
    <td>The basket amount that was used in processing the transaction.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>basketAmountProcessed</strong></td>
    <td>The basket amount that was used in processing the transaction.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>cashBackAmountProcessed</strong></td>
    <td>This is the amount of cash in cents being withdrawn as part of the transaction. It can either be used in conjunction with a basket payment or on its own.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>id</strong></td>
    <td>The VSP id.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>name</strong></td>
    <td>The VSP name.</td>
  </tr>
</table>

<aside class="notice">Make sure your response descriptions are human-readable as they will give context to the cashier.</aside>

### POST Advise Request Callback

```json
# EXAMPLE REQUEST
curl "{your_endpoint}/<#your_context#>" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
       "action": "FINALISE",
       "originalTrx": {
         "storeTrxDetails": {
           "storeId": 1050,
           "basketId": "Test VSP 09-05-2015 15:42:13",
           "trxId": "1543",
           "posId": "8",
           "cashierId": "Sam"
         },
         "wiTrxId": 21752,
         "type": "PAYMENT",
         "vspTrxId": 4256
       },
       "vspCredentials": {
         "id": "DummyVSP",
         "password": "test"
       }
     }'
```

<ul>
  <li>The Advise request has two types of calls, a Finalise and a Reverse.</li>
  <li>The Advise Finalise indicates a completed transaction. </li>
  <li>The Advise Reverse is used to cancel a transaction and restore the funds balance in the user account. </li>
  <li>Once a transaction has been finalised it cannot be reversed. </li>
  <li>Once either the Finalise and a Reverse has taken place the wiCode then gets freed and returns to the wiCode pool. </li>
</ul>

Endpoint: <font face="Courier New">{your_endpoint}/<#your_context#></font>

Available methods: <b>POST</b>

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>action</strong></td>
    <td>Must be either <b><font face="Courier New">FINALISE</font></b> or <b><font face="Courier New">REVERSE</font></b>.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>storeTrxDetails</strong> <br> <em>basketId</em> <br> <em>cashierId</em> <br> <em>posID</em> <br> <em>remoteStoreID</em> <br> <em>retailerID</em> <br> <em>storeID</em> <br> <em>trxID</em></td>
    <td><br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the storeID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> trxID:  The internal retailers unique transaction ID</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>wiTrxID</strong></td>
    <td>The transaction ID supplied by the wiCode Platform. <br> This field is returned in the transaction response. This links the transaction and the advice.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>type</strong></td>
    <td>This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>vspTrxId</strong></td>
    <td>The transaction ID supplied by the VSP.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>vspCredentials</strong></td>
    <td>Optional | The VSP's API credentials can be passed in the body of the message should it require authentication beyond SSL.</td>
  </tr>
</table>

### Advice Response

```json
# EXAMPLE RESPONSE
{
  "responseCode": "-1",
  "responseDesc": "Success"
}
```

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseCode</strong></td>
    <td>The authorization response code. ‐1 is Authorized. All other codes are treated as failed.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseDescription</strong></td>
    <td>Readable description of responseCode, typically used to give the user and cashier context of the transaction outcome.</td>
  </tr>
</table>

### POST Token Info Request

```json
# EXAMPLE REQUEST

curl "{your_endpoint}/<#your_context#>" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
       "token": {
         "id": "536598854",
         "type": "WICODE",
       },
       "type": "PAYMENT",
       "storeTrxDetails": {
         "storeId": 1050,
         "basketId": "basket50",
         "trxId": "trx1",
         "posId": "pos1",
         "cashierId": "admin"
       }
     }'
```

<ul>
  <li>Requests information and seeks validity of the wiCode from the VSP. Predominantly used in the "Over the Counter” transactional model. </li>
</ul>

Endpoint: <font face="Courier New">{your_endpoint}/<#your_context#></font>

Available methods: <b>POST</b>

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>storeTrxDetails</strong> <br> <em>basketId</em> <br> <em>cashierId</em> <br> <em>posID</em> <br> <em>remoteStoreID</em> <br> <em>retailerID</em> <br> <em>storeID</em> <br> <em>trxID</em></td>
    <td><br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br></td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>token</strong> <br> <em>ID</em> <br> <em>Type</em></td>
    <td>The ID is the unique token which the YoyoPlatform uses to identify and route the transaction to the VSP to authorize. The token type is derived from how the token is received at the POS and can be either <b><font face="Courier New"> WICODE</font></b>, <b><font face="Courier New"> WIQR </font></b> or <b><font face="Courier New"> BIN</font></b>.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>type</strong></td>
    <td>This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.</td>
  </tr>
</table>

### Token Info Response

```json
# EXAMPLE RESPONSE
{
  "responseCode": "-1",
  "responseDesc": "Success"
}
```

<table>
  <tr style="background-color: #f4f4f4;">
    <th><strong>Fields</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseCode</strong></td>
    <td>The authorization response code. ‐1 is Authorized. All other codes are treated as failed.</td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4;"><strong>responseDescription</strong></td>
    <td>Readable description of responseCode, typically used to give the user and cashier context of the transaction outcome.</td>
  </tr>
</table>
