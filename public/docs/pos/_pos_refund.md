## Refund request



```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pos="http://posprovider.te.wigroup.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <pos:refund>
         <request>
            <apiCredentials>
               <id></id>
               <password></password>
            </apiCredentials>
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
            <!--Zero or more repetitions:-->
            <product>
               <id></id>
               <pricePerUnit></pricePerUnit>
               <units></units>
            </product>
            <refundAmount></refundAmount>
            <storeTrxDetails>
               <basketId></basketId>
               <cashierId></cashierId>
               <posId></posId>
               <remoteStoreId></remoteStoreId>
               <retailerId></retailerId>
               <storeId></storeId>
               <trxId></trxId>
            </storeTrxDetails>
            <switchTrxId></switchTrxId>
         </request>
      </pos:refund>
   </soapenv:Body>
</soapenv:Envelope>
```

A refund transaction is logged in the transaction engine and routed to the relevant VSP. It can only be used with payment transactions.

<b>Parameters:</b>

Fields | Required | Description
------ | -------- | -----------
refundAmount | &#x2713; | This is the refund amount (in cents).
switchTrxId |  | Should there be a transaction switch involved in between the POS and the wiPlatform this must be the switch’s transaction reference.
storeTrxDetails <br> <em>BasketId</em> <br> <em>CashierId</em> <br> <em>PosID</em> <br> <em>RemoteStoreID</em> <br> <em>RetailerID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> &#x2713; <br> &#x2713; <br> &#x2713; <br>  <br>  <br>  <br> &#x2713; |  <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by wiGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID.
originalTrxDetails | &#x2713; | This object contains information about the originnal transaction. Please find information about the originalTrx object here.
product (Products) <br> <em>ID</em> <br> <em>PricePerUnit</em> <br> <em>Units</em> |  | The ID refers to the actual SKU number of the product. The price per unit at the POS and the number of units. It is recommended that the POS provides a list of products for each transaction.

<aside class="success">The <font face="Courier New">remoteStoreId</font> and <font face="Courier New">retailerId</font> needs to be present or just the <font face="Courier New">storeId</font>.</aside>

### Refund response

> The basic layout of the refund <b>response</b> looks as follows:

```xml
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
  <S:Body>
    <ns2:transactionResponse xmlns:ns2="http://posprovider.te.wigroup.com/">
      <response>
        <responseCode></responseCode>
        <responseDesc></responseDesc>
        <refundAmountProcessed></refundAmountProcessed>
        <storeTrxDetails>
          <basketId></basketId>
          <cashierId></cashierId>
          <posId></posId>
          <remoteStoreId></remoteStoreId>
          <storeId></storeId>
          <trxId></trxId>
        </storeTrxDetails>
        <vsp>
          <id></id>
          <name></name>
          <responseCode></responseCode>
          <responseDesc></responseDesc>
          <trxId></trxId>
        </vsp>
        <wiTrxId></wiTrxId>
        <switchTrxId></switchTrxId>
      </response>
    </ns2:transactionResponse>
  </S:Body>
</S:Envelope>
```

Each transaction type uses the XML in a (slightly) different manner.

Fields | Description
------ | -----------
refundAmountProcessed | This is the total refund amount processed in cent.
switchTrxId | Should there be a transaction switch involved in between the POS and the wiPlatform this must be the switch’s transaction reference.
storeTrxDetails <br> <em>BasketId</em> <br> <em>CashierId</em> <br> <em>PosID</em> <br> <em>RemoteStoreID</em> <br> <em>RetailerID</em> <br> <em>StoreID</em> <br> <em>TrxID</em> | <br> These are the internal retailer ID's for the basket, cashier and POS. <br> Store details: <br> StoreID: is the store WID assigned to you by wiGroup. If the StoreID is populated, this will be used. Alternatively, the RemoteStoreID and the RetailerID must be populated - these are used in combination. <br> TrxID:  The internal retailers unique transaction ID.
wiTrxID | This is the unique wiGroup transaction ID assigned to the transaction. This field is important for processing a subsequent <b><font face="Courier New">ADVICE</font></b> call.
product (Products) <br> <em>ID</em> <br> <em>PricePerUnit</em> <br> <em>Units</em> |  The ID refers to the actual SKU number of the product. The price per unit at the POS and the number of units. It is recommended that the POS provides a list of products for each transaction.
VSP <br><em>ID </em> <br> <em>Message </em> <br <em>ResponseCode </em> <br> <em>ResponseDescription </em> <br> <em>TrxID </em> | Details indicate what VSP was used to process the transaction and the VSP response code. <br> The response description can be used to display to the user / customer. <br> The unique VSP transaction ID for the requested transaction is presented by TrxID.

<aside class="warning">
The refund request also needs to be advised, just like the transaction request. The transaction <b><font face="Courier New">type</font></b> for this advice request must be <b><font face="Courier New">REFUND</font></b>.
</aside>
