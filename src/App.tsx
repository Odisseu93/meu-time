import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dasboard';
import NotFound from './pages/404';

function App() {

	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
