import PlayerCard from '@/components/cards/PlayerCard'
import { Player } from '@/services/api/types'

// Function Component
const PlayersFC: React.FC<{data: Player[] }> = ({data: players}) => {
	return (
		<article
			className="info-players
			 w-full 
       flex gap-2 flex-wrap justify-center 
       md:w-11/12 overflow-auto
       my-3 mx-auto p-2 bg-[#9c27f538]
       border-2 border-solid border-bd_inp_text_login_default border-opacity-90
       rounded-md md:p-2  shadow-inner"
		>
			<h3
				className="w-full text-xl font-bold text-center text-violet-400">
        Jogadores
			</h3>
			{players.map(({ player }) => (
				<PlayerCard
					key={player.id}
					name={player.name}
					age={player.age}
					nationality={player.nationality}
					imgSrc={player.photo}
				/>
			))}
		</article>
	)
}

export default PlayersFC;