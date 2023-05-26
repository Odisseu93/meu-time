<div align="center">

# Meu Time

![demonstration](https://github.com/Odisseu93/meu-time/assets/76600539/aa3c9c65-8336-4be3-9a8c-099505a5f06a)


[**Site**](https://meu-time-rho.vercel.app/)
</div>
O projeto **Meu Time** é uma página web interativa que permite aos usuários acessar informações sobre jogadores,
estatísticas e desempenho de um time de futebol específico em uma determinada temporada. 
Com uma interface intuitiva e recursos informativos, os usuários podem selecionar o país, temporada e liga desejados,
e obter uma lista de jogadores, a formação mais utilizada, estatísticas de vitórias, derrotas e empates, 
bem como um gráfico que exibe a distribuição dos gols ao longo do tempo de jogo.

## Recursos Principais

1. Seleção de País, Temporada e Liga: Os usuários podem escolher o país, a temporada e a liga em que o time de futebol de interesse está participando.
2. Lista de Jogadores: Uma vez selecionados o país, a temporada, liga e o time,
 a página exibirá uma lista completa dos jogadores que fizeram parte daquele time durante a temporada selecionada, com os seus nomes, idade e nacionalidade.
3. Formação Mais Utilizada: Os usuários poderão visualizar a formação tática mais frequente utilizada pelo time ao longo da temporada selecionada,
 fornecendo uma visão geral das estratégias adotadas.
4. Estatísticas de Desempenho: A página apresentará estatísticas detalhadas sobre o desempenho do time na temporada selecionada,
 incluindo o total de gols marcados, vitórias, derrotas e empates.
5. Gráfico de Distribuição de Gols: Os usuários terão acesso a um gráfico interativo que mostra a distribuição dos gols marcados pelo time ao longo do tempo de jogo,
 permitindo uma análise visual do desempenho em diferentes períodos.


## Desafio
O meu maior desafio com este projeto foi fazer o usuário seguir uma sequêcia lógica, onde uma requisção dependia da outra.
consegui resolver da seguinte forma:
primeiro criei alguns _states_ para fazer este controle

```tsx
	// para sequenciar as operações
	const [stepOne, setStepOne] = useState(true);
	const [stepTwo, setStepTwo] = useState(false);
	const [stepThree, setStepThree] = useState(false);
```

e depois eu criei uma Vínculo entre as operações
```tsx 
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.currentTarget;
		setIsLoading(true);

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
					setIsLoading(false);
					return;
				}
				setIsLoading(false);
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
						setIsLoading(false);
						return;
					}
					setTeams(res);
					setIsLoading(false);
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
						setIsLoading(false);
						return;
					}
					setPlayers(res);
					setIsLoading(false);
					// get estatisticas
					getStatistics()
				});
			}, 500);

		}
		
		handleStatus();
	};
```

## Tecnologias utilizadas no projeto
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cite(*bundle*)](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)

## Figma
[Esboço](https://www.figma.com/file/mzxhUWY48YV4xHpa6TRXYa/Meu-Time?type=design&node-id=0-1&t=rbtAQlXrsrwT58mU-0)

## Executando localmente

Clone the project

```bash
  git clone https://github.com/Odisseu93/meu-time/
```

Go to the project directory / Vá para a pasta do projeto

```bash
  cd meu-time
```

Install dependencies / instale as dependencias

```bash
  npm install
```

Start the server / inicie o servidor

```bash
  npm run dev
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).
