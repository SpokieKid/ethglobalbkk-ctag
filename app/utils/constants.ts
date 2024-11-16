import type { Address, Chain } from 'viem'
import { bitkubTestnet, flowTestnet, holesky, polygonZkEvmCardona } from 'viem/chains'

export const chains: Record<number, Chain> = {
  [holesky.id]: holesky,
  [bitkubTestnet.id]: bitkubTestnet,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona,
  [flowTestnet.id]: flowTestnet,
}

export const addresses: Record<number, Address> = {
  [holesky.id]: '0x9cCe2962a1ca45C22A54060a5Fb3C4d6AA307858',
  [bitkubTestnet.id]: '0x1a3a9A054bC10639Ee86b3300CB00Db808738C2a',
  [polygonZkEvmCardona.id]: '0x1a3a9A054bC10639Ee86b3300CB00Db808738C2a',
  [flowTestnet.id]: '0x1a3a9A054bC10639Ee86b3300CB00Db808738C2a',
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
