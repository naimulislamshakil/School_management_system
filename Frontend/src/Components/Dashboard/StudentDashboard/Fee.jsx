import React, { useState } from 'react';

const Fee = () => {
	const [admissionClass, setAdmissionClass] = useState('');
	const [totalFee, setTotalFee] = useState(0);

	const fees = {
		formFee: 500, // fixed admission form fee
		sportsFee: 300,
		canteenFee: 200,
		otherFee: 100,
		monthlyFee: {
			primary: 1000, // class 1-5
			secondary: 1500, // class 6-10
			higherSecondary: 2000,
			undergraduate: 5000,
			masters: 7000,
			phd: 10000,
		},
	};

	function calculateTotalFee(admissionClass) {
		let monthlyFee = 0;

		if (admissionClass <= 5) monthlyFee = fees.monthlyFee.primary;
		else if (admissionClass <= 10) monthlyFee = fees.monthlyFee.secondary;
		else if (admissionClass === 'Higher Secondary')
			monthlyFee = fees.monthlyFee.higherSecondary;
		else if (admissionClass === 'Undergraduate')
			monthlyFee = fees.monthlyFee.undergraduate;
		else if (admissionClass === 'Masters') monthlyFee = fees.monthlyFee.masters;
		else if (admissionClass === 'PhD') monthlyFee = fees.monthlyFee.phd;

		return (
			fees.formFee +
			fees.sportsFee +
			fees.canteenFee +
			fees.otherFee +
			monthlyFee
		);
	}

	const handleClassChange = (e) => {
		const selectedClass = e.target.value;
		setAdmissionClass(selectedClass);
		setTotalFee(calculateTotalFee(selectedClass));
	};
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
				<div className="space-y-4">
					<label htmlFor="admissionClass">Class Applying For</label>
					<select
						id="admissionClass"
						value={admissionClass}
						onChange={handleClassChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
					>
						<option value="">Select Class</option>
						{[...Array(10)].map((_, i) => (
							<option key={i + 1} value={i + 1}>
								{i + 1}
							</option>
						))}
						<option value="Higher Secondary">Higher Secondary</option>
						<option value="Undergraduate">Undergraduate</option>
						<option value="Masters">Masters</option>
						<option value="PhD">PhD</option>
					</select>

					{totalFee > 0 && (
						<div className="bg-gray-100 p-4 rounded-lg">
							<p>📌 Admission Form Fee: {fees.formFee} BDT</p>
							<p>🏀 Sports Fee: {fees.sportsFee} BDT</p>
							<p>🍴 Canteen Fee: {fees.canteenFee} BDT</p>
							<p>📚 Other Fee: {fees.otherFee} BDT</p>
							<p>
								🎓 Class Fee:{' '}
								{totalFee -
									(fees.formFee +
										fees.sportsFee +
										fees.canteenFee +
										fees.otherFee)}{' '}
								BDT
							</p>
							<hr className="my-2" />
							<p className="text-green-600 font-bold text-lg">
								💰 Total Payable: {totalFee} BDT
							</p>
						</div>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors mt-4"
				>
					Pay {totalFee} BDT
				</button>
			</div>
		</div>
	);
};

export default Fee;
