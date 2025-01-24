## Giftcard Campaigns

This request returns a list of active campaigns which are linked to the specific channel (issuer interface).

### GET /giftcardcampaigns

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcardcampaigns" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “giftcardCampaigns“: [ {
    “minValueAllowedToIssue“: 500,
    “maxValueAllowedToIssue“: 500,
    “totalAmountIssued“: 500,
    “totalAmountRedeemed“: 6000,
    “id“: 4420,
    “name“: "Gift Card R5",
    “description“: "Gift Card R5",
    “termsAndConditions“: "VSP T&Cs",
    “imageURL”: "http://goo.gl/Zodst9",
    “createDate“: "2015-05-21T07:14:01+0200",
    “requireUserRef“: false,
    “allowedUsersRestricted“: false,
    “maxNumberPerUser“: 0,
    “maxLivePerUser“: 0,
    “campaignType“: "GIFTCARD",
    “minRank“: 2,
    “categories“: [   {
      “name“: "All",
      “id“: 807,
      “rank“: 3
    }],
    “totalLive“: 1,
    “totalRedeemed“: 6000,
    “totalExpired“: 1,
    “totalIssued“: 14,
    “campaignInfo“: [{
      “name“: "Adword",
      “value“: "Integration,Gift,Card,R5,Integration Gift Card R5"
    }],
    “stateId“: "A",
    "allowExpiryDateOverride": false,
    "expiryDays": 1095
  }],
  “paging“:   {
    “pageSize“: 20,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode“: "-1",
  “responseDesc“: "Success"
}
```

This endpoint returns all the active Gift Card campaigns which can be issued against. A campaign can be issued against if it has the required min float and the user has not yet reached the max allowed per user limit.

Available methods: <b>GET</b>

All requested parameters, except the API credentials, are query parameters.

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The id of the campaign. | &#x2713; | &#x2713;
adwords| List<String> | List of adwords linked to the campaign. Adwords are special search key words which when setup against a campaign can be used to filter the campaign. | &#x2713;
categoryIds| List<Long> | A list of category id's. It will return campaigns which match any of the categories supplied. | &#x2713; |  
merchantId | Integer | A merchant id to filter campaigns on. | &#x2713; |
provinceId | Integer | A province id to filter campaigns on. | &#x2713; |  
countryId | Integer | A country id to filter campaigns on. |  &#x2713; |  
retailerId | Integer | A retailer id to filter campaigns on. |   &#x2713; |  
longitude | Double | A longitude position. Required for distance calculation. Both longitude and latitude need to be specified together. | &#x2713; |  
latitude | Double | A latitude position. Required for distance calculation. Both longitude and latitude need to be specified together. | &#x2713; |  
userRef | String | A unique user reference. When specified only campaigns on which the user can still be issued coupons will be returned. | &#x2713; |  
includeRedeemableForUser | Boolean | Whether to include campaigns which the user has unredeemed coupons/voucher, but cannot get anymore issued. Normally the campaign would drop off the list as soon as the user cannot be issued anymore. Must be used in conjunction with the userRef field | &#x2713; |  
minValueAllowedToIssue | Integer | The minimum value of a giftcard that can be issued. | | &#x2713;
maxValueAllowedToIssue | Integer | The maximum value of a giftcard that can be issued. | | &#x2713;
totalAmountIssued | Integer | The total amount(cents) issued to giftcards. | | &#x2713;
totalAmountRedeemed | Integer | The total amount(cents) redeemed on campaign. | | &#x2713;
allowedExpiryDateOverride | Boolean | Whether the expiry date may be overriden. | | &#x2713;
name | String | The name of the giftcard campaign. | | &#x2713;
description | String | The description of the giftcard campaign. | | &#x2713;
termsAndConditions | String | The terms and conditions of the giftcard campaign. | | &#x2713;
imageUrl | String | The image url of the giftcard campaign. | | &#x2713;
createDate | String | The date the giftcard campaign was created. | | &#x2713;
requireUserRef | Boolean | <font face="Courier New">True</font> if a userRef is required for giftcard campaign. | | &#x2713;
allowedUsersRestricted | Boolean | Whether only the users linked to the campaigns are able to view the contents of the campaign. | | &#x2713;
maxLivePerUser | Integer | The maximum allowed live(issued and not redeemed/expired) per user. | | &#x2713;
maxNumberPerUser | Integer | The maximum number allowed per user. | | &#x2713;
campaignType | String | The campaign type. <ul><li><font face="Consolas">GIFTCARD</font></li></ul> | | &#x2713;
minRank | Integer | The minimum rank of the giftcard campaign. | | &#x2713;
categories | Object | List of category details. Each entry consists of a name (String), id (Integer) and description (Long). | | &#x2713;
distance | Double | The distance to the closest merchant. | | &#x2713;
totalExpired | Integer | The total number of giftcards expired. | | &#x2713;
totalIssued | Integer | The total number of giftcards issued (live + redeemed). | | &#x2713;
totalLive | Integer | The total number of live (active) giftcards. | | &#x2713;
totalRedeemed | Integer | The total number of giftcards redeemed. | | &#x2713;
campaignInfo | Object | List of campaign info details. Each entry consists of a campaign name (String) and a campaign info value (String).  | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | | &#x2713;
allowExpiryDateOverride | Boolean | Whether the campaign allowes the default expiry days to be overwritten on issue.  | | &#x2713;
expiryDays | Integer | The default number of days the coupon will be valid for from issue date. The expiry date will be set to midnight x days from issue date. |  | &#x2713;

### GET /giftcardcampaigns/{id}

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcardcampaigns/{id}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  “giftcardCampaigns“: [ {
    “minValueAllowedToIssue“: 500,
    “maxValueAllowedToIssue“: 500,
    “totalAmountIssued“: 500,
    “totalAmountRedeemed“: 6000,
    “id“: 4420,
    “name“: "Gift Card R5",
    “description“: "Gift Card R5",
    “termsAndConditions“: "VSP T&Cs",
    “imageURL”: "http://goo.gl/Zodst9",
    “createDate“: "2015-05-21T07:14:01+0200",
    “requireUserRef“: false,
    “allowedUsersRestricted“: false,
    “maxNumberPerUser“: 0,
    “maxLivePerUser“: 0,
    “campaignType“: "GIFTCARD",
    “minRank“: 2,
    “categories“: [ {
      “name“: "All",
      “id“: 807,
      “rank“: 3
    }],
    “totalLive“: 1,
    “totalRedeemed“: 6000,
    “totalExpired“: 1,
    “totalIssued“: 14,
    “campaignInfo“: [{
      “name“: "Adword",
      “value“: "Integration,Gift,Card,R5,Integration Gift Card R5"
    }],
    “stateId“: "A",
    "allowExpiryDateOverride": false,
    "expiryDays": 1095
  }],
  “paging“:
  {
    “pageSize“: 20,
    “pageOffset“: 0,
    “numItemsOnPage“: 1,
    “numItemsInTotal“: 1,
    “numPages“: 1
  },
  “responseCode“: "-1",
  “responseDesc“: "Success"
}
```


