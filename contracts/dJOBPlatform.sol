// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "./dJOB.sol";
import "./BadgeNFT.sol";
import "./TokenAuthority.sol";

contract dJOBPlatform {
    TokenAuthority public authority;
    dJOB public djobToken;
    BadgeNFT public badgeNFT;

    uint256 public jobCount;
    uint256 public reputationThreshold = 50;

    struct Job {
        uint256 id;
        address freelancer;
        address employer;
        uint256 paymentAmount;
        bool completed;
        bool paid;
    }

    struct Freelancer {
        uint256 reputationPoints;
        uint256 jobsCompleted;
    }

    mapping(uint256 => Job) public jobs;
    mapping(address => Freelancer) public freelancers;

    event JobCreated(uint256 jobId);
    event JobCompleted(uint256 jobId);
    event PaymentReleased(uint256 jobId);
    event BadgeAwarded(address freelancer, uint256 badgeId);

    constructor(address _authority, address _djobToken, address _badgeNFT) {
        authority = TokenAuthority(_authority);
        djobToken = dJOB(_djobToken);
        badgeNFT = BadgeNFT(_badgeNFT);
    }

    function createJob(address freelancer, uint256 paymentAmount) external {
        require(authority.isOperator(msg.sender), "Not authorized to create job");

        jobCount++;
        jobs[jobCount] = Job(jobCount, freelancer, msg.sender, paymentAmount, false, false);

        djobToken.transferFrom(msg.sender, address(this), paymentAmount);
        emit JobCreated(jobCount);
    }

    function completeJob(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only employer can complete job");
        require(!job.completed, "Job already completed");

        job.completed = true;
        freelancers[job.freelancer].reputationPoints += 10;
        freelancers[job.freelancer].jobsCompleted++;

        if (freelancers[job.freelancer].reputationPoints >= reputationThreshold) {
            badgeNFT.awardBadge(job.freelancer);
            emit BadgeAwarded(job.freelancer, freelancers[job.freelancer].jobsCompleted);
        }

        emit JobCompleted(jobId);
    }

    function releasePayment(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only employer can release payment");
        require(job.completed, "Job not completed");
        require(!job.paid, "Payment already released");

        job.paid = true;
        djobToken.transfer(job.freelancer, job.paymentAmount);
        emit PaymentReleased(jobId);
    }

    function getFreelancerReputation(address user) external view returns (uint256, uint256) {
        Freelancer memory f = freelancers[user];
        return (f.reputationPoints, f.jobsCompleted);
    }
}
