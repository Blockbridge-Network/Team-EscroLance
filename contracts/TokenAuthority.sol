// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title TokenAuthority
 * @dev Manages roles and access rights for the dJOB token and platform contracts.
 */
contract TokenAuthority is AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    constructor(address admin) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, admin);
        _grantRole(BURNER_ROLE, admin);
        _grantRole(OPERATOR_ROLE, admin);
    }

    function grantMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MINTER_ROLE, account);
    }

    function revokeMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(MINTER_ROLE, account);
    }

    function grantBurner(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(BURNER_ROLE, account);
    }

    function revokeBurner(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(BURNER_ROLE, account);
    }

    function grantOperator(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(OPERATOR_ROLE, account);
    }

    function revokeOperator(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(OPERATOR_ROLE, account);
    }

    function isMinter(address account) external view returns (bool) {
        return hasRole(MINTER_ROLE, account);
    }

    function isBurner(address account) external view returns (bool) {
        return hasRole(BURNER_ROLE, account);
    }

    function isOperator(address account) external view returns (bool) {
        return hasRole(OPERATOR_ROLE, account);
    }
}
