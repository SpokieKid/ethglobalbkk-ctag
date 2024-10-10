// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "openzeppelin/token/ERC721/extensions/ERC721Enumerable.sol";

contract Ctag is ERC721Enumerable {
    uint256 public number;

    constructor() ERC721("Ctag", "CTAG") {}

    function mint(string calldata name) public {
        super._mint(msg.sender, uint256(keccak256(abi.encodePacked(name))));
    }
}
