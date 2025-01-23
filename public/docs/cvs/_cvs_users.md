## Users

### POST /user/{userRef}/token

> Case 1 -- Single Gift Card and Two Vouchers:

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/user/{userRef}/token" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST
  -d '{
       “giftcardIds”: [“20”],
       “couponIds”: [“55”, “56”],
       “campaignType”: “VOUCHER”,
       "mobileNumber": "string"
     }'

# Example response

{
  token: {
    “userRef”: "VSP_User_Id_001",
    “mobileNumber”: "string",
    “campaignType”: "VOUCHER",
    “wiCode”: "1122345",
    “wiQR”: "1122345",
    “couponIds”:
    [
      55,
      56
    ],
    “giftcardIds”:
    [
      20
    ],
    “createDate”: "2015-03-13T14:22:52+0200",
    “validTillDate”: "2015-03-14T23:59:59+0200",
    “lastModifiedDate”: "2015-03-13T14:27:08+0200",
    “stateId”: "A"
    },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

> Case 2 -- Set of Gift Cards, a Two Coupons and a Voucher:

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/user/{userRef}/token" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST
  -d '{
       “giftcardIds”: [“20”, “21”, “22”],
       “couponIds”: [“101”, “102”, “55”],
       “campaignType”: “COUPONVOUCHER”,
       "mobileNumber": "string"
     }'

# Example response

{
  token: {
    “userRef”: "VSP_User_Id_001",
    “mobileNumber”: "string"
    “campaignType”: "COUPONVOUCHER",
    “wiCode”: "6786789",
    “wiQR”: "6786789",
    “couponIds”:
    [
      55,
      101,
      102
    ],
    “giftcardIds”:
    [
      20,
      21,
      22
    ],
    “createDate”: "2015-03-13T14:22:52+0200",
    “validTillDate”: "2015-03-14T23:59:59+0200",
    “lastModifiedDate”: "2015-03-13T14:27:08+0200",
    “stateId”: "A"
    },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

> Case 3 -- Coupon (all Coupons across any campaigns available to the userRef):

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/user/{userRef}/token" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST
  -d '{
       “couponCampaignIds”: [“-1”],
       “campaignType”: “COUPON”,
       "mobileNumber": "string"
     }'

# Example response

{
  token: {
    “userRef”: "VSP_User_Id_001",
    “mobileNumber”: "string"
    “campaignType”: "COUPON",
    “wiCode”: "3334567",
    “wiQR”: "3335678",
    “couponCampaignIds”:
    [
      -1
    ],
    “createDate”: "2015-03-13T14:22:52+0200",
    “validTillDate”: "2015-03-14T23:59:59+0200",
    “lastModifiedDate”: "2015-03-13T14:27:08+0200",
    “stateId”: "A"
    },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

To redeem coupons or giftcards not issued with their own wiCode a user token must be created. This token specifies what must be considered on redemption. The token will be valid for up to 48 hours (today and tomorrow). A token can only be used for one transaction. The data linked to the token can be changed at any stage by recreating the token. To create the token you need to specify what to redeem. There are three lists which define what to redeem (couponCampaignIds, couponIds, giftcardIds), at least one must be specified. During redemption the system will first redeem against the couponCampaignIds list, then the couponIds, and finally the giftcardIds list. This is so that discounts are redeemed first, then vouchers/coupons issued to the user and then finally it will deduct the remaining value from the giftcards. If the list is not specified the redemption step for that list will be skipped. If you want to redeem against anything in that list rather than specify specific Ids, you can specify the wildcard [‑1] as the only value in the list. If you want to limit the list, you must specify the specific ids to take into account.

The primary function of <font face="Courier New">setUserToken</font> is to reserve a Token against a specific user. Its secondary function is to associate the Token with a CVS item, <em>i.e.</em> Gift Card or Coupon. Depending on the body parameters provided, <font face="Courier New">setUserToken</font> allows a great deal of flexibility in the way discounts are redeemed. This adds internal complexity to CVS, but simplifies the redemption process for client applications.

It is assumed that when a user registers on the VSP they are assigned a unique identifier, <em>e.g.</em> “VSP_User_001”, this identifier should be sent across by the VSP application servers to CVS as the <font face="Courier New">userRef</font> parameter. When the <font face="Courier New">setUserToken</font> call is made a Token is issued against this <font face="Courier New">userRef</font>.

When a User Token is created the IDs must be specified of the Coupons, Vouchers and Gift Cards that is required to be processed. The Campaign IDs may alternatively also be specified. A single ID may be specified or multiple IDs may be provided in the form of an array consisting of the IDs in String format. In the case where all issued Coupons, Vouchers or Gift Cards are issued against the user must be redeemed, <font face="Courier New">[“-1”],</font> should be presented in the JSON body of the request.

Furthermore, a Campaign Type has to be provided, which must be either: <font face="Consolas">“COUPON”</font>, <font face="Consolas">“VOUCHER”</font> or <font face="Consolas">“COUPONVOUCHER”</font>. The Campaign Type <font face="Consolas">COUPONVOUCHER</font> captures both Coupons and Vouchers issued against the user. The Campaign Type will have no effect on the redemption of issued Gift Cards – it will only have an impact on Coupons and Vouchers.

Endpoint: <font face="Courier New">{root}/users/{userRef}/token</font>

Available methods: <b>POST</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
mobileNumber | String | The mobile number. The mobile number must be presented in International format. | &#x2713; | &#x2713;
couponCampaignIds | Array[String], null if none, ["-1"] if all campaigns | The list of coupon campaign id's which during redemption phase will be issued to the user and redeemed. | &#x2713; | &#x2713;
couponIds | Array[String], null if none, ["-1"] if all campaigns | The list of coupon id's already issued to the user to redeem if possible. | &#x2713;| &#x2713;
giftcardIds | Array[String], null if none, ["-1"] if all campaigns | The list of giftcard id's already issued to the user to redeem if possible. |&#x2713; | &#x2713;
campaignType | String | The campaign type issued against for couponCampaignIds list or couponIds list. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</font></li><li><font face="Consolas">COUPONVOUCHER</font></li></ul> | &#x2713; | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
wiQR | String | The wiCode linked to the user token. | | &#x2713;
createDate | String | The date token was created. | | &#x2713;
validTillDate | String | The date the wiCode will be valid to. | | &#x2713;
lastModifiedDate | String | The date last modified. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the coupon. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed)</li></ul> | | &#x2713;

