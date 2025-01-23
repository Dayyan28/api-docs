## Integration models

There are generally two manners of performing mobile transactions, namely:

<ul>
	<li>Over the Counter model</li>
	<li>Sit-down model</li>
</ul>

#### Over the Counter Model

The over-the-counter model is built on the principle that the client provides a wiCode (usually in the form of a QR code) to the cashier at the POS. Ideally the POS has the capability of scanning a QR code and processing the wiCode contained in the QR by making use of the <a href='./docs/YoyoDetectDLL.pdf'>YoyoDetect.dll</a>, or manually entering the wiCode on the POS software to process a mobile payment.

For access to the YoyoGroup Detect SDK, please contact YoyoGroup integrations.


<img src="./images/otc.jpg" alt="Over the Counter Model" width="200" align="middle">

#### Sit Down Model

Sit-down payments requires the POS to print a unique QR code on each till slip. POS software providers can use Yoyo <a href="index.html?#bills">Bill Service REST API</a> to generate this QR code.

<img src="./images/till_slip.png" alt="Sit Down Model" width="200" align="middle">

The clients may then scan the QR code (making use of a registered mobile application) and proceed to make partial payments on the bill. The POS software requires to be integrated to the <a href="index.html?#transaction-history-request">transaction history call</a> to retrieve payments made on the basket.
