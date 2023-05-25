import { MinuteData, TeamStatistics } from '@/services/api/types';
import Chart from 'react-google-charts';

export const chartConvertData = (index: Array<string>, parameters: MinuteData) => {
	return Array.from([
		index,
		...Object.entries(parameters).map(([minute, data]) => [
			minute,
			data.total,
		]),
	]);
};



const ChartFC: React.FC<{ index: Array<string>, data: TeamStatistics }> = ({ index, data }) => {
	const ChartData = chartConvertData(index, data.goals.for.minute) ;
	// const ChartData = minute;

	console.log(ChartData);

	const chartOptions = {
		title: 'Gols por tempo de jogo',
		animation: { duration: 500, easing: 'linear', startup: true },
	};

	return (
		<article
			className="flex
			 flex-col w-[90%] gap-4
			 p-2 mx-auto my-3 bg-[#e5e7eb]
			 border-2 border-solid
			 shadow-inner justify-center wflex-wrap
			 rounded-md chart border-bd_inp_text_login_default border-opacity-90">
			<h3
				className="text-xl font-bold text-center text-violet-400">
        Gráfico
			</h3>
			<Chart chartType='ColumnChart'
				data={ChartData}
				options={chartOptions}
			/>
		</article>

	)
}

export default ChartFC;