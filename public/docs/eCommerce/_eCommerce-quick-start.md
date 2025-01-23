
# eCommerce Quick Start

A basic eCommerce integration makes use of 3 calls to complete a transaction: a tokenInfo, Transaction and Advise.

************DIAGRAM GOES HERE*************


### Authentication - header
All the requests make use of the same authentication details and will be provided by the friendly integration team at Yoyo. 
Here is a snippet that show what the REST request header should look like.

_{<br/>
    "id":"POS_ID_GOES_HERE",<br/>
    "password":"POS_PASSWORD_GOES_HERE",<br/>
    "apiServerVersion": "1.14",<br/>
    "Content-Type":"application/json"<br/>
}_<br/>


## Step 1: Token Info Request

This will be used to query if the wiCode being entered is valid and can be redeemed on the eCommerce website. 
The response will in most cases also include the monetary value of the voucher or gift card. This will allow the integrating client to show users the possible discount that will be applied to a basket. The exception to this rule is in the case of a coupon that applies to specific items or vouchers that apply a percentage discount.

**Host url**: 'https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/token-info' <br/>
**HTTP Method**: POST

```json
#TOKEN INFO REQUEST EXAMPLE
{
    "token": {
        "id": 1234567,
        "type": "WICODE"
    },
    "storeTrxDetails": {
        "storeId": 1050,
        "basketId": "basket1",
        "cashierId": "cashier1",
        "posId": "workstation1",
        "trxId": "1"
    }
}
```

### Token Info Response
```json
#COUPON RESPONSE EXAMPLE

{
    "vsp": {
        "id": 20016,
        "name": "wiCoupon",
        "coupons": {
            "coupon": [
                {
                    "product": [
                        {
                            "id": "coffee1"
                        },
                        {
                            "id": "coffee2"
                        },
                        {
                            "id": "coffee3"
                        }
                    ],
                    "name": "API Coupon Documentation",
                    "discount": 1750
                }
            ]
        },
        "hasVoucher": false,
        "hasCoupon": true,
        "hasWallet": false,
        "hasGiftCard": false
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```

```json
#VOUCHER RESPONSE EXAMPLE

{
    "vsp": {
        "id": 20016,
        "name": "wiCoupon",
        "coupons": {
            "coupon": [
                {
                    "name": "API Voucher Documentation",
                    "discount": 10000
                }
            ]
        },
        "hasVoucher": true,
        "hasCoupon": false,
        "hasWallet": false,
        "hasGiftCard": false
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```  

```json 
#GIFTCARD RESPONSE EXAMPLE

{
    "vsp": {
        "id": 20016,
        "name": "wiCoupon",
        "balances": {
            "balance": [
                {
                    "name": "API Gift Card Documentation",
                    "type": "CENT",
                    "value": 50000
                }
            ]
        },
        "hasVoucher": false,
        "hasCoupon": false,
        "hasWallet": true,
        "hasGiftCard": false
    },
    "responseCode": "-1",
    "responseDesc": "Success"
}
```  
All responses with a "responseCode": "-1" is considered successful.<br/>
Anything other than "-1" is considered failed. Please refer to "responseDesc" for more information<br/>

