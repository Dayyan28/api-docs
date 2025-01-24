## Merchants

### GET /merchants

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/merchants" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  merchants: [ {
    “createDate“: "2013-03-19T07:34:02+0200",
    “id“: 1050,
    “name“: "Test Merchant",
    “provinceDesc“: "Eastern Cape",
    “provinceId“: 1,
    “stateId“: "A",
    “retailerId“: 10,
    “retailerName“: "Yoyo Retailer",
    “latitude“: -33.932308,
    “longitude“: 18.467464,
    “distance“: 0
      }
  }],
  “hasNextPage“: false,
  “numOfPages“: 1,
  “numItemsOnPage“: 2,
  “numItemsInTotal“: 2,
  “order“: {},
  “pageSize“: 20,
  “pageOffset“: 0,
  “responseCode“: "-1",
  “responseDesc“: "Success"
}
```

This resource denotes the collection of all merchants linked to active campaigns on the channel.

Endpoint: <font face="Courier New">{root}/merchants</font>

Available Methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
campaignId | Integer | Filter transactions for specific campaign. | &#x2713; |
retailerId  | Integer | The retailer id. | &#x2713; | &#x2713;
id | Integer | The id of the merchant. | | &#x2713;
name | String | The name of the merchant. | | &#x2713;
provinceDesc | String | Description of the merchant province. | | &#x2713;
provinceId | Integer | The id of the merchant province. | | &#x2713;
stateId | String | The current state of the giftcard.<ul><li><font face="Consolas">A</font> (Active)</li> <li><font face="Consolas">D</font> (Deactivated)</li> </ul> | | &#x2713;
retailerId  | Integer | The retailer id. | | &#x2713;
retailerName | String | The retailer name. | | &#x2713;
longitude | Double | A longitude position. Both longitude and latitude need to be specified together. | | &#x2713;
latitude | Double | A latitude position. Both longitude and latitude need to be specified together. | | &#x2713;
distance | Double | The distance to the closest merchant. | | &#x2713;
