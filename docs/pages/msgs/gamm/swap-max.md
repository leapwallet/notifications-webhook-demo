# `cosmos.gamm.swapMax`

The account swapped at most the specified number of input tokens for exactly the specified number of output tokens.

## Schema

| Field           | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| --------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`        |   Yes    | `string`                      | Always `"cosmos.gamm.swapMax"`.                                                                                                                                                               | `"cosmos.gamm.swapMax"`                                              |
| `blockchain`    |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`        |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful`  |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`          |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `account`       |   Yes    | `string`                      | Executor's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `routes`        |   Yes    | `array` of [`route`](#route)s |                                                                                                                                                                                               |                                                                      |
| `outputToken`   |   Yes    | [`token`](#token)             | The token the user received.                                                                                                                                                                  |                                                                      |
| `inputQuantity` |   Yes    | `string`                      | The maximum quantity of tokens the system took from the user for the swap.                                                                                                                    | `"1231"`                                                             |

### `route`

| Field          | Required | Data type | Explanation                  | Example   |
| -------------- | :------: | --------- | ---------------------------- | --------- |
| `poolId`       |   Yes    | `number`  | The LP used to swap.         | `1`       |
| `denomination` |   Yes    | `string`  | The type of token deposited. | `"uosmo"` |

### `token`

| Field          | Required | Data type | Explanation                                     | Example   |
| -------------- | :------: | --------- | ----------------------------------------------- | --------- |
| `denomination` |   Yes    | `string`  |                                                 | `"uatom"` |
| `quantity`     |   Yes    | `string`  | The exact quantity of tokens the user received. | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gamm.swapMax",
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
  "outputToken": {
    "denomination": "uatom",
    "quantity": "100"
  },
  "inputQuantity": "200"
}
```