This endpoint returns all the active Gift Card campaigns which can be issued against. A campaign can be issued against if it has the required min float and the user has not yet reached the max allowed per user limit.

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>id</b> | Integer | The id of the campaign. | &#x2713; | &#x2713;
minValueAllowedToIssue | Integer | The minimum value of a giftcard that can be issued. | | &#x2713;
maxValueAllowedToIssue | Integer | The maximum value of a giftcard that can be issued. | | &#x2713;
totalAmountIssued | Integer | The total amount(cents) issued to giftcards. | | &#x2713;
totalAmountRedeemed | Integer | The total amount(cents) redeemed on campaign. | | &#x2713;
allowedExpiryDateOverride | Boolean | Whether the expiry date may be override | | &#x2713;
name | String | The name of the giftcard campaign. | | &#x2713;
description | String | The description of the giftcard campaign. | | &#x2713;
termsAndConditions | String | The terms and conditions of the giftcard campaign. | | &#x2713;
imageUrl | String | The image url of the giftcard campaign. | | &#x2713;
createDate | String | The date the giftcard campaign was created. | | &#x2713;
requireUserRef | Boolean | <font face="Courier New">True</font> if a userRef is required for giftcard campaign. | | &#x2713;
allowedUsersRestricted | Boolean | Whether only the users linked to the campaigns are able to view the contents of the campaign. | | &#x2713;
maxLivePerUser | Integer | The maximum allowed live(issued and not redeemed/expired) per user. | | &#x2713;
maxNumberPerUser | Integer | The maximum number allowed per user. | | &#x2713;
campaignType | String | The campaign type. <ul><li><font face="Consolas">GIFTCARD</font></li></ul> | | &#x2713;
minRank | Integer | The minimum rank of the giftcard campaign. | | &#x2713;
categories | Object | List of category details. Each entry consists of a name (String), id (Integer) and description (Long). | | &#x2713;
distance | Double | The distance to the closest merchant. | | &#x2713;
totalExpired | Integer | The total number of giftcards expired. | | &#x2713;
totalIssued | Integer | The total number of giftcards issued (live + redeemed). | | &#x2713;
totalLive | Integer | The total number of live (active) giftcards. | | &#x2713;
totalRedeemed | Integer | The total number of giftcards redeemed. | | &#x2713;
campaignInfo | Object | List of campaign info details. Each entry consists of a campaign name (String) and a campaign info value (String).  | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed fully)</li></ul> | | &#x2713;
allowExpiryDateOverride | Boolean | Whether the campaign allows the default expiry days to be overwritten on issue.  | | &#x2713;
expiryDays | Integer | The default number of days the coupon will be valid for from issue date. The expiry date will be set to midnight x days from issue date. |  | &#x2713;
