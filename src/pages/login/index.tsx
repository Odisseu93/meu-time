import BallIcon from '@/components/BallIcon';
import SoccerImage from '@/components/SoccerImage';


const Login: React.FC = () => {
	
	return (
		<main className="grid">
			<div className="wrapper-input w-2/3 md:max-w-lg mx-auto mt-8">
				<label className='block text-center mb-1' htmlFor='apiKey'>Insira a chave da API</label>
				<BallIcon cls='wrapper-input__ball absolute m-1' />
				<input className="wrapper-input__input w-full h-9 ps-9 border border-bd_input_default rounded-sm focus:border-bd_input_hover" type="text" name="apiKey" id="apiKey" />
				<p className='mt-2 text-sm  ps-2'><a  href="https://dashboard.api-football.com/register" className='text-violet-100 underline active:text-blue-900' target="_blank" rel="noopener noreferrer">Toque aqui</a> para obter a chave.</p>
			</div>
			<div className="wrapper-svg-soccer ms-auto">
				<SoccerImage cls="wrapper-svg-soccer__svg animate-violet mt-[60%]" />
			</div>
		</main>
	) 
};

export default Login;