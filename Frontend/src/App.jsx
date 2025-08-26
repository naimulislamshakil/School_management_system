import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/auth/Register';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
