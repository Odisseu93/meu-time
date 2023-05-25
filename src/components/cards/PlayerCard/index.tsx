
interface PlayerCardProps {
  name: string,
  age: number,
  nationality: string,
  imgSrc: string,
}


const PlayerCard: React.FC<PlayerCardProps> = (
	{ name,
		age,
		nationality,
		imgSrc,
	}) => {

	return (
		<article className="card-player
		bg-[#30350fc2] text-white 
		border border-solid border-[#30350f51]
     flex flex-col gap-2 
		 items-center w-2/6	h-min
     overflow-hidden
     md:w-1/6
     p-3 rounded-md hover:saturate-200 hover:first-letter">
			<h4 className="block font-bold text-center truncate card-player__title player-name">{name}</h4>
			<p className="text-left card-player__age player-nationality">{age} anos</p>
			<div className="w-10/12 p-1 border-gray-800 rounded-md wrapper-img border-spacing-8">
				<img className="w-11/12 m-auto text-sm rounded-full card-player__img h-3/4 " src={imgSrc} alt="player photo" />
			</div>
			<p className="text-left card-player__nationality player-nationality">{nationality}</p>
		</article>
	)
};


export default PlayerCard;