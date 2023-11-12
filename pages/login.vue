<script setup lang="ts">
definePageMeta({
	layout: "auth",
});

const form = reactive({
	email: "",
	password: "",
});

const login = () => {};
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

		<form class="mb-[16.8rem] w-full max-w-[50.6rem]" autocomplete="off" @submit.prevent="login">
			<div class="mb-[1.5rem] flex flex-col gap-[4.7rem]">
				<BaseInput id="email" v-model="form.email" name="email" type="email" label="Email Address" placeholder="Enter your email address" icon="calendar-today" />
				<BaseInput id="password" v-model="form.password" name="password" type="password" label="Password" placeholder="Enter your password" icon="lock-outline" />
			</div>
			<NuxtLink to="#" class="mb-[1.9rem] ml-auto flex w-fit text-[1.5rem] leading-[2.2rem] text-error">Forgot Password ?</NuxtLink>
			<div class="relative">
				<NuxtIcon name="dots" class="absolute left-[-8.8rem] top-[-2.2rem]" filled />
				<BaseButton variant="primary" class="min-w-full justify-center gap-[2rem] rounded-[0.5rem] px-[2.4rem] py-[1.8rem] md:min-w-[10.8rem]">
					Login Now
					<NuxtIcon name="arrow-back" />
				</BaseButton>
			</div>
		</form>

		<ContactSupportCard />
	</section>
</template>

<style scoped></style>
