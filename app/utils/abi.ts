import { parseAbi } from 'viem'

export const address = '0x1a3a9A054bC10639Ee86b3300CB00Db808738C2a'

export const abi = parseAbi([
  'function mint(string calldata name) public',
  'function add(string calldata name, string calldata user) public',
  'function list(string calldata name) public view returns (string[] memory)',
  'function names(uint256 tokenId) public view returns (string memory)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
])
