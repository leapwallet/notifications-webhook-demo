# `cosmos.authz.grant`

An authorization grant which was created.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.authz.grant"`.                                                                                                                                                                | `"cosmos.authz.grant"`                                               |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `granter`      |   Yes    | `string`  | The account granting permission to another account to execute transactions on its behalf.                                                                                                     | `"bitsong129y6g55wz7mz9vs2nudfvfdaun80fuphjmhq35"`                   |
| `grantee`      |   Yes    | `string`  | The account granted permission from another account to execute transactions on their behalf.                                                                                                  | `"cheqd1ftaxf307mumu6gwg05q360xeryspcgsqgvq66z"`                     |
| `expiration`   |    No    | `string`  | When the grant will expire. If unspecified, then the grant doesn't expire but there may be other conditions which invalidate it.                                                              | `"2100-08-08T13:41:03Z"`                                             |

## Example

```json
{
  "__type": "cosmos.authz.grant",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "granter": "bitsong129y6g55wz7mz9vs2nudfvfdaun80fuphjmhq35",
  "grantee": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "expiration": "2100-08-08T13:41:03Z"
}
```
