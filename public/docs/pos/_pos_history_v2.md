## Transaction History V2 request

The <em>transaction history V2</em> request returns details on a single transaction that have been processed. Transaction history may be linked to a specific retail store and is used to request details of a specific transaction.

<img style="background-color: #ffffff;" src="./images/pos_transactionhistory_v2.jpeg" alt="some text"/>


```json
#REQUEST

curl --location --globoff 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction-history/v2 \
--header 'id: {{api_id}}' \
--header 'password: {{api_password}}' \
--header 'apiClientVersion: {{api_client_version}}' \
--header 'apiServerVersion: {{api_server_version}}' \
--header 'Content-Type: application/json' \
--data '{
    "storeTrxDetails": {
        "storeId": "<long>",
        "retailerId": "<long>",
        "basketId": "<long>",
        "trxId": "<long>",
        "posId": "<string>",
        "cashierId": "<string>"
    },
     "transactionId": "<long>"
}'
```

The transaction history request provides details of the transaction stecified by the <em><font face="Courier New">transasctionId</font></em> and associated with the <em><font face="Courier New">storeTrxDetails</font></em> provided. It is mandatory to provide the <em><font face="Courier New">transasctionId</font></em> as well as the <font face="Courier New">storeID</font> (or both the <font face="Courier New">remoteStoreID</font> and <font face="Courier New">retailerID</font>). The basic layout of the transaction history request looks a follows:

Fields | Optional or Required | Description
------ | -------------------- | -----------
API Credentials | Required | API credentials issued to you by YoyoGroup.
transactionId| Required | This is the primary key for the request
StoreTrxDetails <br> <em>BasketId</em> <br> <em>RemoteStoreID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> Required <br> Required <br> Required <br> Optional <br> Optional <br> Optional <br> Required |  <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID.



```json
#RESPONSE

{
  "responseCode": "<string>",
  "responseDesc": "<string>",
  "token": {
    "id": "<string>",
    "type": "<string>",
    "payload": "<string>"
  },
  "type": "<string>",
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
  "switchTrxId": "<string>",
  "wiTrxId": "<long>",
  "totalAmountProcessed": "<integer>",
  "basketAmountProcessed": "<integer>",
  "cashbackAmountProcessed": "<integer>",
  "tipAmountProcessed": "<integer>",
  "amountToSettle": "<integer>",
  "billAmount": "<integer>",
  "vsp": {
    "id": "<long>",
    "name": "<string>",
    "message": "<string>",
    "trxId": "<string>",
    "responseCode": "<string>",
    "responseDesc": "<string>",
    "balances": {
      "balance": [
        {
          "name": "<string>",
          "type": "<string>",
          "value": "<integer>"
        },
        {
          "name": "<string>",
          "type": "<string>",
          "value": "<integer>"
        }
      ]
    },
    "coupons": {
      "coupon": [
        {
          "product": [
            {
              "id": "<string>",
              "units": "<integer>",
              "discount": "<integer>"
            },
            {
              "id": "<string>",
              "units": "<integer>",
              "discount": "<integer>"
            }
          ],
          "name": "<string>",
          "discount": "<integer>",
          "id": "<string>"
        },
        {
          "product": [
            {
              "id": "<string>",
              "units": "<integer>",
              "discount": "<integer>"
            },
            {
              "id": "<string>",
              "units": "<integer>",
              "discount": "<integer>"
            }
          ],
          "name": "<string>",
          "discount": "<integer>",
          "id": "<string>"
        }
      ]
    },
    "hasVoucher": "<boolean>",
    "hasCoupon": "<boolean>",
    "hasWallet": "<boolean>",
    "hasGiftCard": "<boolean>",
    "vspRef": "<string>"
  },
  "discount": [
    {
      "name": "<string>",
      "amount": "<integer>",
      "product": [
        {
          "id": "<string>",
          "units": "<integer>",
          "discount": "<integer>"
        },
        {
          "id": "<string>",
          "units": "<integer>",
          "discount": "<integer>"
        }
      ]
    },
    {
      "name": "<string>",
      "amount": "<integer>",
      "product": [
        {
          "id": "<string>",
          "units": "<integer>",
          "discount": "<integer>"
        },
        {
          "id": "<string>",
          "units": "<integer>",
          "discount": "<integer>"
        }
      ]
    }
  ],
  "loyalty": [
    {
      "name": "<string>",
      "type": "<string>",
      "earned": "<integer>"
    },
    {
      "name": "<string>",
      "type": "<string>",
      "earned": "<integer>"
    }
  ],
  "balance": [
    {
      "name": "<string>",
      "type": "<string>",
      "value": "<integer>"
    },
    {
      "name": "<string>",
      "type": "<string>",
      "value": "<integer>"
    }
  ],
  "redemptions": [
    {
      "id": "<long>",
      "description": "<string>",
      "processedAmount": "<integer>",
      "settleAmount": "<integer>",
      "type": "GIFTCARD",
      "products": [
        {
          "id": "<string>",
          "units": "<integer>"
        },
        {
          "id": "<string>",
          "units": "<integer>"
        }
      ],
      "vspId": "<long>",
      "wiVspTrxId": "<long>",
      "thirdPartySettleAmount": "<integer>",
      "thirdPartySettleReference": "<string>"
    },
    {
      "id": "<long>",
      "description": "<string>",
      "processedAmount": "<integer>",
      "settleAmount": "<integer>",
      "type": "CARD",
      "products": [
        {
          "id": "<string>",
          "units": "<integer>"
        },
        {
          "id": "<string>",
          "units": "<integer>"
        }
      ],
      "vspId": "<long>",
      "wiVspTrxId": "<long>",
      "thirdPartySettleAmount": "<integer>",
      "thirdPartySettleReference": "<string>"
    }
  ]
}
```

Fields | Description
------ | -----------
ResponseCode & ResponseDescription | Code and description of the code. Use the VSP response for further details to display to user. A code of “-1” will always be associated with a “Success” description.
BasketAmountProcessed | The basket amount that was used in processing the transaction.
CashBackAmount | This is the amount of cash in cents being withdrawn as part of the transaction. It can either be used in conjunction with a basket payment or on its own.
StoreTrxDetails | Returning the same details that were sent up in the request
Token <br> <em>ID, Type</em> | Returning the same details that were sent up in the request.
TotalAmountProcessed | This is the total transaction amount in cent. This is the sum of the BasketAmount, the CashbackAmount, and TipAmount.
Type | The transaction type that was processed. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.
VSP <br><em>ID </em> <br> <em>Message </em> <br <em>ResponseCode </em> <br> <em>ResponseDescription </em> <br> <em>TrxID </em> | Details indicate what VSP was used to process the transaction and the VSP response code. <br> The response description can be used to display to the user / customer. <br> The unique VSP transaction ID for the requested transaction is presented by TrxID.
wiTrxID | This is the unique Yoyo Platform transaction ID assigned to the transaction. This field is important for processing a subsequent <b><font face="Courier New">ADVISE </font></b> call.
Discount <br> <em>Amount</em> <br> <u><em>Product</em></u> <br>   <em>Id</em> <br>    <em>Units</em> | All the items that was discounted on the transaction. <br> This returned by a discount VSP and is usually from the YoyoGroup Coupon Voucher Server. When product information is provided, a coupon has been redeemed, and when no product information is present, a voucher has been redeemed.
