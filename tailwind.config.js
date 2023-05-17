/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			c1: 'var(--c1)',
			c2: 'var(--c2)',
			c3: 'var(--c3)',
			c4: 'var(--c4)',
		},
	},
	plugins: [],
}
