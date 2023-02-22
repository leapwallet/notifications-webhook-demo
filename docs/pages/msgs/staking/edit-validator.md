# `cosmos.staking.editValidator`

A transaction which updated a validator's details such as its website.

## Schema

- If an optional field's value is a `string`, then its value was updated. For example, if the `moniker` field's value is `"new-name"`, then the validator changed its human-readable name.
- If an optional field is absent, then its value wasn't updated. For example, if the `moniker` field was absent, then the validator's human-readable name wasn't updated.
- If an optional field's value is `null`, then its value was removed. For example, if the `identity` field's value is `null`, then the validator is no longer associated with an identity.

| Field              | Required | Data type          | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------ | :------: | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`           |   Yes    | `string`           | Always `"cosmos.staking.editValidator"`.                                                                                                                                                      | `"cosmos.staking.editValidator"`                                                                    |
| `blockchain`       |   Yes    | `string`           | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                                                            |
| `txHash`           |   Yes    | `string`           | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"`                                |
| `isSuccessful`     |   Yes    | `boolean`          | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                                                              |
| `memo`             |   Yes    | `string`           | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                                                   |
| `moniker`          |    No    | `string`           | A human-readable name for the validator.                                                                                                                                                      | `"TC Network"`                                                                                      |
| `identity`         |    No    | `string` or `null` | An identity signature such as one from [Keybase](https://keybase.io/).                                                                                                                        |                                                                                                     |
| `website`          |    No    | `string` or `null` |                                                                                                                                                                                               | `"https://tcnetwork.io"`                                                                            |
| `securityContact`  |    No    | `string` or `null` | An email address to contact the validator operator by.                                                                                                                                        | `"validator@example.com"`                                                                           |
| `details`          |    No    | `string` or `null` |                                                                                                                                                                                               | `"TC Network is a group providing staking service, building the dApp and more for Cosmos projects"` |
| `validatorAddress` |   Yes    | `string`           | Validator's address                                                                                                                                                                           | `"agoricvaloper188xyq72fveuuvgk7lkht964jhgtc2cw00lf2zn"`                                            |

## Example

```json
{
  "__type": "cosmos.staking.editValidator",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "moniker": "TC Network",
  "website": "https://tcnetwork.io",
  "securityContact": null,
  "validatorAddress": "agoricvaloper188xyq72fveuuvgk7lkht964jhgtc2cw00lf2zn"
}
```
