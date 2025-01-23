## Transaction API

### Create Transaction

This endpoint handles the creation of new transactions.

```json
{
    "type": "PAYMENT",
    "switchTrxId": "TRX123",
    "totalAmount": 10000,
    "basketAmount": 10000,
    "cashbackAmount": 0,
    "tipAmount": 0,
    "billAmount": 10000,
    "products": [
        {
            "id": "PROD001",
            "units": 2,
            "pricePerUnit": 5000
        }
    ],
    "token": {
        "id": "1234567",
        "type": "WICODE",
        "payload": "SAMPLE_PAYLOAD"
    },
    "storeTrxDetails": {
        "storeId": 1050,
        "remoteStoreId": "STORE123",
        "retailerId": 999,
        "basketId": "BASKET123",
        "trxId": "TRX123",
        "posId": "POS001",
        "cashierId": "CASH001",
        "billId": 12345,
        "posBillId": "BILL123"
    }
}
```

> Example request

```json
curl -X POST "https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction"
  -H "Content-Type: application/json"
  -H "id: <#apiId#>"
  -H "password: <#apiPassword#>"
  -H "apiClientVersion: <#version#>"
  -H "apiServerVersion: <#version#>"
  -d {
    "type": "PAYMENT",
    "switchTrxId": "TRX123",
    "totalAmount": 10000,
    "basketAmount": 10000,
    "cashbackAmount": 0,
    "tipAmount": 0,
    "billAmount": 10000,
    "products": [
        {
            "id": "PROD001",
            "units": 2,
            "pricePerUnit": 5000
        }
    ],
    "token": {
        "id": "1234567",
        "type": "WICODE",
        "payload": "SAMPLE_PAYLOAD"
    },
    "storeTrxDetails": {
        "storeId": 1050,
        "remoteStoreId": "STORE123",
        "retailerId": 999,
        "basketId": "BASKET123",
        "trxId": "TRX123",
        "posId": "POS001",
        "cashierId": "CASH001",
        "billId": 12345,
        "posBillId": "BILL123"
    }
  }
```

> Example response

```json
{
    "responseCode": "-1",
    "responseDesc": "Success",
    "wiTrxId": 87153,
    "totalAmountProcessed": 10000,
    "basketAmountProcessed": 10000,
    "tipAmountProcessed": 0,
    "amountToSettle": 10000,
    "vsp": {
        "id": 50099,
        "name": "Sample VSP",
        "trxId": "TRX123",
        "responseCode": "-1",
        "responseDesc": "Transaction successful!"
    },
    "discount": [],
    "loyalty": []
}
```

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
type | String | Yes | Transaction type (e.g., "PAYMENT", "REFUND")
switchTrxId | String | Yes | Unique transaction identifier
totalAmount | Integer | Yes | Total transaction amount in cents
basketAmount | Integer | Yes | Total basket amount in cents
products | Array | No | List of products in the transaction
token | Object | Yes | Token information for the transaction
storeTrxDetails | Object | Yes | Store and transaction details

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
responseCode | String | "-1" for success, other codes indicate failure
responseDesc | String | Human-readable response description
wiTrxId | Integer | Unique transaction ID in the Yoyo system
totalAmountProcessed | Integer | Total amount processed in cents
vsp | Object | VSP-specific transaction details
