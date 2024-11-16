import { parseAbi } from 'viem'

export const abi = parseAbi([
  'function mint(string calldata name) public',
  'function add(string calldata name, string[] calldata users) public',
  'function list(string calldata name) public view returns (string[] memory)',
  'function names(uint256 tokenId) public view returns (string memory)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
])
