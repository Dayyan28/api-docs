## POS Go-live checklist

### Security

<ul>
	<li>Once in production, a QA and live environment are both required</li>
	<li>All communication to Yoyo must be done via HTTPS</li>
	<li>You must connect to the secure DNS endpoint that will be provided by Yoyo</li>
</ul>

### User journey

<ul>
	<li>The POS must allow for multiple tender types to be used to settle the entire outstanding amount on the basket. One or more of those tenders can be Mobile</li>
	<li>The mobile tender button must be labeled "Mobile"</li>
	<li>POS must be able to process a full, partial or zero-value approval</li>
	<li>Discount transactions (Coupons/Vouchers/Gift cards) are processed as partial payment tenders</li>
	<li>The POS must allow split tender with mobile as a payment method</li>
	<li>If a customer has multiple wiCodes to be redeemed, codes associated with coupons or vouchers should be used first. Thereafter, codes that hold no specific additional rewards may be processed if necessary</li>
</ul>

### Transaction messaging

<ul>
	<li>The wiCode platform supports a dual message architecture and as such a reversal message can be sent up in the event of a cancelled or voided transaction on the POS</li>
	<li>It is important to note that the finalise advice transaction request should not be sent until the basket has been tendered in full</li>
	<li>The reversal advice transaction request should be sent if the transaction/basket has been voided. All the mobile tenders processed on the same basket need to be reversed in case of a void or cancellation</li>
	<li>The transaction amount requested against a basket must include VAT</li>
</ul>