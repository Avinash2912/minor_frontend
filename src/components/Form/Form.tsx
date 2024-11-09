"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { createHealthRecord } from "../../api";
import Button from "../Button";

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    patientName: "",
    patientAddress: "",
    certificateDescription: "",
    doctorName: "",
    conditionDescription: "",
    email: "",
    startTime: "",
    endTime: "",
    country: "",
    contactNumber: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
    deviceStatus: {
      powerOn: false,
      shutdown: false,
      network: false,
    },
  });

  const [patientID, setPatientID] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(true);
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);

  const handleChange = (field: keyof FormDataType, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    // e.preventDefault();
    const date = new Date().toDateString().split("T")[0];
    const patientID = await createHealthRecord(formData, date);
    localStorage.setItem(patientID, JSON.stringify(formData));
    setPatientID(patientID);
    setTimeout(() => setShowForm(false), 700);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileUploaded(true);
    }
  };

  // Use effect to ensure the hydration works correctly
  useEffect(() => {
    // Ensure consistent initial render
    setShowForm(true);
  }, []);

  return (
    <>
      {showForm ? (
        <form className="p-4 max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-bold text-teal-300 mb-6">
            Submit Disability Data
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Protect the integrity of your data and ensure accurate and fast data
            verification.
          </p>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 ">
            <div>
              <label className="block text-sm font-medium text-white">
                Patient Name
              </label>
              <input
                type="text"
                name="patientName"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Enter Name"
                onChange={(e) => handleChange("patientName", e.target.value)}
                value={formData.patientName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Patient Address
              </label>
              <input
                type="text"
                name="patientAddress"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Enter Patient Address"
                onChange={(e) => handleChange("patientAddress", e.target.value)}
                value={formData.patientAddress}
              />
            </div>
            {fileUploaded ? (
              <div className="text-green-500 col-span-full">
                File uploaded successfully!
              </div>
            ) : (
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  Upload Certificate (PDF, JPG, PNG)
                </label>
                <div className="mt-2 flex justify-center border border-dashed border-teal-500 rounded-lg p-4">
                  <PhotoIcon
                    className="h-12 w-12 text-teal-300"
                    aria-hidden="true"
                  />
                  <label className="cursor-pointer mt-4 flex flex-col items-center">
                    <span className="text-teal-300 font-semibold">
                      Upload a file
                    </span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-xs text-gray-300">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            )}
            <div className="col-span-full">
              <label className="block text-sm font-medium text-white">
                Certificate Description
              </label>
              <textarea
                className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                rows={3}
                placeholder="Describe the item in detail."
                onChange={(e) =>
                  handleChange("certificateDescription", e.target.value)
                }
                value={formData.certificateDescription}
              />
            </div>
          </div>

          <div className="border-t border-gray-600 mt-6 pt-6">
            <h2 className="text-lg font-bold text-teal-300 mb-4">
              Contact Details
            </h2>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("doctorName", e.target.value)}
                  value={formData.doctorName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Condition Description
                </label>
                <input
                  type="text"
                  name="conditionDescription"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) =>
                    handleChange("conditionDescription", e.target.value)
                  }
                  value={formData.conditionDescription}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={formData.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("startTime", e.target.value)}
                  value={formData.startTime}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("endTime", e.target.value)}
                  value={formData.endTime}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Country
                </label>
                <select
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("country", e.target.value)}
                  value={formData.country}
                >
                  <option value="">Select a country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
                  value={formData.contactNumber}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) =>
                    handleChange("streetAddress", e.target.value)
                  }
                  value={formData.streetAddress}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("city", e.target.value)}
                  value={formData.city}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("region", e.target.value)}
                  value={formData.region}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  className="mt-1 block w-full rounded-md bg-gray-700 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onChange={(e) => handleChange("postalCode", e.target.value)}
                  value={formData.postalCode}
                />
              </div>
            </div>
          </div>
          <div className="m-4 text-2xl p-5 flex justify-center">
            <Button
              onClick={handleSubmit}
              className=" text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4  mt-5"
            >
              Submit Form
            </Button>
          </div>
        </form>
      ) : (
        <div className="max-w-5xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-teal-300 mb-6">
            Submission Successful!
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Your health record has been submitted successfully.
          </p>
          <Button
            onClick={async () => {
              await new Promise((resolve) => setTimeout(resolve, 500)); // simulate async
              window.location.reload();
            }}
            className="w-full text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            Submit Another Record
          </Button>
        </div>
      )}
    </>
  );
}
