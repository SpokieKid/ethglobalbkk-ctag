import type { Address, Chain } from 'viem'
import { bitkubTestnet, flowTestnet, holesky, polygonZkEvmCardona } from 'viem/chains'

export const chains: Record<number, Chain> = {
  [holesky.id]: holesky,
  [bitkubTestnet.id]: bitkubTestnet,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona,
  [flowTestnet.id]: flowTestnet,
}

export const addresses: Record<number, Address> = {
  [holesky.id]: '0xcc2479E59618Bc31Ab48c48b5A74BF8108120e9d',
  [bitkubTestnet.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
  [polygonZkEvmCardona.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
  [flowTestnet.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
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
