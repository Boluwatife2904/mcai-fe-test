<script setup lang="ts">
definePageMeta({
	layout: "auth",
});

const login = () => {};
</script>

<template>
	<div class="login-page overflow-hidden">
		<NuxtLink to="#" class="flex items-center justify-end gap-[1.3rem] text-[1.5rem] font-semibold leading-[2.2rem] text-[#0698A0]">
			Create Account
			<NuxtIcon name="arrow-back" filled />
		</NuxtLink>
		<div class="mb-[6.6rem] mt-[8.8rem] flex flex-col gap-[1rem]">
			<h1 class="text-[4rem] font-semibold text-dark">Hi There,</h1>
			<p class="text-[1.4rem] text-gray-60 opacity-[0.4]">Log in to your account to continue.</p>
		</div>
		<form @submit.prevent="login"></form>

		<ContactSupportCard />
	</div>
</template>

<style scoped></style>
