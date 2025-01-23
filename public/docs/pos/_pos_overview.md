# Overview - Point of Sale Integration

The Yoyo Platform is an open, interoperable system that enables mobile and card-initiated transactions directly at point-of-sale. Through a single integration, merchants can:
- Accept transactions from any integrated mobile application
- Process multiple transaction types
- Handle various payment methods
- Manage loyalty programs

## Transaction Flow

1. **Token Validation**
   - Customer presents wiCode/QR code
   - System validates token authenticity
   - Checks expiry and status

2. **Transaction Processing**
   - System processes payment
   - Applies any discounts
   - Calculates loyalty points
   - Updates balances

3. **Confirmation**
   - Sends confirmation to all parties
   - Updates transaction records
   - Issues digital receipt

## Integration Benefits

1. **Unified Integration**
   - One integration handles all transaction types
   - Supports multiple payment providers
   - Common API for all services

2. **Enhanced Security**
   - Secure token generation
   - Real-time validation
   - Encrypted communication

3. **Flexible Configuration**
   - Customizable transaction flows
   - Configurable business rules
   - Adaptable to merchant needs

## Token Validation

```json
{
    "token": {
        "id": "123456789",
        "type": "WICODE"
    },
    "storeTrxDetails": {
        "storeId": "STORE123",
        "basketId": "BASKET001",
        "cashierId": "CASHIER001",
        "posId": "POS001",
        "trxId": "TRX001"
    }
}
```

## Process Transaction

```json
{
    "token": {
        "id": "123456789",
        "type": "WICODE"
    },
    "type": "PAYMENT",
    "storeTrxDetails": {
        "storeId": "STORE123",
        "retailerId": "RETAIL001",
        "basketId": "BASKET001",
        "trxId": "TRX001",
        "posId": "POS001",
        "cashierId": "CASHIER001"
    },
    "billAmount": 10000,
    "basketItems": [
        {
            "id": "PROD001",
            "description": "Coffee",
            "quantity": 2,
            "unitPrice": 2500,
            "totalAmount": 5000
        },
        {
            "id": "PROD002",
            "description": "Muffin",
            "quantity": 1,
            "unitPrice": 5000,
            "totalAmount": 5000
        }
    ]
}
```


## Transaction Response

```json
{
    "wiTrxId": 431711,
    "totalAmountProcessed": 10000,
    "basketAmountProcessed": 10000,
    "cashbackAmountProcessed": 0,
    "tipAmountProcessed": 0,
    "amountToSettle": 10000,
    "billAmount": 10000,
    "vsp": {
        "id": 20016,
        "name": "Example VSP",
        "trxId": "569023",
        "responseCode": "-1",
        "responseDesc": "Success",
        "vspRef": "VSP_REF_001"
    },
    "discount": [],
    "loyalty": [
        {
            "points": 100,
            "balance": 500
        }
    ],
    "balance": [],
    "redemptions": [],
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

## Finalize Transaction

```json
{
  "action": "FINALISE",
  "originalTrx": {
    "wiTrxId": "exampleTransactionId123",
    "type": "PAYMENT",
    "storeTrxDetails": {
      "storeId": "store123",
      "cashierId": "cashier456",
      "timestamp": "2024-12-11T10:00:00Z",
      "amount": 10000
    }
  },
  "status": {
    "code": "SUCCESS",
    "message": "Transaction finalized successfully"
  }
}
```


## Error Handling

```json
{
    "responseCode": "001",
    "responseDesc": "Invalid token",
    "errors": [
        {
            "code": "TOKEN_001",
            "message": "Token has expired"
        }
    ]
}
```

Common error codes:
- `TOKEN_001`: Invalid or expired token
- `TRX_001`: Invalid transaction type
- `TRX_002`: Invalid amount
- `TRX_003`: Insufficient funds
- `AUTH_001`: Invalid POS credentials

## Best Practices

1. **Token Validation**
   - Always validate tokens before processing
   - Check expiry and status
   - Verify store details match

2. **Transaction Processing**
   - Include detailed basket information
   - Handle discounts and loyalty properly
   - Process in correct order (discounts → payment → loyalty)

3. **Error Handling**
   - Implement proper error handling
   - Show clear error messages to cashiers
   - Log all errors for troubleshooting

4. **Security**
   - Keep credentials secure
   - Use HTTPS for all API calls
   - Validate all input data

5. **User Experience**
   - Clear interface for cashiers
   - Quick error resolution
   - Proper receipt printing
