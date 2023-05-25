import FormSelect from '@/components/Select';
import { useAuth } from '@/context/auth/hook';
import FootballApi from '@/services/api';
import {
	Country,
	League, Player,
	Team,
	TeamStatistics
} from '@/services/api/types';
import { getDataSStorage } from '@/util/storage';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ChartFC from './components/results/ChartFC';
import LineupsFC from './components/results/LineupsFC';
import PlayersFC from './components/results/PlayersFC';
import TotalScores from './components/results/TotalScores';

type Data = {
  countryName: string;
  seasonYear: number;
  leagueId: number;
  teamId: number;
};


const Dashboard: React.FC = () => {
	const { isLoggedIn, setIsLoggedIn } = useAuth();
	const navigate = useNavigate();

	
	const [countries, setCountries] = useState<Country[] | null>(null);
	const [leagues, setLeagues] = useState<League[] | null>(null);
	const [teams, setTeams] = useState<Team[] | null>(null);
	const [statistics, setStatistics] = useState<TeamStatistics | null>(null);
	const [players, setPlayers] = useState<Player[] | null>(null);

	// para sequenciar as operações
	const [stepOne, setStepOne] = useState(true);
	const [stepTwo, setStepTwo] = useState(false);
	const [stepThree, setStepThree] = useState(false);

	// dados recebidos
	const [currentRequest, setCurrentRequest] = useState(0);
	const api = useMemo(() => new FootballApi(getDataSStorage('ak')), []);
	const [data, setData] = useState<Data>({} as Data);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.currentTarget;

		if (stepOne) {
			const season = target['season_year'].value;
			const country = target['country'].value;
			setData({ ...data, countryName: country, seasonYear: season });

			api.getLeagues(country, season).then((res) => {
				
				// get ligas
				if (res instanceof Error) {
					alert(
						`Aconteceu algum problema ao listar as ligas😢:\n\n${res.message}`
					);
					setLeagues(null);
					alert(res);
					return;
				}
				setLeagues(res);
				setStepOne(false);
				setStepTwo(true);
			});
			handleStatus();
		}

		if (stepTwo) {
			setTimeout(() => {
				const league = target['league'].value;
				setData({ ...data, leagueId: Number(league) });
				const { countryName, seasonYear } = data;

				api.getTeams(countryName, league, seasonYear).then((res) => {
					if (res instanceof Error) {
						alert(
							`Aconteceu algum problema ao listar os times😢:\n\n${res.message}`
						);
						setTeams(null);
						return;
					}
					setTeams(res);
					setStepTwo(false);
					setStepThree(true);

					setData({ ...data, leagueId: Number(league) });
				});
			}, 500);

		}

		if (stepThree) {
			// get Jogadores
			setTimeout(() => {
				const team = target['team'].value;
				setData({ ...data, teamId: Number(team) });
				const { leagueId, seasonYear } = data;

				api.getPlayers(team, leagueId, seasonYear).then((res) => {
					if (res instanceof Error) {
						alert(
							`Aconteceu algum problema ao listar os jogadores😢:\n\n${res.message}`
						);
						setPlayers(null);
						return;
					}
					setPlayers(res);
				});
			}, 500);
			// get estatisticas
			setTimeout(() => {
				const { leagueId, seasonYear, teamId } = data;

				leagueId && seasonYear && teamId
					? api.getTeamsStatistics(leagueId, seasonYear, teamId).then((res) => {
						if (res instanceof Error) {
							alert(
								`Estatísticas do time não encontradas😢:\n\n${res.message}`
							);
							return;
						}
						setStatistics(res);
					})
					: null;
			}, 2000);
		}
		
		handleStatus();
	};


	const reset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setStepThree(false);
		setStepOne(true);
		setPlayers(null);
		setStatistics(null)
		setTeams(null);
		setLeagues(null);
	};

	const handleLoggOut = useCallback(() => {
		setIsLoggedIn(false);
		navigate('/login');
	}, [navigate, setIsLoggedIn]);

	const handleStatus = () => {
		api.getStatus().then((res) => {
			if (res instanceof Error) {
				console.error(res);
				return;
			}
			setCurrentRequest(res.requests.current);
		});
	};


	useEffect(() => {
		if (isLoggedIn) {
			const api = new FootballApi(getDataSStorage('ak'));
			api.getCountries().then((res) => {
				if (res instanceof Error) {
					alert(
						`Aconteceu algum problema ao listar os países😢:\n\n${res.message}`
					);
					handleLoggOut();
					setCountries(null);
					throw new Error(JSON.stringify(res));
				}
				setCountries(res);
			});
			handleStatus();
		}
	}, [isLoggedIn, handleLoggOut]);

	return (
		<>
			<header
				className="fixed
				w-full
				flex 
				top-0
				px-8
				z-10
			  bg-midnight_blue-primary h-[5vh]
				md:justify-between md:items-center
				"
			>
				<h1 
					className="self-center block text-center text-white ">
          Consultas disponíveis:{' '}
					<span 
						className={currentRequest === 100 ? 'text-[#FF6347]' : ''}>
						{currentRequest}
					</span>
          /100
				</h1>
				<button
					className=" md:text-white
					md:hover:text-bd_inp_text_login_hover
					md:active:text-bd_inp_text_login_active"
					onClick={handleLoggOut}
				>
          Sair
				</button>
			</header>

			{isLoggedIn ? (
				<main
					className=" w-full 
					min-h-[100vh]
					pt-32
					pb-28
					bg-dashboard bg-cover"
				>
					<form
						className="flex 
						flex-col flex-wrap items-center
						w-11/12 gap-2 p-3 mx-auto 
						border-2 border-solid rounded-md
						bg-linear-gradient-white 
						order-bd_inp_text_login_default border-opacity-90
						before:blockbefore:blur"
						onSubmit={(e) => handleSubmit(e)}
					>

						{/* buscar e seta os países no select */}
						{stepOne && countries ? (
							<>
								<div 
									className="mb-3 form-group">
									<FormSelect
										name="country"
										label="País"
										isRequired={true}
										options={countries.map(({ name }) => {
											return {
												value: name,
												label: name,
											};
										})}
										classNames={{}}
									/>
								</div>
								<label
									className="text-xl text-center text-violet-400 ps-1"
									htmlFor="inpSeason"
								>
                  Temporada
								</label>
								<input
									name="season_year"
									className="w-[100px] text-center hover:shadow boder rounded-sm"
									id="inpSeason"
									type="number"
									min="2008"
									max="2025"
									step="1"
									placeholder="2023"
									title="escolha um valor entre 2008 a 2025"
									required
								/>
							</>
						) : null}

						{stepTwo && leagues ? (
							<div 
								className="mb-3 form-group">
								<FormSelect
									name="league"
									label="League"
									isRequired={true}
									options={leagues.map(({ league }) => {
										return {
											value: String(league.id),
											label: league.name,
										};
									})}
									classNames={{}}
								/>
							</div>
						) : null}

						{stepThree && teams ? (
							<>
								<div 
									className="mb-3 form-group">
									<FormSelect
										name="team"
										label="Time"
										isRequired={true}
										options={teams.map(({ team }) => {
											return {
												value: String(team.id),
												label: team.name,
											};
										})}
										classNames={{}}
									/>
								</div>
							</>
						) : null}

						<div
							className="items-center 
								grid-rows-2 gap-2 my-3
								wrapper-btns md:grid-cols-2"
						>
							<button
								type="submit"
								className="p-2
								 mx-auto text-white rounded-md
								 w-fit h-fit bg-violet-100 md:hover:bg-violet-200"
							>
                Pesquisar
							</button>
							<button
								type="button"
								onClick={(e) => reset(e)}
								className="p-2
								 mx-auto my-2 text-white rounded-md
								 w-fit h-fit bg-violet-100 md:hover:bg-violet-200"
							>
                resetar
							</button>
						</div>
					</form>

					{players ? (
						<div 
							className="grid 
								justify-center mt-10 wrapper-btn
								md:mt-20">
							<HashLink
								to="#results"
								smooth
								className="w-20 h-auto motion-safe:animate-bounce"
								role="button"
								title="ir para o resultado da pesquisa"
							>
								<img
									className=""
									src="/assets/img/go-down.png"
									alt="arrow down icon"
								/>
							</HashLink>
						</div>
					) : null}

					{stepThree && players ? (
						<section 
							className="grid
							 w-11/12 gap-5 px-3 pt-3 pb-5
							 mx-auto mt-auto border-2 border-solid rounded-md
							 results md:mt-28 bg-linear-gradient-white
						 border-bd_inp_text_login_default
							 border-opacity-90 before:blockbefore:blur"
							id="results"
						>
							<h2 
								className="text-2xl font-bold text-center text-violet-500">
                Resultado
							</h2>
							{/* renderizando de acordo com que foi coletado obtido na API */}
							{players && players.length > 0 ? <PlayersFC data={players} />: null}
							{(statistics) ? (
								<>
									{statistics.lineups && statistics.lineups.length > 0 ? <LineupsFC data={statistics} /> : null}
									{statistics.fixtures ? <TotalScores data={statistics} /> : null}
									{statistics.goals.for.minute ? <ChartFC index={['Minuto', 'Total de gols']} data={statistics} /> : null}
								</>
							) : null}
						</section>
					) : null}
				</main>
			) : (
				// tela de acesso negado
				<main
					className="w-full h-[100vh] 
					grayscale bg-deflated-ball
					 b-auto bg-no-repeat md:bg-sad-soccer-player md:bg-cover"
				>
					<div 
						className="grid gap-8 my-auto wrapper">
						<h1 
							className="h-auto text-3xl font-bold text-center md:text-white">
              Você não tem acesso,
							<br /> efutue o login!
						</h1>
						<Link
							className="p-2 mx-auto bg-white border-4 border-black border-double rounded-md active:bg-bd_inp_text_login_active active:text-white before:bluer md:grayscale-0 md:text-black md:hover:bg-black md:hover:text-white md:hover:border-white"
							to="/login"
						>
              Tela de Login
						</Link>
					</div>
				</main>
			)}
			<footer
				className="relative
				bottom-0 w-full h[8vh] p-2 
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
	);
};

export default Dashboard;
