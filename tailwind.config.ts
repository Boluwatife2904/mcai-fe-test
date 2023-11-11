import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	content: [],
	theme: {
		extend: {
			colors: {
				"black-100": "#040415",
				dark: "#141518",
				error: "#FA483C",
				gray: "#A9A5AF",
				"gray-25": "#FAFBFD",
				"gray-60": "#3C4254",
				"gray-200": "#EAECF0",
				"gray-300": "#D0D5DD",
				"gray-400": "#98A2B3",
				"gray-500": "#667085",
				"gray-600": "#475467",
				"gray-700": "#344054",
				"gray-800": "#1D2939",
				"gray-900": "#101828",
				grey: "#E5E6ED",
				mcai: "#3BAA90",
				"purple-25": "#FAFAFF",
				"purple-500": "#7A5AF8",
				"secondary-mcai": "#070707",
				"success-500": "#12B76A",
				"text-1": "#323B4B",
			},
		},
	},
	plugins: [],
};
