# Leap Wallet Webhook Service

The current flow to get notified of a transaction is to:

1. Continuously query an RPC node. This can be cumbersome as Cosmos RPC nodes tend to be unreliable as they’re free to use which means that you’d potentially have to monitor and pay for your own.
2. Learn and implement transaction parsing for your use cases. Due to a lack of documentation, this can mean having to reverse engineer multiple Golang codebases.

Using Leap Wallet’s webhook service, you can easily get notified of transactions that you’re interested in using the following flow:


![Webhook Form](/images/form.png)

1. Give us a webhook URL. For example, `https://example.com/new-transaction`.
2. Give us the blockchain that you’re interested in receiving transactions for (check `[blockchains.md](http://blockchains.md)` in the docs linked below).
3. Give us the transaction types that you’re interested in receiving (only certain transactions  are supported), then give us the message types such as `cosmos.bank.send` listed in the docs(`[messages.md](http://messages.md)`).
4. If your server is protected and won't accept requests without an authentication header, please ensure that you provide us the required token (as mentioned in the form).
5. Once you fill up the form correctly and submit, we will send you a `Verification Code` on the provided webhook URL. You will need to submit that key in order to complete the creation of the webhook.

![Verification Modal](/images/verification-modal.png)

[Demo Video](https://drive.google.com/file/d/1Odknfd4YZrxtMeAeYnXzxiVbkTaXFFEc/view?usp=sharing)
