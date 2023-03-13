# `near.transfer.nonNative`

An account transferred non near tokens to a another account.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.transfer.nonNative"`.                                                                                                                                                    | `"near.transfer.nonNative"`                                                                  |
| `fromAddress`      |   Yes    | `string` | Near address of the Sender.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `toAddress`              |   Yes    | `string`  | Near address of the Receiver.                                                                                                                    | `"staked.poolv1.near"`                                                   |
| `quantity`           |   Yes    | `string`  | amount of near that has been transferred in yoctoNear.                                                                                                                                                      | `"100000000000000000000000"` |
| `token`              |   Yes    | `string`  | Near address of the token transferred.                                                                                                                    | `"token.v2.ref-finance.near"`                                                   |

## Example

```json
{
  "__type": "near.transfer.nonNative",
  "fromAddress": "iloveleapwallet.near",
  "toAddress": "staked.poolv1.near",
  "quantity": "100000000000000000000000",
  "token": "token.v2.ref-finance.near",
}
```