### GET /user/{userRef}/token

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/user/{userRef}/token" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  token: {
    “userRef”: "VSP_User_Id_001",
    "mobileNumber": "string",
    “campaignType”: "VOUCHER",
    “wiCode”: "1122345",
    “wiQR”: "1122345",
    “couponIds”:
    [
      55,
      56
    ],
    “giftcardIds”:
    [
      20
    ],
    “createDate”: "2015-03-13T14:22:52+0200",
    “validTillDate”: "2015-03-14T23:59:59+0200",
    “lastModifiedDate”: "2015-03-13T14:27:08+0200",
    “stateId”: "A"
    },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

A token can also be retrieved.

Endpoint: <font face="Courier New">{root}/users/{userRef}/token</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
mobileNumber | String | The users mobile number, if available. | | &#x2713;
couponCampaignIds | Array[String], null if none, ["-1"] if all campaigns | The list of coupon campaign id's which during redemption phase will be issued to the user and redeemed. | | &#x2713;
couponIds | Array[String], null if none, ["-1"] if all campaigns | The list of coupon id's already issued to the user to redeem if possible. | | &#x2713;
giftcardIds | Array[String], null if none, ["-1"] if all campaigns | The list of giftcard id's already issued to the user to redeem if possible. | | &#x2713;
campaignType | String | The campaign type. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</font></li><li><font face="Consolas">COUPONVOUCHER</font></li></ul> |  | &#x2713;
wiCode | String | The wiCode linked to the user token. | | &#x2713;
wiQR | String | The wiCode linked to the user token. | | &#x2713;
createDate | String | The date token was created. | | &#x2713;
validTillDate | String | The date the wiCode will be valid to. | | &#x2713;
lastModifiedDate | String | The date last modified. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the coupon. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed)</li></ul> | | &#x2713;

### DELETE /user/{userRef}/token

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/user/{userRef}/token" \
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

A token can also be expired for safety should the user no longer want to transact.

Endpoint: <font face="Courier New">{root}/users/{userRef}/token</font>

Available methods: <b>DELETE</b>

