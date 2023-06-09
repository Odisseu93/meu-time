/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require('tailwindcss/colors');

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			bd_inp_text_login_default: '#A0AC91',
			bd_inp_text_login_active: '#345901',
			bd_inp_text_login_hover: '#42FCB5',
			bg_main_dashboard: '#379237',
			midnight_blue: {
				primary: '#282A3A',
				secondary: '#282a3a9d',
			},
			violet: {
				100: '#9747FF',
				200: '#8928D8',
				300: '#7211C1',
				400: '#5800A7',
				500: '#1e0038',
			},
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			blue: colors.blue,
			sky: colors.sky,
		},
		extend: {
			keyframes: {
				violet: {
					'0%' : { stroke: 'none' },
					'50%': { stroke: '#9747FF'},
					'100%': { stroke: '#8928D8'},
				},
			},
			animation: {
				violet: 'violet 5s ease-in-out infinite',
			},
			backgroundImage: {
				'dashboard': 'url(\'/assets/img/bg-dashboard.png\')',
				'deflated-ball': 'url(\'/assets/img/deflated-ball.bmp\')',
				'sad-soccer-player': 'url(\'/assets/img/sad-soccer-player.bmp\')',
				'linear-gradient-white': 'linear-gradient(165.03deg, #FFFFFF 10.55%, rgba(255, 255, 255, 0) 46.29%)',
			}
		},
	},
	plugins: [],
}

