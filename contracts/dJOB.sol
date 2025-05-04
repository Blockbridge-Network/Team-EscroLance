// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./TokenAuthority.sol";

contract dJOB is ERC20 {
    TokenAuthority public authority;

    constructor(address _authority) ERC20("dJOB", "dJOB") {
        authority = TokenAuthority(_authority);
        _mint(msg.sender, 1000000 * 10 ** 18); // Initial mint
    }

    function mint(address to, uint256 amount) external {
        require(authority.isMinter(msg.sender), "Not authorized to mint");
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        require(authority.isBurner(msg.sender), "Not authorized to burn");
        _burn(from, amount);
    }
}
