## Token Manager REST API

The Token Manager API is used by VSPs to reserve tokens (wiCodes) for specific time frames. Tokens automatically expire and return to the available pool. The wiCode length is determined by the token lifespan and availability.

### Important Notes

1. **Date Format**: Strict ISO 8601 format is required for dates. Example in Java:

<aside class="notice"><b>SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");</b></aside>

2. **Monetary Format**: All amounts are in <em>cents</em>.

###API Credentials

This section provides interface definitions to allow for implementation on various platforms and in
different programming languages. Note that:
<ul>
<li> Our APIs were designed using the RESTful architectural style.</li>
<li> Request and response bodies are formatted as JSON exclusively.</li>
<li> Variables are indicated between angle brackets and the pound sign, <em>e.g.</em> <font face="Courier New"><#variable#></font>. </li>
<li> Different request -­‐ response combinations are explored using <em>'Cases'</em>. </li>
</ul>

3. **Required in request headers**:
   - `apiId`: Your API ID
   - `apiPassword`: Your API Password
   - `Content-Type`: application/json


4. **Token Types**:
   - `PAYMENT`: Standard payment token
   - `DEPOSIT`: For cash deposits
   - `WITHDRAWAL`: For cash withdrawals

5. **Auto-Redeem Feature**: Multiple VSP services can be linked:
   - Discount wiCodes (from CVS)
   - Loyalty wiCodes (from wiLoyalty)
   - Both can be included in a single transaction

### Test credentials
All calls to the wiCode platform must contain the issuing channel credentials in the header of the API call. This table contains a set of VSP-specific API credentials that may be used to authenticate all API calls made to CVS and YoyoPlatform.

API ID | API Password
------ | ------------
<font face="Courier New"><#apiID#></font> | <font face="Courier New"><#apiPassword#></font>

<aside class="notice">Test API credentials are provided by the YoyoGroup integration team.</aside>

### Linking multiple VSP's
The wiCode Platform has the ability to link multiple VSP’s to a main transactional VSP. This gives the main VSP access to other VSP services such as the Yoyo Coupon Voucher Service and the Yoyo Loyalty Service. This functionality is referred to auto-redeem whereby multiple wiCodes can be grouped or merged into single user token. This reduces the number of QR scans or wiCode entries for these scenarios at the point of sale, thus enhancing the user journey and reducing time at the till.

<aside class="notice">In order to issue discount and loyalty tokens the VSP will be given access credentials and REST endpoints to the API’s for these services and the standard YoyoGroup campaign processes for these integrations will need to be followed. Due to the varying business requirements of this portion to the ‘Auto-Redeem’ integration for VSP’s it will need to be visited on a project-by-project basis.</aside>

### Use-cases
<ul>
<li>A single discount voucher is issued per user for registering or paying with their app for the first time.</li>
<li>A number of coupon campaigns linked to a channel for redemption against each purchase. </li>
<li>Loyalty is earned on specific products purchased and vouchers or coupons are issued as rewards.</li>
<li>Loyalty is earned on specific products purchased and vouchers or coupons are issued as rewards.</li>
<li>Loyalty is earned on total amount of Payment or Deposit and vouchers or coupons are issued as rewards</li>
</ul>

### Discount wiCode
In order to add a discount wiCode into a payment wiCode the VSP’s application server will need to make an Issue Coupon API call to the CVS API, once the response is received the VSP server must dynamically add the wiCode from CVS into the main Token Manager createToken request as a discountWicode.

When the User redeems the main Payment wiCode in store, the wiCode platform will route the discount wiCode to CVS for authorisation, if approved the discount will be passed back into the wiCode Platform against the basket amount before the total processed amount is sent into the VSP for authorisation.

<img src="./images/auto_redeem_discount.png" alt="Auto-redeem a discount wiCode."/>

### Discount and Loyalty wiCodes
In order to add a Loyalty wiCode into a payment wiCode the VSP’s application server will need to make an Issue wiCode API call to the wiLoyalty API, once the response is received the VSP server must dynamically add the wiCode from wiLoyalty into the main Token Manager createToken request as a loyaltyWicode along with the discount wiCode.

When the User redeems the main Payment wiCode in store, the wiCode platform will route the discount wiCode to CVS for authorisation and the loyalty wiCode to wiLoyalty, if approved the discount will be passed back into the wiCode Platform against the basket amount before the total processed amount is sent into the VSP for authorisation, loyalty is earned against the total processed amount after the discount is processed. Loyalty auto redemption can be added to the payment and deposit transaction types without the discount wiCode if the business model requires it.

<img src="./images/auto_redeem_discount_and_loyalty.png" alt="Auto-redeem a discount wiCode."/>


**Common error codes:**

- `TOKEN_001`: Invalid token type
- `TOKEN_002`: Invalid amount
- `TOKEN_003`: Invalid expiry date
- `TOKEN_004`: Invalid discount wiCode
- `TOKEN_005`: Invalid loyalty wiCode
- `AUTH_001` : Invalid API credentials
