<script setup lang="ts"></script>

<template>
	<main class="auth-layout grid h-screen overflow-hidden">
		<div class="auth-layout__side hidden bg-cover bg-center bg-no-repeat pb-[10.9rem] pl-[4.2rem] pr-[3.7rem] md:flex">
			<div class="auth-layout__quote relative mt-auto flex flex-col gap-[0.9rem] text-white">
				<span class="absolute left-[-0.4rem] top-[-3.25rem] block"><NuxtIcon name="quote" /></span>
				<p class="text-[1.8rem] font-normal leading-[2.4rem]">A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.</p>
				<p class="text-[1.4rem]">- Suzie Orman</p>
			</div>
		</div>
		<div class="auth-layout__main flex content-center items-center px-[2rem] py-[4.6rem] md:px-[3.2rem] overflow-scroll">
			<div class="auth-layout__content mx-auto w-full max-w-[68.7rem]">
				<slot />
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.auth-layout {
	@include breakpoint(md) {
		grid-template-columns: 39.8rem auto;
	}

	&__side {
		background-image: url("@/assets/images/auth-background.webp");
		background-color: lightgray;
	}
}
</style>
