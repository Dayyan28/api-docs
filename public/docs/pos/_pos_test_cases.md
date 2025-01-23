## POS Test cases

A table of test cases is provided that should be completed to ensure that the POS implementation operates as expected.

Category | ID  | Description | Expected Outcome
-------- | --- | ----------- | ----------------
Payments | 1.1 | Redeem a payment wiCode to settle the basketAmount. Finalise the transaction. | Successful response, with the basketAmount processed.
 | 1.2 | Redeem a payment wiCode to settle the basketAmount. Reverse the transaction. | Successful response, with the basketAmount reversed.
 | 1.3 | Redeem an invalid payment wiCode (you may use any random number -- e.g. use "1234567").  (The transaction request should fail.) | Error message: "Transaction failed - token not reserved by VSP."
 | 1.4 | Redeem a payment wiCode to partially settle the bill. Finalise the transaction. Redeem another payment wiCode to settle the outstanding amount on the bill. Finalise the transaction. | Successful response, with a partial basket amount processed. Another successful response with the full basketAmount processed.
Deposit | 2.1 | Redeem a deposit wiCode to the value of the basketAmount. Finalise the transaction. | Successful response, with the basketAmount processed.
 | 2.2 | Redeem a deposit wiCode to the value of the basketAmount. Reverse the transaction. | Successful response, with the basketAmount reversed.
 | 2.3 | Redeem an invalid deposit wiCode. | Error message: "Transaction failed - token not reserved by VSP."
Withdrawal | 3.1 | Redeem a withdrawal wiCode to the value of the basketAmount. Finalise the transaction. | Successful response, with the basketAmount processed.
 | 3.2 | Redeem a withdrawal wiCode to the value of the basketAmount. Reverse the transaction. | Successful response, with the basketAmount reversed.
 | 3.3 | Redeem an invalid withdrawal wiCode. | Error message: "Transaction failed - token not reserved by VSP."
TipAmount | 4.1 | Redeem a payment wiCode with a positive tipAmount to settle the basketAmount. Finalise the transaction. (basketAmount + tipAmount = totalAmount) | Successful response, with the totalAmount processed.
 | 4.2 | Redeem a payment wiCode with a positive tipAmount to settle the basketAmount. Reverse the transaction. (basketAmount + tipAmount = totalAmount) | Successful response, with the totalAmount reversed.
CashbackAmount | 5.1 | Redeem a payment wiCode with a positive cashbackAmount to settle the basketAmount. Finalise the transaction. (basketAmount + cashbackAmount = totalAmount) | Successful response, with the totalAmount processed.
 | 5.2 | Redeem a payment wiCode with a positive cashbackAmount to settle the basketAmount. Reverse the transaction. (basketAmount + cashBackAmount = totalAmount) | Successful response, with the totalAmount reversed.
Voucher | 6.1 | Redeem a voucher. Finalise the voucher redemption. | Successful response, with the totalAmount processed.
 | 6.2 | Redeem a voucher. Reverse the voucher redemption. | Successful response, with the totalAmount reversed.
 | 6.3 | Redeem an invalid voucher wiCode. | Error message: "Transaction failed - token not reserved by VSP."
 | 6.4 | Redeem a voucher wiCode to partially settle the bill. Finalise the transaction. Redeem more wiCode(s) (payment, voucher, etc.) to settle the outstanding amount on the bill. Finalise the transaction. | Successful response, with a partial basket amount processed. Subsequent successful response(s) until the full basketAmount is processed.
Coupon | 7.1 | Open a bill and add an item with the SKU of a single coupon redemption. Redeem a single SKU coupon. Finalise the transaction. | Successful response, with the totalAmount processed.
 | 7.2 | Open a bill and add an item with the SKU of a single coupon redemption. Redeem a single SKU coupon. Reverse the transaction. | Successful response, with the totalAmount reversed.
 | 7.3 | Open a bill, and add items that do not have the SKU number of a single SKU coupon. Redeem a single SKU coupon. (The transaction request should fail.) | Error message: "Coupon cannot be redeemed. Required product(s) not found in basket."
 | 7.4 | Open a bill and add the two items with the SKU numbers of a multi SKU coupon. Redeem a multi SKU combo. Finalise the transaction. | Successful response, with the totalAmount processed.
 | 7.5 | Open a bill and add the two items with the SKU numbers of a multi SKU coupon. Redeem a multi SKU combo. Reverse the transaction. | Successful response, with the totalAmount reversed.
 | 7.6 | Open a bill and only add one of the  items with a SKU number of a multi SKU coupon. Redeem a multi SKU combo.  (The transaction request should fail.) | Error message: "Coupon cannot be redeemed. Required product(s) not found in basket."
 | 7.7 | Redeem a coupon wiCode to partially settle the bill. Finalise the transaction. Redeem more wiCode(s) (payment, voucher, etc.) to settle the outstanding amount on the bill. Finalise the transaction. | Successful response, with a partial basket amount processed. Subsequent successful response(s) until the full basketAmount is processed.
