# `cosmos.gamm.swapExact`

The account swapped an exact token amount for a minimum amount of another token.

## Schema

| Field            | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| ---------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`         |   Yes    | `string`                      | Always `"cosmos.gamm.swapExact"`.                                                                                                                                                             | `"cosmos.gamm.swapExact"`                                            |
| `blockchain`     |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`         |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful`   |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`           |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`        |   Yes    | `string`                      | Executor's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `routes`         |   Yes    | `array` of [`route`](#route)s |                                                                                                                                                                                               |                                                                      |
| `inputToken`     |   Yes    | [`token`](#token)             | The token the user deposited.                                                                                                                                                                 |                                                                      |
| `outputQuantity` |   Yes    | `string`                      | The minimum quantity of tokens the user received.                                                                                                                                             | `"1231"`                                                             |

### `route`

| Field          | Required | Data type | Explanation                 | Example   |
| -------------- | :------: | --------- | --------------------------- | --------- |
| `poolId`       |   Yes    | `number`  | The LP used to swap.        | `1`       |
| `denomination` |   Yes    | `string`  | The type of token received. | `"uosmo"` |

### `token`

| Field          | Required | Data type | Explanation                                      | Example   |
| -------------- | :------: | --------- | ------------------------------------------------ | --------- |
| `denomination` |   Yes    | `string`  |                                                  | `"uatom"` |
| `quantity`     |   Yes    | `string`  | The exact quantity of tokens the user deposited. | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.swapExact",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "account": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "routes": [
    {
      "poolId": 1,
      "denomination": "uosmo"
    }
  ],
  "inputToken": {
    "denomination": "uatom",
    "quantity": "100"
  },
  "outputQuantity": "200"
}
```
