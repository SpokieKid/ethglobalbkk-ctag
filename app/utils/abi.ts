import { parseAbi } from 'viem'

export const abi = parseAbi([
  'function names(uint256 tokenId) public view returns (string memory)',
  'function declares(address user) public view returns (uint256[] memory)',
  'function mint(string calldata name) public',
  'function add(string calldata name, string[] calldata users) public',
  'function list(string calldata name) public view returns (string[] memory)',
  'function declare(string calldata name) public',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
])
