# `cosmos.bank.send`

Tokens sent from the one account to another.

## Schema

| Field          | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`                      | Always `"cosmos.bank.send"`.                                                                                                                                                                  | `"cosmos.bank.send"`                                                 |
| `blockchain`   |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `fromAddress`  |   Yes    | `string`                      | Sender's address.                                                                                                                                                                             | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |
| `toAddress`    |   Yes    | `string`                      | Receiver's address.                                                                                                                                                                           | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |
| `tokens`       |   Yes    | `array` of [`token`](#token)s | Tokens sent from the `fromAddress` to the `toAddress`.                                                                                                                                        |                                                                      |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

## Example

```json
{
  "__type": "cosmos.bank.send",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "fromAddress": "like1qurwvswpwjl80aa4aeecvj2q2l9gktnymqq8dq",
  "toAddress": "like156sc4gyx8qm7896q5yqh707fcy9tqwqtezsazl",
  "tokens": [
    {
      "denomination": "nanolike",
      "quantity": "11000000000"
    }
  ]
}
```