### GET /users/{userRef}/transactions

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/users/{userRef}/transactions" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{  
  “transactions”: {[
    “id“: 101694,
    “wiCode“: "528626479",
    “userRef“: "VSP_User_Id_001",
    “merchantId“: 1050,
    “merchantName“: "Test Merchant",
    “retailerId“: 10,
    “retailerName“: "Yoyo Retailer",
    “processedAmount“: 2500,
    “numberOfCoupons“: 1,
    “numberOfGiftcards“: 0,
    “totalCouponProcessedAmount“: 2500,
    “totalGiftcardProcessedAmount“: 0,
    “transactionDate“: "2015-07-23T14:07:24+0200",
    “interfaceIssuerId“: "VSPIssuer",
    “issuerId“: 128,
    “stateId“: "S"
  }]
  ,
  “paging“:    {
    “pageSize“: 10,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

This resource denotes the top level transactions for a specific user. It will indicate how many coupon and giftcard transactions was processed on the transaction.

Endpoint: <font face="Courier New">{root}/users/{userRef}/transactions</font>

Available methods: <b>GET</b>

All request parameters, except the API credentials, are query parameters.

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>userRef</b> | String | The user reference to filter on.  | &#x2713; | &#x2713;
wiCode | String | To filter transaction on specific wiCode. | &#x2713; | &#x2713;
dateFrom | String | The date from which to return transactions. | &#x2713; |
dateTo  | String | The date to which to return transactions. | &#x2713; |
id | Integer | The transaction id.  |  | &#x2713;
merchantId   | Integer | The merchant id. |  | &#x2713;
merchantName   | String | The merchant name. |  | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
processedAmount    | Integer | The total processed amount for all linked coupon and giftcard transactions. |  | &#x2713;
numberOfCoupons    | Integer | The number of coupons redeemed on transaction.|  | &#x2713;
numberOfGiftcards    | Integer | The number of giftcards redeemed on transaction.|  | &#x2713;
totalCouponProcessedAmount   | Integer | The total processed amount from coupon redemptions.|  | &#x2713;
totalGiftcardProcessedAmount   | Integer | The total processed amount from giftcard redemptions. |  | &#x2713;
transactionDate    | String | The transaction date. |  | &#x2713;
interfaceIssuerId   | Integer | The transaction id. |  | &#x2713;
issuerId    | Integer | The id of the issuer. |  | &#x2713;
stateId | String | The current transaction state.<ul><li><font face="Consolas">N</font> (New)</li> <li><font face="Consolas">P</font> (Processing)</li> <li><font face="Consolas">F</font> (Failed)</li> <li><font face="Consolas">SPR</font> (Successful pending recon)</li> <li><font face="Consolas">S</font> (Successful)</li></ul> | | &#x2713;

### GET /users/{userRef}/coupons

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/users/{userRef}/coupons" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “coupon“: [ {
    “id“: 171117,
    “userRef“: “VSP_User_Id_001“,
	“campaignId“: 4449,
    “campaignName“: "Integration Coupon R5",
    “campaignType“: "COUPON",
	“termsAndConditions“: "Integration Coupon R5",
    “createDate“: "2015-05-21T09:11:32+0200",
    “description“: "Integration Coupon R5",
	    “imageURL”: "http://goo.gl/Zodst9",
    “redeemFromDate“: "2015-05-21T00:00:00+0200",
    “redeemToDate“: "2015-11-21T23:59:59+0200",
	“redeemFromTime”: "00:00",
	“redeemToTime”: "00:00",
	“isRedeemableOnSundays”: boolean,
	“isRedeemableOnMondays”: boolean,
	“isRedeemableOnTuesdays”: boolean,
	“isRedeemableOnWednesdays”: boolean,
	“isRedeemableOnThursdays”: boolean,
	“isRedeemableOnFridays”: boolean,
	“isRedeemableOnSaturdays”: boolean,
    “wiCode“: "902430319",
    “voucherAmount“: 500,
    “stateId“: "E",
    “expiredDate“: "2015-05-21T09:13:17+0200"
  }],
  “responseCode": "-1",
  “responseDesc“: "Success"
}
```

This resource can be used to retrieve a list of coupons linked to a specific user.

Endpoint: <font face="Courier New">{root}/users/{userRef}/coupons</font>

Available methods: <b>GET</b>

All request parameters, except the API credentials, are query parameters.

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
id | Integer | The transaction id.  |  | &#x2713;
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
campaignId | Integer | The id of the campaign to issue against. | &#x2713; | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</fomt></li></ul> | &#x2713; | &#x2713;
termsAndConditions | String | The terms and conditions of the coupon. | | &#x2713;
createDate | String | The date the couponCampaign was created. | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
imageUrl | String | The image url of the gift card. | | &#x2713;
redeemFromDate | String | From which date the coupon can be redeemed. | | &#x2713;
redeemToDate | String | Until when the coupon is redeemable. | | &#x2713;
redeemFromTime | String | The time from which the gift card can be redeemed. | | &#x2713;
redeemToTime | String | The time on which the gift card can be redeemed to. | | &#x2713;
isRedeemableOnSundays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnMondays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnTuesdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnWednesdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnThursdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnFridays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnSaturdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
wiCode | String | The wiCode linked to the user token. |  | &#x2713;
voucherAmount | Integer | The possible coupon redemption amount. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | &#x2713; | &#x2713;
expiredDate | String |  The date on which the gift card expired. | | &#x2713;

### GET /users/{userRef}/giftcards

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/users/{userRef}/giftcards" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{  
  “giftcard”: {
    “id”: 20,
    “campaignId”: 9000,
    “userRef”: "VSP_User_Id_001",
    "mobileNumber": "string",
    “issuedAmount”: 2000,
    “redeemedAmount”: 0,
    “expiredAmount”: 0,
    “balance”: 2000,
    “createDate”: "2015-03-13T15:10:07+0200",
    “expiryDate”: "2018-03-12T23:59:59+0200",
    “campaignName”: "VSPTestGiftCardCampaign",
    “campaignType”: "GIFTCARD",
    “description”: "Gift Card worth R20.00",
    “termsAndCondition: "VSP T&Cs",
    “stateId”: "A",
	“wicode”: "112233445566",
	“redeemFromTime”: "00:00",
	“redeemToTime”: "00:00",
	“isRedeemableOnSundays”: boolean,
	“isRedeemableOnMondays”: boolean,
	“isRedeemableOnTuesdays”: boolean,
	“isRedeemableOnWednesdays”: boolean,
	“isRedeemableOnThursdays”: boolean,
	“isRedeemableOnFridays”: boolean,
	“isRedeemableOnSaturdays”: boolean
  },
  “responseCode”: "-1",
  “responseDesc”: "Success"
}
```

