## POS Response Codes

Every response contains <font face="Courier New">responseCode</font> and <font face="Courier New">responseDesc</font> fields. These indicate whether the request was successful or failed. The only successful </font> is denoted by a value of <em>-1</em>. All other response codes indicate failed requests. The table belows denotes all possible response codes.

Response Code | Response Description
---------- | -------
-1  | Successful
0001  | General System Error
0023  | Required field missing or invalid type used.
2001  | Invalid transaction type supplied.
2002  | Invalid token type supplied.
2107  | Transaction to VSP timed out.
2108  | VSP not found.
2110  | Failed to log transaction products.
2111  | API POS not found.
2112  | Store not found.
2114  | Store does not support Deposits.
2115  | Store does not support Payments.
2116  | Store does not support Withdrawals.
2117  | VSP does not support Deposits.
2118  | VSP does not support Payments.
2119  | VSP does not support Withdrawals.
2120  | Invalid token.
2122  | The totalAmount does not match basketAmount + cashbackAmount.
2124  | POS provider not active.
2125  | Store is not active.
2121  | Cashback can only be processed on a Payment.
2126  | Store is not linked to POS provider.
2127  | Store does not support Cashbacks.
2128  | VSP does not support Cashbacks.
2129  | Store does not accept VSP.
2130  | Store does not allow Deposits for VSP.
2131  | Store does not allow Payments for VSP.
2132  | Store does not allow Withdrawals for VSP.
2133  | Store does not allow Cashback on Payments for VSP.
2134  |  Token Info request failed.
3001  |  Invalid request. User credentials missing.
3002  |  Invalid user credentials.
3003  |  User not activated.
3004  |  Invalid user credentials.
3051  |  Password invalid. A valid password must be specified.
3052  |  Invalid state. Available states are {A, D, P, RP}.
3053  |  Invalid delivery method. Available methods are {sms, email}.
3054  |  Invalid token type specified.
3055   | Country code invalid. A valid country code must be specified.
3056  |  OTP invalid. A valid OTP must be specified.
3057  |  General OTP Error.
3058  |  OTP is expired.
3059  |  Id invalid. A valid id must be specified.
3060  |  Date invalid. Must have format yyyy-MM-dd HH:mm:ss.
3101  |  Name invalid. Max length allowed is 255 Characters.
3102  |  Surname invalid. Max length allowed is 255 Characters.
3103  |  Gender invalid. Available options are {M, F}.
3104  |  Date of birth invalid. Must have format yyyy-MM-dd.
3105  |  User registration request failed.
3106  |  WiTag is already linked to a user.
3107  |  Username invalid. A valid username must be specified.
3108  |  User already activated.
3109  |  User already linked to VSP.
3110  |  User not linked to WiTag.
3111  |  User already linked to a WiTag with the same description.
3112  |  User not linked to VSP.
3113  |  User and VSP linked state inactive.
3114  |  User in progress with a transaction.
3115  |  User already reserved wiCode for VSP with the same VSP reference.
3116  |  User not reserved by VSP.
3117  |  Another user with the same email is already registered.
3118  |  Another user with the same mobile number is already registered.
3151  |  VSP not activated.
3152  |  VSP registration request failed. VSP already exists.
3153  |  VSP description invalid. Max length allowed is 255 Characters.
3154  |  User cancelled.
3155  |  VSP is not a discount VSP.
3156  |  VSP is not a loyalty VSP.
3157  |  VVSP is not linked to discount VSP.
3158  |  VSP is not linked to loyalty VSP.
3201  |  WiTag length invalid.
3202  |  WiTag description invalid.
3203  |  The WiTag life is invalid. Must specify a value > 0.
3204  |  WiTag not linked to a user.
3205  |  No session active for wiTag.
3230  |  WiQR invalid.
3231  |  WiQR is expired.
3251  |  VSP invalid. Must specify a value > 0.
3252  |  VSP Reference invalid. Max length allowed is 255 Characters.
3253  |  The token life is invalid. Must specify a value > 0.
3254  |  The WiCode is invalid. A valid WiCode must be specified.
3255  |  There is no wiCode pool available for your request parameters.
3256  |  WiCode Pool not activated.
3257   | WiCode Pool Connection Error.
3258  |  Invalid WiCode Pool interface credentials.
3259  |  General WiCode Pool Error.
3260   | WiCode is expired.
3261   | WiCode not reserved.
3262  |  WiCode already locked.
3263  |  WiCode not linked to a user.
3264   | WiCode pool depleted.
3265  |  WiCode linked to discount/loyalty wicodes.
3300  |  Invalid BIN.
4001  |  Invalid date supplied.
