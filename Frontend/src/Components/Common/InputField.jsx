import React from 'react';

const InputField = ({
	label,
	name,
	value,
	onChange,
	disabled,
	type = 'text',
}) => {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
				className={`w-full px-4 py-2 rounded-lg border ${
					disabled ? 'bg-gray-100' : 'bg-white'
				} border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
			/>
		</div>
	);
};

export default InputField;
