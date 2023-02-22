# `cosmos.staking.beginRedelegate`

A transaction where a delegator moved their delegation to a different validator.

## Schema

| Field              | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| ------------------ | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| `__type`           |   Yes    | `string`  | Always `"cosmos.staking.beginRedelegate"`.                                                                                                                                                    | `"cosmos.staking.beginRedelegate"`                                   |
| `blockchain`       |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`           |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful`     |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`             |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `delegatorAddress` |   Yes    | `string`  | Delegator's address                                                                                                                                                                           | `"bitsong160rddm8k5yy2psshx65gwj26gzr8ww27skxe7m"`                   |
| `fromValidator`    |   Yes    | `string`  | The address of the validator the delegation was previously for.                                                                                                                               | `"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"`            |
| `toValidator`      |   Yes    | `string`  | The address of the validator who is to receive the delegation.                                                                                                                                |                                                                      | `"bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2"` |
| `denomination`     |   Yes    | `string`  | The denomination of the token undelegated.                                                                                                                                                    | `"uatom"`                                                            |
| `quantity`         |   Yes    | `string`  | The quantity of `denomination` undelegated.                                                                                                                                                   | `"100"`                                                              |

## Example

```json
{
  "__type": "cosmos.staking.beginRedelegate",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "delegatorAddress": "bitsong160rddm8k5yy2psshx65gwj26gzr8ww27skxe7m",
  "fromValidator": "bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2",
  "toValidator": "bitsongvaloper18wf0w252jxk3kgl5vlst8ttat8xzfnvejuftk2",
  "denomination": "uatom",
  "quantity": "100"
}
```
