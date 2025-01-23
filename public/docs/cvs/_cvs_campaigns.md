## Campaigns

### GET /campaigns/{campaignId}/metadata

```json

# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/campaigns/{campaignId}/metadata" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X GET

# Example response

{
  "campaignsMetadata": [
  {
    "name": "Kauai",
    "value": "Smoothie"
  },
  {
    "name": "Kauai",
    "value": "Food"
  }],
  "paging":    {
       "pageSize": 20,
       "pageOffset": 0,
       "numItemsOnPage": 2,
       "numItemsInTotal": 2,
       "numPages": 1
    },
    "responseCode": "-1",
    "responseDesc": "Success",
    "httpStatusCode": 200
 }

```

This API call can be used to retrieve all metadata entries linked to the given campaign.

Meta-data is additional information stored against the campaign by the Campaign Owner. This is configured during campaign setup. Typical use cases would be to store an external system campaign identifier or to store additional tags against the campaign to help the application group campaigns.

Endpoint: <font face="Courier New">{root}/campaigns</font>

Available Methods: <b>GET</b>

Parameter | Type | Description | Request | Response
--------- | ---- | ---------- | ------- | --------
campaignId | Integer | Filter metadata for specific campaign. | &#x2713; |
name | String | The name of the key value pair. | | &#x2713;
value | String | The value of the key value pair. | | &#x2713;
