# `cosmos.superfluid.undelegate`

An account undelegated their OSMO tokens using the lock from the validator.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.superfluid.undelegate"`.                                                                                                                                                      | `"cosmos.superfluid.undelegate"`                                     |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `sender`       |   Yes    | `string`  | Delegator's address                                                                                                                                                                           | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `lockId`       |   Yes    | `number`  | Lock's ID                                                                                                                                                                                     | `1209600`                                                            |

## Example

```json
{
  "__type": "cosmos.superfluid.undelegate",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "sender": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "lockId": 1209600
}
```
