export function useAuth() {
	const loginWithEmailPassword = (form: { email: string; password: string }) => {
		console.log(form);
	};

	return { loginWithEmailPassword };
}
