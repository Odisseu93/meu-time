import { TeamStatistics } from '@/services/api/types';

const TotalScores: React.FC<{ data: TeamStatistics }> = ({ data }) => {
	const { fixtures } = data;
	const { played, wins, loses, draws } = fixtures;

	return (
		<article
			className="total-scores
				flex  flex-col gap-4
        flex-wrap justify-center 
				w-fit  my-3 mx-auto bg-[#9c27f538]
				border-2 border-solid border-bd_inp_text_login_default border-opacity-90
				rounded-md p-2  shadow-inner">
			<h3 
				className="text-xl font-bold text-center text-violet-400">
      Totais
			</h3>
			<table 
				className="mx-auto border-2 border-solid w-max border-white">
				<thead >
					<th 
						className="p-1 text-white border-white border-solid bg-violet-500 border-e-2">
          Gols
					</th>
					<th 
						className="p-1 text-white border-white border-solid bg-violet-500 border-e-2">
          Vitórias
					</th>
					<th 
						className="p-1 text-white border-white border-solid bg-violet-500 border-e-2">
          Derrotas
					</th>
					<th 
						className="p-1 text-white border-white border-solid bg-violet-500 border-e-2">
           Empates
					</th>
				</thead>
				<tbody 
					className="">
					<tr 
						className="mt-2 ">
						<td 
							className="text-center border-white border-solid goals text-violet-500 bg-wit border-e-2">
							{played.total}
						</td>
						<td 
							className="text-center border-white border-solid wins text-violet-500 bg-wit border-e-2">
							{wins.total}
						</td>
						<td 
							className="text-center border-white border-solid loses text-violet-500 bg-wit border-e-2">
							{loses.total}
						</td>
						<td 
							className="text-center draws text-violet-500 bg-wit ">
							{draws.total}
						</td>
					</tr>
				</tbody>
			</table>
		</article>
	)
}

export default TotalScores;