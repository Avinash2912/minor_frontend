"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { createHealthRecord } from "../../api";
import { uploadEvidence } from "../../api/ipfs";
import Button from "../Button";

function getBase64Image(img: HTMLImageElement): string {
	const canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;

	const ctx = canvas.getContext("2d");
	if (ctx) {
		ctx.drawImage(img, 0, 0);

		const dataURL = canvas.toDataURL("image/png");

		return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	} else {
		throw new Error("Canvas context is not supported.");
	}
};

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})
};

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

	const [patientID, setpatientID] = useState<string | null>(null);
	const [showForm, setShowForm] = useState<boolean>(true);
	const [fileUploaded, setFileUploaded] = useState<boolean>(false);

	const handleChange = (
		field: keyof FormDataType,
		value: string | boolean
	) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.MouseEvent) => {
		e.preventDefault();
		const date = new Date().toDateString().split("T")[0];
		const patientID = await createHealthRecord(formData, date);

		localStorage.setItem(patientID, JSON.stringify(formData));
		setpatientID(patientID);

		setTimeout(() => setShowForm(false), 700);
		// show evidence id to user after submission fter animation
		// file upload animation left - future work
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) {
			console.log("No file selected");
			return;
		}
		// const buffer = Buffer.from(await file.arrayBuffer());
        // const dataUrl = `data:${file.type};base64,${buffer.toString('base64')}`;
		
        setFileUploaded(true);
        // localStorage.setItem("ipfsImage", dataUrl);
	};

	return showForm ? (
		<form className="p-8 max-w-5xl mx-auto">
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12 font-bold">
					<h2 className="text-base font-semibold leading-7 text-white">
						Submit Disability Data
					</h2>
					<p className="mt-1 text-sm leading-6 text-white font-medium">
						Protect the integrity of your data and ensure accurate and fast data verification.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-2">
							<label
								htmlFor="patientName"
								className="block text-sm font-medium leading-6 text-white"
							>
								Patient Name
							</label>
							<div className="mt-2">
								<div className="flex rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-xs">
									<input
										type="text"
										name="patientName"
										id="patientName"
										autoComplete="patientName"
										className="block flex-1 border-0 py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6 font-light bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
										placeholder=" Enter Name"
										onChange={(e) =>
											handleChange(
												"patientName",
												e.target.value     
											)
										}
										value={formData.patientName}
									/> 
								</div>
							</div>
						</div>
						<div className="col-span-2">
							<label
								htmlFor="patientAddress"
								className="block text-sm font-medium leading-6 text-white"
							>
								Patient Address
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										id="patientAddress"
										name="patientAddress"
										placeholder=" Enter patientAddress"
										className="block flex-1 border-0 py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6 font-light bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
										value={formData.patientAddress}
										onChange={(e) =>
											handleChange(
												"patientAddress",
												e.target.value
											)
										}
									/>
								</div>
							</div>
						</div>
						{fileUploaded ? (
							<div className="text-green-500">
								File uploaded successfully!
							</div>
						) : (
							<div className="col-span-full">
								<label
									htmlFor="cover-photo"
									className="block text-sm font-bold leading-6 text-white"
								>
									Upload Certificate(PDF, JPG, PNG)
								</label>
								<div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-50/25 px-6 py-10">
									<div className="text-center">
										<PhotoIcon
											className="mx-auto h-12 w-12 text-white"
											aria-hidden="true"
										/>
										<div className="mt-4 flex text-sm leading-6 text-white">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
											>
												<span className="text-black">
													Upload a file
												</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
													onChange={handleFileChange}
												/>
											</label>
											<p className="pl-1">
												or drag and drop
											</p>
										</div>
										<p className="text-xs leading-5 text-gray-100">
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
								</div>
							</div>
						)}
						<div className="col-span-full">
							<label
								htmlFor="Item certificateDescription"
								className="block text-sm font-medium leading-6 text-white"
							>
								Certificate Description
							</label>
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="block w-full border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-light bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
									defaultValue={""}
									placeholder="Describe the item in detail. Include all the relevant information."
									onChange={(e) =>
										handleChange(
											"certificateDescription",
											e.target.value
										)
									}
									value={formData.certificateDescription}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-bold leading-7 text-white">
						Contact Details
					</h2>
					<p className="mt-1 text-sm leading-6 text-white-200">
						Details of the patient with disability.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-2">
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 text-white"
							>
								Doctor Name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="technician-name"
									id="technician-name"
									className="block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange(
											"doctorName",
											e.target.value
										)
									}
									value={formData.doctorName}
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="conditionDescription"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Condition Description
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="conditionDescription"
									id="conditionDescription"
									className="block w-full border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("conditionDescription", e.target.value)
									}
									value={formData.conditionDescription}
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Email
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									className="block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("email", e.target.value)
									}
									value={formData.email}
								/>
							</div>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="start-time"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Start Time
							</label>
							<div className="mt-2">
								<input
									id="start-time"
									name="start-time"
									type="time"
									className="block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-lg backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange(
											"startTime",
											e.target.value
										)
									}
									value={formData.startTime}
								/>
							</div>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="end-time"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								End Time
							</label>
							<div className="mt-2">
								<input
									id="end-time"
									name="end-time"
									type="time"
									className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("endTime", e.target.value)
									}
									value={formData.endTime}
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Country
							</label>
							<div className="mt-2">
								<select
									id="country"
									name="country"
									autoComplete="country-name"
									className="block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-sm backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("country", e.target.value)
									}
									value={formData.country}
								>
									<option>India</option>
									<option>Canada</option>
									<option>USA</option>
								</select>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="phone-number"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Phone Number
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="phone-number"
									id="phone-number"
									placeholder="+91 1234567890"
									className="block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white rounded-md bg-opacity-40 shadow-sm backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange(
											"contactNumber",
											e.target.value
										)
									}
									value={formData.contactNumber}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="street-patientAddress"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								Street Address
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="street-patientAddress"
									id="street-patientAddress"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white bg-opacity-40 shadow-sm backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange(
											"streetAddress",
											e.target.value
										)
									}
									value={formData.streetAddress}
								/>
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								City
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="city"
									id="city"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white bg-opacity-40 backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("city", e.target.value)
									}
									value={formData.city}
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="region"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								State / Province
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="region"
									id="region"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white bg-opacity-40 backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange("region", e.target.value)
									}
									value={formData.region}
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="postal-code"
								className="block text-sm font-medium leading-6 text-gray-100"
							>
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white bg-opacity-40 backdrop-blur-13 border-opacity-18"
									onChange={(e) =>
										handleChange(
											"postalCode",
											e.target.value
										)
									}
									value={formData.postalCode}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="mt-6 flex items-center justify-end gap-x-6"
				onClick={handleSubmit}
			>
				<Button />
			</div>
		</form>
	) : (
		<div className="flex items-center justify-center h-3/4">
			<div className="max-w-md p-8 bg-white rounded-lg bg-opacity-50 shadow-lg backdrop-blur-13 border border-opacity-40">
				<div>
					<h6 className="mb-4 text-3xl text-gray-700 font-medium">
						Your Patient ID is
					</h6>
				</div>
				<p className="mb-4 font-normal text-gray-800 text-lg text-center">
					{patientID}
				</p>
			</div>
		</div>
	);
}
