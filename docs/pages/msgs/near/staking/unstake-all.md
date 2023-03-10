# `near.staking.unstakeAll`

An account unstaked all the tokens from a validator.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.staking.unstakeAll"`.                                                                                                                                                    | `"near.staking.unstakeAll"`                                                                  |
| `delegator`      |   Yes    | `string` | Near address of the user who staked.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `validator`              |   Yes    | `string`  | Near address of the validator.                                                                                                                    | `"staked.poolv1.near"`                                                   |

## Example

```json
{
  "__type": "near.staking.unstakeAll",
  "delegator": "iloveleapwallet.near",
  "validator": "staked.poolv1.near"
}
```
