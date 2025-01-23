# Overview - Value Store Provider

The Yoyo Platform is an open, interoperable platform that facilitates transactions between a Retailer, Customer and Value Store Provider (VSP) at a Point of Sale/eCommerce. A single integration with the Yoyo Platform enables a Point of Sale/eCommerce to interact with any Mobile Application and enable a Customer to transact using a wiCode (token) in store.

## Dual Messaging Architecture

```json
{
  "transaction_flow": {
    "phase1": {
      "name": "Transaction Request",
      "purpose": "Initial authorization",
      "flow": [
        "POS initiates transaction",
        "Platform routes to VSP",
        "VSP authorizes or declines"
      ]
    },
    "phase2": {
      "name": "Advice Request",
      "purpose": "Final transaction state",
      "types": {
        "FINALISE": "Confirms successful completion",
        "REVERSE": "Cancels/voids transaction"
      }
    }
  },
  "important_rules": {
    "advice_handling": {
      "mandatory": true,
      "cannot_decline": true,
      "represents": "Real-world transaction outcome"
    },
    "retry_mechanism": {
      "enabled": true,
      "condition": "VSP system unavailable",
      "action": "Platform retries until successful"
    }
  }
}
```

The Yoyo Platform implements a dual messaging architecture to ensure reliable transaction processing:

1. **Transaction Request**
   - Initiates payment, deposit, or withdrawal
   - Platform routes request to VSP for authorization
   - VSP validates and responds with approval/decline

2. **Advice Request**
   - Confirms final transaction state
   - Types:
     - **FINALISE**: Confirms successful completion
     - **REVERSE**: Indicates cancellation or timeout
   - Cannot be declined by VSP
   - Represents real-world transaction outcome

### Important Implementation Notes

1. **VSP Responsibilities**
   - Must implement both message types
   - Cannot decline advice requests
   - Must handle retry attempts
   - Should reserve funds on initial authorization

2. **Timing Considerations**
   - Transaction timeout: 15 seconds
   - Advice may be delayed up to 24+ hours
   - Must maintain transaction state until advice received

3. **Fund Management**
   - Reserve funds on successful authorization
   - Deduct/add funds only on FINALISE
   - Release reserved funds on REVERSE

## Transaction Types
The platform facilitates various transaction types including:
- Pay in store
- Earn & Burn loyalty
- Redeem coupon/voucher/gift card
- Cash Withdrawal/Cashback
- Cash Deposit

All transactions across different value store providers occur at point of sale through the exact same transaction process, ensuring:
- Cashiers don't need special training per provider
- Unified recon and settlement mechanisms
- Detailed per-provider reporting for business intelligence

## Platform Architecture

For any transaction to occur, there are three primary entities:
1. **Value Store Provider (VSP)**: Manages and stores redeemable customer value
2. **Retailer**: The merchant conducting the transaction
3. **YoyoPlatform**: The central orchestrator handling routing and settlement

### Key Integration Principles
The YoyoPlatform provides a unified integration solution that:
- Aggregates multiple Value Store Providers
- Offers retailers a single technical integration point
- Enables cross-platform value redemption
- Simplifies complex transaction routing

## VSP Types

There are typically three types of VSPs that integrate with the platform:

### 1. Treasury / Value Store
These are typically 'wallets' where funds are allocated through:
- Insurance payouts
- Lotto winnings
- Micro job earnings
- Employee benefit rewards
- Loyalty and coupon/voucher systems

### 2. Direct Bank
For direct integrations into Bank Accounts through a middleware API layer.

### 3. Payment Gateway
For payments in apps that store users' banking cards (credit or debit), routing payments through to relevant banks.

## Integration Requirements

When integrating as a VSP with the Yoyo Platform, the following requirements must be met:

1. **Environment Setup**
   - Maintain both test and production environments
   - SSL certification with 128-bit encryption for production
   - Connect to secure DNS endpoints provided by Yoyo Group

2. **Technical Requirements**
   - All communication via HTTPS (TLS 1.2 minimum)
   - Response time within 10 seconds
   - Support for Dual Messaging
   - Never reject advice calls
   - Prevent transaction cancellation during processing

3. **Implementation Guidelines**
   - Document and get approval for user journey
   - Follow "Powered by Yoyo Group" guidelines
   - Submit final implementation for QA testing
   - No code changes during test cycles
   - Recommended 15-minute wiCode validity period

## Auto-Redeem Functionality

The platform supports linking multiple VSPs to enable auto-redeem functionality:

```json
{
  "auto_redeem_features": {
    "discount_vouchers": {
      "triggers": [
        "First-time registration",
        "First payment",
        "Campaign-specific"
      ]
    },
    "loyalty_points": {
      "earning_methods": [
        "Specific product purchases",
        "Total transaction amount",
        "Payment or deposit amount"
      ]
    }
  }
}
```

This functionality allows:
- Grouping multiple wiCodes into one
- Reducing number of QR scans at POS
- Enhancing user journey
- Minimizing transaction time

## Bills Request

```json
# Request Example
{
  "endpoint": "/vsp/bills",
  "method": "GET",
  "headers": {
    "apiId": "<your_api_id>",
    "apiPassword": "<your_api_password>",
    "Content-Type": "application/json; charset=UTF-8"
  },
  "parameters": {
    "qrCode": "<qr_data>"
  }
}

# Response Example
{
  "store": {
    "id": 1050,
    "name": "YoyoGroup Test Merchant"
  },
  "retailer": {
    "id": 999,
    "name": "YoyoGroup SA"
  },
  "amount": 5000,
  "basketId": "basket01",
  "responseCode": "-1",
  "responseDesc": "Success"
}
```

The bills request accepts QR code data and returns a bill object containing transaction details. This enables:
- QR code parsing and validation
- Collection of transaction details
- Population of transaction screens
- Initiation of payment process