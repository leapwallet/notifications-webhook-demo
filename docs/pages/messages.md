# Messages

Each message is a JSON object. Dates are in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix "Z".

There are four fields common to every JSON object which are `"__type"` (used to discern how the data structure should be parsed), `"blockchain"` (which blockchain the transaction was executed on), `"txHash"` (the transaction's hash), and `"isSuccessful"` (whether the transaction succeeded or failed). JSON objects for Cosmos transactions additionally have a `"memo"` field in common which is an optional note the user added while making the transaction such as `""` or `"I owed you 1.5 ATOM since you paid for lunch."`.

Here are the messages that can be sent:
- [`cosmos.authz.exec`](msgs/authz/exec)
- [`cosmos.authz.grant`](msgs/authz/grant)
- [`cosmos.authz.revoke`](msgs/authz/revoke)
- [`cosmos.bank.multiSend`](msgs/bank/multi-send)
- [`cosmos.bank.send`](msgs/bank/send)
- [`cosmos.feeGrant.grantAllowance`](msgs/fee-grant/grant-allowance)
- [`cosmos.feeGrant.revokeAllowance`](msgs/fee-grant/revoke-allowance)
- [`cosmos.gov.deposit`](msgs/gov/deposit)
- [`cosmos.gov.submitProposal`](msgs/gov/submit-proposal)
- [`cosmos.gov.vote`](msgs/gov/vote)
- [`cosmos.slashing.unjail`](msgs/slashing/unjail)
- [`cosmos.staking.beginRedelegate`](msgs/staking/begin-redelegate)
- [`cosmos.staking.createValidator`](msgs/staking/create-validator)
- [`cosmos.staking.delegate`](msgs/staking/delegate)
- [`cosmos.staking.editValidator`](msgs/staking/edit-validator)
- [`cosmos.staking.undelegate`](msgs/staking/undelegate)
- [`cosmos.ibc.send`](msgs/ibc/send)
- [`cosmos.ibc.receive`](msgs/ibc/receive)
- [`cosmos.gamm.create`](msgs/gamm/create)
- [`cosmos.gamm.exit`](msgs/gamm/exit)
- [`cosmos.gamm.exitExactAndSwap`](msgs/gamm/exit-exact-and-swap)
- [`cosmos.gamm.exitMaxAndSwap`](msgs/gamm/exit-max-and-swap)
- [`cosmos.gamm.join`](msgs/gamm/join)
- [`cosmos.gamm.swapExact`](msgs/gamm/swap-exact)
- [`cosmos.gamm.swapExactAndJoin`](msgs/gamm/swap-exact-and-join)
- [`cosmos.gamm.swapMax`](msgs/gamm/swap-max)
- [`cosmos.gamm.swapMaxAndJoin`](msgs/gamm/swap-max-and-join)
- [`cosmos.lockup.lock`](msgs/lockup/lock)
- [`cosmos.lockup.unlock`](msgs/lockup/unlock)
- [`cosmos.lockup.unlockAll`](msgs/lockup/unlock-all)
- [`cosmos.superfluid.delegate`](msgs/superfluid/delegate)
- [`cosmos.superfluid.undelegate`](msgs/superfluid/undelegate)
- [`cosmos.superfluid.lockAndDelegate`](msgs/superfluid/lock-and-delegate)
- [`cosmos.superfluid.unlockAndUndelegate`](msgs/superfluid/unlock-and-undelegate)
- [`near.staking.stake`](msgs/near/staking/stake)
- [`near.staking.unstake`](msgs/near/staking/unstake)
- [`near.staking.unstakeAll`](msgs/near/staking/unstakeAll)
- [`near.staking.withdrawAll`](msgs/near/staking/withdrawAll)
- [`near.transfer.native`](msgs/near/transfer/native)
- [`near.transfer.nonNative`](msgs/near/transfer/non-native)
- [`near.social.set`](msgs/near/social/set)
- [`near.social.set.follow`](msgs/near/social/follow)
- [`near.social.set.like`](msgs/near/social/like)
- [`near.social.set.poke`](msgs/near/social/poke)