# `cosmos.authz.revoke`

An authorization grant which was removed.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                              |
| -------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.authz.revoke"`.                                                                                                                                                               | `"cosmos.authz.revoke"`                                              |
| `blockchain`   |   Yes    | `string`  | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `granter`      |   Yes    | `string`  | The account revoking permission from another account to execute transactions on its behalf.                                                                                                   | `"bitsong129y6g55wz7mz9vs2nudfvfdaun80fuphjmhq35"`                   |
| `grantee`      |   Yes    | `string`  | The account whose permission was revoked from another account to execute transactions on their behalf.                                                                                        | `"cheqd1ftaxf307mumu6gwg05q360xeryspcgsqgvq66z"`                     |
| `permission`   |   Yes    | `string`  | Cosmos message type                                                                                                                                                                           | `"/cosmos.bank.v1beta1.MsgSend"`                                     |

## Example

```json
{
  "__type": "cosmos.authz.revoke",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "granter": "bitsong129y6g55wz7mz9vs2nudfvfdaun80fuphjmhq35",
  "grantee": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "permission": "/cosmos.bank.v1beta1.MsgSend"
}
```
