import { AxiosResponse } from 'axios';

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface FootballApiType {
  getStatus(): Promise<AxiosResponse<any> | Error>;
  getCountries(): Promise<Country[] | Error>;
}