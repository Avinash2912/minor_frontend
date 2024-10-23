// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <=0.8.18;

contract DecentralisedJudicialSystem {
    struct Evidence {
        string recipientName;
        string recipientAddress; // Physical address of the recipient
        string locationObtained;
        string description;
        string dateCollected; // Unix timestamp for the date collected
        string timeCollected; // Unix timestamp for the time collected
        string collectionTechnicianName;
        string phoneNumber;
        bool isComputer;
    }

    address private admin;
    mapping(uint256 => Evidence) private evidences;
    uint256 private nextEvidenceId;
    event EvidenceCreated(uint256 indexed evidenceId);

    constructor() {
        admin = msg.sender;
        nextEvidenceId = 1;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    function createEvidence(
        string memory _recipientName,
        string memory _recipientAddress,
        string memory _locationObtained,
        string memory _description,
        string memory _dateCollected,
        string memory _timeCollected,
        string memory _collectionTechnicianName,
        string memory _phoneNumber,
        bool _isComputer
    ) public onlyAdmin returns (uint256) {
        evidences[nextEvidenceId] = Evidence({
            recipientName: _recipientName,
            recipientAddress: _recipientAddress,
            locationObtained: _locationObtained,
            description: _description,
            dateCollected: _dateCollected,
            timeCollected: _timeCollected,
            collectionTechnicianName: _collectionTechnicianName,
            phoneNumber: _phoneNumber,
            isComputer: _isComputer
        });

        nextEvidenceId++;
        uint256 newEvidenceId = nextEvidenceId - 1;
        emit EvidenceCreated(newEvidenceId);
        return newEvidenceId;
    }

    function getEvidence(
        uint256 _evidenceId
    ) public view returns (Evidence memory) {
        require(_evidenceId < nextEvidenceId, "Invalid evidence ID");
        return evidences[_evidenceId];
    }
}
