import React, { useState } from 'react';
import {
	Home,
	BarChart2,
	Folder,
	Settings,
	Bell,
	User,
	Menu,
	ChevronDown,
} from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [activeTab, setActiveTab] = useState('Home');
	const [dropdownOpen, setDropdownOpen] = useState(false); // topbar dropdown
	const [submenuOpen, setSubmenuOpen] = useState(false); // sidebar dropdown

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
	const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

	const menuItems = [
		{ icon: <Home className="w-5 h-5" />, label: 'Home', path: '/' },
		{ icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics', path: '/' },
		{
			icon: <Folder className="w-5 h-5" />,
			label: 'Projects',
			hasSubmenu: true,
			submenu: ['Project 1', 'Project 2', 'Project 3'],
		},
		{
			icon: <Settings className="w-5 h-5" />,
			label: 'Settings',
			path: '/setting',
		},
	];
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<aside
				className={`${
					sidebarOpen ? 'w-64' : 'w-20'
				} bg-white shadow-lg flex flex-col transition-all duration-300`}
			>
				<div className="flex items-center justify-between p-4">
					{sidebarOpen && (
						<span className="text-xl font-bold">USC Academy</span>
					)}
					<Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
				</div>

				<nav className="flex-1 p-2 space-y-1">
					{menuItems.map((item) => (
						<div key={item.label}>
							<Link
								to={item.path}
								onClick={() => {
									setActiveTab(item.label);
									if (item.hasSubmenu) toggleSubmenu();
								}}
								className={`flex items-center justify-between gap-3 w-full p-2 rounded-lg transition-colors ${
									activeTab === item.label
										? 'bg-blue-500 text-white'
										: 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
								}`}
							>
								<div className="flex items-center gap-3">
									{item.icon}
									{sidebarOpen && <span>{item.label}</span>}
								</div>
								{item.hasSubmenu && sidebarOpen && (
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											submenuOpen ? 'rotate-180' : ''
										}`}
									/>
								)}
							</Link>

							{/* Submenu */}
							{item.hasSubmenu && submenuOpen && sidebarOpen && (
								<div className="pl-12 mt-1 space-y-1">
									{item.submenu.map((subItem) => (
										<button
											key={subItem}
											className="block w-full text-left px-3 py-1 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
										>
											{subItem}
										</button>
									))}
								</div>
							)}
						</div>
					))}
				</nav>

				<div className="p-4">{sidebarOpen && 'Logout'}</div>
			</aside>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Topbar */}
				<header className="h-16 bg-white shadow flex items-center justify-between px-4 ms-1 rounded-b-md">
					<h1 className="text-xl font-semibold text-gray-800">{activeTab}</h1>
					<div className="flex items-center gap-4 relative">
						<Bell className="w-6 h-6 text-gray-600 cursor-pointer" />

						{/* Profile dropdown */}
						<div className="relative">
							<button
								onClick={toggleDropdown}
								className="flex items-center gap-2 focus:outline-none"
							>
								<User className="w-8 h-8 rounded-full bg-gray-200 p-1" />
								<ChevronDown className="w-4 h-4 text-gray-600" />
							</button>
							{dropdownOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-10">
									<Link
										to="/student-profile"
										className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
									>
										Profile
									</Link>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
									>
										Settings
									</a>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
									>
										Logout
									</a>
								</div>
							)}
						</div>
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 p-6 overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
