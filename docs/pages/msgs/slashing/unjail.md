# `cosmos.slashing.unjail`

A validator's attempt to get unjailed.

When a validator has too much downtime, it gets automatically unbonded. If it wishes to come back online, it must unjail itself.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.slashing.unjail"`.                                                                                                                                                            | `"cosmos.slashing.unjail"`                                           |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `validator`    |   Yes    | `string`  | Validator's address                                                                                                                                                                           | `"baseledgervaloper1ehm6d95zd3fmzztyne3z9638uf9kuj44jygpkt"`         |

## Example

```json
{
  "__type": "cosmos.slashing.unjail",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "validator": "baseledgervaloper1ehm6d95zd3fmzztyne3z9638uf9kuj44jygpkt"
}
```
