## CVS test cases

A table of test cases is provided that should be completed to ensure that the CVS implementation operates as expected.

Category | ID | Call | Description | Expected Outcome
-------- | ---| ---- | ----------- | ----------------
giftcards | 1.1 | issueGiftCard | Issue a Gift Card with by specifying the balance, campaignId and the userRef. | Successful response, giftcard object is returned.
 | 1.2 | getGiftCard | Retrieve an issued Gift Card by specifying the giftcardId in the path. | Successful response, giftcard object is returned.
 | 1.3 | deleteGiftCard | Delete an issued Gift Card by specifying the giftcardId in the path. | Successful response, with a responseCode of "-1"
coupon (Coupons & Vouchers) | 2.1 | IssueCoupon | Issue a Coupon or Voucher with by specifying the balance, campaignId and the userRef. | Successful response, coupon object is returned.
 | 2.2 | getCoupon | Retrieve an issued Coupon or Voucher by specifying the couponId in the path. | Successful response, coupon object is returned.
 | 2.3 | deleteCoupon | Delete an issued Coupon or Voucher by specifying the couponId in the path. | Successful response, with a responseCode of "-1"
users/{userRef}/token | 3.1 | setUserToken | Issue a Gift Card wiCode by specifying a single giftcardId | Successful response, a token object is returned.
 | 3.2 | setUserToken | Issue a Gift Card wiCode by specifying multiple giftcardIds | Successful response, a token object is returned.
 | 3.3 | setUserToken | Issue a Gift Card wiCode by specifying all active giftcardIds (i.e. giftcardIds = ["-1"]) | Successful response, a token object is returned.
 | 3.4 | setUserToken | Issue a Coupon wiCode by specifying a single couponIds | Successful response, a token object is returned.
 | 3.5 | setUserToken | Issue a Coupon wiCode by specifying multiple couponIds | Successful response, a token object is returned.
 | 3.6 | setUserToken | Issue a Coupon wiCode by specifying all active couponIds (i.e. couponIds = ["-1"]) | Successful response, a token object is returned.
 | 3.7 | setUserToken | Issue a Voucher wiCode by specifying a single couponId | Successful response, a token object is returned.
 | 3.8 | setUserToken | Issue a Voucher wiCode by specifying multiple couponIds | Successful response, a token object is returned.
 | 3.9 | setUserToken | Issue a Voucher wiCode by specifying all active couponIds (i.e. couponIds = ["-1"]) | Successful response, a token object is returned.
 | 3.10 | getUserToken | Retrieve an issued Coupon or Voucher by specifying the couponId in the path. | Successful response, a token object is returned.
 | 3.11 | deleteUserToken | Delete an issued Coupon or Voucher by specifying the couponId in the path. | Successful response, with a responseCode of "-1"
giftcardtransactions | 4.1 | getGiftCardTransactions | Retrieve a list of Gift Card transactions linked to a specific campaign. The apiId and the apiPassword must be provided, while the other fields may be used as query parameters. | Successful response, a giftcardTransactionList object is returned.
 | 4.2 | getGiftCardTransactions | Retrieve the details of a particular Gift Card by specifying the id in the path of the call. | Successful response, a giftcardTransactionList object is returned containing the Gift Card specified in the id.
coupontransactions | 5.1 | getCouponTransactions | Retrieve a list of Coupon & Voucher transactions linked to a specific campaign. The apiId and the apiPassword must be provided, while the other fields may be used as query parameters. | Successful response, a couponTransactionList is returned.
 | 5.2 | getCouponTransactions | Retrieve the details of a particular Coupon or Voucher by specifying the id in the path of the call. | Successful response, a couponTransactionList object is returned containing the Coupon or Voucher specified in the id.
transactions | 6.1 | transactions | Retrieve a list of Coupon & Voucher and Gift Card transactions linked to a specific campaign. The apiId and the apiPassword must be provided. | Successful response, a transaction object is returned.
giftcardcampaigns | 7.1 | getGiftCardCampaigns | Retrieve a list of Gift Card campaigns linked to a channel. The apiId and the apiPassword must be provided. | Successful response, a giftCardCampaigns object is returned.
couponcampaigns | 8.1 | getCouponCampaigns | Retrieve a list of Coupon and Voucher campaigns linked to a channel. The apiId and the apiPassword must be provided. | Successful response, a couponCampaigns object is returned.

<ul>
<li> All relevant tests have to be successfully completed to ensure that the CVS integration has been successful. </li>
<li> All coupon & voucher wiCode redemption and loyalty wiCode information will be supplied. </li>
</ul>
