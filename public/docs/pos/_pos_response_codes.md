# Response Codes

Below is a list of <b>Transaction Engine</b> and <b>Bill Server</b> Response Codes:

## Transaction Engine

Response Code | Response Description
---------- | -------
-1    | Successful
00001	| General System Error.
00002	| General System Error. System configuration incorrect.
00003	| System Error. Request not found.
00004	| General Database Error.
00005	| Duplicate key found.
00006	| Duplicate entry in DB.
00007	| Could not process your request. We are experiencing connection problems to external service providers.
00021	| Email address format invalid.
00022	| Mobile number invalid.
00023	| Required field missing or invalid type used.
00024	| General Input Error.
00025	| Date format is invalid.
00026	| Time format is invalid.
00027	| Integer format is invalid.
00100	| Invalid request. API credentials missing.
00300 	| Interface does not exist.
00301	| Interface not activated.
00302	| Invalid interface credentials.
00303	| Interface method does not exist.
01000	| VSP Reference invalid. A valid VSP Reference must be specified. Max 255 characters.
01001	| VSP invalid. Must specify a value > 0.
01002	| The wiCode life is invalid. Must specify a value > 0.
01003	| wiCode Pool depleted.
01004	| wiCode is not reserved.
01005	| wiCode reserved by another VSP.
01006	| wiCode vspReference differs. Might be new transaction.
01007	| wiCode cannot be refreshed. Either busy being processed or being expired.
01008	| wiCode has expired.
01009	| wiCode locked. Currently being used in a transaction.
01010	| Lock type is invalid. Value must be either 'True' to lock or 'False' to unlock.
01011	| The wiCode is invalid. A valid wiCode must be specified.
01012	| The transaction type is not allowed for wiCode.
01013	| Transaction type invalid.
01014	| The wiCode life is invalid, it exceeds the maximum wicode length allowed for the pool.
01501	| Invalid State supplied.
01501	| Invalid State supplied.
01502	| Invalid Country id supplied.
01503	| Invalid POS id supplied.
01504	| Invalid Retailer id supplied.
01505	| Invalid Store Owner id supplied.
01506	| Invalid Store Group id supplied.
01507	| Invalid subdivision id supplied.
01508	| Invalid Store id supplied.
01509	| Invalid VSP id supplied.
01510	| User Authentication failed.
01511	| User Authentication failed.
01512	| User Authentication failed.
01513	| Bank account credentials invalid.
01514	| Invalid id supplied.
01515	| Invalid batch time format.
01516	| Invalid recon time format.
01517	| Invalid bank account type.
01518	| Invalid Bank account supplied.
02001	| Invalid transaction type supplied.
02002	| Invalid token type supplied.
02101	| Invalid token id.
02102	| Could not parse VSP transaction response to JSON.
02103	| Could not parse Wiprofile lock response to JSON.
02104	| Timeout while waiting for Wiprofile response.
02105	| Transaction to VSP timed out.
02106	| Timeout while waiting for VSP response.
02107	| Transaction failed.
02108	| VSP not found.
02109	| Advice request failed.
02110	| Failed to log transaction products.
02111	| API POS not found.
02112	| Store not found.
02113	| Lock failed.
02114	| Store does not support Deposits.
02115	| Store does not support Payments.
02116	| Store does not support Withdrawals.
02117	| VSP does not support Deposits.
02118	| VSP does not support Payments.
02119	| VSP does not support Withdrawals.
02120	| Invalid token.
02121	| Cashback can only be processed on a Payment.
02122	| The totalAmount does not match basketAmount + cashbackAmount.
02123	| Connection to VSP could not be established.
02124	| POS provider not active.
02125	| Store is not active.
02126	| Store is not linked to POS provider.
02127	| Store does not support Cashbacks.
02128	| VSP does not support Cashbacks.
02129	| Store does not accept VSP.
02130	| Store does not allow Deposits for VSP.
02131	| Store does not allow Payments for VSP.
02132	| Store does not allow Withdrawals for VSP.
02133	| Store does not allow Cashback on Payments for VSP.
02134	| Token Info request failed.
02135 	| Store Group not found
02136 	| Store Group is not active.
02137	| Store Group does not support Deposits
02138	| Store Group does not support Payments
02139	| Store Group does not support Withdrawals
02140	| Store Group does not support Cashbacks.
02141	| Invalid response received from VSP. Required fields missing.
02142	| Tip can only be processed on a Payment.
02143	| The transaction amount exceeds maximum amount allowed on token.
02144	| VSP does not support partial settlement.
02145	| Original transaction not found.
02146	| Refund can only be processed on a Payment.
02147	| Refund can only be processed on a finalised transaction.
02148	| Store does not support Refunds
02149	| VSP does not support Refunds.
02150	| Store does not allow Refunds for VSP.
02151	| Store not linked to original transaction store.
02151	| Store retailer not linked to original transaction retailer.
02152	| The refundAmount exceeds the total amount processed minus previous refunds.
02153	| The transaction is locked. Refund in progress.
02154	| The transaction is locked. Refund in progress.
02155	| Refund request failed
02156	| Transaction limit exceeded.
02157	| API VSP not found
02158	| The amountToSettle exceeds the total amount settled minus previous amounts settled.
02159	| The amountToSettle exceeds the totalAmount.
02160	| The total amount processed by the VSP exceeds the total amount.
02161	| Invalid apiServerVersion
02170 	| Invalid VAS type
02171 	| VAS type not configured for retailer
03001	| Invalid request. User credentials missing.
03002	| Invalid user credentials.
03003	| User not activated.
03004	| Invalid user credentials.
03051	| Password invalid. A valid password must be specified.
03052	| Invalid state. Available states are {A, D, P, RP}.
03053	| Invalid delivery method. Available methods are {SMS, Email}.
03054	| Invalid token type specified.
03055	| Country code invalid. A valid country code must be specified.
03056	| OTP invalid. A valid OTP must be specified.
03057	| General OTP Error.
03058	| OTP is expired.
03059	| Id invalid. A valid id must be specified.
03060	| Date invalid. Must have format YYYY-MM-DD HH:MM:SS.
03101	| Name invalid. Max length allowed is 255 Characters.
03102	| Surname invalid. Max length allowed is 255 Characters.
03103	| Gender invalid. Available options are {M, F}.
03104	| Date of birth invalid. Must have format yyyy-MM-dd.
03105	| User registration request failed.
03106	| WiTag is already linked to a user.
03107	| Username invalid. A valid username must be specified.
03108	| User already activated.
03109	| User already linked to VSP.
03110	| User not linked to wiTag.
03111	| User already linked to a wiTag with the same description.
03112	| User not linked to VSP.
03113	| User and VSP linked state inactive.
03114	| User in progress with a transaction.
03115	| User already reserved wiCode for VSP with the same VSP reference.
03116	| User not reserved by VSP.
03117	| Another user with the same email is already registered.
03118	| Another user with the same mobile number is already registered.
03151	| VSP not activated.
03152	| VSP registration request failed. VSP already exists.
03153	| VSP description invalid. Max length allowed is 255 Characters.
03154	| User cancelled.
03155	| VSP is not a discount VSP.
03156	| VSP is not a loyalty VSP.
03157	| VSP is not linked to discount VSP.
03158	| VSP is not linked to loyalty VSP.
03201	| WiTag length invalid.
03202	| WiTag description invalid.
03203	| The WiTag life is invalid. Must specify a value > 0.
03204	| WiTag not linked to a user.
03205	| No session active for wiTag.
03230	| WiQR invalid.
03231	| WiQR is expired.
03251	| VSP invalid. Must specify a value > 0.
03252	| VSP Reference invalid. Max length allowed is 255 Characters.
03253	| The token life is invalid. Must specify a value > 0.
03254	| The WiCode is invalid. A valid WiCode must be specified.
03255	| There is no wiCode Pool available for your request parameters.
03256	| WiCode Pool not activated.
03257	| WiCode Pool Connection Error.
03258	| Invalid WiCode Pool interface credentials.
03259	| General WiCode Pool Error.
03260	| wiCode is expired.
03261	| wiCode not reserved.
03262	| wiCode already locked.
03263	| wiCode not linked to a user.
03264	| wiCode Pool depleted.
03265	| wiCode linked to Discount/Loyalty wiCodes.
03300	| Invalid BIN.
04001	| Invalid date supplied. 