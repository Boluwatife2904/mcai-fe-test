export default defineNuxtRouteMiddleware(() => {
	const { userIsAuthenticated } = storeToRefs(useUserStore());

	if (!userIsAuthenticated.value) return navigateTo({ name: "login" });
});
