// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TchauPortal {

    uint256 totalTchauzinhos;

    constructor(){
        console.log("Sou um contrato e sou inteligente :) ");
    }

    function tchau() public { 
        totalTchauzinhos += 1;
        console.log("%s deu tchauzinho!", msg.sender);
    }

    function getTotalTchauzinhos() public view returns (uint256){
        console.log("Temos um total de %d tchauzinhos!", totalTchauzinhos);
        return totalTchauzinhos;
    }
}