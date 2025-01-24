## Coupon Campaigns

This request returns a list of active campaigns which are linked to the specific channel (issuer interface). By default only campaigns which still have coupons left to issue will be returned.


### GET /couponcampaigns

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/couponcampaigns" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
        "issueFromDate": "2017-09-11T00:00:00+0200",
        "issueToDate": "2017-09-12T23:59:59+0200",
        "redeemFromDate": "2017-09-11T00:00:00+0200",
        "redeemToDate": "2017-09-12T23:59:59+0200",
        "minBasketValue": 0,
        "maxBasketValue": 0,
        "maxRedemptionsPerUserPerDay": 0,
        "id": 48184,
        "name": "% discount",
        "description": "% discount",
        "termsAndConditions": "% discount",
        "createDate": "2017-09-11T11:31:43+0200",
        "requireUserRef": false,
        "allowedUsersRestricted": false,
        "maxNumberPerUser": 1,
        "maxLivePerUser": 0,
        "campaignType": "VOUCHER",
        "minRank": 11,
        "categories": [         {
           "name": "All",
           "id": 782,
           "rank": 11
        }],
        "maxAllowedToIssue": 10,
        "maxAllowedToIssueDaily": 10,
        "maxRedemptionRuleAmount": 100000,
        "discountType": "Percentage",
        "percentageDiscount": 20,
        "totalLive": 0,
        "totalRedeemed": 0,
        "totalExpired": 0,
        "totalIssued": 0,
        "totalIssuedToday": 0,
        "campaignInfo": [         {
           "name": "Adword",
           "value": "%,discount,% discount"
        }],
        "stateId": "A",
        "allowExpiryDateOverride": false,
        "expiryDays": 1096,
        "campaignRedemptionRestrictions":          {
           "redeemabableOnSundays": true,
           "redeemabableOnMondays": true,
           "redeemabableOnTuesdays": true,
           "redeemabableOnWednesdays": true,
           "redeemabableOnThursdays": true,
           "redeemabableOnFridays": true,
           "redeemabableOnSaturdays": true,
           "redemptionFromTime": "00:00",
           "redemptionToTime": "00:00"
        }
     }
  ],
  "paging":    {
     "pageSize": 20,
     "pageOffset": 0,
     "numItemsOnPage": 11,
     "numItemsInTotal": 11,
     "numPages": 1
  },
  "responseCode": "-1",
  "responseDesc": "Success"

