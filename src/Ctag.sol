// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "openzeppelin/token/ERC721/extensions/ERC721Enumerable.sol";

contract Ctag is ERC721Enumerable {
    mapping(uint256 tokenId => string[]) private _data;

    mapping(uint256 tokenId => string) public names;

    constructor() ERC721("Ctag", "CTAG") {}

    function hash(string calldata name) public pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(name)));
    }

    function mint(string calldata name) public {
        uint256 tokenId = hash(name);
        _safeMint(msg.sender, tokenId);
        names[tokenId] = name;
    }

    function add(string calldata name, string[] calldata users) public {
        uint256 tokenId = hash(name);
        require(ownerOf(tokenId) == msg.sender);
        for (uint256 i = 0; i < users.length; ++i) {
            string calldata user = users[i];
            _data[tokenId].push(user);
        }
    }

    function list(string calldata name) public view returns (string[] memory) {
        uint256 tokenId = hash(name);
        return _data[tokenId];
    }
}
