## Bills API

## Create Bill

This endpoint creates a new bill in the system.

```json
{
    "amount": 2300,
    "basketId": "9eebc2fd-0d26-4680-b54e-f1d66862569b",
    "cashierId": "Cathrine",
    "storeId": "1050",
    "posId": "0672ceb2-5b00-440c-8060-512822a558bh",
    "basket": [
        {
            "product": {
                "sku": "9999",
                "desc": "Espresso",
                "qty": 1,
                "price": 2300
            }
        },
        {
            "product": {
                "sku": "9991",
                "desc": "Espresso",
                "qty": 2,
                "price": 2300
            }
        }
    ]
}
```

> Example request

```bash
curl --location 'https://rad2.wigroup.co:8181/wigroup-bill/bills' \
--header 'Content-Type: application/json' \
--data '{
    "amount": 2300,
    "basketId": "9eebc2fd-0d26-4680-b54e-f1d66862569b",
    "cashierId": "Cathrine",
    "storeId": "1050",
    "posId": "0672ceb2-5b00-440c-8060-512822a558bh",
    "basket": [
        {
            "product": {
                "sku": "9999",
                "desc": "Espresso",
                "qty": 1,
                "price": 2300
            }
        },
        {
            "product": {
                "sku": "9991",
                "desc": "Espresso",
                "qty": 2,
                "price": 2300
            }
        }
    ]
}'
```

> Example response

```json
{
    "id": 44,
    "amount": 2300,
    "basketId": "9eebc2fd-0d26-4680-b54e-f1d66862569b",
    "createDate": "2024-01-18T14:05:58.009Z",
    "footer": "|Apps accepted:|Example App",
    "header": "| |*** Scan the QR code below: ***| |",
    "mobilePaymentUrl": "http://rad2.wigroup.co/bill/9999",
    "posId": "0672ceb2-5b00-440c-8060-512822a558bh",
    "qrData": "sampledata",
    "qrImage": "",
    "state": "A",
    "storeId": "1050"
}
```

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
amount | Integer | Yes | Total transaction amount in cents
basketId | String | Yes | Unique identifier for the basket/cheque
cashierId | String | Yes | ID of the cashier processing the transaction
storeId | String | Yes | Store identifier provided by YoyoGroup
posId | String | No | Point of sale terminal identifier
basket | Array | Yes | List of products in the transaction

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | Integer | Unique bill identifier
amount | Integer | Total amount in cents
basketId | String | Original basket identifier
createDate | String | Creation timestamp (ISO 8601)
footer | String | Text to print below QR code
header | String | Text to print above QR code
mobilePaymentUrl | String | URL for mobile payment
qrData | String | Raw QR code data
qrImage | String | Base64 encoded QR code image
state | String | Bill state ('A' = Active)

## Get Bill

Retrieve a bill using store ID, POS ID, and basket ID.

> Example request

```bash
curl --location 'https://rad2.wigroup.co:8181/wigroup-bill/bills?storeId=1050&posId=1&basketId=basket_123'
```

> Example response

```json
{
    "id": 44,
    "amount": 2300,
    "basketId": "basket_123",
    "createDate": "2024-01-18T14:05:58.009Z",
    "footer": "|Apps accepted:|Example App",
    "header": "| |*** Scan the QR code below: ***| |",
    "mobilePaymentUrl": "http://rad2.wigroup.co/bill/9999",
    "posId": "1",
    "qrData": "sampledata",
    "qrImage": "",
    "state": "A",
    "storeId": "1050"
}
```

### Query Parameters

Parameter | Required | Description
--------- | -------- | -----------
storeId | Yes | Store identifier
posId | No | Point of sale terminal identifier
basketId | Yes | Basket/cheque identifier

<aside class="notice">
Bills can be retrieved for up to 24 hours after creation.
</aside>
