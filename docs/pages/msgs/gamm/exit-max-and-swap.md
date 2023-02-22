# `cosmos.gamm.exitMaxAndSwap`

The account executed a transaction that performed the following steps:

1. The LP shares were exchanged for two tokens from the LP. At most the number of shares specified are used (the system might take less than the specified quantity).
2. One of the two token types gets swapped for the other. The user received the exact quantity of tokens specified.

## Schema

| Field          | Required | Data type         | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`          | Always `"cosmos.gamm.exitMaxAndSwap"`.                                                                                                                                                        | `"cosmos.gamm.exitMaxAndSwap"`                                       |
| `blockchain`   |   Yes    | `string`          | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`          | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`         | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`          | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`      |   Yes    | `string`          | Executor's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `poolId`       |   Yes    | `number`          | LP's ID                                                                                                                                                                                       | `12`                                                                 |
| `token`        |   Yes    | [`token`](#token) | The token the user received.                                                                                                                                                                  |                                                                      |
| `shares`       |   Yes    | `string`          | The maximum number of shares the system took from the user.                                                                                                                                   | `"1231"`                                                             |

### `token`

| Field          | Required | Data type | Explanation                                   | Example   |
| -------------- | :------: | --------- | --------------------------------------------- | --------- |
| `denomination` |   Yes    | `string`  |                                               | `"uatom"` |
| `quantity`     |   Yes    | `string`  | The exact number of tokens the user received. | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.exitMaxAndSwap",
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
