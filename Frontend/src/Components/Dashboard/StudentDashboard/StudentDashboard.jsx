import React from 'react';
import StudentImg from '../../../assets/student.png';
import { User, BookOpen, CalendarCheck, Wallet } from 'lucide-react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const StudentDashboard = () => {
	const data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: 'Attendance %',
				data: [95, 92, 88, 90, 94, 91],
				borderColor: '#4F46E5', // Indigo
				backgroundColor: 'rgba(79, 70, 229, 0.2)',
				tension: 0.3, // smooth curve
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Weekly Attendance Report',
				font: { size: 18 },
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
				ticks: {
					stepSize: 10,
					callback: function (value) {
						return value + '%';
					},
				},
			},
		},
	};
	return (
		<div>
			<div className="min-h-screen  p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Student Profile Card */}
					<div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center">
						<img
							className="w-32 h-32 rounded-full border-4 border-indigo-200 shadow-md"
							src={StudentImg}
							alt="Student"
						/>
						<div className="text-center mt-4">
							<h2 className="text-xl font-semibold text-gray-800">
								Naimul Islam
							</h2>
							<p className="text-sm text-gray-500">Student ID: STU - 011022</p>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-6 w-full">
							<div className="bg-indigo-100 p-4 rounded-xl text-center">
								<CalendarCheck className="mx-auto text-indigo-600" />
								<p className="text-sm text-gray-600 mt-1">Attendance</p>
								<p className="font-bold text-lg">92%</p>
							</div>
							<div className="bg-green-100 p-4 rounded-xl text-center">
								<BookOpen className="mx-auto text-green-600" />
								<p className="text-sm text-gray-600 mt-1">Avg. Grade</p>
								<p className="font-bold text-lg">A-</p>
							</div>
							<div className="bg-yellow-100 p-4 rounded-xl text-center">
								<Wallet className="mx-auto text-yellow-600" />
								<p className="text-sm text-gray-600 mt-1">Fees</p>
								<p className="font-bold text-lg">Paid</p>
							</div>
							<div className="bg-pink-100 p-4 rounded-xl text-center">
								<User className="mx-auto text-pink-600" />
								<p className="text-sm text-gray-600 mt-1">Class</p>
								<p className="font-bold text-lg">10-B</p>
							</div>
						</div>
					</div>

					{/* Reports & Notices */}
					<div className="space-y-6">
						<div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
							<h3 className="text-lg font-semibold text-gray-700 mb-3">
								Upcoming Exams
							</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>📘 Mathematics – 12 Sept 2025</li>
								<li>🧪 Science – 14 Sept 2025</li>
								<li>📖 English – 17 Sept 2025</li>
							</ul>
						</div>

						<div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
							<h3 className="text-lg font-semibold text-gray-700 mb-3">
								Announcements
							</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>✔️ Sports Day – 20 Sept</li>
								<li>✔️ Parent Meeting – 25 Sept</li>
								<li>✔️ Library Book Return – 30 Sept</li>
							</ul>
						</div>

						<div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
							<h3 className="text-lg font-semibold text-gray-700 mb-3">
								Extra-Curricular Activities
							</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>🏀 Basketball Tournament – 15 Sept</li>
								<li>🎭 Drama Club Performance – 18 Sept</li>
								<li>🎨 Art Exhibition – 22 Sept</li>
								<li>🎶 Music Competition – 25 Sept</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Chart */}
			<div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default StudentDashboard;
