import { useEffect, useState } from 'react';
import BallIcon from '@/components/BallIcon';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/context/auth/hook';


const Home: React.FC = () => {
	const [showNav, setShowNav] = useState(false);


	return (
		<>
			<header
				className="fixed
						w-full flex top-0 px-8 z-10
						bg-midnight_blue-primary h-fit
						md:justify-between md:items-center"
			>
				<div className="mobile-nav md:hidden">
					<div className=" absolute right-3 wrapper grid grid-flow-col gap-3 items-center">
						<h1
							className='text-white
									text-center text-3xl font-bold
									tracking-widest  w-fit min-h-fit '>Meu Time
						</h1>
						<BallIcon cls='stroke-white mx-auto m-2' />
					</div>
					{!showNav ? (
						<>
							<button className='btn-hamburguer me-3' onClick={() => setShowNav(true)}>
								<img src="assets/img/btn-close-icon.svg" alt="close button icon" />
							</button>
							<nav className='absolute top-[10vh] left-0
									flex flex-col gap-10 items-center
									h-[30vh] w-[30vw] rounded-br-lg
								bg-[#ffffffbc] shadow pt-10 font-bold'
							>
								<NavLink to='/login'
									className=" md:text-white
											block 
											md:hover:text-bd_inp_text_login_hover
											md:active:text-bd_inp_text_login_active font-bold">
									login</NavLink>

								<NavLink to='/dashboard'
									className=" md:text-white
										block md:hover:text-bd_inp_text_login_hover
							 		md:active:text-bd_inp_text_login_active font-bold">
									Dashboard</NavLink>

							</nav>
						</>
					) : <>
						<button className='btn-hamburguer me-3' onClick={() => setShowNav(false)}>
							<img src="assets/img/btn-hamburguer-icon.svg" alt="hamburguer button icon" />
						</button>
					</>}

				</div>
				<div className="nav-desktop  hidden w-[100vw] md:flex  justify-between items-center ">
					<nav className='flex justify-between w-[200px] px-1'>

						<NavLink to='/login'
							className=" md:text-white
								block 
								md:hover:text-bd_inp_text_login_hover
								md:active:text-bd_inp_text_login_active font-bold">
							login</NavLink>

						<NavLink to='/dashboard'
							className=" md:text-white
								block 
								md:hover:text-bd_inp_text_login_hover
								md:active:text-bd_inp_text_login_active font-bold">
							Dashboard</NavLink>
					</nav>
					<div className="wrapper grid grid-flow-col gap-3 items-center">
						<h1 className='text-white text-center text-3xl
					 font-bold tracking-widest  w-fit min-h-fit '>Meu Time  </h1>
						<BallIcon cls='stroke-white mx-auto m-2' />
					</div>
				</div>

			</header>
			<main className="w-[100vw] h-[95vh] bg-gray-700 py-16 overflow-y-auto overflow-x-hidden">

				<h2 className='text-2xl text-white tracking-widest text-center animate-pulse'>Encontre informações do seu Time!</h2>
				<h3 className='mt-10'> <img className='w-[50vw] mx-auto rounded-md shadow-xl mx-auto 'src="assets/img/demonstration.gif" alt="demonstration" />
					</h3>		
				<h3 className='text-xl text-white text-center mt-20'>Obtendo a chave da API:</h3>
				<ol className='mx-auto flex flex-col gap-5 w-fit mt-4'>
					<li className='text-white '>
						<div className="text-box mb-2 flex gap-2">
							<p className='w-fit'>1º Acesse o site</p>
							<a className=" text-blue-400 md:hover:underline"
								href="https://dashboard.api-football.com/register" target="_blank" rel="noopener noreferrer">dashboard.api-football.com</a>
						</div>
						<img
							className='w-[320px] h-[320px] rounded-md shadow-xl mx-auto'
							src="/assets/img/cadastro/1.png" alt="API register image 1" />
					</li>
					<li className='text-white '>
						<div className="text-box mb-2 flex gap-2">
							<p className='w-fit'>2º Acesse a opção <b className='font-bold'>"Account"</b> no menu lateral</p>
						</div>
						<img
							className='w-[320px] h-[320px] rounded-md shadow-xl mx-auto'
							src="/assets/img/cadastro/2.png" alt="" />
					</li>
					<li className='text-white '>
						<div className="text-box mb-2 flex gap-2 w-[360px]">
							<p className='w-fit'>3º Copie e salve a sua chave <small className='text-sm'>{'('}Você terá um limite de 100 consultas diarias{')'}</small></p>
						</div>
						<img
							className='w-[320px] h-[320px] rounded-md shadow-xl mx-auto'
							src="/assets/img/cadastro/3.png" alt="" />
					</li>
				</ol>

			</main>
			<footer
				className="relative
				bottom-0 w-auto h[8vh] p-2 
				before:absolute  before:bottom-0 before:bg-midnight_blue-secondary
				before:-inset-1 before:z-[-10] blur:drop-shadow-[0_0_4px_30px_rgba(0, 0, 0, 0.1)]
				shadow-inner
				md:overflow-hidden
			md:bg-midnight_blue-primary
			 "
			>
				<p
					className="text-center text-white">
					Desenvolvido por
					<a
						className="font-bold text-blue-400 visited:text-purple-600 ms-1 md:hover:underline"
						href="https://github.com/Odisseu93"
						target="_blank"
					>
						Ulisses Silvério
					</a>
				</p>
			</footer>
		</>
	)
}


export default Home;