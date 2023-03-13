# `near.transfer.native`

An account transferred near to another account.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.transfer.native"`.                                                                                                                                                    | `"near.transfer.native"`                                                                  |
| `fromAddress`      |   Yes    | `string` | Near address of the Sender.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `toAddress`              |   Yes    | `string`  | Near address of the Receiver.                                                                                                                    | `"staked.poolv1.near"`                                                   |
| `quantity`           |   Yes    | `string`  | amount of near that has been transferred in yoctoNear.                                                                                                                                                      | `"100000000000000000000000"`

## Example

```json
{
  "__type": "near.transfer.native",
  "fromAddress": "iloveleapwallet.near",
  "toAddress": "staked.poolv1.near",
  "quantity": "100000000000000000000000",
}
```
