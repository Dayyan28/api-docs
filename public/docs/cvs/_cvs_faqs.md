## FAQ's

### Where can I find my testing API credentials?

Log into the Web Portal as the Channel Owner, go the the Channels section. The <b>Interface ID</b> and <b>password</b> are your API ID and password. You can have multiple channels inside the same channel group.

### Where do I get my Web Portal login credentials?

These are issued to you by the Yoyo integrations team. When your solution has passed integrations testing, and is promoted into the production environment, you will receive an email with your login credentials.

### How do I get my campaigns signed-off in the QA environment?

Make sure your have signed off the campaign as the Campaign Owner via the Web Portal, and then Simply email your integrations specialist to sign it off.

### What parameters get sent with the redemption callback?

Please refer to the <a href="index.html?shell#redemption-callback">redemption callback</a> section.

### How do I set the expiry time for a coupon/voucher on issue?

When making the POST /coupons call use the numExpiryDays parameter to set the number of expiry days.  This option will only work if the option for a channel to override the coupon expiry was enable during campaign creation.

### Why do I only see 20 giftcards on the GET /giftcards/{id} API call when I know the user has 50?

If you wish to see an extended list of gift cards set the pageSize parameter to a number that you want, default is 20.

### What are the content parameters to use when created a custom SMS message with the API call?

When issuing a gift card with an sms message, you can include the following parameters in the message. #WICODE #BALANCE #EXPIRY #MOBISITE.

### What is the deference between an Open and a Merged wiCodes.
An open wiCode is campaign specific, issuing the user coupons from all campaigns assigned to that channel.  A merged wicode is coupons specific, a token will be created incorporating all tokens that have been issued to the user by the channel group.

### I am issuing coupons but I am not receiving a wiCode with them.
You need need to set the issueWicode parameter to **true** when doing the POST /coupon call.
