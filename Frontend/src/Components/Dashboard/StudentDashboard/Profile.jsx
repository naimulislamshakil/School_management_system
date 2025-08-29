import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import InputField from '../../Common/InputField';

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);

	const initialData = {
		// Personal Info
		firstName: 'John',
		lastName: 'Doe',
		dob: '2005-08-15',
		gender: 'Male',
		bloodGroup: 'O+',
		contact: '0123456789',
		email: 'john@example.com',
		address: '123 Street, City',

		// Academic Info
		className: '10',
		section: 'A',
		rollNo: '25',
		admissionDate: '2020-01-15',

		// Guardian Info
		guardianName: 'Mr. Doe',
		guardianRelation: 'Father',
		guardianPhone: '0987654321',
		guardianEmail: 'guardian@example.com',

		// Other Info
		sports: 'Football',
		transport: 'Yes',
		hostel: 'No',
	};

	const [studentData, setStudentData] = useState(initialData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStudentData({ ...studentData, [name]: value });
	};

	const handleEdit = () => setIsEditing(true);
	const handleCancel = () => {
		setStudentData(initialData);
		setIsEditing(false);
	};
	const handleSave = () => {
		console.log('Saved Data:', studentData); // API call
		setIsEditing(false);
	};
	return (
		<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
				Student Profile
			</h2>

			{/* Personal Information */}
			<SectionTitle title="Personal Information" />
			<div className="grid grid-cols-2 gap-4 mb-6">
				<InputField
					label="First Name"
					name="firstName"
					value={studentData.firstName}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Last Name"
					name="lastName"
					value={studentData.lastName}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Date of Birth"
					type="date"
					name="dob"
					value={studentData.dob}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Gender"
					name="gender"
					value={studentData.gender}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Blood Group"
					name="bloodGroup"
					value={studentData.bloodGroup}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Contact Number"
					name="contact"
					value={studentData.contact}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Email"
					name="email"
					value={studentData.email}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Address"
					name="address"
					value={studentData.address}
					onChange={handleChange}
					disabled={!isEditing}
				/>
			</div>

			{/* Academic Information */}
			<SectionTitle title="Academic Information" />
			<div className="grid grid-cols-2 gap-4 mb-6">
				<InputField
					label="Class"
					name="className"
					value={studentData.className}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Section"
					name="section"
					value={studentData.section}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Roll No"
					name="rollNo"
					value={studentData.rollNo}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Admission Date"
					type="date"
					name="admissionDate"
					value={studentData.admissionDate}
					onChange={handleChange}
					disabled={!isEditing}
				/>
			</div>

			{/* Guardian Information */}
			<SectionTitle title="Guardian Information" />
			<div className="grid grid-cols-2 gap-4 mb-6">
				<InputField
					label="Guardian Name"
					name="guardianName"
					value={studentData.guardianName}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Relation"
					name="guardianRelation"
					value={studentData.guardianRelation}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Phone"
					name="guardianPhone"
					value={studentData.guardianPhone}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Email"
					name="guardianEmail"
					value={studentData.guardianEmail}
					onChange={handleChange}
					disabled={!isEditing}
				/>
			</div>

			{/* Other Information */}
			<SectionTitle title="Other Information" />
			<div className="grid grid-cols-2 gap-4 mb-6">
				<InputField
					label="Sports"
					name="sports"
					value={studentData.sports}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Transport"
					name="transport"
					value={studentData.transport}
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<InputField
					label="Hostel"
					name="hostel"
					value={studentData.hostel}
					onChange={handleChange}
					disabled={!isEditing}
				/>
			</div>

			{/* Buttons */}
			<div className="flex justify-end space-x-4">
				{!isEditing ? (
					<button
						onClick={handleEdit}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					>
						Edit
					</button>
				) : (
					<>
						<button
							onClick={handleCancel}
							className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
						>
							Cancel
						</button>
						<button
							onClick={handleSave}
							className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
						>
							Save
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Profile;
