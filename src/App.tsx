import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dasboard';
import NotFound from './pages/404';
import Home from './pages/home';

function App() {

	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/home'} element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