```

This request returns a list of active campaigns which are linked to the specific channel (issuer interface). By default only campaigns which still have coupons left to issue will be returned. If no user reference (<font face="Courier New">userRef</font>) is specified in the request it is possible that there are campaigns which the user has already reached the max allowed per user. When the user tries to issue another on the campaign they will be declined. For a better customer experience we recommend including the user reference in the request. This will hide campaigns which the user cannot issue on. A similar problem occurs when the user has reached the max allowed to be issued, but still has a coupon active for redemption. This campaign will not be included in the campaign list. To include these campaigns the <font face="Courier New">includeRedeemableForUser</font> parameter must be set to true.

Endpoint: <font face="Courier New">{root}/couponcampaigns</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
id | Integer | The id of the campaign. | &#x2713; | &#x2713;
allowExpiryDateOverride | Boolean | Whether the campaign allows the default expiry days to be overwritten on issue. |  | &#x2713;
expiryDays | Integer | The default number of days the coupon will be valid for from issue date. The expiry date will be set to midnight x days from issue date. |  | &#x2713;
adwords| List<String> | List of adwords linked to the campaign. Adwords are special search key words which when setup against a campaign can be used to filter the campaign. | &#x2713; | &#x2713;
campaignPhase | String | The phase of the campaign.<ul><li><font face="Consolas">TODAY</font> (activated today)</li><li><font face="Consolas">CURRENT (all active)</li><li><font face="Consolas">PENDING (pending activation)</li></ul> |  &#x2713; |
campaignType | String | The campaign type. <ul><li><font face="Consolas">COUPON</font></li><li><font face="Consolas">VOUCHER</font></li><li><font face="Consolas">COUPONVOUCHER</font></li></ul> | &#x2713;| &#x2713;
categoryIds| List<Long> | A list of category id's. It will return campaigns which match any of the categories supplied. | &#x2713; |  
merchantId | Integer | A merchant id to filter campaigns on. | &#x2713; |
provinceId | Integer | A province id to filter campaigns on. | &#x2713; |  
countryId | Integer | A country id to filter campaigns on. |  &#x2713; |  
retailerId | Integer | A retailer id to filter campaigns on. |   &#x2713; |  
longitude | Double | A longitude position. Required for distance calculation. Both longitude and latitude need to be specified together. | &#x2713; |  
latitude | Double | A latitude position. Required for distance calculation. Both longitude and latitude need to be specified together. | &#x2713; |  
userRef | String | A unique user reference. When specified only campaigns on which the user can still be issued coupons will be returned. | &#x2713; |  
includeRedeemableForUser | Boolean | Whether to include campaigns which the user has unredeemed coupons/voucher, but cannot get anymore issued. Normally the campaign would drop off the list as soon as the user cannot be issued anymore. Must be used in conjunction with the userRef field. | &#x2713; |  
totalViewed | Integer | The total number viewed of the couponCampaign. | | &#x2713;
issueFromDate | String | The date from which a couponCampaign is allowed to be issued. | | &#x2713;
issueToDate | String | The date the couponCampaign is allowed to be issued to. | | &#x2713;
redeemFromDate | String | The date the couponCampaign is allowed to be redeemed from. | | &#x2713;
redeemToDate | String | The date the couponCampaign is allowed to be redeemed to. | | &#x2713;
minBasketValue | Integer | The minimum value of the basket allowed to redeem. | | &#x2713;
maxBasketValue | Integer | The maximum value of the basket allowed to redeem. | | &#x2713;
name | String | The name of the couponCampaign. | | &#x2713;
description | String | The description of the couponCampaign. | | &#x2713;
termsAndConditions | String | The terms and conditions of the couponCampaign. | | &#x2713;
imageUrl | String | The image url of the couponCampaign. | | &#x2713;
createDate | String | The date the couponCampaign was created. | | &#x2713;
requireUserRef | Boolean | <font face="Courier New">True</font> if a userRef is required for couponCampaign. | | &#x2713;
allowedUsersRestricted | Boolean | Whether only the users linked to the campaigns are able to view the contents of the campaign. | | &#x2713;
maxNumberPerUser | Integer | The maximum number allowed per user. | | &#x2713;
maxRedemptionsPerUserPerDay | Integer | The maximum number of redemption's per user on the couponCampaign daily. | | &#x2713;
maxLivePerUser | Integer | The maximum allowed live(issued and not redeemed/expired) per user. | | &#x2713;
minRank | Integer | The minimum rank of the couponCampaign. | | &#x2713;
categories | Object | List of category details. Each entry consists of a name (String), id (Long) and rank (Integer). | | &#x2713;
distance | Double | The distance to the closest merchant. | | &#x2713;
maxAllowedToIssue | Integer | The maximum allowed to be issued in total. | | &#x2713;
maxAllowedToIssueDaily | Integer | The maximum allowed to be issued in total daily. | | &#x2713;
maxRedemptionRuleAmount | Integer | The maximum redemption rule amount. | | &#x2713;
discountType | String | `Fixed value` or `percentage`. | | &#x2713;
percentageDiscount | Integer | This parameter is only available for vouchers.  If a voucher campaign is a percentage discount, the value will be listed here. | | &#x2713;
totalLive | Integer | The total live coupons/voucher on the couponCampaign. | | &#x2713;
totalRedeemed | Integer | The total number redeemed of the couponCampaign. | | &#x2713;
totalExpired | Integer | The total number expired of the couponCampaign. | | &#x2713;
totalIssued | Integer | The total number issued (live + redeemed) of the couponCampaign. | | &#x2713;
totalIssuedToday | Integer | The total number issued daily of the couponCampaign. | | &#x2713;
campaignInfo | Object | List of campaign info details. Each entry consists of a campaign name (String) and a campaign info value (String).  | | &#x2713;
stateId | String | The current state of the coupon.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed)</li></ul> | | &#x2713;
campaignRedemptionRestrictions | Long | This rule states on which days the reward can be redeemed. If restrictions exist for a specific day, the value of the parameter will be "FALSE" | | &#x2713;

### GET /couponcampaigns/{campaignId}

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/couponcampaigns/{campaignId}" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  "couponCampaigns": [ {
    "allowExpiryDateOverride": false,
    "expiryDays":0,
    "totalViewed": 0,
    "issueFromDate": "2015-05-21T00:00:00+0200",
    "issueToDate": "2015-11-21T23:59:59+0200",
    "redeemFromDate": "2015-05-21T00:00:00+0200",
    "redeemToDate": "2015-11-21T23:59:59+0200",
    "minBasketValue": 0,
    "maxBasketValue": 0,
    "maxRedemptionsPerUserPerDay": 0,
    "id": 4449,
    "name": "Coupon R5",
    "description": "Coupon R5",
    "termsAndConditions": "VSP T&Cs",
    "imageURL": "http://goo.gl/Zodst9",
    "createDate": "2015-05-21T07:14:01+0200",
    "requireUserRef": false,
    "allowedUsersRestricted": false,
    "maxNumberPerUser": 0,
    "maxLivePerUser": 0,
    "campaignType": "COUPON",
    "minRank": 3,
    "categories": [ {
      "name": "All",
      "id": 807,
      "rank": 3
    }],
    "maxAllowedToIssue": 100000,
    "maxAllowedToIssueDaily": 100000,
    "maxRedemptionRuleAmount": 500,
    "discountType": "Percentage",
    "percentageDiscount": 20,
    "totalLive": 1,
    "totalRedeemed": 37,
    "totalExpired": 1,
    "totalIssued": 38,
    "totalIssuedToday": 4,
    "campaignInfo": [ {
      "name": "Adword",
      "value": "Integration,Gift,Card,R5,Integration Gift Card R5"
    }],
    "stateId": "A"
  }],
  "paging":
  {
    "pageSize": 20,
    "pageOffset": 0,
    "numItemsOnPage": 1,
    "numItemsInTotal": 1,
    "numPages": 1
  },
  "responseCode": "-1",
  "responseDesc": "Success"
}
```

