<script setup lang="ts">
definePageMeta({
	layout: "auth",
});

const login = () => {};
</script>

<template>
	<div class="login-page">
		<NuxtLink to="#" class="flex items-center justify-end gap-[1.3rem] text-[1.5rem] font-semibold leading-[2.2rem] text-[#0698A0]">
			Create Account
			<NuxtIcon name="arrow-back" filled />
		</NuxtLink>
		<div class="mb-[6.6rem] mt-[8.8rem] flex flex-col gap-[1rem]">
			<h1 class="text-[4rem] font-semibold text-dark">Hi There,</h1>
			<p class="text-[1.4rem] text-gray-60 opacity-[0.4]">Log in to your account to continue.</p>
		</div>
		<form class="mb-[16.8rem]" @submit.prevent="login">
			<div class="relative">
				<NuxtIcon name="dots" class="absolute top-[-2.2rem] left-[-8.8rem]" filled />
				<BaseButton class="min-w-[10.8rem] gap-[2rem] rounded-[0.5rem] px-[2.4rem] py-[1.8rem]">
					Login Now
					<NuxtIcon name="arrow-back" />
				</BaseButton>
			</div>
		</form>

		<ContactSupportCard />
	</div>
</template>

<style scoped></style>
