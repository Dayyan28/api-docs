## Issuer Response Codes


Every response contains <font face="Courier New">responseCode</font> and <font face="Courier New">responseDesc</font> fields. These indicate whether the request was successful or failed. The only successful </font> is denoted by a value of <em>-1</em>. All other response codes indicate failed requests. The table below denotes all possible response codes.


Response Code | Response Description
---------- | -------
-1   | Successful
1000 | Interface Authentication Failed. Account does not exist.
1001 | Interface Authentication Failed. Invalid password.
1002 |  Interface Authentication Failed. Interface account not activated.
1003 | Interface Authentication Failed. Issuer account not activated.
1004 |  Issuer Webuser Authentication Failed. Account does not exist.
1005 |  Issuer Webuser Authentication Failed. Invalid password.
1006 | Issuer Webuser Authentication Failed. Issuer webuser not activated.
1007 |  Issuer Webuser Authentication Failed. Issuer webuser not linked to interface issuer.
1008 |  Interface Authentication Failed. Credentials missing.
1200 |  Campaign does not exist.
1201  | Campaign is not active.
1202  | Campaign not yet active for issuing vouchers.
1203  | Campaign issuing window closed. No more vouchers can be issued.
1204  | Campaign has reached its max available.
1205  | The campaign requires an user id to issue voucher to.
1206  | Campaign not linked to channel.
1207  | Campaign not linked to channel.
1208  | No more coupons available.
1209  | User has reached the maximum allowed live coupons per user on campaign.
1210  | User has reached the maximum allowed coupons per user on campaign.
1211  | Campaign is open to selected users only.
1212  | There is no SMS account linked. Cannot issue SMS voucher.
1213  | No more coupons available for today.
1214  | This is not a coupon campaign.
1215  | Transaction coupon does not exist.
1216  | Coupon does not exist.
1250  | Invalid voucher phase specified. Must be LIVE, REDEEMED, or EXPIRED.
1251  | Invalid campaign type specified.
1300  | No valid wiCodes found.
1301  | Could not link voucher infos.
1303  | Invalid wiCode.
1304  | No vouchers found for User.
1305  | Invalid campaign type specified.
1306  | Another request issued at the same time. Failing call.
1306  | Required field missing
1307  | Required field in voucherInfo missing
1308  | Coupon does not exist.
1309  | Coupon cannot be expired as it has already been redeemed.
1310  | Coupon already expired.
1311  | You must specify something to redeem.1312 User does not have a valid token.
1312  | User does not have a valid token.
1500  | Invalid campaign phase specified. Must be CURRENT, TODAY, PENDING.
1501  | Invalid campaign type specified.
1550  | Latitude and Longitude values are required in order to sort by distance.
1600  | Invalid channel group id specified.
2100  | Invalid wicode
2303  | Mobile Number not Registered
7100  | This is not a giftcard campaign.
7101  | Amount to issue exceeds available float for campaign.
7102  | Amount to issue exceeds maximum allowable amount to issue.
7103  | Amount to issue is less than minimum allowable amount to issue.
7104  | The campaign requires an user id to issue giftcard to.
7105  | No more giftcard available.
7106  | User has reached the maximum allowed giftcards per user on campaign.
7107  | Giftcard does not exist.
7108  | Giftcards cannot be issued with SMS.
7109  | The campaign does not allow channel to specify expiry days.
7110  | The campaign does not allow the requested expiry days.
7111  | Amount to issue invalid.