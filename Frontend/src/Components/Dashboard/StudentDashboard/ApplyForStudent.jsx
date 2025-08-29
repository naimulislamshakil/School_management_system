import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyForStudent = () => {
	const navigate = useNavigate();
	const admission = () => {
		navigate('/admission-form');
	};
	return (
		<div className="min-h-11/12 bg-gray-100 flex items-center justify-center px-4">
			<div>
				<h2 className="text-2xl">
					Hi, <span className="font-bold">Naimul</span> Yet you are not a
					student of <span className="font-bold">USC Academy</span>.
				</h2>

				<button
					onClick={admission}
					className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
				>
					Please Apply As a Student
				</button>
			</div>
		</div>
	);
};

export default ApplyForStudent;
