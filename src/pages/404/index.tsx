import { Link } from 'react-router-dom';

const NotFound: React.FC = ()=> {
	return (
		<main className="w-full h-[100vh] grayscale bg-deflated-ball b-auto bg-no-repeat md:bg-sad-soccer-player md:bg-cover">

			<div className="wrapper grid gap-8 my-auto">
				<h1 className='text-center md:text-white font-bold h-auto text-3xl'>Página não encontrada!</h1>
				<Link className='mx-auto			
          border-4 bg-white border-black border-double
          rounded-md p-2 
        active:bg-bd_inp_text_login_active active:text-white
          before:bluer
          md:grayscale-0
        md:text-black
        md:hover:bg-black
        md:hover:text-white
        md:hover:border-white' to='/'>Home</Link>
			</div>

		</main>
	)
}


export default NotFound;