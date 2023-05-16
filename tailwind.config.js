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
		 	bd_input_active: '#345901',
			bd_input_default: '#A0AC91',
			bd_input_hover: '#42FCB5',
			violet:  {
				100: '#9747FF',
				200: '#8928D8',
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
		},
	},
	plugins: [],
}

