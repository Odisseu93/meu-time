import { useAuth } from '@/context/auth/hook';
import FootballApi from '@/services/api';
import { Country } from '@/services/api/types';
import { getDataSStorage } from '@/util/storage';
import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
	const { isLoggedIn } = useAuth();
	const [ countries, setCountries] = useState<Country[] | null>(null);
	
	useEffect(() => {
		if(isLoggedIn) {	
			console.log(isLoggedIn);
			const api = new FootballApi(getDataSStorage('ak'));
			api.getCountries().then(res => {
				if(res instanceof Error) {
					setCountries(null);
					throw new Error(JSON.stringify(res));
				}
				setCountries(res);
			});
		}
	}, [isLoggedIn])
	
	return (
		isLoggedIn ? (
			<main className="w-full h-[90vh] mt-6 border-y border-dashed bg-bg_main_dashboard">
				<h1>Seja bem vindo!</h1>;
			</main>
		)
			: (
				<main className="w-full h-[90vh] mt-6 border-y border-dashed bg-bg_main_dashboard">
					<h1>Você não tem acesso, efutue o login!</h1>;
				</main>
			)
	);
};

export default Dashboard;