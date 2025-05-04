// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./TokenAuthority.sol";

contract BadgeNFT is ERC721 {
    TokenAuthority public authority;
    uint256 public nextTokenId;

    constructor(address _authority) ERC721("dJOB Badge", "dJOB-Badge") {
        authority = TokenAuthority(_authority);
    }

    function awardBadge(address to) external {
        require(authority.isOperator(msg.sender), "Not authorized to award badges");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://your-nft-metadata-url/";
    }
}
