# Overview - Coupon, Voucher and Giftcard Service

The CVS platform enables enterprises to issue and manage digital rewards in the form of coupons, vouchers, and gift cards. These can be redeemed at integrated point-of-sale (POS) systems.

## Issue a Coupon

```json
{
    "campaign": {
        "id": "CAMP123",
        "name": "Summer Promotion"
    },
    "customer": {
        "reference": "CUST456",
        "mobile": "+27820000000",
        "email": "customer@example.com"
    },
    "coupon": {
        "value": 5000,  // 50.00 in cents
        "expiryDate": "2024-12-31T23:59:59+0200",
        "products": [
            {
                "id": "PROD001",
                "name": "Coffee"
            }
        ]
    }
}
```


## Issue a Voucher

```json
{
    "campaign": {
        "id": "CAMP789",
        "name": "Welcome Bonus"
    },
    "customer": {
        "reference": "CUST456",
        "mobile": "+27820000000"
    },
    "voucher": {
        "value": 10000,  // 100.00 in cents
        "expiryDate": "2024-12-31T23:59:59+0200",
        "type": "FIXED_VALUE"
    }
}
```


## Issue a Gift Card

```json
{
    "campaign": {
        "id": "CAMP101",
        "name": "Digital Gift Card"
    },
    "customer": {
        "reference": "CUST456",
        "mobile": "+27820000000",
        "email": "customer@example.com"
    },
    "giftCard": {
        "value": 50000,  // 500.00 in cents
        "expiryDate": "2025-12-31T23:59:59+0200",
        "message": "Happy Birthday!",
        "sender": {
            "name": "John Doe",
            "email": "john@example.com"
        }
    }
}
```

## Response Examples

### Success Response
```json
{
    "wicode": "123456789",
    "type": "COUPON",  // or "VOUCHER" or "GIFTCARD"
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
}
```

### Error Response
```json
{
    "error": {
        "code": "CVS_001",
        "message": "Invalid campaign ID",
        "details": "The specified campaign does not exist or has expired"
    }
}
```

## Common Error Codes

- `CVS_001`: Invalid campaign ID
- `CVS_002`: Invalid customer reference
- `CVS_003`: Invalid value amount
- `CVS_004`: Campaign expired
- `CVS_005`: Campaign limit reached
- `AUTH_001`: Invalid API credentials

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