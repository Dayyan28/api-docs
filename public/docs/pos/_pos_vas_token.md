## VAS Token

The `VAS token` method allows the POS integration to get a token representing the VAS item requested on behalf of the customer. This is followed by a standard deposit transaction using the returned token. If the VSP is set to be settled on the platform, then the next settlement run will ensure that the funds received by the merchant for the deposit transaction are transferred to the VSP.

<b>HTTP Protocol</b>: SOAP <br>
<b>Available HTTP Methods</b>: POST <br>

<aside class="notice">
<b>Integrations Environment WSDL URL</b>: http://rad2.wigroup.co:8080/wigroup-transactionengine/PosProviderWS?wsdl
</aside>

<aside class="warning">
The DNS for the Integrations Environment is <b>rad2.wigroup.co</b>, using either a <b>TCP port (8080)</b> or an <b>SLL port connection (8181)</b>. This DNS resolves to a load balancer which IP address might change without notice.
</aside>

## Get VAS Token Request

> The basic layout of a <b>getVasToken</b> request:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pos="http://posprovider.te.wigroup.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <pos:getVasToken>
         <request>
            <apiCredentials>
               <!--Optional:-->
               <apiClientVersion>?</apiClientVersion>
               <!--Optional:-->
               <apiServerVersion>?</apiServerVersion>
               <id>?</id>
               <password>?</password>
            </apiCredentials>
            <!--Optional:-->
            <cardNumber>?</cardNumber>
            <mobileNumber>?</mobileNumber>
            <providerId>?</providerId>
            <storeTrxDetails>
               <basketId>?</basketId>
               <cashierId>?</cashierId>
               <posId>?</posId>
               <!--Optional:-->
               <remoteStoreId>?</remoteStoreId>
               <!--Optional:-->
               <retailerId>?</retailerId>
               <!--Optional:-->
               <storeId>?</storeId>
               <trxId>?</trxId>
            </storeTrxDetails>
            <vasType>?</vasType>
         </request>
      </pos:getVasToken>
   </soapenv:Body>
</soapenv:Envelope>
```

The basic layout of <b>getVasToken</b> looks as follows:

Fields | Data Type | Required/Optional | Description
------ | --------- | ----------------- | -----------
<b>apiCredentials</b> | *apiCredentials* | Required | API credentials are used to authenticate each API call. Find information about the apiCredentials object <a href="index.html#api-credentials">here</a>.
<b>vasType</b>| String | Required | This will allow Transaction Engine to book a token representing the VAS item requested on behalf of the customer.
<b>mobileNumber</b>| String | Required | This is refers to the customer's mobile number.
cardNumber | String| Optional| This refers to a number which is associated with the VAS item.
<b>providerId</b> | String | Required | This refers to a unique identifier which is associated with vasType.
<b>storeTrxDetails</b> | *storeTrxDetails* | Required | This object contains information about the store in which the transaction took place. Find information about the StoreTrxDetails object <a href="index.html#store-transaction-details">here</a>.


<aside class="warning">Either <b><i>remoteStoreId</i></b> and <b><i>retailerId</i></b> is present or just <b><i>storeId</i></b> in the request.</aside>

## Get VAS Token Response

> The basic layout of a <b>PosProviderGetVasTokenResponse</b>:

```xml
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
  <S:Body>
    <ns2:PosProviderGetVasTokenResponse xmlns:ns2="http://posprovider.te.wigroup.com/">
      <response>
        <responseCode></responseCode>
        <responseDesc></responseDesc>
        <vspDetails>
          <id></id>
          <cashierId></cashierId>
          <name></name>
          <remoteStoreId></remoteStoreId>
          <storeId></storeId>
          <trxId></trxId>
        </vspDetails>
        <tipAmountProcessed></tipAmountProcessed>
        <token>
          <id></id>
          <type></type>
        </token>
      </response>
    </ns2:PosProviderGetVasTokenResponse>
  </S:Body>
</S:Envelope>
```
The basic layout of the <b>Transaction Response</b> looks as follows:

Fields | Data Type | Description
------ | --------- | -----------
<b>token</b> | *token* | This object contains information about the wiPlatform token associated with this transaction. Please find information about the Token object <a href="index.html#token">here</a>.
responseCode | String| A code indicating the result of the request. -1 means successful. All other codes are treated as failed. Find a list of response codes and their descriptions <a href="index.html#transaction-engine">here</a>.
responseDescription | String | Readable description of responseCode. Find a list of response codes and their descriptions <a href="index.html#transaction-engine">here</a>.
<b>vspDetails</b> | *vspDetails* | This object contains information about the <a href="index.html#vsp">VSP</a>.
