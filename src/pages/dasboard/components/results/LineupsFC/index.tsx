import { TeamStatistics } from '@/services/api/types';

const LineupsFC: React.FC<{ data: TeamStatistics }> = ({ data }) => {
	const { lineups } = data;

	return (
		<article
			className="lineups
        w-11/12  mx-auto
        bg-[#9c27f538] 	
        border-2 border-solid border-bd_inp_text_login_default border-opacity-90
        rounded-md p-2  shadow-inner
        md:w-1/2 ">
			<h3
				className="text-xl font-bold text-center text-violet-400">
        Formação mais utilizada na temporada
			</h3>
			<ul
				className="flex
				 flex-row w-11/12 flex-wrap
				 gap-4 p-1 mx-auto mt-1 border-2
				 border-solid lineups_list  border-violet-500
				justify-center md:p-3"
			>
				{lineups.map(({ formation, played }) => {
					return (
						<li
							className="lineups__item
                grid gap-1 p-1
                border-2 border-solid border-[#30350f62] rounded-sm
                bg-[#30350fc2]
                text-white
								w-1/3
                md:w-1/4"
						>
							<p
								className="text-center lineups__item__formation text-white font-bold">
								{formation}
							</p>
							<p
								className="text-center lineups__item__played text-sm">
                utilizada <span className='text-black underline font-bold '>{played}</span><br/>vezes
							</p>
						</li>
					);
				})}
			</ul>
			<p
				className="mt-5 ms-2">
				<a
					href="https://pt.wikipedia.org/wiki/Esquemas_t%C3%A1ticos_do_futebol"
					className="text-blue-700 visited:text-purple-600 md:hover:underline "
					target="_blank"
					rel="noopener noreferrer"
				>
          clique aqui e saiba mais
				</a>
			</p>
		</article>

	)
}

export default LineupsFC;