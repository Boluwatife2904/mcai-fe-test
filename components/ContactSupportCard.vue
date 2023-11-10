<script setup lang="ts"></script>

<template>
	<div class="contact-support relative flex max-w-[50.7rem] flex-col items-start justify-between gap-[2rem] rounded-[1rem] border border-dashed border-[#0698A0] bg-[#FBFFFE] pb-[2.7rem] pl-[2.8rem] pr-[2.4rem] pt-[2.1rem] md:flex-row md:items-center">
		<div class="flex flex-col items-start gap-[1.631rem] md:flex-row md:items-center">
			<NuxtIcon name="question-outline" filled />
			<div class="flex flex-col gap-[0.4rem] text-[1.4rem]">
				<p class="text-[#000428] opacity-40">Expert support available to you 24 /7.</p>
				<NuxtLink to="#" class="font-semibold leading-[2.1rem] text-[#0698A0]">Contact Support</NuxtLink>
			</div>
		</div>
		<NuxtIcon name="mcai-logo-black" filled />
		<NuxtIcon name="dots" class="absolute bottom-0 right-[-7.8rem] z-[-1] hidden lg:block" filled />
	</div>
</template>

<style scoped></style>
