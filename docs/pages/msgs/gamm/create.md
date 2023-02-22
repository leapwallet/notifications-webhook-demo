# `cosmos.gamm.create`

A user created an LP.

## Schema

| Field          | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`                      | Always `"cosmos.gamm.create"`.                                                                                                                                                                | `"cosmos.gamm.create"`                                               |
| `blockchain`   |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`      |   Yes    | `string`                      | Creator's address                                                                                                                                                                             | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `tokens`       |   Yes    | `array` of [`token`](#token)s | Initial liquidity                                                                                                                                                                             |                                                                      |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.create",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "account": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "tokens": [
    {
      "denomination": "uatom",
      "quantity": "100"
    },
    {
      "denomination": "uosmo",
      "quantity": "200"
    }
  ]
}
```
