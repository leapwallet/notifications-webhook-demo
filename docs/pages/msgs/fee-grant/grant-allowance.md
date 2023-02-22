# `cosmos.feeGrant.grantAllowance`

A created fee allowance grant.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.feeGrant.grantAllowance"`.                                                                                                                                                    | `"cosmos.feeGrant.grantAllowance"`                                   |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `granter`      |   Yes    | `string`  | Granter's address.                                                                                                                                                                            | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |
| `grantee`      |   Yes    | `string`  | Grantee's address.                                                                                                                                                                            | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |

## Example

```json
{
  "__type": "cosmos.feeGrant.grantAllowance",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "granter": "like1qurwvswpwjl80aa4aeecvj2q2l9gktnymqq8dq",
  "grantee": "like156sc4gyx8qm7896q5yqh707fcy9tqwqtezsazl"
}
```
