import { parseAbi } from 'viem'

export const abi = parseAbi([
  'function names(uint256 tokenId) public view returns (string memory)',
  'function getDeclares(string calldata user) public view returns (uint256[] memory)',
  'function mint(string calldata name) public',
  'function add(string calldata name, address[] calldata users) public',
  'function list(string calldata name) public view returns (address[] memory)',
  'function declare(string calldata user, string calldata name) public',
  'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
  'function balanceOf(address owner) public view returns (uint256)',
  'function tokenByIndex(uint256 index) public view returns (uint256)',
  'function totalSupply() public view returns (uint256)',
])
