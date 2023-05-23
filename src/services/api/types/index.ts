export interface Country {
  name: string,
  code: string,
  flag: string,
}

type Errors = [] | object;

export interface Status {
  errors: Errors,
  requests: {
    current: number,
    limit_day: number
  }
}

type Fixtures = {
  events: boolean,
  lineups: boolean,
  statistics_fixtures: boolean,
  statistics_players: boolean,
}

type Coverage = {
  fixtures: Fixtures,
  standings: boolean
  players: boolean
  top_scorers: boolean
  predictions: boolean
  odds: boolean
}

 type Seasson = {
  year: number,
  start: string,
  end: string,
  current: boolean,
  coverage: Coverage,
}

type LeagueData = {
  id: number,
  name: string,
  type: string,
  logo: string,
}
export interface League {
  league: LeagueData,
  country: Country,
  seasons: Seasson[]
}

export interface Team {
    team :{
    id: number,
    name: string,
    code: string,
    country: string,
    founded: number,
    national: boolean,
    logo: string}
}


export interface Player {
  player: {
    id: number,
    name: string,
    firstname: string,
    lastname: string,
    age: number,
    birth: {
      date: Date,
      place: string,
      country: string
    },
    nationality: string,
    height: string,
    weight: number,
    injured: boolean,
    photo: string
  }
}

export interface FootballApiType {
  getStatus(): Promise<Status | Error>,
  getCountries(): Promise<Country[] | Error>,
  getLeagues(country_name:string, season_year: number): Promise<League[] | Error>,
  getTeams(country_name:string, league_id:number, season_year: number): Promise<Team[] | Error>,
  getPlayers(team_id:number, league_id:number, season_year: number): Promise<Player[] | Error>
}