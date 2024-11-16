import type { Address, Chain } from 'viem'
import {
  arbitrumSepolia,
  bitkubTestnet,
  flowTestnet,
  gnosisChiado,
  holesky,
  mantleSepoliaTestnet,
  polygonZkEvmCardona,
  scrollSepolia,
} from 'viem/chains'

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
  [arbitrumSepolia.id]: arbitrumSepolia,
  [scrollSepolia.id]: scrollSepolia,
  [mantleSepoliaTestnet.id]: mantleSepoliaTestnet,
  [gnosisChiado.id]: gnosisChiado,
}

export const addresses: Record<number, Address> = {
  [holesky.id]: '0xe5121cFe8F074F861AeD1E9062f9a049ee15A124',
  [bitkubTestnet.id]: '0xEb14551D66de08CcE46b60Cc6bab299131c96798',
  [polygonZkEvmCardona.id]: '0x9cCe2962a1ca45C22A54060a5Fb3C4d6AA307858',
  [flowTestnet.id]: '0xEb14551D66de08CcE46b60Cc6bab299131c96798',
  [arbitrumSepolia.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
  [scrollSepolia.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
  [mantleSepoliaTestnet.id]: '0x',
  [gnosisChiado.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
}

export const explorers: Record<number, string> = {
  [holesky.id]: holesky.blockExplorers.default.url,
  [bitkubTestnet.id]: bitkubTestnet.blockExplorers.default.url,
  [polygonZkEvmCardona.id]: polygonZkEvmCardona.blockExplorers.default.url,
  [flowTestnet.id]: 'https://evm-testnet.flowscan.io',
  [arbitrumSepolia.id]: arbitrumSepolia.blockExplorers.default.url,
  [scrollSepolia.id]: scrollSepolia.blockExplorers.default.url,
  [mantleSepoliaTestnet.id]: mantleSepoliaTestnet.blockExplorers.default.url,
  [gnosisChiado.id]: gnosisChiado.blockExplorers.default.url,
}

export const faucets: Record<number, string> = {
  [holesky.id]: 'https://cloud.google.com/application/web3/faucet/ethereum/holesky',
  [bitkubTestnet.id]: 'https://faucet.bitkubchain.com',
  [polygonZkEvmCardona.id]: 'https://faucet.polygon.technology',
  [flowTestnet.id]: 'https://testnet-faucet.onflow.org/fund-account',
  [arbitrumSepolia.id]: 'https://www.alchemy.com/faucets/arbitrum-sepolia',
  [scrollSepolia.id]: 'https://www.alchemy.com/faucets/ethereum-sepolia',
  [mantleSepoliaTestnet.id]: 'https://faucet.sepolia.mantle.xyz/',
  [gnosisChiado.id]: 'https://faucet.chiadochain.net/',
}
