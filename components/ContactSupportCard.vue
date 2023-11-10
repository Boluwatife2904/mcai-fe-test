<script setup lang="ts"></script>

<template>
	<div class="contact-support relative flex flex-col md:flex-row max-w-[50.7rem] items-start md:items-center justify-between rounded-[1rem] border border-dashed border-[#0698A0] bg-[#FBFFFE] pb-[2.7rem] pl-[2.8rem] pr-[2.4rem] pt-[2.1rem] gap-[2rem]">
		<div class="flex flex-col md:flex-row items-start md:items-center gap-[1.631rem]">
			<NuxtIcon name="question-outline" filled />
			<div class="flex flex-col gap-[0.4rem] text-[1.4rem]">
				<p class="text-[#000428] opacity-40">Expert support available to you 24 /7.</p>
				<NuxtLink to="#" class="font-semibold leading-[2.1rem] text-[#0698A0]">Contact Support</NuxtLink>
			</div>
		</div>
		<NuxtIcon name="mcai-logo-black" filled />
		<NuxtIcon name="dots" class="absolute right-[-7.8rem] bottom-0 z-[-1]" filled />
	</div>
</template>

<style scoped></style>
