
## Transaction API

### Create Transaction

This endpoint handles the creation of new transactions.

```curl
POST https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction
```

# Example Transaction Request

```json
{
    "token": {
        "id": "1234567",
        "type": "WICODE"
    },
    "storeTrxDetails": {
        "retailerId": 999,
        "storeId": 1050,
        "basketId": "basket1",
        "cashierId": "cashier1",
        "posId": "workstation1",
        "trxId": 12345
    },
    "product": [
        {
            "id": "coffee1",
            "pricePerUnit": 5000,
            "units": 1
        },
        {
            "id": "coffee2",
            "pricePerUnit": 5000,
            "units": 1
        }
    ],
    "type": "PAYMENT",
    "basketAmount": 10000,
    "billAmount": 10000,
    "totalAmount": 10000
}
```

# Example Transaction Response

```json
{
    "token": {
        "id": "1234567",
        "type": "WICODE"
    },
    "type": "PAYMENT",
    "storeTrxDetails": {
        "storeId": 1050,
        "remoteStoreId": "10501",
        "retailerId": 999,
        "basketId": "basket1",
        "trxId": "12345",
        "posId": "workstation1",
        "cashierId": "cashier1"
    },
    "wiTrxId": 431711,
    "totalAmountProcessed": 10000,
    "basketAmountProcessed": 10000,
    "cashbackAmountProcessed": 0,
    "tipAmountProcessed": 0,
    "amountToSettle": 0,
    "billAmount": 10000,
    "vsp": {
        "id": 20016,
        "name": "wiCoupon",
        "trxId": "569023",
        "responseCode": "-1",
        "responseDesc": "Success",
        "vspRef": "CVS_20230606150456819_Grant Test"
    },
    "discount": [
        {
            "name": "API Voucher Documentation",
            "amount": 10000,
            "product": []
        }
    ],
    "loyalty": [],
    "balance": [],
    "redemptions": [
        {
            "description": "API Voucher Documentation",
            "processedAmount": 10000,
            "settleAmount": 0,
            "type": "VOUCHER",
            "vspId": 20016,
            "wiVspTrxId": 658779
        }
    ],
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
token | Object | Yes | Token information with ID and type
storeTrxDetails | Object | Yes | Store and transaction details
product | Array | Yes | List of products in the transaction
type | String | Yes | Transaction type (e.g., "PAYMENT")
basketAmount | Number | Yes | Total basket amount in cents
billAmount | Number | Yes | Total bill amount in cents
totalAmount | Number | Yes | Total transaction amount in cents

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
wiTrxId | Number | Unique transaction ID
totalAmountProcessed | Number | Total amount processed in cents
basketAmountProcessed | Number | Basket amount processed in cents
vsp | Object | VSP details including response codes
discount | Array | List of applied discounts
redemptions | Array | List of redemptions processed
responseCode | String | Transaction response code
responseDesc | String | Human-readable response description
