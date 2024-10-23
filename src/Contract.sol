// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthRecordSystem {
    // Struct to store the details of a health record
    struct HealthRecord {
        string patientName;
        string patientAddress;
        string conditionDescription;
        string treatmentDetails;
        string doctorName;
        string contactNumber;
        bool isWheelchairUser;
        uint256 startTime;
        uint256 endTime;
        uint256 date;
        address createdBy;  // Address of the person who created the record
    }

    // Mapping to store health records based on an index (healthRecordId)
    mapping(uint256 => HealthRecord) public healthRecords;
    
    // A count of the total number of health records created
    uint256 public recordCount;

    // Event emitted when a new health record is created
    event HealthRecordCreated(
        uint256 healthRecordId,
        string patientName,
        string doctorName,
        uint256 date,
        address createdBy
    );

    constructor() {
        recordCount = 0; // Initialize record count
    }

    // Function to create a new health record
    function createHealthRecord(
        string memory _patientName,
        string memory _patientAddress,
        string memory _conditionDescription,
        string memory _treatmentDetails,
        string memory _doctorName,
        string memory _contactNumber,
        bool _isWheelchairUser,
        uint256 _date,
        uint256 _startTime,
        uint256 _endTime
    ) public {
        recordCount += 1;  // Increment the record count for each new entry
        
        // Create a new health record and store it in the mapping
        healthRecords[recordCount] = HealthRecord(
            _patientName,
            _patientAddress,
            _conditionDescription,
            _treatmentDetails,
            _doctorName,
            _contactNumber,
            _isWheelchairUser,
            _startTime,
            _endTime,
            _date,
            msg.sender // Address of the user creating the record
        );

        // Emit an event that a new health record has been created
        emit HealthRecordCreated(
            recordCount,
            _patientName,
            _doctorName,
            _date,
            msg.sender
        );
    }

    // Function to retrieve a health record by ID
    function getHealthRecord(uint256 _recordId)
        public
        view
        returns (
            string memory patientName,
            string memory patientAddress,
            string memory conditionDescription,
            string memory treatmentDetails,
            string memory doctorName,
            string memory contactNumber,
            bool isWheelchairUser,
            uint256 startTime,
            uint256 endTime,
            uint256 date,
            address createdBy
        )
    {
        HealthRecord memory record = healthRecords[_recordId];
        return (
            record.patientName,
            record.patientAddress,
            record.conditionDescription,
            record.treatmentDetails,
            record.doctorName,
            record.contactNumber,
            record.isWheelchairUser,
            record.startTime,
            record.endTime,
            record.date,
            record.createdBy
        );
    }
}
