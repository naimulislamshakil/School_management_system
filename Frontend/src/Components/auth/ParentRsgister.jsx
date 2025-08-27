import React from 'react';

const ParentRsgister = () => {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
			<div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-lg">
				<h2 className="text-2xl font-heading font-bold text-black mb-6 text-center">
					Parent Register
				</h2>

				<form className="space-y-4">
					{/* Parent Name */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="fullName"
						>
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							placeholder="Mr. Rahman"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Email */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="rahman@example.com"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Phone */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="phone"
						>
							Phone Number
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							placeholder="+8801XXXXXXXXX"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Student Unique ID */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="studentId"
						>
							Student ID
						</label>
						<input
							type="text"
							id="studentId"
							name="studentId"
							placeholder="STU-1023"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Password */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="********"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Confirm Password */}
					<div>
						<label
							className="block text-sm font-medium text-text-secondary mb-1"
							htmlFor="confirmPassword"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="********"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
						/>
					</div>

					{/* Submit as input type */}
					<input
						type="submit"
						value="Register"
						className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
					/>

					<p className="text-sm text-text-secondary text-center">
						Are you a Student?{' '}
						<a
							href="/register"
							className="text-primary font-medium hover:underline"
						>
							Register here
						</a>
					</p>

					<p className="text-sm text-text-secondary text-center">
						Already have an account?{' '}
						<a
							href="/login"
							className="text-primary font-medium hover:underline"
						>
							Login
						</a>
					</p>
				</form>
				<div className="flex items-center my-6">
					<hr className="flex-1 border-gray-300 dark:border-gray-600" />
					<span className="px-2 text-gray-500 dark:text-gray-400 text-sm">
						or
					</span>
					<hr className="flex-1 border-gray-300 dark:border-gray-600" />
				</div>

				{/* Social Media Section */}
				<div className="flex flex-col space-y-3 mb-6">
					<input
						type="button"
						value="Register with Google"
						className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
					/>
					<input
						type="button"
						value="Register with Facebook"
						className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default ParentRsgister;
