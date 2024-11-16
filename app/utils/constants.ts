import type { Address, Chain } from 'viem'
import { bitkubTestnet, flowTestnet, holesky, polygonZkEvmCardona } from 'viem/chains'

bitkubTestnet.contracts = {
  multicall3: {
    address: '0x5Ac6298fCa7231559994Ffc698D343919b5e4148',
    blockCreated: 19764104,
  },
}

export const chains: Record<number, Chain> = {
  [holesky.id]: holesky,
  [bitkubTestnet.id]: bitkubTestnet,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona,
  [flowTestnet.id]: flowTestnet,
}

export const addresses: Record<number, Address> = {
  [holesky.id]: '0x8A8896FC79EFA666cBBcDE6D77da76008bAB65f3',
  [bitkubTestnet.id]: '0x4Da3A5291bd6B2fb2Db071269cd40e3037704655',
  [polygonZkEvmCardona.id]: '0xe8f6a2ad509A63DE7118C47743DfC94baA5DFa2b',
  [flowTestnet.id]: '0x5Ac6298fCa7231559994Ffc698D343919b5e4148',
}

export const explorers: Record<number, string> = {
  [holesky.id]: holesky.blockExplorers.default.url,
  [bitkubTestnet.id]: bitkubTestnet.blockExplorers.default.url,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona.blockExplorers.default.url,
  [flowTestnet.id]: 'https://evm-testnet.flowscan.io',
}

export const faucets: Record<number, string> = {
  [holesky.id]: 'https://cloud.google.com/application/web3/faucet/ethereum/holesky',
  [bitkubTestnet.id]: 'https://faucet.bitkubchain.com',
  [polygonZkEvmCardona.id]: 'https://faucet.polygon.technology',
  [flowTestnet.id]: 'https://testnet-faucet.onflow.org/fund-account',
}
