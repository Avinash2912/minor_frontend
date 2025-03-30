"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { createHealthRecord } from "../../api";
import { motion } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState<number>(1);

  const handleChange = (field: keyof FormDataType, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
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

  useEffect(() => {
    setShowForm(true);
  }, []);

  const sections = [
    {
      title: "Basic Information",
      fields: (
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              placeholder="Enter Name"
              onChange={(e) => handleChange("patientName", e.target.value)}
              value={formData.patientName}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Patient Address
            </label>
            <input
              type="text"
              name="patientAddress"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              placeholder="Enter Patient Address"
              onChange={(e) => handleChange("patientAddress", e.target.value)}
              value={formData.patientAddress}
            />
          </div>
          <div className="col-span-full space-y-2">
            <label className="block text-sm font-medium text-white">
              Certificate Description
            </label>
            <textarea
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              rows={3}
              placeholder="Describe the item in detail."
              onChange={(e) => handleChange("certificateDescription", e.target.value)}
              value={formData.certificateDescription}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Contact Details",
      fields: (
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Doctor Name
            </label>
            <input
              type="text"
              name="doctorName"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("doctorName", e.target.value)}
              value={formData.doctorName}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Condition Description
            </label>
            <input
              type="text"
              name="conditionDescription"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("conditionDescription", e.target.value)}
              value={formData.conditionDescription}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("email", e.target.value)}
              value={formData.email}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              value={formData.contactNumber}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Schedule & Location",
      fields: (
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("startTime", e.target.value)}
              value={formData.startTime}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("endTime", e.target.value)}
              value={formData.endTime}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Country
            </label>
            <select
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("country", e.target.value)}
              value={formData.country}
            >
              <option value="">Select a country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              className="w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              onChange={(e) => handleChange("streetAddress", e.target.value)}
              value={formData.streetAddress}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {showForm ? (
        <div className="min-h-screen py-6 px-4 sm:px-6 flex items-center justify-center bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Submit Disability Data
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  Protect the integrity of your data and ensure accurate verification
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index < sections.length - 1 ? "flex-1" : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm ${
                        activeSection >= index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < sections.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          activeSection > index + 1
                            ? "bg-blue-500"
                            : "bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Sections */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: activeSection === index + 1 ? 1 : 0,
                      x: activeSection === index + 1 ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      activeSection === index + 1 ? "block" : "hidden"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    {section.fields}
                  </motion.div>
                ))}
              </div>

              {/* File Upload */}
              <div className="mt-6">
                {fileUploaded ? (
                  <div className="text-green-400 bg-green-400/10 p-4 rounded-lg">
                    File uploaded successfully!
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-4 sm:p-6 text-center hover:border-blue-500/50 transition-colors">
                    <PhotoIcon className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-3" />
                    <label className="cursor-pointer">
                      <span className="text-blue-500 font-medium">Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setActiveSection((prev) => Math.max(prev - 1, 1))}
                  disabled={activeSection === 1}
                  className="px-4 sm:px-6 py-2 rounded-lg bg-gray-700 text-white text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
                {activeSection < sections.length ? (
                  <button
                    onClick={() => setActiveSection((prev) => Math.min(prev + 1, sections.length))}
                    className="px-4 sm:px-6 py-2 rounded-lg bg-blue-500 text-white text-sm sm:text-base hover:bg-blue-600 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-4 sm:px-6 py-2 rounded-lg bg-green-500 text-white text-sm sm:text-base hover:bg-green-600 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
