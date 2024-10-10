// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test, console} from "forge-std/Test.sol";
import {Ctag} from "../src/Ctag.sol";

contract CTagTest is Test {
    Ctag public ctag;

    function setUp() public {
        ctag = new Ctag();
    }

    function test_Mint() public {
        string memory name = "test";
        ctag.mint(name);
        assertEq(ctag.tokenOfOwnerByIndex(address(this), 0), uint256(keccak256(abi.encodePacked(name))));
    }
}
