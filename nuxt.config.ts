// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
