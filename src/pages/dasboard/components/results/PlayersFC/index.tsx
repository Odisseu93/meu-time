import PlayerCard from '@/components/cards/PlayerCard'
import { Player } from '@/services/api/types'

// Function Component
const PlayersFC: React.FC<{data: Player[] }> = ({data: players}) => {
	return (
		<article
			className="info-players
       flex gap-4 flex-wrap justify-center 
       w-11/12 overflow-auto
       my-3 mx-auto bg-[#9c27f538]
       border-2 border-solid border-bd_inp_text_login_default border-opacity-90
       rounded-md p-2  shadow-inner"
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