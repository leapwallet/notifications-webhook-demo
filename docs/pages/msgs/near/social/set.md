# `near.social.set`

An account on near social followed another account.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.social.set"`.                                                                                                                                                    | `"near.social.set"`                                                                  |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Near**. | `"near"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"2AhNGN5fnuGfP1K1xcgqAz2dKAE9Xns9RWY7HKsFbBka"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `senderId`      |   Yes    | `string` | Near address of the sender                                                                                                                                                  | `samvelraja.near`                                                                                              |
| `receiverId`              |   Yes    | `string`  | Always `"social.near"`.                                                                                                                    | `"social.near"`                                                   |
| `data`           |   Yes    | `string`  | data.                                                                                                                                                      | `{ 'samvelraja.near': { graph: [Object], index: [Object] } }`

## Example

```json
{
  "blockchain": "near",
  "txHash": "2AhNGN5fnuGfP1K1xcgqAz2dKAE9Xns9RWY7HKsFbBka",
  "isSuccessful": true,
  "__type": "near.social.set",
  "senderId": "samvelraja.near",
  "receiverId": "social.near",
  "data": {
    "samvelraja.near": {
      "graph": [
        null
      ],
      "index": [
        null
      ]
    }
  }
}
```
