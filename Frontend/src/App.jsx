import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/auth/Register';
import ForgetPassword from './Components/auth/ForgetPassword';
import ResetPassword from './Components/auth/ResetPassword';
import ParentRsgister from './Components/auth/ParentRsgister';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
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
