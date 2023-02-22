# `cosmos.gamm.swapMaxAndJoin`

An account executed a transaction that performed the following steps:

1. The LP required the account to deposit two types of tokens to join. but they only used one. The account did this by having half of one token type swapped for the other required token type. At most the quantity of tokens the user submitted were used (the system might have taken less than the specified quantity).
2. The pair of tokens were converted to LP shares which were given to the account. The account received the exact number of LP shares specified.

## Schema

| Field          | Required | Data type         | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`          | Always `"cosmos.gamm.swapMaxAndJoin"`.                                                                                                                                                        | `"cosmos.gamm.swapMaxAndJoin"`                                       |
| `blockchain`   |   Yes    | `string`          | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`          | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`         | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`          | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`      |   Yes    | `string`          | Executor's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `poolId`       |   Yes    | `number`          | LP's ID                                                                                                                                                                                       | `12`                                                                 |
| `token`        |   Yes    | [`token`](#token) | The token the user deposited.                                                                                                                                                                 |                                                                      |
| `shares`       |   Yes    | `string`          | The exact number of shares the user got in exchange for tokens.                                                                                                                               | `"1231"`                                                             |

### `token`

| Field          | Required | Data type | Explanation                                                                 | Example   |
| -------------- | :------: | --------- | --------------------------------------------------------------------------- | --------- |
| `denomination` |   Yes    | `string`  |                                                                             | `"uatom"` |
| `quantity`     |   Yes    | `string`  | The system took at most this quantity of tokens from the user for the swap. | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.swapMaxAndJoin",
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
