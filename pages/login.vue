<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";

definePageMeta({
	layout: "auth",
	middleware: "guest",
});

useSeoMeta({
	title: "Login | MyCoverAI"
})

const { loginWithEmailPassword } = useAuth();
const { setUser } = useUserStore();

const form = reactive({ email: "", password: "" });
const requestStatus = ref<RequestStatus>("idle");

const rules = {
	email: { required: helpers.withMessage("Email address is required", required), email: helpers.withMessage("Please enter a valid email address", email) },
	password: { required: helpers.withMessage("Password is required", required), minLength: helpers.withMessage("Password must be at least 8 characters", minLength(8)) },
};
const v$ = useVuelidate(rules, form, { $autoDirty: false });

const loginUser = async () => {
	if (v$.value.$invalid) return;
	requestStatus.value = "pending";
	try {
		await loginWithEmailPassword(form);
		setTimeout(() => {
			setUser({ email: form.email, name: "John Doe" });
			navigateTo({ name: "dashboard-analytics" });
		}, 1000);
	} catch (error) {
		//
	}
};
</script>

<template>
	<section>
		<NuxtLink to="#" class="flex items-center justify-end gap-[1.3rem] text-[1.5rem] font-semibold leading-[2.2rem] text-[#0698A0]">
			Create Account
			<NuxtIcon name="arrow-back" filled />
		</NuxtLink>

		<div class="mb-[10.5rem] mt-[8.8rem] flex flex-col gap-[1rem]">
			<h1 class="text-[4rem] font-semibold text-dark">Hi There,</h1>
			<p class="text-[1.4rem] text-gray-60 opacity-[0.4]">Log in to your account to continue.</p>
		</div>

		<form class="mb-[16.8rem] w-full max-w-[50.6rem]" autocomplete="off" @submit.prevent="loginUser">
			<div class="mb-[1.5rem] flex flex-col gap-[4.7rem]">
				<BaseInput id="email" v-model="v$.email.$model" name="email" type="email" label="Email Address" placeholder="Enter your email address" icon="calendar-today" :is-invalid="v$.email.$error" :error-message="formatVuelidateMessage(v$.email.$errors)" />
				<BaseInput id="password" v-model="v$.password.$model" name="password" type="password" label="Password" placeholder="Enter your password" icon="lock-outline" :is-invalid="v$.password.$error" :error-message="formatVuelidateMessage(v$.password.$errors)" />
			</div>
			<NuxtLink to="#" class="mb-[1.9rem] ml-auto flex w-fit text-[1.5rem] leading-[2.2rem] text-error">Forgot Password ?</NuxtLink>
			<div class="relative">
				<NuxtIcon name="dots" class="absolute left-[-8.8rem] top-[-2.2rem]" filled />
				<BaseButton variant="primary" type="submit" class="min-h-[5.4rem] w-full justify-center gap-[2rem] rounded-[0.5rem] px-[2.4rem] py-[1.8rem] md:w-[15.6rem]" :is-loading="requestStatus === 'pending'" :disabled="v$.$invalid || requestStatus === 'pending'">
					Login Now
					<NuxtIcon name="arrow-back" />
				</BaseButton>
			</div>
		</form>

		<ContactSupportCard />
	</section>
</template>

<style scoped></style>
