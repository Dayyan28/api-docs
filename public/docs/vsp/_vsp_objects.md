## Objects

### Product

```json
{
   "id": [],
   "pricePerUnit": [],
   "units": []
}
```

This object contains information about each product in a user's basket.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
id |  String | Required | The SKU/Barcode of product purchased. The id should be consistent in either always sending through the product SKU or product barcode.
pricePerUnit | Integer | Required | The price per unit.
units | Integer | Required | The number of units of this product purchased.

### Store transaction details

```json
{
   "basketId": [],
   "cashierId": [],
   "posId": [],
   "remoteStoreId": [],
   "retailerId": [],
   "storeId": [],
   "trxId": []
}
```

This object contains information about the store in which the transaction took place.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
basketId | String | Required | This is the identifier for the basket as assigned by the POS. The POS system must ensure that it stays the same across multiple transactions of the same basket so that unique baskets can be tracked and identified.
cashierId | String | Required | Identifies the cashier that processed the transaction.
posId | String | Required | Identifies the POS terminal the transaction was processed on.
remoteStoreId | Long | Optional | This is the store's own identifier. Can be used instead of the storeId. Must be used in combination with the retailerId.
retailerId | Long | Optional | This is the unique Yoyo retailer identifier. Required if using the remoteStoreId field instead of the storeId field.
storeId | Long | Optional | This is the unique Yoyo store identifier.
trxId | String | Required | This identifies and groups multiple YoyoPlatform transactions together into a single POS transaction. The POS system must ensure that it stays the same across multiple transactions of the same basket so that unique baskets can be tracked and identified.

<aside class="warning">Either <b><i>remoteStoreId</i></b> and <b><i>retailerId</i></b> is present or just <b><i>storeId</i></b> in the request.</aside>

### Token

```json
{
   "id": [],
   "type": []
}
```

This object contains information about the YoyoPlatform token associated with this transaction.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
id | String | Required | The unique token which the YoyoPlatform uses to identify and route the transaction to the VSP to authorize.
type | String | Required | The token type is derived from how the token is received at the POS and can be either <b><font face="Courier New"> WICODE</font></b>, <b><font face="Courier New">WIQR</font></b> or <b><font face="Courier New">BIN</font></b>.

### VSP

```json
{
   "id": [],
   "message": [],
   "name": [],
   "responseCode": [],
   "responseDesc": [],
   "trxId": []
}
```

This object contains information about the VSP associated with this transaction. This object will only be returned if the token is valid.

Fields | Data Type | Description
------ | --------- | -----------
id | String | This is an unique VSP identifier.
message | String | This is a message that can be printed on the user's till slip. Sent back from the VSP on successful transactions.
name | String | This is the name of the VSP.
responseCode | String | The responseCode returned by the VSP. This should not be used to determine whether the transaction was approved or not. This should only be used for logging and error reporting to VSP.
responseDesc | String | The VSP’s response description. Can be displayed addition to the transactionResponse.responseDesc if available to give more information on why the transaction failed.
trxId | String | The VSP’s transaction ID for a transaction. This is optionally returned by the VSP in the transaction response.

### Discount

```json
{
   "amount": [],
   "name": [],
   "product": {
      "id": [],
      "units": []
   }
}
```

This object contains information about the discount associated with this transaction.

Fields | Data Type | Description
------ | --------- | -----------
name | String | Discount name/description.
amount | Integer | The total discount amount for all products in discount.
product | String | The products on which the discounts are applied. Please find information about the discount product object <a href="index.html#discount-product-object">here</a>.

### Discount product

```json
{
   "id": [],
   "units": []
}
```

This object contains information about the products on which discounts are applied in this transaction.

Fields | Data Type | Description
------ | --------- | -----------
id | String | The product id used.
units | Integer | The number of units processed in the discount.
discount | String | The discount per product.

### Loyalty

```json
{
   "name": [],
   "type": [],
   "earned": []
}
```

This object contains information about the loyalty earned on this transaction.

Fields | Data Type | Description
------ | --------- | -----------
name | String | The name of the loyalty program earned against.
type | String | The type of loyalty earned. Valid values are cent, points or count.
earned | Integer | The loyalty amount earned.
