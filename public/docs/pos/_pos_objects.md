## Objects

### API credentials

```xml
<apiCredentials>
  <apiClientVersion></apiClientVersion>
  <apiServerVersion></apiServerVersion>
  <id></id>
  <password></password>
</apiCredentials>
```

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
<b>apiClientVersion</b> | String | Required | This field can be used by POS integrators to send the version of their implementation to the YoyoPlatform.
<b>apiServerVersion</b> | String | Required | This field allows POS integrators to send the version of the Yoyo server in use as at their time of integration, ensuring strict backwards compatibility.
id | String | Required | API id, issued to you by Yoyo.
password | String | Required | API password, issued to you by Yoyo.

### Product

```xml
<product>
  <id></id>
  <pricePerUnit></pricePerUnit>
  <units></units>
</product>
```

This object contains information about each product in a user's basket.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
id |  String | Required | The SKU or Barcode of the product purchased. The id should be consistent in either always sending through the product SKU or product barcode.
pricePerUnit | Integer | Required | The price per unit.
units | Integer | Required | The number of units purchased of this product.

### Store transaction details

```xml
<storeTrxDetails>
  <basketId></basketId>
  <cashierId></cashierId>
  <posId></posId>
  <remoteStoreId></remoteStoreId>
  <retailerId></retailerId>
  <storeId></storeId>
  <trxId></trxId>
</storeTrxDetails>
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

```xml
<token>
  <id></id>
  <type></type>
</token>
```

This object contains information about the YoyoPlatform token associated with this transaction.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
id | String | Required | The unique token which the YoyoPlatform uses to identify and route the transaction to the VSP to authorize.
type | String | Required | The token type is derived from how the token is received at the POS and can be either <b><font face="Courier New"> WICODE</font></b>, <b><font face="Courier New">WIQR</font></b> or <b><font face="Courier New">BIN</font></b>.

### VSP

```xml
<vsp>
  <id></id>
  <message></message>
  <name></name>
  <responseCode></responseCode>
  <responseDesc></responseDesc>
  <trxId></trxId>
</vsp>
```

This object contains information about the Value Store Provider associated with this transaction. This object will only be returned if the token is valid.

Fields | Data Type | Description
------ | --------- | -----------
id | String | This is an unique VSP identifier.
message | String | This is a message that can be printed on the user's till slip. Sent back from the VSP on successful transactions.
name | String | This is the name of the VSP.
responseCode | String | The responseCode returned by the VSP. This should not be used to determine whether the transaction was approved or not. This should only be used for logging and error reporting to VSP.
responseDesc | String | The VSP’s response description. Should be displayed in addition to the transactionResponse.responseDesc if available elaborate on why the transaction failed.
trxId | String | The VSP’s transaction ID for a transaction. This is optionally returned by the VSP in the transaction response.

### Discount

```xml
<discount>
    <amount></amount>
    <name></name>
    <product>
        <id></id>
        <units></units>
    </product>
</discount>
```

This object contains information about the discount associated with this transaction.

Fields | Data Type | Description
------ | --------- | -----------
name | String | Discount name/description.
amount | Integer | The total discount amount for all products in discount.
product | String | The products on which the discounts are applied. Please find information about the discount product object <a href="index.html#transaction-request">here</a>.

### Discount product

```xml
<product>
    <id></id>
    <units></units>
</product>
```

This object contains information about the products on which discounts are applied in this transaction.

Fields | Data Type | Description
------ | --------- | -----------
id | String | The product id used.
units | Integer | The number of units processed in the discount.
discount | String | The discount per product.

### Loyalty

```xml
<loyalty>
  <name></name>
  <type></type>
  <earned></earned>
</loyalty>
```

This object contains information about the loyalty earned on this transaction.

Fields | Data Type | Description
------ | --------- | -----------
name | String | The name of the loyalty program earned against.
type | String | The type of loyalty earned. Valid values are cent, points or count.
earned | Integer | The loyalty amount earned.

### Original transaction details

```xml
<originalTrxDetails>
   <wiTrxId></wiTrxId>
   <type></type>
   <storeTrxDetails>
     <basketId></basketId>
     <cashierId></cashierId>
     <posId></posId>
     <storeId></storeId>
     <trxId></trxId>
   </storeTrxDetails>
 </originalTrxDetails>
```

This object contains information about the original transaction.

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
wiTrxId | Long | Required | The YoyoPlatform unique transaction identifier. It is assigned to the transaction by TE and returned in the transaction response. It is then used, thereafter, in advises to identify the original transaction.
type | String | Required | The transaction type.Value that are allowed: PAYMENT, DEPOSIT and WITHDRAWAL.
storeTrxDetails | *StoreTrxDetails* | Required | This object contains information about the store in which the transaction took place. Find information about the StoreTrxDetails object <a href='index.html#transaction-request'>here</a>.

### Transactions

```xml
<transactions>
  <basketAmountProcessed></basketAmountProcessed>
  <cashbackAmountProcessed></cashbackAmountProcessed>
  <amountToSettle></amountToSettle>
  <createDate></createDate>
  <id></id>
  <lastModifiedDate></lastModifiedDate>
  <state></state>
  <tipAmountProcessed></tipAmountProcessed>
  <token>
    <id></id>
    <type></type>
  </token>
  <totalAmountProcessed></totalAmountProcessed>
 <type></type>
 <vspId></vspId>
</transactions>
```

Fields | Data Type | Description
------ | --------- | -----------
basketAmountProcessed | Long | This is the amount in the basket that was processed for this transaction.
billAmount | Long | Requires Information.
cashbackAmountProcessed | Long | This is the cashback amount that was processed for this transaction.
tipAmountProcessed | Long | This is the tip amount that was processed for this transaction.
totalAmountProcessed | Long | This is the total amount of the transaction that was processed.
amountToSettle | Long | This is the amount, in minor denomination, of the total transaction amount that will be settled to the retailer. The difference between totalAmountProcessed and amountToSettle is regarded as the discount amount for non/partially-settled campaigns, and should be handled and displayed as such. This field is only displayed when using <i>apiClientVersion</i> 1.6 and above.
createDate | String | This is the date and time for when transaction engine first received this transaction. The format is as follows: <br> <font face="Consolas">yyyy-MM-dd HH:mm:ss</font>.
id | Long | The unique identifier for the transaction in the transaction engine.
lastModifiedDate | String | This is the date and time for when TE last did any process related to this transaction. The format is as follows: <br> <font face="Consolas">yyyy-MM-dd HH:mm:ss</font>.
state | String | This is the current status of the transaction.
type | String | This is the <i>type</i> of transaction. It can be set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New">DEPOSIT</font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>.
vspId | Long | This is the identifier of the VSP where this transaction was sent to
<b>token</b> | *Token* | This object contains information about the YoyoPlatform token associated with this transaction. Please find information about the Token object <a href="index.html#pos_transaction">here</a>.

### Basket

Fields | Data Type | Description
------ | --------- | -----------
product | *product* | The collection of items being charged for in the containing bill.
sku | String | Stock Keeping Unit - Identifies this type of product within a store.
desc | String | Description of the product.
qty | Integer | Number of units of this product within the containing Basket.
price | Integer | Unit price of this product, in minor denomination.