When a specific campaign's details are required rather than pulling the entire campaign list down, this endpoint can be used to retrieve the single campaign's details.

Endpoint: <font face="Courier New">{root}/couponcampaigns/{campaignId}</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>campaignId</b> | Integer | The id of the campaign. | &#x2713; | &#x2713;
allowExpiryDateOverride | Boolean | Whether the campaign allows the default expiry days to be overwritten on issue. |  | &#x2713;
expiryDays | Integer | The default number of days the coupon will be valid for from issue date. The expiry date will be set to midnight x days from issue date. |  | &#x2713;
totalViewed | Integer | The total number viewed of the couponCampaign. | | &#x2713;
issueFromDate | String | The date from which a couponCampaign is allowed to be issued. | | &#x2713;
issueToDate | String | The date the couponCampaign is allowed to be issued to. | | &#x2713;
redeemFromDate | String | The date the couponCampaign is allowed to be redeemed from. | | &#x2713;
redeemToDate | String | The date the couponCampaign is allowed to be redeemed to. | | &#x2713;
minBasketValue | Integer | The minimum value of the basket allowed to redeem. | | &#x2713;
maxBasketValue | Integer | The maximum value of the basket allowed to redeem. | | &#x2713;
name | String | The name of the couponCampaign. | | &#x2713;
description | String | The description of the couponCampaign. | | &#x2713;
termsAndConditions | String | The terms and conditions of the couponCampaign. | | &#x2713;
imageUrl | String | The image url of the couponCampaign. | | &#x2713;
createDate | String | The date the couponCampaign was created. | | &#x2713;
requireUserRef | Boolean | <font face="Courier New">True</font> if a userRef is required for couponCampaign. | | &#x2713;
allowedUsersRestricted | Boolean | Whether only the users linked to the campaigns are able to view the contents of the campaign. | | &#x2713;
maxNumberPerUser | Integer | The maximum number allowed per user. | | &#x2713;
maxRedemptionsPerUserPerDay | Integer | The maximum number of redemption's per user on the couponCampaign daily. | | &#x2713;
maxLivePerUser | Integer | The maximum allowed live(issued and not redeemed/expired) per user. | | &#x2713;
minRank | Integer | The minimum rank of the couponCampaign. | | &#x2713;
categories | Object | List of category details. Each entry consists of a name (String), id (Long) and rank (Integer). | | &#x2713;
distance | Double | The distance to the closest merchant. | | &#x2713;
maxAllowedToIssue | Integer | The maximum allowed to be issued in total. | | &#x2713;
maxAllowedToIssueDaily | Integer | The maximum allowed to be issued in total daily. | | &#x2713;
maxRedemptionRuleAmount | Integer | The maximum redemption rule amount. | | &#x2713;
discountType | String | `Fixed value` or `percentage`. | | &#x2713;
percentageDiscount | Integer | This parameter is only available for vouchers.  If a voucher campaign is a percentage discount, the value will be listed here. | | &#x2713;
totalLive | Integer | The total live coupons/voucher on the couponCampaign. | | &#x2713;
totalRedeemed | Integer | The total number redeemed of the couponCampaign. | | &#x2713;
totalExpired | Integer | The total number expired of the couponCampaign. | | &#x2713;
totalIssued | Integer | The total number issued (live + redeemed) of the couponCampaign. | | &#x2713;
totalIssuedToday | Integer | The total number issued daily of the couponCampaign. | | &#x2713;
campaignInfo | Object | List of campaign info details. Each entry consists of a campaign name (String) and a campaign info value (String).  | | &#x2713;
stateId | String | The current state of the coupon.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> <li><font face="Consolas">E</font> (Expired)</li> <li><font face="Consolas">R</font> (Redeemed)</li></ul> | | &#x2713;

### GET /couponcampaigns/{campaignId}/skus

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/couponcampaigns/{campaignId}/skus" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  "responseCode": "-1",
  "responseDesc": "Success!",
  "skus": [
    {
      "sku": "string",
      "value": 0,
      "brand": "string",
      "product": "string",
      "size": "string"
    }
  ]
}
```

If the campaign type is COUPON, the campaign will have SKUs linked to it. This endpoint can be used to retrieve the list of SKUs linked to the campaign.

Endpoint: <font face="Courier New">{root}/couponcampaigns/{campaignId}/skus</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
<b>campaignId</b> | Integer | The id of the campaign. | &#x2713; | &#x2713;
skus | Array | List of skus. Each sku object in the array consists of a sku (string), the sku value (integer), the sku brand (string), the sku product (string) and the product size (string) |  | &#x2713;
