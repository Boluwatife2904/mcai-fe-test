import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useUserStore } from "./userStore";

const user = {
	email: "john@gmail.com",
	name: "John Doe",
};

beforeAll(() => {
	setActivePinia(createPinia());
});

describe("User Store test", () => {
	let store: ReturnType<typeof useUserStore>;

	beforeEach(() => {
		store = useUserStore();
	});

	afterEach(() => {
		store.reset();
	});

	it("store is defined", () => {
		expect(store).toBeDefined();
	});

	it("user default value is null", () => {
		expect(store.user).toBeNull();
	});

	it("user should be unauthenticated if they have not logged in", () => {
		expect(store.userIsAuthenticated).toBeFalsy();
	});

	it("user value to be available and authenticated when the user object is set", () => {
		store.setUser(user);
		expect(store.user).toEqual(user);
		expect(store.userIsAuthenticated).toBeTruthy();
	});

	it("store to be reset when the reset method is called", () => {
		store.reset();
		expect(store.user).toBeNull();
		expect(store.userIsAuthenticated).toBeFalsy();
	});
});
