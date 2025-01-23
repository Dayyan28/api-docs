## Step 2: Transaction Request

The transaction request is initiated on the successful info response to the Yoyo transaction engine. The transaction is then routed to the relevant VSP. The basic layout of the transaction request looks a follows:


```json 
#REQUEST

curl --location --globoff 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction' \
--header 'id: {{api_id}}' \
--header 'password: {{api_password}}' \
--header 'apiClientVersion: {{api_client_version}}' \
--header 'apiServerVersion: {{api_server_version}}' \
--header 'Content-Type: application/json' \
--data '{
    "type": "String",
    "switchTrxId": "String",
    "totalAmount": 0,
    "basketAmount": 0,
    "cashbackAmount": 0,
    "tipAmount": 0,
    "billAmount": 0,
    "products": [
        {
            "id": "String",
            "units": 0,
            "pricePerUnit": 0
        },
        {
            "id": "String",
            "units": 0,
            "pricePerUnit": 0
        }
    ],
    "token": {
        "id": "String",
        "type": "String",
        "payload": "String"
    },
    "storeTrxDetails": {
        "storeId": 0,
        "remoteStoreId": "String",
        "retailerId": 0,
        "basketId": "String",
        "trxId": "String",
        "posId": "String",
        "cashierId": "String",
        "billId": 0,
        "posBillId": "String"
    }
}'
```


This call is performed when a transaction is logged in the transaction engine and routed to the relevant VSP. This call usually contains more information than the Advice calls. The basic layout of the transaction request looks a follows:

Fields | Required | Description
------ | -------- | -----------
BasketAmount | &#x2713; | This is the total transaction amount (in cents) of all products in the basket.
CashBackAmount |  | This is the amount of cash in cents being withdrawn as part of the transaction. It can either be used in conjunction with a basked payment or on its own. This is only for use with <b><font face="Courier New"> PAYMENT</font></b> type.
Products <br> <em>ID</em> <br> <em>PricePerUnit</em> <br> <em>Units</em> | &#x2713; | The ID refers to the actual SKU number of the product. The price per unit at the POS and the number of units. It is recommended that the POS provides a list of products for each transaction.
storeTrxDetails <br> <em>BasketId</em> <br> <em>CashierId</em> <br> <em>PosID</em> <br> <em>RemoteStoreID</em> <br> <em>RetailerID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> &#x2713; <br> &#x2713; <br> &#x2713; <br>  <br>  <br>  <br> &#x2713; |  <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID
switchTrxID |  | If applicable, the switch will assign their ID to the transaction.
tipAmount |  | The tip amount must be included in the total amount in order for the VSP to process the full amount. Not all VSP's support tip amount.
token <br> <em>ID</em> <br> <em>Type</em> | &#x2713; | The ID is the unique token (wiCode) which the YoyoPlatform uses to identify and route the transaction to the VSP to authorize. The token type is derived from how the token is received at the POS and can be either <b><font face="Courier New"> WICODE</font></b>, <b><font face="Courier New"> WIQR </font></b> or <b><font face="Courier New"> BIN</font></b>.
totalAmount | &#x2713; | This is the total transaction amount in cents. This is the sum of the BasketAmount, the CashbackAmount, and TipAmount.
type | &#x2713; | This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.

The merchant identifiers - storeId and retailerId, will be provided by Yoyo. The authentication details found in the header, API id and API password, will also be provided by Yoyo.
Product array list is required in order for coupons, please refer to the transaction details for more information.

**Host url**: 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction' <br/>
**HTTP Method**: POST

<aside class="notice">
The wiCode Platform currently supports three transaction types, with payments being the preferred option for e-commerce integrations. The available transaction types are:
<li><b><font face="Courier New">PAYMENT</font></b> 
<li><b><font face="Courier New">WITHDRAWAL</font></b>  
<li><b><font face="Courier New">DEPOSIT </font></b></ul>
</aside>

<aside class="success">The <font face="Courier New">remoteStoreId</font> and <font face="Courier New">retailerId</font> needs to be present or just the <font face="Courier New">storeId</font>.</aside>

### Payment

The <b><font face="Courier New">PAYMENT</font></b> type transaction request is used most often. Transaction request of the type <b><font face="Courier New">PAYMENT</font></b> should be used for all payment related transactions as well as the redemption of YoyoGroup coupon and vouchers.

It is important to note that the field totalAmountProcessed in the transaction response is not necessarily equal to value set in the 
basketAmount in the transaction request. A simple explanation of this significance is to consider a customer attempting to 
settle a bill worth R30.00 with a wiCode voucher worth R25.00. The POS may specify the basketAmount to be 3000 in 
the transaction request. The response will then provide the totalAmountProcessed to be 2500. The POS will then have 
to ensure that another tender of R5.00 takes place in order to settle the bill. Therefore, the e-commerce site must 
allow for multi-tender/split tender for transactions on the wiCode platform.


### Transaction response



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

Each transaction type uses the body in a (slightly) different manner.

Fields | Description
------ | -----------
ResponseCode & ResponseDescription | Code and description of the code. Use the VSP response for further details to display to user. A code of “-1” will always be associated with a “Success” description.
BasketAmountProcessed | The basket amount that was used in processing the transaction.
CashBackAmount | This is the amount of cash in cents being withdrawn as part of the transaction. It can either be used in conjunction with a basket payment or on its own.
StoreTrxDetails | Returning the same details that were sent up in the request
Token <br> <em>ID, Type</em> | Returning the same details that were sent in the request.
TotalAmountProcessed | This is the total transaction amount in cents. This is the sum of the BasketAmount, the CashbackAmount, and TipAmount.
Type | The transaction type that was processed in the transaction request. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.
VSP <br><em>ID </em> <br> <em>Message </em> <br <em>ResponseCode </em> <br> <em>ResponseDescription </em> <br> <em>TrxID </em> | Details indicate what VSP was used to process the transaction and the VSP response code. <br> The response description can be used to display to the user / customer. <br> The unique VSP transaction ID for the requested transaction is presented by TrxID.
wiTrxID | This is the unique Yoyo Platform transaction ID assigned to the transaction. This field is important for processing a subsequent <b><font face="Courier New">ADVICE </font></b> call.
Discount <br> <em>Amount</em> <br> <u><em>Product</em></u> <br>   <em>Id</em> <br>    <em>Units</em> | All the items that was discounted on the transaction. <br> This returned by a discount VSP and is usually from the YoyoGroup Coupon Voucher Server. When product information is provided, a coupon has been redeemed, and when no product information is present, a voucher has been redeemed.