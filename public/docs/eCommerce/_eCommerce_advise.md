## Step 3: Advise request

```json

#REQUEST

curl --location 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-provider/advise' \
--header 'id: <string>' \
--header 'password: <string>' \
--header 'apiClientVersion: <string>' \
--header 'apiServerVersion: <string>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
  "action": "<string>",
  "originalTrx": {
    "storeTrxDetails": {
      "basketId": "<string>",
      "cashierId": "<string>",
      "posId": "<string>",
      "trxId": "<string>",
      "storeId": "<long>",
      "remoteStoreId": "<string>",
      "retailerId": "<long>",
      "billId": "<long>",
      "posBillId": "<string>"
    },
    "type": "<string>",
    "wiTrxId": "<long>",
    "token": {
      "id": "<string>",
      "type": "<string>",
      "payload": "<string>"
    },
    "switchTrxId": "<string>",
    "vspTrxId": "<string>",
    "totalAmountProcessed": "<integer>",
    "basketAmountProcessed": "<integer>",
    "cashbackAmountProcessed": "<integer>",
    "tipAmountProcessed": "<integer>"
  },
  "apiCredentials": "sunt consectetur"
}'
```

The advise request must be sent after the transaction has completed at POS (tender is completed), The advise request determines whether the state of a pending transaction is set to either to complete the transaction or to cancel the entire bill. 
This is done by means of setting the action field to <b><font face="Courier New">REVERSE</font></b> or <b><font face="Courier New">FINALISE</font></b>. 
This will change the transaction from pending to finalised / reversed state on the YoyoGroup platform. 

The e-commerce site will receive a response from YoyoGroup as the final leg of the transaction. 
It is important to note that the <font face="Courier New">wiTrxId</font> received in the transaction response should be carried over and used on the advise request in order to advise that transaction.

<b>Parameters:</b>

Fields | Required | Description
------ | -------- | -----------
action | &#x2713; | Must be either <b><font face="Courier New">FINALISE</font></b> or <b><font face="Courier New">REVERSE</font></b>.
storeTrxDetails <br> <em>BasketId</em> <br> <em>CashierId</em> <br> <em>PosID</em> <br> <em>RemoteStoreID</em> <br> <em>RetailerID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> &#x2713; <br> &#x2713; <br> &#x2713; <br>  <br>  <br>  <br> &#x2713; | <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the StoreID is populated, this will be used. Alternatively, the remoteStoreID and the retailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID
switchTrxID |  | If applicable, the switch will assign their ID to the transaction.
vspTrxId |  | The transaction ID supplied by the VSP.
wiTrxID | &#x2713; | The transaction ID supplied by the wiCode Platform. <br> This field is returned in the transaction response. This links the transaction and the advise.
type | &#x2713; | This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>. The transaction type that was processed in the transaction request.

<aside class="success">The <font face="Courier New">remoteStoreId</font> and <font face="Courier New">retailerId</font> needs to be present or just the <font face="Courier New">storeId</font>.</aside>

### Advise response


```json

#RESPONSE

{
    "responseCode": "<string>",
    "responseDesc": "<string>",
    "originalTrx": {
        "storeTrxDetails": {
            "basketId": "<string>",
            "cashierId": "<string>",
            "posId": "<string>",
            "trxId": "<string>",
            "storeId": "<long>",
            "remoteStoreId": "<string>",
            "retailerId": "<long>",
            "billId": "<long>",
            "posBillId": "<string>"
        },
        "type": "<string>",
        "wiTrxId": "<long>",
        "token": {
            "id": "<string>",
            "type": "<string>",
            "payload": "<string>"
        },
        "switchTrxId": "<string>",
        "vspTrxId": "<string>",
        "totalAmountProcessed": "<integer>",
        "basketAmountProcessed": "<integer>",
        "cashbackAmountProcessed": "<integer>",
        "tipAmountProcessed": "<integer>"
    },
    "action": "<string>",
    "wiTrxId": "<long>"
}
```

<b>Parameters:</b>

Fields | Description
------ | -----------
responseCode & responseDescription | Code and description of the code. Use the VSP response for further details to display to user. A code of “-1” will always be associated with a “Success” description.
action | Will be either <b><font face="Courier New">FINALISE</font></b> or <b><font face="Courier New">REVERSE</font></b>.
cashBackAmount | This is the amount of cash in cents being withdrawn as part of the transaction. It can either be used in conjunction with a basket payment or on its own.
storeTrxDetails | Returning the same details that were sent up in the request
type | The transaction type that was processed. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.
vspTrxId | The unique VSP transaction ID.  
wiTrxID | This is the unique Yoyo Platform transaction ID assigned to the transaction.
