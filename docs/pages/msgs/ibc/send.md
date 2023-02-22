# `cosmos.ibc.send`

A token sent from one blockchain to another.

## Schema

| Field          | Required | Data type | Explanation                                                                                                                                                                          | Example                                                              |
| -------------- | :------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `__type`       |   Yes    | `string`  | Always `"cosmos.ibc.send"`.                                                                                                                                                          | `"cosmos.ibc.send"`                                                  |
| `blockchain`   |   Yes    | `string`  | The blockchain the token was sent from. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`       |   Yes    | `string`  | The transaction's hash.                                                                                                                                                              | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful` |   Yes    | `boolean` | Whether the transaction succeeded or failed.                                                                                                                                         | `true`                                                               |
| `memo`         |   Yes    | `string`  | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                           | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `fromAddress`  |   Yes    | `string`  | Sender's address.                                                                                                                                                                    | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |
| `toAddress`    |   Yes    | `string`  | Receiver's address.                                                                                                                                                                  | `"cosmos1g0ffln2weg8wpzpn2hy9t2eddygqcxtvggmyhl"`                    |
| `denomination` |   Yes    | `string`  | The denomination of the token transferred.                                                                                                                                           | `"uatom"`                                                            |
| `quantity`     |   Yes    | `string`  | The quantity of `denomination` transferred.                                                                                                                                          | `"100"`                                                              |
| `srcPort`      |   Yes    | `string`  | IBC port used.                                                                                                                                                                       | `"transfer"`                                                         |
| `srcChannel`   |   Yes    | `string`  | IBC channel used.                                                                                                                                                                    | `"channel-42"`                                                       |

## Example

```json
{
  "__type": "cosmos.ibc.send",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "fromAddress": "like1qurwvswpwjl80aa4aeecvj2q2l9gktnymqq8dq",
  "toAddress": "like156sc4gyx8qm7896q5yqh707fcy9tqwqtezsazl",
  "denomination": "uatom",
  "quantity": "100",
  "srcPort": "transfer",
  "srcChannel": "channel-42"
}
```
