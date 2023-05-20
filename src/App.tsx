import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dasboard';

function App() {

	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
		</Routes>
	)
}

export default App
