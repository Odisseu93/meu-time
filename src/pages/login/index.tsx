import BallIcon from '@/components/BallIcon';
import SoccerImage from '@/components/SoccerImage';
import { useAuth } from '@/context/auth/hook';
import FootballApi from '@/services/api';
import { setDataSStorage } from '@/util/storage';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
	const { setIsLoggedIn } = useAuth();
	const navigate = useNavigate();

	
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(document) {
			const inp = e.currentTarget.querySelector('[name=apiKey]') as HTMLInputElement;

			const footballApi = new FootballApi(inp.value);
			footballApi.getStatus().then(res => {
				if(res instanceof Error){
					setIsLoggedIn(false);
					alert('Chave inválida!');
					return
				}
			 setDataSStorage('ak',inp.value);
			 setIsLoggedIn(true);
			 navigate('/dashboard');
			});

			return;
		}
	};

	return (
		<main className="grid">
			<form onSubmit={(e)=> handleSubmit(e)} className="grid md:grid-cols-2 gap-4 md:gap-2 items-center w-2/3 border-2  mx-auto md:ms-[25vw] mt-8">
				<div className="wrapper-input md:w-min[422px]">
					<label className='block text-center mb-1' htmlFor='apiKey'>Insira a chave da API</label>
					<BallIcon cls='wrapper-input__ball absolute m-1' />
					<input className="wrapper-input__input w-full h-9 ps-9 border border-bd_inp_text_login_default rounded-sm focus:border-bd_inp_text_login_active" type="text" name="apiKey" id="apiKey" />
					<p className='mt-2 text-sm ps-2'><a  href="https://dashboard.api-football.com/register" className='text-violet-100 underline active:text-blue-900' target="_blank" rel="noopener noreferrer">Toque aqui</a> para obter a chave.</p>
				</div>
				<input className='w-[105px] h-fit p-2 border-2 mx-auto md:mx-0 rounded-md bg-violet-200 text-white  md:hover:bg-violet-300  active:bg-violet-400 cursor-pointer' type="submit" value="Enviar" />
			</form>
			<div className="wrapper-svg-soccer ms-auto">
				<SoccerImage cls="wrapper-svg-soccer__svg animate-violet mt-[60%]" />
			</div>
		</main>
	) 
};

export default Login;