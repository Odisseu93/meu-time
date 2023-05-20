import axios, { AxiosInstance } from 'axios';



class FootballApi {
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

	public async getStatus(): Promise<any> {
		try {
			const { data } = await this.apiClient.get('status');

			if(data) {
				const { errors } = await data;
				// eslint-disable-next-line no-prototype-builtins
				if(errors.hasOwnProperty('token')) return new Error(errors.token);
				return data;
			}
			return new Error('Ivalid key!');
		} catch (error) {
			return new Error(String(error));
		}
	}


}

export default FootballApi;
