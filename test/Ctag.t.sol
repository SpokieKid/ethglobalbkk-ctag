// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test, console} from "forge-std/Test.sol";
import {Ctag} from "../src/Ctag.sol";

contract CTagTest is Test {
    Ctag public ctag;

    function setUp() public {
        ctag = new Ctag();
        ctag.setNumber(0);
    }

    function test_Increment() public {
        ctag.increment();
        assertEq(ctag.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        ctag.setNumber(x);
        assertEq(ctag.number(), x);
    }
}
