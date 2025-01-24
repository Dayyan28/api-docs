# VSP Integration Requirements

<ul>
<li>You must have a test and production environment.</li>
<li>All communication to the Yoyo platform must be done via HTTPS. At least TLS1.2 protocol support is required.</li>
<li>You must connect to the secure DNS endpoint that will be provided by Yoyo Group.</li>
<li>VSP must respond to Yoyo Group requests within 10 seconds.</li>
<li>User journey must be documented and signed off by Yoyo Group before development starts.
Any part of the VSP's customer-facing GUI that includes Yoyo Group elements must follow the "Powered by Yoyo Group" guidelines.</li>
<li>A VSP must support Dual Messaging for transaction processing.</li>
<li>VSP must **never** reject an advice call.</li>
<li>Under no circumstances should a customer be permitted to cancel a transaction while it is in progress.</li>
<li>The final version of the customer-facing implementation must be submitted to Yoyo Group for QA testing, and a test slot needs to be planned and provisioned via the relevant Yoyo Group project team.</li>
<li>No code changes are allowed during a Yoyo Group test cycle.</li>
<li>It is recommended that the wiCodes issued by the VSP have a 15-minute validity period if the VSP uses a mobile app or USSD.</li>
</ul>
