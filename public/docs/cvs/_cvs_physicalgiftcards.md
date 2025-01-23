## Physical Giftcards

A customer can purchase and redeem a physical Giftcard in a brick & mortar store. The integration will facilitate the activation and redemption of gift cards through the POS integration using specified APIs.


### PAN Generation
<ul>
<li><font face="Consolas"></font> <b>Process:</b> YOYO will generate a 16-digit (PAN) and configure against the relevant campaign.</li> 
<li><font face="Consolas"></font> <b>Usage:</b> The PAN number will serve as the wicode during transaction time.</li> 
<li><font face="Consolas"></font> <b>NB* - Physical Card Printing:</b> To be confirmed if the PAN will be printed on the physical card or converted to a scannable QR code for input by the cashier.</li> 
</ul> 

### Customer Journey
<ul>
<li><font face="Consolas"></font> User visits store where physical gift card is available for purchase</li>
<li><font face="Consolas"></font> Store displays gift cards near the checkout counter, or a dedicated gift card display area</li>
<li><font face="Consolas"></font> User wants to purchase a gift card and asks for specific denomination of value (based on their budget)</li>
<li><font face="Consolas"></font> Cashier scans the selected physical gift card or manually enters the gift card’s unique code (PAN) into the store’s point-of-sale (POS) system</li>
<li><font face="Consolas"></font> The POS system should then communicate with Yoyo to validate the gift card’s authenticity and the fact that it hasn’t been used</li>
<li><font face="Consolas"></font> If the gift card is valid and hasn’t been used previously, the POS system then loads the requested value onto the physical gift card</li>
<li><font face="Consolas"></font> The user then pays for the gift card’s value either in cash, by card or another payment method</li>
<li><font face="Consolas"></font> The POS system then generates a receipt for the gift card purchase, indicating the load value, PAN and any terms and conditions</li>
<li><font face="Consolas"></font> The physical gift card is now activated and ready for use</li>
<li><font face="Consolas"></font> The store cashier hands over the physical gift card and the receipt to the user</li>
<li><font face="Consolas"></font> The receipt should include any relevant redemption instructions, such as where users can check their gift card balance, and when the gift card will expire</li>
<li><font face="Consolas"></font> The user should be able to use the physical gift card at any affiliated retail location, online store or configured partner merchant</li>
</ul>

### Giftcard Activation Process
<ul>
<li><font face="Consolas"></font> <b>POS Requirement:</b> The POS checks the validity of the PAN by means of the following APIs.</li>
<li><font face="Consolas"></font> <b>PAN Utilization:</b> The token.id in the API request must be set as the gift card PAN number inputted from POS.</li>
<li><font face="Consolas"></font> Token Info Request to validate the PAN: <a href="index.html?#point-of-sale-token-info-request">Point of Sale - token info request</a></li>
</ul>

Request

_{<br/>
"token":{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id":"8200000153333333",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type":"wicode"<br/>
},<br/>
"storeTrxDetails":{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeId": 123268,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketId": "test",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "123",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"posId": "test",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashierId": "test"<br/>
}	
}_<br/>

Token Info response

{<br/>

"vsp": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 20016,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Yoyo wiCoupon",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"balances": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"balance": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Instore giftcard test",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "CENT",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5000<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hasVoucher": false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hasCoupon": false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hasWallet": true,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hasGiftCard": false<br/>
},<br/>
"responseCode": "-1",<br/>
"responseDesc": "Success"<br/>
}<br/>

After successful validation. The transaction API of type DEPOSIT will be used to load funds onto the gift card. 
Transaction API Documentation referenced here - <a href="index.html?#point-of-sale-transaction-request">Transaction request</a>

POST : https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/transaction

Request:

{<br/>
"type": "DEPOSIT",<br/>
"totalAmount": 5000,<br/>
"basketAmount": 5000,<br/>
"cashbackAmount": 0,<br/>
"tipAmount": 0,<br/>
"billAmount": 5000,<br/>
"token": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "8200000153333333",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "WICODE"<br/>
},<br/>
"storeTrxDetails": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeId": "12345",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"posId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashierId": "test2"<br/>
}<br/>

Response:

{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"token": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "8200000153333333",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "BIN"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "DEPOSIT",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeTrxDetails": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeId": 123268,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": 70000858,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"posId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashierId": "test2"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"wiTrxId": 478094,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"totalAmountProcessed": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketAmountProcessed": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashbackAmountProcessed": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tipAmountProcessed": 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amountToSettle": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"billAmount": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"vsp": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 20016,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Yoyo wiCoupon",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "500",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"responseCode": "-1",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"responseDesc": "Success"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"discount": [],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"loyalty": [],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"balance": [],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"redemptions": [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "DEPOSIT",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"processedAmount": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"settleAmount": 5000,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "WALLET",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"vspId": 20016,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"wiVspTrxId": 707442<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
],<br/>
"responseCode": "-1",<br/>
"responseDesc": "Success"<br/>
}<br/>

### After a successful DEPOSIT transaction response with the response of the below fields:
"responseCode": "-1",<br/>
"responseDesc": "Success"<br/>

The POS must initiate the transaction finalization process by initiating the advice API call
To finalize the transaction and activate the Giftcard for the customer to use for redemption.

The advice request and response are as follows. <br/>
Advice API documentation can be found here: <a href="index.html?#point-of-sale-advise-request">Transaction advise request</a>

POST : https://rad2.wigroup.co:8181/wigroup-transactionengine/pos-providers/advise


Request:<br/>
{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"action": "FINALISE",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"originalTrx": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeTrxDetails": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeId": "12345",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"posId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashierId": "test2"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"wiTrxId": 478094,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "DEPOSIT"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
}<br/>


Response:<br/>
{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"originalTrx": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeTrxDetails": {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storeId": 123268,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"basketId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"trxId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"posId": "test2",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cashierId": "test2"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"wiTrxId": 478094,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "DEPOSIT"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"action": "FINALISE", <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"wiTrxId": 478094, // wiTrxId retrieved from the transaction response<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"responseCode": "-1",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"responseDesc": "Success"<br/>
}<br/>

Once the transaction has been finalized, the gift card is now activated for redemption. The redemption process must follow the current integrated redemption process. The PAN number must be utilized as the as the wicode during the redemption process.

Transaction Scenarios:

Basket Modifications: If any changes are made to the basket after the transaction request (items added or removed), the POS must send a REVERSE type of advice call, and the payment or redemption process must start again.

Abandoned Transactions: If the transaction is abandoned, the POS must reverse the transaction.

Partial Payment: During redemption, If the gift card covers the basket amount partially, the customer must pay the remaining balance using an alternate payment method. After successful alternate payment, the finalize advice API must be initiated to conclude the transaction.

API References.<br/>
Info request: <a href="index.html?#point-of-sale-token-info-request">Point of Sale - token info request</a><br/>
Transaction request: <a href="index.html?#point-of-sale-transaction-request">Transaction request</a><br/>
Advice request: <a href="index.html?#point-of-sale-advise-request">Transaction advise request</a><br/>


### Error Response Codes


Every response contains <font face="Courier New">responseCode</font> and <font face="Courier New">responseDesc</font> fields. These indicate whether the request was successful or failed. The only successful </font> is denoted by a value of <em>-1</em>. All other response codes indicate failed requests. The table below denotes all possible response codes.


Response Code | Response Description | Notes
---------- | ------- | -------
-1    | Successful 
2313  | Invalid wiCode. | Deactivated Giftcard
2314  | Invalid wiCode. | Expired Giftcard