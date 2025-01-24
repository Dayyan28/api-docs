## Coupons

The fundamental difference between a Yoyo Coupon and Voucher is that a Coupon is associated with a particular SKU (or set of SKUs) being in the basket, while a voucher is merely a fixed discount amount, or percentage discount amount off the total basket amount processed during tender.

The issuing and redemption of Yoyo Coupons and Vouchers are identical when utilising the CVS Issuer API.

### POST /coupons

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupons?issueWiCode=true" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
       "campaignId": "9000",
       "userRef": "VSP_User_Id_001",
       "mobileNumber": "string",
       "smsMessage": "string",
       "sendSMS": boolean
     }'

# Example response

{  
  “coupon”: {
    “id”: 20,
    “userRef”: "VSP_User_Id_001",
    “campaignId”: 9000,
    “campaignName”: "VSPTestCouponCampaign",
    “campaignType”: "COUPON",
    “termsAndConditions”: "VSP T&Cs",
    “createDate”: "2015-05-15T15:10:07+0200",
    “description”: "R5.00 off SKU 1234",
    “redeemFromDate”: "2015-05-15T15:10:07+0200",
    “redeemToDate”: "2015-08-22T23:59:59+0200",
    “wiCode”: 1234567,
    “voucherAmount”: 500,
    “wiQr”: 1234567
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

This resource can be used to issue new coupons (coupon/voucher). Issuing a Coupon or Voucher is a straight forward API call. Two parameters must be supplied: <font face="Courier New">campaignID</font> and <font face="Courier New">userRef</font>. Each time this API is called a Coupon or Voucher is issued against the <font face="Courier New">userRef</font> and the <font face="Courier New">campaignID</font>.

Endpoint: <font face="Courier New">{root}/coupons</font>

Available methods: <b>POST</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
issueWiCode | Boolean (query parameter) | Whether to issue a wiCode linked to the coupon for single redemption. Default it is set to <font face="Courier New">false</font>. | &#x2713; |
<b>campaignId</b> | Integer | The id of the campaign to issue against. | &#x2713; | &#x2713;
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
mobileNumber | String | The mobile number. The mobile number must be presented in International format. | &#x2713; | &#x2713;
smsMessage | String | The message to override original sms message with. Used in request only. The following hash-tag's can be used: #WICODE (The wiCode), #MOBISITE (Will add a link to a generic mobisite for QR display.), #BALANCE (The value in Rand.) and #EXPIRY (Expiry date yyyy/mm/dd). | &#x2713; |
sendSMS | Boolean | Indicates whether an SMS must be sent on issue or not. | &#x2713; | &#x2713;
additionalInfo	| String | Any additional information the channel would like to store against the coupon can be placed in this list. It can then be retrieved by getting the coupon details when needed. |  | &#x2713;
serviceProviderId | Integer | If the campaign has an Airtime Reward linked to it the channel can provide the airtime service provider id. If no provider id specified, the system will try and issue against the most obvious airtime provider. If it fails it will try all others. Slightly slower than specifying the correct provider upfront. | &#x2713; | &#x2713;
id | Integer | The id of the coupon. |  | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</font></li></ul> | | &#x2713;
termsAndConditions | String | The terms and conditions of the coupon. | | &#x2713;
numExpiryDays | Integer | The number of expiry days. Used in request only. | &#x2713; |
createDate | String | The date the couponCampaign was created. | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
imageURL | String | The image url of the coupon. | | &#x2713;
redeemFromDate | String | From which date the coupon can be redeemed. | | &#x2713;
redeemToDate | String | Until when the coupon is redeemable. | | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
voucherAmount | Integer | The possible coupon redemption amount. | | &#x2713;
wiQR | String | The wiCode linked to the user token. | | &#x2713;

### GET /coupons/{id}

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupons/{id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “coupon“: {
    “id“: 171117,
    "userRef": "string",
    "mobileNumber": "string",
    “campaignId“: 4449,
    “campaignName“: "Integration Coupon R5",
    “campaignType“: "COUPON",
    “termsAndConditions“: "Integration Coupon R5",
    “createDate“: "2015-05-21T09:11:32+0200",
    “description“: "Integration Coupon R5",
    “imageUrl“: "http://qa.wigroup.co/wigroup/image_uploads/2015-05-21_071108.PNG",
    “redeemFromDate“: "2015-05-21T00:00:00+0200",
    “redeemToDate“: "2015-11-21T23:59:59+0200",
    “wiCode“: "902430319",
    "redeemedAmount": 100,
    “voucherAmount“: 500,
    “stateId“: "R",
    “redeemedDate“: "2015-05-21T09:13:17+0200"
  },
  “responseCode": "-1",
  “responseDesc“: "Success"
}
```

This call can be used to obtain information about a Yoyo Coupon or Voucher. The Coupon/Voucher ID is specified as a path parameter in this case.

Endpoint: <font face="Courier New">{root}/coupons/{id}</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The id of the coupon. |  | &#x2713;
userRef | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | | &#x2713;
mobileNumber | String | The users mobile number, if available. |  | &#x2713;
campaignId | Integer | The id of the campaign to issue against. | | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</font></li></ul> | | &#x2713;
termsAndConditions | String | The terms and conditions of the coupon. | | &#x2713;
createDate | String | The date the couponCampaign was created. | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
imageURL | String | The image url of the coupon. | | &#x2713;
redeemFromDate | String | From which date the coupon can be redeemed. | | &#x2713;
redeemToDate | String | Until when the coupon is redeemable. | | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the coupon. | | &#x2713;
voucherAmount | Integer | The possible coupon redemption amount. | | &#x2713;
stateId | String | The current state of the coupon.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed)</li></ul> | | &#x2713;
redeemedDate | String |  The date on which the coupon was redeemed (if it was expired). | | &#x2713;
expiredDate | String | The on which the coupon expired. | | &#x2713;

### DELETE /coupons/{id}

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupons/{id}" \
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

This call can be used to expire (delete) a Yoyo Coupon or Voucher. The Coupon/Voucher ID is specified as a header parameter in this case. The funds will be returned to the campaign.

Endpoint: <font face="Courier New">{root}/coupons/{id}</font>

Available methods: <b>DELETE</b>
