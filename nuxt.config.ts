// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "MyCoverAI Test",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: "#040415" },
				{ name: "description", content: "Repository for the implementation of the task given for the frontend developer role at MyCoverAi " },
				{ name: "og:title", content: "MyCoverAI Test" },
				{ name: "og:site_name", content: "MyCoverAI Test" },
				{ name: "og:url", content: "https://mcai-fe-test.vercel.app/" },
				{ name: "og:description", content: "Repository for the implementation of the task given for the frontend developer role at MyCoverAi " },
				{ name: "og:type", content: "website" },
			],
		},
	},
	devtools: { enabled: true },
	css: ["@/assets/styles/fonts.scss", "@/assets/styles/index.scss"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
	vite: {
		vue: {
			script: {
				defineModel: true,
				propsDestructure: true,
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@import "@/assets/styles/abstract/_mixins.scss";
					`,
				},
			},
		},
	},
});
