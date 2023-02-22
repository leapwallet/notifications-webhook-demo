# `cosmos.gov.submitProposal`

A created governance proposal.

## Schema

| Field                   | Required | Data type                     | Explanation                                                                                                                                                                                   | Example                                                              |
| ----------------------- | :------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `__type`                |   Yes    | `string`                      | Always `"cosmos.gov.submitProposal"`.                                                                                                                                                         | `"cosmos.gov.submitProposal"`                                        |
| `blockchain`            |   Yes    | `string`                      | The blockchain this transaction was executed on. This field will have one of the [values](../../blockchains.md) in the **ID** column where the **Ecosystem** column's value is **Cosmos**. | `"juno"`                                                             |
| `txHash`                |   Yes    | `string`                      | The transaction's hash.                                                                                                                                                                       | `"DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8"` |
| `isSuccessful`          |   Yes    | `boolean`                     | Whether the transaction succeeded or failed.                                                                                                                                                  | `true`                                                               |
| `memo`                  |   Yes    | `string`                      | A note the user added while making the transaction. Maybe be empty (`""`).                                                                                                                    | `"I owed you 1.5 ATOM since you paid for lunch."`                    |
| `proposer`              |   Yes    | `string`                      | Proposer's address                                                                                                                                                                            | `"bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2"`                   |
| `tokens`                |   Yes    | `array` of [`token`](#token)s | Deposit                                                                                                                                                                                       |                                                                      |
| `isStartOfVotingPeriod` |   Yes    | `boolean`                     | `true` if this transaction caused the governance proposal to enter the voting period. `false` if either the proposal was already in the voting period or still isn't.                         | `false`                                                              |
| `details`               |    No    | [`details`](#details)         | The proposal's details.                                                                                                                                                                       |                                                                      |
| `proposalId`            |   Yes    | `string`                      | Proposal ID.                                                                                                                                                                                  | `"1"`                                                                |

### `token`

| Field          | Required | Data type | Explanation | Example   |
| -------------- | :------: | --------- | ----------- | --------- |
| `denomination` |   Yes    | `string`  |             | `"uatom"` |
| `quantity`     |   Yes    | `string`  |             | `"100"`   |

### `details`

| Field         | Required | Data type | Explanation                                                                                                                                                                                                                                       | Example                                                       |
| ------------- | :------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `type`        |   Yes    | `string`  | Either `"text"` or `"softwareUpgrade"`. `"text"` proposals are for things like getting the blockchain's foundating to start an incubator. `"softwareUpgrade"` proposals are for things like releasing a new version of the blockchain's software. | `"text"`                                                      |
| `title`       |   Yes    | `string`  | Proposal's title.                                                                                                                                                                                                                                 | `"ATOM 2.0"`                                                  |
| `description` |   Yes    | `string`  | Proposal's description.                                                                                                                                                                                                                           | `"This research paper proposes a new vision for Cosmos Hub."` |

## Example

```json
{
  "__type": "cosmos.gov.submitProposal",
  "blockchain": "juno",
  "txHash": "DBAD2F68E6CEF64B8EA29F47B2765CED53CB1552AE6422C98974C8D4DA8869F8",
  "isSuccessful": true,
  "memo": "",
  "proposer": "bitsong1jv4r79zsfkg3m3mdafg4uxyxg4z9fn3u8kjmh2",
  "tokens": [
    {
      "denomination": "uatom",
      "quantity": "100"
    }
  ],
  "isStartOfVotingPeriod": false,
  "details": {
    "type": "text",
    "title": "ATOM 2.0",
    "description": "This research paper proposes a new vision for Cosmos Hub."
  },
  "proposalId": "1"
}
```
