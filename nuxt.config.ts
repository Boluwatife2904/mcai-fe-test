// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["@/assets/styles/fonts.scss", "@/assets/styles/index.scss"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-icons"],
	vite: {
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
