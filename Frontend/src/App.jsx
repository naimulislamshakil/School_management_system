import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/auth/Register';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';
import ParentRsgister from './Components/auth/ParentRsgister';
import GeneralDashboard from './Components/Dashboard/GeneralDashboard';
import AdmitionForm from './Components/Dashboard/StudentDashboard/AdmitionForm';
import Fee from './Components/Dashboard/StudentDashboard/Fee';
import Profile from './Components/Dashboard/StudentDashboard/Profile';
import AttendanceOverview from './Components/Dashboard/StudentDashboard/AttendanceOverview';
import ClassSchedule from './Components/Dashboard/StudentDashboard/ClassSchedule';
import ReportCards from './Components/Dashboard/StudentDashboard/ReportCards';
import HomeworkAssignments from './Components/Dashboard/StudentDashboard/HomeworkAssignments';
import FeeStatus from './Components/Dashboard/StudentDashboard/FeeStatus';
import LibraryAccess from './Components/Dashboard/StudentDashboard/LibraryAccess';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<GeneralDashboard />} />
					<Route path="/admission-form" element={<AdmitionForm />} />
					<Route path="/fee" element={<Fee />} />
					<Route path="/student-profile" element={<Profile />} />
					<Route path="/class-schedule" element={<ClassSchedule />} />
					<Route path="/report-cards" element={<ReportCards />} />
					<Route path="/fee-status" element={<FeeStatus />} />
					<Route path="/library-access" element={<LibraryAccess />} />
					<Route
						path="/homework-assignments"
						element={<HomeworkAssignments />}
					/>
					<Route path="/attendance-overview" element={<AttendanceOverview />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/parent-register" element={<ParentRsgister />} />
				<Route path="/forgot-password" element={<ForgetPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</>
	);
}

export default App;