Loyalty - to be completed | 8.1 | Tests for earn loaylty codes -> potentially no discounts processed | 
 | 8.2 | Tests for reward redemption wiCodes. | 
 | 8.3 | Tests to display the correct information. | 
Error handling | 9.1 | Whenever a transaction fails, a VSP object should be received if the appropriate required fields are specified in the transaction request call | Display responseDesc from the VSP object.
 | 9.2 | If incorrect information are sent in the transaction request call, or if the required fields are not sent in the transaction request call, a response object will be received which contains a responseDesc field. | Display responseDesc from the response object.
Sit-down | 10.1 | Is it possible to print the QR code on the slip? The QR code must consist of the  QR Type, Bill ID, Store ID and the Basket Amount. | This is mandatory. The correct information should be contained in the QR code.
 | 10.2 | Perform a partial transaction with an activated sit-down model VSP. Perform the transaction history call on the basketId. | A single transactions is successfully displayed corresponding to the particular basketId provided.
 | 10.3 | Perform a partial transaction with an activated sit-down model VSP. Perform another payment to settle the outstanding amount on the bill. Perform the transaction history call on the basketID. | A list of two transactions are successfully displayed corresponding to the particular basketId provided.
 | 10.4 | Perform three partial transactions to settle the bill. If possible, use more than one VSP. Perform a transaction history call after each of the three payments and ensure that the outstanding amount on the POS is updated accordingly. | A list of three transactions are successfully displayed corresponding to the particular basketId provided. In total three transaction history calls should be made.
Over-the-counter | 11.1 | Is it possible to scan the QR code with with a relevant device? The QR code must consist of the QR Type and the Store ID. | This is mandatory. The correct information should be contained in the QR code.
 | 11.2 | Perform a payment with an activated informal enabled VSP. Perform the the transaction history call on the storeId. | The most recent transaction corresponding to the particular storeId is successfully displayed.
 | 11.3 | Perform a partial transaction with an activated sit-down model VSP. Perform another payment to settle the outstanding amount on the bill. Perform the transaction history call on the basketID. | A list of two transactions are successfully displayed corresponding to the particular basketId provided.
 | 11.4 | Perform three partial transactions to settle the bill. Perform a transaction history call after each of the three payments and ensure that the outstanding amount on the POS is updated accordingly. | In total three transaction history calls should be made. The correct mobile payment information should be displayed on the POS and on the till slip printed after the transaction is closed.
 | 11.5 | Perform four partial transactions to settle the bill. Perform a transaction history call after the first two payments and another after the fourth payment. Ensure that the outstanding amount on the POS is updated accordingly. | In total four transaction history calls should be made. The correct mobile payment information should be displayed on the POS and on the till slip printed after the transaction is closed.
Combination testing | 12.1 | Create a bill. Perform a partial payment using a sit-down model VSP. Perform a further partial payment using a Voucher wiCode. Perform a final partial payment using an informal VSP. | One transaction history call should be made to process the sit-down model VSP payment.
Voiding of items (Over-the-counter) | 13 | If any item (SKU) is removed from the basket, all mobile payment transactions (all mobile payment transactions excluding sit-down transactions) must be reversed. If the make-up of the products in a basket changes, an updated list of products (SKUs) must be provided with any mobile transaction request. | A note
 | 13.1 | Create a bill with two items. Perform a partial payment. Void an item. Proceed to tender again. Perform over-the-counter payments to settle the bill. | The initial partial payments must be reversed. An updated list (containing a single SKU) must be provided when new tenders are processed.
Webcam | 14.1 | Can the webcam be activated to scan a QR code, and then be deactivated? | This a a mandatory test.
Buzzer | 15.1 | Does the buzzer beep upon a QR code scan? | This a a mandatory test.

<ul>
<li>All relevant tests have to be successfully completed to ensure that the POS integration has been successful.</li>
<li>All coupon & voucher wiCode redemption and loyalty wiCode information will be supplied.</li>
<li>Partial payments on a bill should only be finalised once the sum of the partial payment equal or exceed the value of the basket. This rule only excludes sit-down payments.</li>
</ul>