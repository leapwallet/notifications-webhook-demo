# `cosmos.gov.deposit`

A non-initial governance proposal deposit.

## Schema

| Field                   | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| ----------------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`                |   Yes    | `string`                      | Always `"cosmos.gov.deposit"`.                                                                                                                                                                | `"cosmos.gov.deposit"`                                               |
| `blockchain`            |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`                |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful`          |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`                  |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `proposalId`            |   Yes    | `string`                      | Proposal ID                                                                                                                                                                                   | `"1"`                                                                |
| `depositor`             |   Yes    | `string`                      | Depositor's address                                                                                                                                                                           | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `tokens`                |   Yes    | `array` of [`token`](#token)s | Deposit                                                                                                                                                                                       |                                                                      |
| `isStartOfVotingPeriod` |   Yes    | `boolean`                     | `true` if this transaction caused the governance proposal to enter the voting period. `false` if either the proposal was already in the voting period or still isn't.                         | `false`                                                              |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

## Example

```json
{
  "__type": "cosmos.gov.deposit",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "proposalId": "1",
  "depositor": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "tokens": [
    {
      "denomination": "uatom",
      "quantity": "100"
    }
  ],
  "isStartOfVotingPeriod": false
}
```
