# `cosmos.staking.createValidator`

A transaction which created a validator.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"cosmos.staking.createValidator"`.                                                                                                                                                    | `"cosmos.staking.createValidator"`                                                                  |
| `blockchain`        |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                                                            |
| `txHash`            |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"`                                |
| `isSuccessful`      |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                                                              |
| `memo`              |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                                                   |
| `moniker`           |   Yes    | `string`  | A human-readable name for the validator.                                                                                                                                                      | `"TC Network"`                                                                                      |
| `identity`          |    No    | `string`  | An identity signature such as one from [Keybase](https://keybase.io/).                                                                                                                        |                                                                                                     |
| `website`           |    No    | `string`  |                                                                                                                                                                                               | `"https://tcnetwork.io"`                                                                            |
| `securityContact`   |    No    | `string`  | An email address to contact the validator operator by.                                                                                                                                        | `"validator@example.com"`                                                                           |
| `details`           |    No    | `string`  |                                                                                                                                                                                               | `"TC Network is a group providing staking service, building the dApp and more for Cosmos projects"` |
| `rate`              |   Yes    | `string`  | The commission rate charged to delegators. This is a number in the range of 0 and 1.                                                                                                          | `"0.050000000000000000"`                                                                            |
| `maxRate`           |   Yes    | `string`  | The max commission rate which the validator can charge. This is a number in the range of 0 and 1.                                                                                             | `"0.100000000000000000"`                                                                            |
| `maxChangeRate`     |   Yes    | `string`  | The max the validator can increase the `rate` by on a daily basis. This is a number in the range of 0 and 1.                                                                                  | `"0.010000000000000000"`                                                                            |
| `minSelfDelegation` |   Yes    | `string`  | The minimum quantity of tokens that the validator must self delegate.                                                                                                                         | `"1"`                                                                                               |
| `validatorAddress`  |   Yes    | `string`  | Validator's address                                                                                                                                                                           | `"agoricvaloper188xyq72fveuuvgk7lkht964jhgtc2cw00lf2zn"`                                            |

## Example

```json
{
  "__type": "cosmos.staking.createValidator",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "moniker": "TC Network",
  "website": "https://tcnetwork.io",
  "securityContact": "validator@example.com",
  "details": "TC Network is a group providing staking service, building the dApp and more for Cosmos projects",
  "rate": "0.050000000000000000",
  "maxRate": "0.100000000000000000",
  "maxChangeRate": "0.010000000000000000",
  "minSelfDelegation": "1",
  "validatorAddress": "agoricvaloper188xyq72fveuuvgk7lkht964jhgtc2cw00lf2zn"
}
```
