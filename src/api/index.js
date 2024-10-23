// const { ethers } = require("ethers");
// import contractAbi from "../../contract/JudicialSystem.json";
// import { nanoid } from 'nanoid'

// const contractAddress = "0xd191e61c70a458afef7175e9c2e4463c83d187b4";

// let provider;

// if (typeof window !== "undefined") {
//   if (!window?.ethereum) {
//     alert("Please install MetaMask!");
//   }

//   provider = window?.ethereum
//     ? new ethers.providers.Web3Provider(window.ethereum)
//     : null;
// }
// let signer;

// export async function connectWallet() {
//   await provider.send("eth_requestAccounts", []);
//   signer = await provider.getSigner();
//   return signer.getAddress();
// }

// export async function getEvidence(idx) {
//   await connectWallet();
//   const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//   try {
//     const res = await contract.connect(signer).getEvidence(idx);
//     console.log("Evidence:", res);
//     return res;
//   } catch (error) {
//     console.error("Error fetching evidence:", error);
//   }
// }

// export async function createEvidence(formData, date) {
//   const {
//     username,
//     address,
//     region,
//     description,
//     endTime,
//     technicianName,
//     phoneNumber,
//     isComputer,
//   } = formData;
//   const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//   try {
//     await connectWallet();
//     console.log("connected");
//     const tx = await contract
//       .connect(signer)
//       .createEvidence(
//         username,
//         address,
//         region,
//         description,
//         date,
//         endTime,
//         technicianName,
//         phoneNumber,
//         isComputer
//       );
//     console.log("created evidence!!!");

//     const receipt = await tx.wait();
//     console.log("receipt-events:", receipt.events);
//     // const evidenceCreatedEvent = receipt.events?.find(
//     //   (e) => e.event === "EvidenceCreated"
//     // );

//     // if (evidenceCreatedEvent) {
//     //   const evidenceId = evidenceCreatedEvent.args.evidenceId; 
//     //   return evidenceId.toString();
//     // } else {
//     //   console.error("EvidenceCreated event not found in the receipt");
//     // }
//     const evidenceId = nanoid(6);
//     return evidenceId.toString();
//   } catch (error) {
//     console.error("Error in createEvidence:", error);
//     throw error;
//   }
// }
const { ethers } = require("ethers");
import contractAbi from "../../contract/JudicialSystem.json";
// import contractAbi from "../../contract/HealthRecordSystem.json"; // Update the ABI file
import { nanoid } from 'nanoid';

const contractAddress = "0xd191e61c70a458afef7175e9c2e4463c83d187b4";

let provider;

if (typeof window !== "undefined") {
  if (!window?.ethereum) {
    alert("Please install MetaMask!");
  }

  provider = window?.ethereum
    ? new ethers.providers.Web3Provider(window.ethereum)
    : null;
}
let signer;

export async function connectWallet() {
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  return signer.getAddress();
}

// Fetching a health record based on an index (record ID)
export async function getHealthRecord(idx) {
  await connectWallet();
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  try {
    const res = await contract.connect(signer).getHealthRecord(idx); // Updated to 'getHealthRecord'
    console.log("Health Record:", res);
    return res;
  } catch (error) {
    console.error("Error fetching health record:", error);
  }
}

// Creating a new health record for a disabled person
export async function createHealthRecord(formData, date) {
  const {
    patientName,
    patientAddress,
    certificateDescription,
    conditionDescription,
    doctorName,
    contactNumber,
    startTime,
    endTime,
  } = formData;

  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  try {
    await connectWallet();
    console.log("connected");
    const tx = await contract
      .connect(signer)
      .createHealthRecord(
        patientName,
        patientAddress,
        certificateDescription,
        conditionDescription,
        doctorName,
        contactNumber,
        isWheelchairUser,
        date,
        startTime,
        endTime
      ); // Updated to 'createHealthRecord'
    console.log("created health record!!!");

    const receipt = await tx.wait();
    console.log("receipt-events:", receipt.events);

    const healthRecordId = nanoid(6); // Generate a random health record ID
    return healthRecordId.toString();
  } catch (error) {
    console.error("Error in createHealthRecord:", error);
    throw error;
  }
}