This resource can be used to retrieve a list of giftcards linked to a specific user.

Endpoint: <font face="Courier New">{root}/users/{userRef}/giftcards</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
campaignId | Integer | The id of the campaign to issue against. | &#x2713; | &#x2713;
mobileNumber | String | The mobile number. The mobile number must be presented in International format. | | &#x2713;
id | Integer | The id of the gift card. |  | &#x2713;
campaignId | Integer | The id of the campaign to issue against. | | &#x2713;
issuedAmount | Integer | The issued amount. | | &#x2713;
redeemedAmount | Integer | The amount redeemed on the giftcard. | | &#x2713;
expiredAmount | Integer | The amount expired on the giftcard. | | &#x2713;
balance | Integer | The amount to issue on giftcard. The balance needs to be within the min and max boundaries of the campaign and the campaign must have the required float available. |  | &#x2713;
createDate | String | The create date of the giftcard. | | &#x2713;
expiryDate | String | The date on which the gift card expire. | | &#x2713;
expiredDate | String | The date on which the gift card expired. | | &#x2713;
campaignName | String | The name of the campaign. | | &#x2713;
campaignType | String | The type of campaign. <ul><li><font face="Consolas">GIFTCARD</fomt></li></ul> | | &#x2713;
description | String | A description of the campaign. | | &#x2713;
termsAndConditions | String | The terms and conditions of the coupon. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | &#x2713; | &#x2713;
wicode | String |  The wiCode linked to the user token.. | | &#x2713;
redeemFromTime | String | The time from which the gift card can be redeemed. | | &#x2713;
redeemToTime | String | The time on which the gift card can be redeemed to. | | &#x2713;
isRedeemableOnSundays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnMondays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnTuesdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnWednesdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnThursdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnFridays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;
isRedeemableOnSaturdays | Boolean | Indicates if the giftcard is redeemable on day speicfied. | | &#x2713;


### GET /users/{userRef}/pans

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/users/{userRef}/pans" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  "responseCode": "string",
  "responseDesc": "string",
  "userGroupPan": {
    "pan": "string",
    "userRef": "string",
    "interfaceIssuerGroupId": "string",
    "interfaceIssuerId": "string",
    "createDate": "2016-07-06T07:53:18.628Z",
    "lastModifiedDate": "2016-07-06T07:53:18.628Z",
    "interfaceGroupId": "string"
  }
}
```

Get user pan.

Endpoint: <font face="Courier New">{root}/users/{userRef}/pans</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>userRef</b> | String | A unique user reference as on the issuer channel system. This reference will be used to restrict user limits on campaigns. | &#x2713; | &#x2713;
pan | String | The pan. |  | &#x2713;
interfaceIssuerGroupId | String | The id of the interface issuer group. |  | &#x2713;
createDate | String | The create date of the pan. | | &#x2713;
lastModifiedDate | String | The last modified date. |   | &#x2713;
