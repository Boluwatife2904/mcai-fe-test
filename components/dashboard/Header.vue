<script setup lang="ts">
interface Emits {
	(event: "toggle-sidebar"): void;
}

defineEmits<Emits>();

const { user } = useUserStore();
</script>

<template>
	<header class="dashboard__header flex items-center justify-between">
		<div class="flex items-center gap-5">
			<button class="flex flex-col gap-2 md:hidden" @click="$emit('toggle-sidebar')">
				<span v-for="line in 3" :key="line" class="block h-[0.2rem] w-[2.4rem] rounded-lg bg-secondary-mcai"></span>
			</button>
			<h4 class="text-[2.4rem] font-semibold leading-[2.3rem] text-text-1">Analytics</h4>
		</div>
		<div class="flex items-center gap-[2.4rem]">
			<div class="relative">
				<NuxtIcon name="bell-line" filled />
				<BaseDot class="absolute right-[-0.4rem] top-[-0.6rem] h-[1.2rem] w-[1.2rem]" variant="error-500" />
			</div>
			<div class="flex cursor-pointer items-center gap-[1.8rem]">
				<img src="/images/avatar.png" class="h-[4rem] w-[4rem] object-cover rounded" alt="User avatar" />
				<p class="hidden items-center gap-[0.9rem] text-[1.4rem] font-semibold leading-[1.6rem] text-dark sm:flex">
					Hello {{ user?.name }}
					<NuxtIcon name="dropdown" filled />
				</p>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.dashboard__header {
	@apply sticky left-0 top-0 bg-white pb-[2.3rem] pl-[2rem] pr-[2rem] pt-[3.3rem] sm:pl-[3.2rem] lg:pl-[6.8rem] lg:pr-[4.8rem];
	z-index: 2;
}
</style>
