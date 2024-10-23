// declare global {
//     type CardInfo = {
//         title: string;
//         text: string;
//         // icon: (props: TablerIconsProps) => JSX.Element,
//         button: string;
//         navigateTo: string;
//     };

//     interface DeviceStatus {
//         powerOn: boolean;
//         shutdown: boolean;
//         network: boolean;
//     }

//     interface FormDataType {
//         username: string;
//         address: string;
//         description: string;
//         technicianName: string;
//         company: string;
//         email: string;
//         startTime: string;
//         endTime: string;
//         country: string;
//         phoneNumber: string;
//         streetAddress: string;
        // city: string;
        // region: string;
        // postalCode: string;
        // deviceStatus: DeviceStatus;
        // file?: File;
//     }

//     interface SearchResultItem {
//         [key: string | number]: string | boolean | undefined;
//     }
// }

// export {};

declare global {
    // Card information used for UI components related to health records
    type CardInfo = {
        title: string;
        text: string;
        button: string;
        navigateTo: string;
    };

    // Health record structure matching the smart contract data
    interface HealthRecord {
        patientName: string;
        patientAddress: string;
        certificateDescription: string;
        conditionDescription: string;
        doctorName: string;
        contactNumber: string;
        // isWheelchairUser: boolean;
        startTime: number;  // Timestamp or string in ISO format
        endTime: number;    // Timestamp or string in ISO format
        // date: number;       // Timestamp for the date of the record
        city: string;
        region: string;
        postalCode: string;
        streetAddress: string;
        email: string;
        country: string;
        deviceStatus: DeviceStatus;
        file?: File;
    }

    // Form data type for creating or updating health records
    interface FormDataType {
        patientName: string;
        patientAddress: string;
        certificateDescription: string;
        conditionDescription: string;
        doctorName: string;
        contactNumber: string;
        // isWheelchairUser: boolean;
        // date: string;       // Date in string format (ISO)
        startTime: string;  // Time in string format
        endTime: string;    // Time in string format       
        city: string;
        region: string;
        postalCode: string;
        streetAddress: string;
        email: string;
        country: string;
        deviceStatus: DeviceStatus;
        file?: File;  // Optional file upload, for supporting documents
    }

    // Example of a search result item structure
    interface SearchResultItem {
        [key: string | number]: string | boolean | undefined;
    }
}

export {};
