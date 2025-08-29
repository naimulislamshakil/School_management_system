import React, { useState } from 'react';
import { setTitle } from '../../../CustomHook/Title';
import SelectField from '../../Common/SelectField';

const AdmitionForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dob: '',
		gender: '',
		bloodGroup: '',
		previousSchool: '',
		admissionClass: '',
		admissionSection: '',
		fatherName: '',
		fatherOccupation: '',
		fatherContact: '',
		motherName: '',
		motherOccupation: '',
		motherContact: '',
		guardianEmail: '',
		guardianAddress: '',
		photo: null,
		idProof: null,
		birthCertificate: null,
		medicalCertificate: null,
		admissionForm: null,
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (files) {
			setFormData({ ...formData, [name]: files[0] });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data:', formData);
		// Send data to backend API here
	};
	setTitle('AdMission Form');

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Student Admission Form
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Student Information */}
					<h3 className="font-semibold text-lg">Student Information</h3>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="firstName"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							placeholder="John"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="lastName"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Doe"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="dob"
						>
							Date of Birth
						</label>
						<input
							type="date"
							id="dob"
							name="dob"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="gender"
						>
							Gender
						</label>
						<select
							id="gender"
							name="gender"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						>
							<option value="">Select Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<SelectField
						label="Blood Group"
						id="bloodGroup"
						options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
						onChange={handleChange}
						required
					/>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="previousSchool"
						>
							Previous School Name
						</label>
						<input
							type="text"
							id="previousSchool"
							name="previousSchool"
							placeholder="ABC School"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<SelectField
						label="Class Applying For"
						id="admissionClass"
						options={[
							'1',
							'2',
							'3',
							'4',
							'5',
							'6',
							'7',
							'8',
							'9',
							'10',
							'11',
							'12',
							'Higher Secondary',
							'Undergraduate',
							'Masters',
							'PhD',
						]}
						onChange={handleChange}
						required
					/>

					<SelectField
						id="section"
						label="Section"
						onChange={handleChange}
						options={['A', 'B']}
					/>

					{/* Parent / Guardian Information */}
					<h3 className="font-semibold text-lg mt-4">
						Parent / Guardian Information
					</h3>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="fatherName"
						>
							Father's Name
						</label>
						<input
							type="text"
							id="fatherName"
							name="fatherName"
							placeholder="Mr. John Doe"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="fatherContact"
						>
							Father's Contact
						</label>
						<input
							type="text"
							id="fatherContact"
							name="fatherContact"
							placeholder="+880 1234 567890"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="motherName"
						>
							Mother's Name
						</label>
						<input
							type="text"
							id="motherName"
							name="motherName"
							placeholder="Mrs. Jane Doe"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="motherContact"
						>
							Mother's Contact
						</label>
						<input
							type="text"
							id="motherContact"
							name="motherContact"
							placeholder="+880 9876 543210"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="guardianEmail"
						>
							Parent/Guardian Email
						</label>
						<input
							type="email"
							id="guardianEmail"
							name="guardianEmail"
							placeholder="parent@example.com"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="guardianAddress"
						>
							Address
						</label>
						<textarea
							id="guardianAddress"
							name="guardianAddress"
							placeholder="123 Street, City"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					{/* Upload Documents */}
					<h3 className="font-semibold text-lg mt-4">Upload Documents</h3>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="photo"
						>
							Student Photo
						</label>
						<input
							type="file"
							id="photo"
							name="photo"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="idProof"
						>
							ID Proof
						</label>
						<input
							type="file"
							id="idProof"
							name="idProof"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="birthCertificate"
						>
							Birth Certificate
						</label>
						<input
							type="file"
							id="birthCertificate"
							name="birthCertificate"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="medicalCertificate"
						>
							Medical Certificate
						</label>
						<input
							type="file"
							id="medicalCertificate"
							name="medicalCertificate"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="admissionForm"
						>
							Filled Admission Form
						</label>
						<input
							type="file"
							id="admissionForm"
							name="admissionForm"
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors mt-4"
					>
						Submit Admission
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdmitionForm;
