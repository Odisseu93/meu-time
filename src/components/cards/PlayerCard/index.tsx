
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
     flex flex-col
     gap-2
     items-center w-[150px]
     md:w-[200px]
     h-min
     overflow-hidden
     bg-[#30350fc2] text-white border border-solid border-[#30350f51]
     p-3 rounded-md hover:saturate-200 hover:first-letter">
			<h4 className="card-player__title player-name text-center font-bold break-words">{name}</h4>
			<p className="card-player__age player-nationality text-left">{age} anos</p>
			<div className="wrapper-img w-10/12 p-1 rounded-md border-spacing-8 border-gray-800">
				<img className="card-player__img w-11/12 h-3/4 m-auto text-sm rounded-full " src={imgSrc} alt="player photo" />
			</div>
			<p className="card-player__nationality player-nationality text-left">{nationality}</p>
		</article>
	)
};


export default PlayerCard;