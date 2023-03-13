# `near.staking.withdrawAll`

An account withdrew all the available tokens.

## Schema

| Field               | Required | Data type | Explanation                                                                                                                                                                                   | Example                                                                                             |
| ------------------- | :------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `__type`            |   Yes    | `string`  | Always `"near.staking.withdrawAll"`.                                                                                                                                                    | `"near.staking.withdrawAll"`                                                                  |
| `delegator`      |   Yes    | `string` | Near address of the user who staked.                                                                                                                                                  | `iloveleapwallet.near`                                                                                              |
| `validator`              |   Yes    | `string`  | Near address of the validator.                                                                                                                    | `"staked.poolv1.near"`                                                   |

## Example

```json
{
  "__type": "near.staking.withdrawAll",
  "delegator": "iloveleapwallet.near",
  "validator": "staked.poolv1.near"
}
```
