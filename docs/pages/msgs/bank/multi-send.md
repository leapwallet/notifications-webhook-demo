# `cosmos.bank.multiSend`

Tokens sent from one address to multiple addresses.

## Schema

| Field          | Required | Data type                       | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`                        | Always `"cosmos.bank.multiSend"`.                                                                                                                                                             | `"cosmos.bank.multiSend"`                                            |
| `blockchain`   |   Yes    | `string`                        | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`                        | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`                       | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`                        | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `inputs`       |  `Yes`   | `array` of [`input`](#input)s   | The `"fromAddress"` field's value is the same in each `array` element.                                                                                                                        |                                                                      |
| `outputs`      |  `Yes`   | `array` of [`output`](#output)s |                                                                                                                                                                                               |                                                                      |

### `input`

| Field         | Required | Data type                     | Explanation                         | Example                                           |
| ------------- | :------: | ----------------------------- | ----------------------------------- | ------------------------------------------------- |
| `fromAddress` |   Yes    | `string`                      | The address sending tokens.         | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"` |
| `tokens`      |   Yes    | `array` of [`token`](#token)s | Tokens sent from the `fromAddress`. |                                                   |

### `output`

| Field       | Required | Data type                     | Explanation                            | Example                                           |
| ----------- | :------: | ----------------------------- | -------------------------------------- | ------------------------------------------------- |
| `toAddress` |   Yes    | `string`                      | One of the addresses receiving tokens. | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"` |
| `tokens`    |   Yes    | `array` of [`token`](#token)s | Tokens sent to the `toAddress`.        |                                                   |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

## Example

```json
{
  "__type": "cosmos.bank.multiSend",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "inputs": [
    {
      "fromAddress": "like1qurwvswpwjl80aa4aeecvj2q2l9gktnymqq8dq",
      "tokens": [
        {
          "denomination": "nanolike",
          "quantity": "11000000000"
        }
      ]
    }
  ],
  "outputs": [
    {
      "toAddress": "like156sc4gyx8qm7896q5yqh707fcy9tqwqtezsazl",
      "tokens": [
        {
          "denomination": "nanolike",
          "quantity": "10000000000"
        }
      ]
    },
    {
      "toAddress": "like174h9qqxf249032yh5ndkffw8yet6tttrx9rd70",
      "tokens": [
        {
          "denomination": "nanolike",
          "quantity": "1000000000"
        }
      ]
    }
  ]
}
```
