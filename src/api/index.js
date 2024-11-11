import { ethers } from "ethers";
import contractAbi from "../../contract/JudicialSystem.json";
import { nanoid } from "nanoid";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Initialize provider with better error handling
let provider;
let signer;

if (typeof window !== "undefined") {
  if (!window?.ethereum) {
    console.warn("MetaMask is not installed!");
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
  }
}

export async function connectWallet() {
  console.log(provider);
  if (!provider) {
    throw new Error("Provider not initialized. Is MetaMask installed?");
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    signer = await provider.getSigner();
    return await signer.getAddress();
  } catch (error) {
    console.error("Error connecting wallet:", error);
    throw new Error("Failed to connect wallet");
  }
}

export async function getHealthRecord(idx) {
  if (!provider || !signer) {
    await connectWallet();
  }

  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  console.log(idx);

  try {
    const res = await contract.connect(signer).getHealthRecord(idx);
    console.log("Health Record:", res);
    return res;
  } catch (error) {
    console.error("Error fetching health record:", error);
    throw new Error("Failed to fetch health record");
  }
}

export async function createHealthRecord(formData, date) {
  console.log("code ran");
  if (!provider || !signer) {
    await connectWallet();
  }
  const isWheelchairUser = false;
  let {
    patientName,
    patientAddress,
    certificateDescription,
    conditionDescription,
    doctorName,
    contactNumber,
    startTime,
    endTime,
  } = formData;

  const dateObj = new Date(date);

  date = Math.floor(dateObj.getTime() / 1000);

  startTime = Math.floor(new Date().getTime() / 1000);
  endTime = Math.floor(new Date().getTime() / 1000);

  console.log("working till here ");

  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  contract.on(
    "HealthRecordCreated",
    (recordId, patientName, createdBy, date, event) => {
      console.log("Health Record Created:", {
        recordId,
        patientName,
        createdBy,
        date,
      });
      localStorage.setItem("lastRecordId", recordId);
      console.alert("Health Record Created with ID: ", recordId);
      console.log("Event:", event); // This will give you the full event data (logs, etc.)
    }
  );

  console.log(
    patientName,
    patientAddress,
    certificateDescription,
    conditionDescription,
    doctorName,
    contactNumber,
    startTime,
    endTime,
    isWheelchairUser,
    date
  );

  try {
    const gasLimit = await provider.estimateGas({
      to: contractAddress,
      data: contract.interface.encodeFunctionData("createHealthRecord", [
        patientName,
        patientAddress,
        certificateDescription,
        conditionDescription,
        doctorName,
        contactNumber,
        isWheelchairUser,
        date,
        startTime,
        endTime,
      ]),
    });

    const blockTag = await provider.getBlockNumber();
    console.log("blockTag", blockTag);
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
        endTime,
        { gasLimit: gasLimit, blockTag: "latest" }
      );

    console.log("Transaction sent:", tx);
    const receipt = await tx.wait();
    console.log("Transaction receipt:", receipt);

    const healthRecordId = nanoid(6);
    return healthRecordId;
  } catch (error) {
    console.log(error);
    console.error("Error creating health record:", error);
    throw new Error("Failed to create health record");
  }
}
