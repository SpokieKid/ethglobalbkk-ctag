import { parseAbi } from 'viem'

export const abi = parseAbi([
  'function mint(string calldata name) public',
  'function add(string calldata name, string calldata user) public',
  'function list(string calldata name) public view returns (string[] memory)',
])
