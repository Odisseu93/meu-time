// import SelectCountries from '@/components/SelectCountries';
import { useAuth } from '@/context/auth/hook';
import FootballApi from '@/services/api';
import { Country } from '@/services/api/types';
import { getDataSStorage } from '@/util/storage';
import { useEffect, useState } from 'react';
import FormSelect from '@/components/Select';

const Dashboard: React.FC = () => {
	const { isLoggedIn } = useAuth();
	const [ countries, setCountries] = useState<Country[] | null>(null);

	const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.currentTarget 
		console.log(target['country'].value);
	};

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
			<main className="w-full h-[90vh] mt-6  bg-dashboard bg-cover">
				<form className='flex gap-2 flex-wrap flex-col items-center p-3 w-full h-full bg-linear-gradient-white  before:blur ' action="" onSubmit={(e)=>handleSubmit(e)}>
					{countries ? (
						<div className="form-group">
							<FormSelect name='country' label='País' options={countries.map(({ code, name }) => {
								return {
									value: code,
									label: name
								}
							})} classNames={{}} handleChange={(e)=> e} />
						</div>		
					) : null}
					<button className=' text-white  w-fit h-fit bg-violet-100  p-2 rounded-md md:hover:bg-violet-200' type="submit">Submit</button>
				</form>
			</main>
		)
			: (
				<main className="w-full h-[90vh] mt-6 border-y border-dashed bg-bg_main_dashboard">
					<h1>Você não tem acesso, efutue o login!</h1>
				</main>
			)
	);
};

export default Dashboard;