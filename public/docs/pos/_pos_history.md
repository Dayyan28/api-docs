## Transaction History request

The <em>transaction history</em> request returns a list of transactions that have been processed. Transaction history may be linked to a specific retail store and is used to summarize a list of partial transactions associated with a particular basket or store (or even a combination of the two).

The typical interactions for processing a transaction and performing the transaction history call is displayed in the figure below.

<img style="background-color: #ffffff;" src="./images/wiGroupTEIntegraion4.png" alt="some text"/>

```json
#REQUEST
curl --location --globoff 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction-history' \
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
    "dateFrom": "<string>",
    "dateTo": "<string>",
    "pageSize": 10,
    "pageOffset": 0 
}'
```

The transaction history request provides a summary of the transactions associated with the <em><font face="Courier New">storeTrxDetails</font></em> provided. It is recommended that the <font face="Courier New">storeID</font> (or both the <font face="Courier New">remoteStoreID</font> and <font face="Courier New">retailerID</font>) as well as the <font face="Courier New">basketID</font> is provided in the transaction history request to find all the (partial) transactions associated with a particular basket. It is, however, required that the <font face="Courier New">storeID</font> (or both the <font face="Courier New">remoteStoreID</font> and <font face="Courier New">retailerID</font>) be provided at the very minimum. The basic layout of the transaction history request looks a follows:

Fields | Optional or Required | Description
------ | -------------------- | -----------
API Credentials | Required | API credentials issued to you by YoyoGroup.
dateFrom | Optional<sup>*</sup> | This is the start date for the transaction history search. It should be of the form: <font face="Consolas">yyyy-MM-dd HH:mm:ss</font>
dateTo | Optional<sup>*</sup> | This is the end date for the transaction history search. It should be of the form: <font face="Consolas">yyyy-MM-dd HH:mm:ss</font>
pageSize | Optional | The number of transactions returned per page from the transaction history result set. The default page size is 10.
pageOffset| Optional | This is the page that should be returned from the transaction history result set. The first page starts at 0.
StoreTrxDetails <br> <em>BasketId</em> <br> <em>RemoteStoreID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> Required <br> Required <br> Required <br> Optional <br> Optional <br> Optional <br> Required |  <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by YoyoGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID.

<sup>*</sup> If no date range is specified, the call will default to returning the transaction history for the past 24 hours.

### Transaction history response


```json
#RESPONSE

{
    "storeTrxDetails": {
        "storeId": "<long>",
        "retailerId": "<long>",
        "basketId": "<string>",
        "trxId": "<string>",
        "posId": "<string>",
        "cashierId": "<string>"
    },
    "dateFrom": "2022-02-24 00:00:00",
    "dateTo": "2022-02-26 00:00:00",
    "pageSize": 10,
    "pageOffset": 0,
    "transactions": [
        {
            "id": "<long>",
            "type": "<string>",
            "state": "S",
            "vspId": "<long>",
            "vspName": "<string>",
            "token": {
                "id": "<string>",
                "type": "WICODE"
            },
            "billAmount": "<integer>",
            "totalAmountProcessed": "<integer>",
            "basketAmountProcessed": "<integer>",
            "cashbackAmountProcessed": "<integer>",
            "tipAmountProcessed": "<integer>",
            "amountToSettle": "<ingintegereter>",
            "createDate": "2022-02-25 12:57:13.0",
            "lastModifiedDate": "2022-10-19 09:55:43.0",
            "responseCode": "-1",
            "adviceResponseCode": "-1"
        }
    ],
    "responseCode": "-1",
    "responseDesc": "Success"
}
```