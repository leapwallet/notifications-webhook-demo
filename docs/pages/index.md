# Leap Wallet Webhook Service

The current flow to get notified of a transaction is to:

1. Continuously query an RPC node. This can be cumbersome as Cosmos RPC nodes tend to be unreliable as they’re free to use which means that you’d potentially have to monitor and pay for your own.
2. Learn and implement transaction parsing for your use cases. Due to a lack of documentation, this can mean having to reverse engineer multiple Golang codebases.

Using Leap Wallet’s webhook service, you can easily get notified of transactions that you’re interested in using the following flow:

1. Give us a webhook URL. For example, `https://example.com/new-transaction`.
2. Give us the blockchains that you’re interested in receiving transactions for (check `[blockchains.md](http://blockchains.md)` in the docs linked below).
3. Give us the parsed and unparsed transaction types that you’re interested in receiving.
    1. If you want parsed transactions (only certain transactions are supported), then give us the message types such as `cosmos.bank.send` listed in the docs below.
    2. If you want unparsed transactions (every transaction is supported), then give us the transaction type as highlighted in the following code block:
    
    ```json {13}
    {
      "height":"8395275",
      "txhash":"C30CA8A80C92D87E2937507CE19CA9114371DBBFC41DFBCE197066D5BB499986",
      "codespace":"",
      "code": 0,
      "data":"0A1E0A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E64",
      // other fields
      "tx": {
        "@type": "/cosmos.tx.v1beta1.Tx",
        "body": {
          "messages": [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              "from_address": "osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9",
              "to_address": "osmo1nhzcr7mrqedyy5gcnkwz38yc0jk9z7y7avzpju",
              "amount": [
                {
                  "denom": "uosmo",
                  "amount": "10000"
                }
              ]
            }
          ],
          // other fields
        },
        // other fields
      }
    }
    ```
    