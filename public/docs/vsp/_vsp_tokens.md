## Tokens request

```json
    # EXAMPLE REQUEST

    curl "https://token-manager-api-int.wigroup.co/wigroup-tokenmanager/vsp/tokens" \
     -H "apiId: <#apiId#>" \
     -H "sha1Password: <#sha1Password#>" \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{
       "discountWicodes": "1234567,999999999",
       "loyaltyWicodes": "7654321,999999999",
       "maxTrxAmount": "15000",
       "tokenLifeInMin": "15",
       "transactionType": "PAYMENT",
       "vspReference": "VSP_User_Id_001",
	   "tipAmount":"5000"
     }'

    # EXAMPLE RESPONSE without Tip
    {
    "token": {
    "wiCode": "5286264",
    "wiQR": "5286264",
    },
    "responseCode": "-1",
    "responseDesc": "Success"
    }

    # EXAMPLE RESPONSE with Tip
    {
    "token": {
    "wiCode": "5286264",
    "wiQR": "5286264|5000",
    },
    "responseCode": "-1",
    "responseDesc": "Success"
    }
```


This resource can be used to issue new wiCodes. Two parameters must be supplied: <font face="Courier New">tokenLifeInMin</font> and <font face="Courier New">vspReference</font>.

Endpoint: <font face="Courier New">{root}/tokens</font>

Available methods: <b>POST</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>vspReference</b> | String | A reference which will be echoed back to the VSP during the transact call, documented in the <em>Transaction Engine VSP POST API</em>. | &#x2713; |
<b>tokenLifeInMin</b> | Integer | The life of the token in minutes. This will determine the length of the wiCode returned. Longer time frames produce longer wiCodes. | &#x2713; |
transactionType	| String | Used to return only brands that have deals of this dealType. | &#x2713; |
transactionType | String | This is the type of transaction. It can set to either <b><font face="Courier New">PAYMENT</font></b>, <b><font face="Courier New"> DEPOSIT </font></b> or <b><font face="Courier New"> WITHDRAWAL</font></b>. | &#x2713; |
discountWicodes | String | A list of discount wicodes to link to wicode. | &#x2713; |
loyaltyWicodes | String | A list of loyalty wicodes to link to wicode. | &#x2713; |
wiCode | String | The wiCode linked to the user token. | | &#x2713;
wiQR | String | The wiCode linked to the user token. If a tipAmount is specified, the wiQR field will contain a pipe and the tip amount in cents as per the example. | | &#x2713;
tipAmount | Integer | The tip amount included with the token | &#x2713; |

<aside class="notice"><b>The maxTrxAmount must include the tipAmount</b></aside>
