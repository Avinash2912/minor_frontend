// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HealthRecordSystem {
    struct HealthRecord {
        string patientName;
        string patientAddress;
        string certificateDescription;
        string conditionDescription;
        string doctorName;
        string contactNumber;
        bool isWheelchairUser;
        uint256 date;
        uint256 startTime;
        uint256 endTime;
        address createdBy;
        bool isValid;
    }

    mapping(uint256 => HealthRecord) public healthRecords;
    uint256 public recordCount;
    
    event HealthRecordCreated(
        uint256 indexed recordId,
        string patientName,
        address createdBy,
        uint256 date
    );

    constructor() {
        recordCount = 0;
    }

    function createHealthRecord(
        string memory _patientName,
        string memory _patientAddress,
        string memory _certificateDescription,
        string memory _conditionDescription,
        string memory _doctorName,
        string memory _contactNumber,
        bool _isWheelchairUser,
        uint256 _date,
        uint256 _startTime,
        uint256 _endTime
    ) public returns (uint256) {
        recordCount++;
        
        healthRecords[recordCount] = HealthRecord({
            patientName: _patientName,
            patientAddress: _patientAddress,
            certificateDescription: _certificateDescription,
            conditionDescription: _conditionDescription,
            doctorName: _doctorName,
            contactNumber: _contactNumber,
            isWheelchairUser: _isWheelchairUser,
            date: _date,
            startTime: _startTime,
            endTime: _endTime,
            createdBy: msg.sender,
            isValid: true
        });

        emit HealthRecordCreated(recordCount, _patientName, msg.sender, _date);
        
        return recordCount;
    }

    function getHealthRecord(uint256 _recordId) public view returns (
        string memory patientName,
        string memory patientAddress,
        string memory certificateDescription,
        string memory conditionDescription,
        string memory doctorName,
        string memory contactNumber,
        bool isWheelchairUser,
        uint256 date,
        uint256 startTime,
        uint256 endTime,
        address createdBy,
        bool isValid
    ) {
        require(_recordId > 0 && _recordId <= recordCount, "Invalid record ID");
        HealthRecord storage record = healthRecords[_recordId];
        
        return (
            record.patientName,
            record.patientAddress,
            record.certificateDescription,
            record.conditionDescription,
            record.doctorName,
            record.contactNumber,
            record.isWheelchairUser,
            record.date,
            record.startTime,
            record.endTime,
            record.createdBy,
            record.isValid
        );
    }
}