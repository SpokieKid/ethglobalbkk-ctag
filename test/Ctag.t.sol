// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {ERC721Holder} from "openzeppelin/token/ERC721/utils/ERC721Holder.sol";
import {Test, console} from "forge-std/Test.sol";
import {Ctag} from "../src/Ctag.sol";

contract CTagTest is Test, ERC721Holder {
    Ctag public ctag = new Ctag();

    string private name = "test";

    function test_Ctag() public {
        ctag.mint(name);
        uint256 tokenId = uint256(keccak256(abi.encodePacked(name)));
        assertEq(ctag.tokenOfOwnerByIndex(address(this), 0), tokenId);
        assertEq(ctag.ownerOf(tokenId), address(this));

        ctag.add(name, "xxx");

        string[] memory names = ctag.list(name);
        assertEq(names[0], "xxx");
    }
}
