## Giftcards

This resource is used to issue a giftcard. Depending on how the campaign is setup by the campaign owner, the channel can set the balance and expiry date of the giftcard. A giftcard can be redeemed multiple times.

### Create (issue) a Gift Card

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards?issueWiCode=true" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
       "campaignId": "9000",
       "balance": "2000"
       "userRef": "VSP_User_Id_001",
       "mobileNumber": "string",
       "numExpiryDays": 3,
       "smsMessage": "Dear Customer. You have #BALANCE value to spend. wiCode: #WICODE. Expires: #EXPIRY.",
       "sendSMS": boolean,
       "sendFollowUpSMS": boolean,
       "stateId": "A"
     }'

# Example response

{
  “giftcard”: {
    “id”: 20,
    “campaignId”: 9000,
    “interfaceIssuerId”: "TestChannel",
    “issuerId”: 94,
    “userRef”: "VSP_User_Id_001",
    “mobileNumber”: "string",
    “sendSMS”: boolean,
    “sendFollowUpSMS”: boolean,
    “issuedAmount”: 2000,
    “redeemedAmount”: 0,
    “expiredAmount”: 0,
    “balance”: 2000,
    “createDate”: "2015-03-13T15:10:07+0200",
    “expiryDate”: "2018-03-12T23:59:59+0200",
    “campaignName”: "VSPTestGiftCardCampaign",
    “campaignType”: "GIFTCARD",
    “description”: "Gift Card worth R20.00",
    “imageURL”: "http://goo.gl/Zodst9",
    “termsAndCondition: "VSP T&Cs",
    “stateId”: "A",
    “wicode”: "123456789999"
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

Issuing a Gift card is a simple API call. Three parameters must be supplied: <font face="Courier New">campaignID</font>, <font face="Courier New">balance</font> and <font face="Courier New">userRef</font>. Each time this API is called a Gift card is issued against the <font face="Courier New">userRef</font> and the <font face="Courier New">campaignID</font>. If <font face="Courier New">issueWicode</font> is set to true, a wiCode will be issued for the gift card right away. If not, a wiCode can be issued using the issueGiftCardWicode API call.

A Gift Card can be ISSUED in a De-Activated State, then activated later via the portal or API call.

Endpoint: <font face="Courier New">{root}/giftcards</font>

Available methods: <b>POST</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
issueWiCode | Boolean (query) | True if to issue wicode, otherwise false. | &#x2713; |
<b>campaignId</b> | Integer | The id of the campaign to issue against. | &#x2713; | &#x2713;
<b>balance</b> | Integer | The amount to issue on giftcard. The balance needs to be within the min and max boundaries of the campaign and the campaign must have the required float available. | &#x2713; | &#x2713;
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
mobileNumber | String | The mobile number. The mobile number must be presented in International format. | &#x2713; | &#x2713;
smsMessage | String | The message to override original sms message with. Used in request only. The following hash-tag's can be used: #WICODE (The wiCode), #MOBISITE (Will add a link to a generic mobisite for QR display.), #BALANCE (The value in Rand.) and #EXPIRY (Expiry date yyyy/mm/dd). | &#x2713; |
sendSMS | Boolean | Indicates whether an SMS must be sent on issue or not. | &#x2713; | &#x2713;
sendFollowUpSMS | Boolean | Indicates whether a follow-up SMS must be sent if the user partially redeems their gift card. | &#x2713; | &#x2713;
numExpiryDays	| Integer | If allowed by campaign the channel can override the default expiry days. It will still be capped by the default campaign value. | &#x2713; |
id | Integer | The id of the gift card. |  | &#x2713;
interfaceIssuerId | Integer | The interface issuer id. | | &#x2713;
issuerId | Integer | The issuer id. | | &#x2713;
issuedAmount | Integer | The issued amount. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the giftcard. | | &#x2713;
expiredAmount | Integer | The amount expired on the giftcard. || &#x2713;
createDate | String | The create date of the giftcard. | | &#x2713;
expiredDate | String | The on which the gift card expired. | | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">GIFTCARD</fomt></li></ul> | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
imageUrl | String | The image url of the gift card. | | &#x2713;
termsAndConditions | String | The terms and conditions of the gift card. | | &#x2713;
stateId | String | The current state of the giftcard. You can issue a Gift Card in a de-activated state if you set the stateId to "D" in the Request. <ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> |&#x2713; | &#x2713;

### Issue a wiCode / Token for a Gift Card

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards/{id}/wicode" \
  -H "id: {id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST

# Example response

{
   "token":    {
      "userRef": "string",
      "wiCode": "123456789999",
      "createDate": "2016-07-06T12:05:10+0200",
      "validTillDate": "2019-07-06T23:59:59+0200",
      "lastModifiedDate": "2016-07-06T12:05:10+0200",
      "stateId": "A"
   },
   "responseCode": "-1",
   "responseDesc": "Success"
}

```

This resource is used to issue a wicode against giftcard for length of giftcard expiry. A wicode will only be issued if no wicode is linked to giftcard.

Endpoint: <font face="Courier New">{root}/giftcards/{id}/wicode</font>

Available methods: <b>POST</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
userRef | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. |  | &#x2713;
wiCode | String | The wiCode. |   | &#x2713;
createDate | String | The create date. |  | &#x2713;
validTillDate | String | The date the wicode is valid to. |  | &#x2713;
lastModifiedDate | String | The last modified date. |  | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | | &#x2713;

### Query Gift Card details

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards/{id}" \
  -H "id: {id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “giftcard“: {
    “id“: 615,
    “campaignId“: 4455,
    “interfaceIssuerId“: "SnapAndSaveIssuer",
    “issuerId“: 146,
    “userRef“: "string",
    “mobileNumber“: "string",
    “issuedAmount“: 500,
    “redeemedAmount“: 500,
    “expiredAmount“: 0,
    “balance“: 0,
    “createDate“: "2015-05-25T11:41:51+0200",
    “expiryDate“: "2015-05-25T23:59:59+0200",
    “campaignName“: "Snap and Save Gift Card",
    “campaignType“: "GIFTCARD",
    “description“: "Snap and Save Gift Card",
    “termsAndConditions“: "Snap and Save Gift Card",
    “stateId“: "R",
    "wicode": "1234567"
  },
  “responseCode": "-1",
  “responseDesc": "Success"
}

```

This call can be used to retrieve (get) a Yoyo Gift Card. The giftcard id is specified as a header parameter in this case.

Endpoint: <font face="Courier New">{root}/giftcards/{id}</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The id of the gift card. | &#x2713; | &#x2713;
campaignId | Integer | The id of the campaign to issue against. | | &#x2713;
interfaceIssuerId | Integer | The interface issuer id. | | &#x2713;
issuerId | Integer | The issuer id. | | &#x2713;
userRef | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | | &#x2713;
mobileNumber | String | The users mobile number, if available. |  | &#x2713;
issuedAmount | Integer | The issued amount. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the giftcard. | | &#x2713;
expiredAmount | Integer | The amount expired on the giftcard. || &#x2713;
balance | Integer | The amount to issue on giftcard. The balance needs to be within the min and max boundaries of the campaign and the campaign must have the required float available. | | &#x2713;
createDate | String | The create date of the giftcard. | | &#x2713;
expiredDate | String | The on which the gift card expired. | | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">GIFTCARD</fomt></li></ul> | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
imageUrl | String | The image url of the gift card. | | &#x2713;
termsAndConditions | String | The terms and conditions of the gift card. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | | &#x2713;


### Expire a Gift Card

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards/{id}" \
  -H "id: {id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X DELETE

# Example response

{
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```


This call can be used to expire (delete) a Gift Card. The giftcard id is specified as a header parameter in this case.

Endpoint: <font face="Courier New">{root}/giftcards/{id}</font>

Available methods: <b>DELETE</b>

<br/>
<br/>
### Update Gift Card mobile number

This call can be used to update the mobile number assigned to a Gift Card. The giftcard id is specified as a path parameter in this case.

Endpoint: <font face="Courier New">{root}/giftcards/{id}/mobilenumber</font>

Available methods: <b>PUT</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The id of the gift card. | &#x2713; | 
<b>mobileNumber</b> | String | New mobile number. |  &#x2713; | 
```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards/{id}/mobilenumber" \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'apiId: {apiId}' \
-H 'apiPassword: {apiPassword}' \
-X PUT
-d '{
  "mobileNumber": "{mobileNumber}"
}'


# Example response

{
    "responseCode": "-1",
    "responseDesc": "Success",
    "httpStatusCode": 200
}
```