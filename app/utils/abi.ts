import { parseAbi } from 'viem'

export const address = '0xcc2479E59618Bc31Ab48c48b5A74BF8108120e9d'

export const abi = parseAbi([
  'function mint(string calldata name) public',
  'function add(string calldata name, string[] calldata users) public',
  'function list(string calldata name) public view returns (string[] memory)',
  'function names(uint256 tokenId) public view returns (string memory)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
])
