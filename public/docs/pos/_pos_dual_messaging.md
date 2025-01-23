## Dual Messaging
YoyoGroup supports dual messaging architecture. Payments using the wiCode platform consists of interactions between the issuer (POS system) and the VSP. The wiCode platform serve as a guarantor of processing the resulting settlement. The wiCode platform utilizes two basic requests to process transactions:

<ul>
<li>Transaction request</li>
<li>Advice request</li>
</ul>

The <em>transaction request</em> pushes a transaction (payment, deposit or withdrawal) to the VSP for authorization. The transaction response will contain the result of this request, which can then be applied to the transaction appropriately. 

The </em>advice request</em> should be made to the wiCode platform once the real-world transaction has been completed. This could either be a once the tender is received by the cashier or if a reversal is required. This call will either change the state of the transaction from pending to successful, or, reversed.

The typical interactions for processing a transaction is displayed in the figure below.

<img src="./images/wiGroupTEIntegraion3.png" alt="some text"/>