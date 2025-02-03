## Retailers

### GET /retailers

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/retailers" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  retailers: [ {
    "createDate": "2013-03-19T07:34:02+0200",
    "id": 1050,
    "name": "Test Retailer",
    "description": "The best tester",
    "logoURL": "www.testurl.com/image.png"
  }],
  "responseCode": "-1",
  "responseDesc": "Success"
}
```

Returns a list of the retailers linked to active campaigns on the channel.

Endpoint: <font face="Courier New">{root}/retailers</font>

Available methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
campaignId | Integer (query) | If specified it will return a list of retailers linked to the campaign. | &#x2713; |
createDate | String | The date the retailer was created. | | &#x2713;
id | Integer | The id of the retailer. | | &#x2713;
name | String | The name of the retailer. | | &#x2713;
description | String | A description of the retailer. | | &#x2713;
logoURL | String | The retailer logo URL. | | &#x2713;