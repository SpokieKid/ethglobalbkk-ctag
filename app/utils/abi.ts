import { type Address, type Chain, parseAbi } from 'viem'
import { bitkubTestnet, holesky } from 'viem/chains'

export const addresses: Record<number, Address> = {
  [holesky.id]: '0xcc2479E59618Bc31Ab48c48b5A74BF8108120e9d',
  [bitkubTestnet.id]: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
}

export const chains: Record<number, Chain> = {
  [holesky.id]: holesky,
  [bitkubTestnet.id]: bitkubTestnet,
}

export const faucets: Record<number, string> = {
  [holesky.id]: 'https://cloud.google.com/application/web3/faucet/ethereum/holesky',
  [bitkubTestnet.id]: 'https://faucet.bitkubchain.com/',
}

export const abi = parseAbi([
  'function mint(string calldata name) public',
  'function add(string calldata name, string[] calldata users) public',
  'function list(string calldata name) public view returns (string[] memory)',
  'function names(uint256 tokenId) public view returns (string memory)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
])
