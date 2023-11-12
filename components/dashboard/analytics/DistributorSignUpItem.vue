<script setup lang="ts">
interface Props {
	distributor: {
		name: string;
		timestamp: string;
	};
}

defineProps<Props>();
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-[1.58rem]">
			<BaseAvatar size="lg" :name="distributor.name" />
			<div class="flex flex-col gap-[0.4rem] text-[1.4rem] leading-[2.4rem]">
				<h6 class="font-medium text-black-100">{{ distributor.name }}</h6>
				<p class="text-gray-400">{{ distributor.timestamp }}</p>
			</div>
		</div>
		<BaseButton variant="outline-light" class="rounded-[10rem] px-[0.8rem] py-[0.2rem] text-[1rem] leading-[2.4rem]">View profile</BaseButton>
	</div>
</template>

<style scoped></style>
