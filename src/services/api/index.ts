import axios, { AxiosInstance } from 'axios';
import { Country, FootballApiType, League, Status, Team } from './types';
import { getDataSStorage, setDataSStorage } from '@/util/storage';



class FootballApi implements FootballApiType {
	private apiKey: string;
	private apiClient: AxiosInstance;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.apiClient = axios.create({
			baseURL: 'https://v3.football.api-sports.io/',
			headers: {
				'x-rapidapi-key': this.apiKey,
				'x-rapidapi-host': 'v3.football.api-sports.io'
			}
		});
	}

	public async getStatus():  Promise<Status | Error> {
		try {
			const { data } = await this.apiClient.get('status');

			if(data) {
				const { errors } = await data;
				// eslint-disable-next-line no-prototype-builtins
				if(errors.hasOwnProperty('token')) return new Error(errors.token);
				return data.response;
			}
			return new Error('Invalid key!');
		} catch (error) {
			return new Error(String(error));
		}
	}

	public async getCountries(): Promise<Country[] | Error> {
		let countries: Country[];

		try {
			// evitar fazer requisições desnecessárias
			if(getDataSStorage('countries')) {
				countries = getDataSStorage('countries');
				console.log(
					'%cloading countries locally via browser!',
					'color:blue; background: rgba(211, 211, 211, 0.32); '
				) ;
				return countries;
			}
			const { data } = await this.apiClient.get('countries');

			if(data) {
				const { errors } = await data;
				// eslint-disable-next-line no-prototype-builtins
				if(errors.hasOwnProperty('token')) return new Error(errors.token);
				countries = data['response'];
				if(countries.length === 0)  return new Error('countries not found');
				setDataSStorage('countries', countries);
				return countries;
			}
			return new Error('Invalid Country!');
		} catch (error) {
			return new Error(String(error));
		}
	}

	public async getLeagues( country_name:string, season_year: number): Promise<League[] | Error> {
		let leagues: League[];

		try {
			const { data } = await this.apiClient.get(`leagues/?country=${country_name}&season=${season_year}`);

			if(data) {
				const { errors } = await data;
				// eslint-disable-next-line no-prototype-builtins
				if(errors.hasOwnProperty('token')) return new Error(errors.token);
				leagues = data['response'];
				if(leagues.length === 0)  return new Error('leagues not found');
				return leagues;
			}
			return new Error('Invalid League!');
		} catch (error) {
			return new Error(String(error));
		}
	}

	public async getTeams(country_name:string, league_id:number, season_year: number): Promise<Team[] | Error> {
		let teams: Team[];

		try {
			const { data } = await this.apiClient.get(`teams/?country=${country_name}&season=${season_year}&league=${league_id}`);

			if(data) {
				const { errors } = await data;
				// eslint-disable-next-line no-prototype-builtins
				if(errors.hasOwnProperty('token')) return new Error(errors.token);
				teams = data['response'];
				if(teams.length === 0)  return new Error('teams not found');
				return teams;
			}
			return new Error('Invalid teams!');
		} catch (error) {
			return new Error(String(error));
		}
	}


}

export default FootballApi;
