import type { Address, Chain } from 'viem'
import { bitkubTestnet, flowTestnet, holesky, polygonZkEvmCardona } from 'viem/chains'

export const chains: Record<number, Chain> = {
  [holesky.id]: holesky,
  [bitkubTestnet.id]: bitkubTestnet,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona,
  [flowTestnet.id]: flowTestnet,
}

export const addresses: Record<number, Address> = {
  [holesky.id]: '0xc81456eA9017e4CE502466F13b9b3712A614A854',
  [bitkubTestnet.id]: '0x56440Df35e3Fb90372c2a9569858212D068cb4ba',
  [polygonZkEvmCardona.id]: '0x4Da3A5291bd6B2fb2Db071269cd40e3037704655',
  [flowTestnet.id]: '0x56440Df35e3Fb90372c2a9569858212D068cb4ba',
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
