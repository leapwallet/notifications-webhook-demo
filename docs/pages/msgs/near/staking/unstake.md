# `near.staking.unstake`

An account unstaked tokens from a validator.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.staking.unstake"`.                                                                                                                                                    | `"near.staking.unstake"`                                                                  |
| `delegator`      |   Yes    | `string` | Near address of the user who staked.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `validator`              |   Yes    | `string`  | Near address of the validator.                                                                                                                    | `"staked.poolv1.near"`                                                   |
| `quantity`           |   Yes    | `string`  | amount of near that has been unstaked in yoctoNear.                                                                                                                                                      | `"100000000000000000000000"`

## Example

```json
{
  "__type": "near.staking.unstake",
  "delegator": "iloveleapwallet.near",
  "validator": "staked.poolv1.near",
  "quantity": "100000000000000000000000",
}
```
