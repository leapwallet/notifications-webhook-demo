# `cosmos.gamm.exitExactAndSwap`

A user executed a transaction that performed the following steps:

1. The user's LP shares were exchanged for two types of tokens from the LP. The exact number of shares specified are used (the system won't take more or less than the specified quantity).
2. One of the two token types got swapped for the other. The user received at least the quantity specified.

## Schema

| Field          | Required | Data type         | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`          | Always `"cosmos.gamm.exitExactAndSwap"`.                                                                                                                                                      | `"cosmos.gamm.exitExactAndSwap"`                                     |
| `blockchain`   |   Yes    | `string`          | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`          | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`         | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`          | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`      |   Yes    | `string`          | Executor's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `poolId`       |   Yes    | `number`          | LP's ID                                                                                                                                                                                       | `12`                                                                 |
| `token`        |   Yes    | [`token`](#token) | The token the user received.                                                                                                                                                                  |                                                                      |
| `shares`       |   Yes    | `string`          | The number of shares the user exchanged for tokens.                                                                                                                                           | `"1231"`                                                             |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.exitExactAndSwap",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "account": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "poolId": 1,
  "token": {
    "denomination": "uatom",
    "quantity": "100"
  },
  "shares": "1238"
}
```
