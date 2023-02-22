const { default: axios } = require('axios');

const chains = [
  { name: 'Cosmos Hub', id: 'cosmosHub' },
  { name: 'Terra 2.0', id: 'terra2' },
  { name: 'OmniFlix', id: 'omniFlix' },
  { name: 'Crescent', id: 'crescent' },
  { name: 'Kava', id: 'kava' },
  { name: 'Osmosis', id: 'osmosis' },
  { name: 'Juno', id: 'juno' },
  { name: 'Akash', id: 'akash' },
  { name: 'Axelar', id: 'axelar' },
  { name: 'e-Money', id: 'eMoney' },
  { name: 'Persistence', id: 'persistence' },
  { name: 'Stargaze', id: 'stargaze' },
  { name: 'Sifchain', id: 'sifchain' },
  { name: 'Sommelier', id: 'sommelier' },
  { name: 'Umee', id: 'umee' },
  { name: 'AssetMantle', id: 'assetMantle' },
  { name: 'Kujira', id: 'kujira' },
  { name: 'Injective', id: 'injective' },
  { name: 'Stride', id: 'stride' },
  { name: 'Cheqd', id: 'cheqd' },
  { name: 'LikeCoin', id: 'likeCoin' },
  { name: 'Chihuahua', id: 'chihuahua' },
  { name: 'Gravity Bridge', id: 'gravityBridge' },
  { name: 'IRISnet', id: 'irisNet' },
  { name: 'Starname', id: 'starname' },
  { name: 'Fetch', id: 'fetch' },
  { name: 'Desmos', id: 'desmos' },
  { name: 'Teritori', id: 'teritori' },
  { name: 'Agoric', id: 'agoric' },
  { name: 'Secret', id: 'secret' },
  { name: 'Evmos', id: 'evmos' },
  { name: 'Canto', id: 'canto' },
  { name: 'Comdex', id: 'comdex' },
  { name: 'Bitsong', id: 'bitSong' },
  { name: 'Sei', id: 'sei' },
  { name: 'Mars', id: 'mars' },
  { name: 'BitCanna', id: 'bitCanna' },
  { name: 'Carbon', id: 'carbon' },
  { name: 'Cudos', id: 'cudos' },
  { name: 'Decentr', id: 'decentr' },
];

const types = [
  'cosmos.authz.exec',
  'cosmos.authz.grant',
  'cosmos.authz.revoke',
  'cosmos.bank.multiSend',
  'cosmos.bank.send',
  'cosmos.feeGrant.grantAllowance',
  'cosmos.feeGrant.revokeAllowance',
  'cosmos.gov.deposit',
  'cosmos.gov.submitProposal',
  'cosmos.gov.vote',
  'cosmos.slashing.unjail',
  'cosmos.staking.beginRedelegate',
  'cosmos.staking.createValidator',
  'cosmos.staking.delegate',
  'cosmos.staking.editValidator',
  'cosmos.staking.undelegate',
  'cosmos.ibc.send',
  'cosmos.ibc.receive',
  'cosmos.gamm.create',
  'cosmos.gamm.exit',
  'cosmos.gamm.exitExactAndSwap',
  'cosmos.gamm.exitMaxAndSwap',
  'cosmos.gamm.join',
  'cosmos.gamm.swapExact',
  'cosmos.gamm.swapExactAndJoin',
  'cosmos.gamm.swapMax',
  'cosmos.gamm.swapMaxAndJoin',
  'cosmos.lockup.lock',
  'cosmos.lockup.unlock',
  'cosmos.lockup.unlockAll',
  'cosmos.superfluid.delegate',
  'cosmos.superfluid.undelegate',
  'cosmos.superfluid.lockAndDelegate',
  'cosmos.superfluid.unlockAndUndelegate',
];

const numberOfChains = chains.length;

const numberOfTypes = types.length;

const getRandomChain = () => {
  return chains[Math.floor(Math.random() * numberOfChains)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * numberOfTypes)];
};

const getHash = () => Math.random().toString(16).substring(2, 15);

setInterval(() => {
  axios.post('http://localhost:3000/webhook', {
    __type: 'cosmos.bank.send',
    blockchain: 'cosmosHub',
    // random hash of 64 characters
    hash: `${getHash()}${getHash()}${getHash()}${getHash()}`,
  });
}, 1500);
