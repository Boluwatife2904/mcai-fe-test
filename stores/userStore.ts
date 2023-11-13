import type { User } from "~/types/models/User";

export const useUserStore = defineStore(
	"user",
	() => {
		const user = ref<User | null>(null);

		const setUser = (userData: User) => {
			user.value = userData;
		};

		const userIsAuthenticated = computed(() => !!user.value);

		const reset = () => {
			user.value = null;
		};

		return { user, userIsAuthenticated, setUser, reset };
	},
	{
		persist: true,
	},
);
