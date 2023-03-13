# `near.staking.stake`

An account staked tokens to a validator.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.staking.stake"`.                                                                                                                                                    | `"near.staking.stake"`                                                                  |
| `delegator`      |   Yes    | `string` | Near address of the user who staked.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `validator`              |   Yes    | `string`  | Near address of the validator.                                                                                                                    | `"staked.poolv1.near"`                                                   |
| `quantity`           |   Yes    | `string`  | amount of near that has been staked in yoctoNear.                                                                                                                                                      | `"100000000000000000000000"`

## Example

```json
{
  "__type": "near.staking.stake",
  "delegator": "iloveleapwallet.near",
  "validator": "staked.poolv1.near",
  "quantity": "100000000000000000000000",
}
```
