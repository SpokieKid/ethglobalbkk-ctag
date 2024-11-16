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

        address[] memory users0 = new address[](1);
        users0[0] = address(0x0);
        ctag.add(name, users0);

        address[] memory users1 = ctag.list(name);
        assertEq(users1.length, 1);
        assertEq(users1[0], address(0x0));
    }
}
