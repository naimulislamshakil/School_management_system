import React from 'react';

function SelectField({ label, id, options = [], onChange, required = false }) {
	return (
		<div>
			<label
				className="block text-sm font-medium text-gray-700 mb-1"
				htmlFor={id}
			>
				{label}
			</label>
			<select
				id={id}
				name={id}
				onChange={onChange}
				required={required}
				className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			>
				<option value="">Select {label}</option>
				{options.map((opt, index) => (
					<option key={index} value={opt}>
						{opt}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectField;
