/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
			},
			fontFamily: {
				sans: ["Nunito Variable"],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},
		},
	},
	variants: {
		extend: {
			display: ['print'],
			// Add other properties you want to enable for the print variant if needed
		},
	},
	plugins: [],
}
