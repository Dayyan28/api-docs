
# Overview - Coupon, Voucher and Giftcard Service

The CVS platform enables enterprises to issue and manage digital rewards in the form of coupons, vouchers, and gift cards. These can be redeemed at integrated point-of-sale (POS) systems.

## Issue a Coupon

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/coupons?issueWiCode=true" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "campaignId": "CAMP123",
    "userRef": "CUST456",
    "mobileNumber": "+27820000000",
    "smsMessage": "Your discount coupon is ready!",
    "sendSMS": true
}'

# Example response

{
    "coupon": {
        "id": 171117,
        "wicode": "123456789",
        "type": "COUPON",
        "value": 5000,
        "expiryDate": "2024-12-31T23:59:59+0200",
        "status": "ACTIVE",
        "campaign": {
            "id": "CAMP123",
            "name": "Summer Promotion"
        },
        "customer": {
            "reference": "CUST456"
        }
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

## Issue a Voucher

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/vouchers" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "campaignId": "CAMP789",
    "userRef": "CUST456",
    "mobileNumber": "+27820000000",
    "value": 10000,
    "type": "FIXED_VALUE"
}'

# Example response

{
    "voucher": {
        "id": 171118,
        "wicode": "987654321",
        "type": "VOUCHER",
        "value": 10000,
        "expiryDate": "2024-12-31T23:59:59+0200",
        "status": "ACTIVE",
        "campaign": {
            "id": "CAMP789",
            "name": "Welcome Bonus"
        },
        "customer": {
            "reference": "CUST456"
        }
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

## Issue a Gift Card

```json
# Example request

curl "https://za-vsp-int.wigroup.co/cvs-issuer/rest/giftcards" \
  -H "apiId: {apiId}" \
  -H "apiPassword: {apiPassword}" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "campaignId": "CAMP101",
    "userRef": "CUST456",
    "mobileNumber": "+27820000000",
    "balance": 50000,
    "message": "Happy Birthday!",
    "sendSMS": true
}'

# Example response

{
    "giftcard": {
        "id": 171119,
        "wicode": "456789123",
        "type": "GIFTCARD",
        "balance": 50000,
        "expiryDate": "2025-12-31T23:59:59+0200",
        "status": "ACTIVE",
        "campaign": {
            "id": "CAMP101",
            "name": "Digital Gift Card"
        },
        "customer": {
            "reference": "CUST456"
        }
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

## Common Response Codes

- `-1`: Success
- `1`: Invalid campaign ID
- `2`: Invalid customer reference
- `3`: Invalid value amount
- `4`: Campaign expired
- `5`: Campaign limit reached
- `100`: Authentication failed

## Best Practices

1. **Campaign Setup**
   - Create campaigns via CVS Web Portal
   - Define clear expiry dates
   - Set appropriate value limits
   - Configure product restrictions

2. **Customer Management**
   - Use consistent customer references
   - Validate mobile numbers
   - Store customer preferences

3. **Value Management**
   - Use cents for all monetary values
   - Set reasonable expiry dates
   - Monitor campaign limits

4. **Security**
   - Keep API credentials secure
   - Use HTTPS for all API calls
   - Validate all input data

5. **Error Handling**
   - Implement proper error handling
   - Log all API responses
   - Monitor failed issuances
