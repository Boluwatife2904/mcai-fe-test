<script setup lang="ts">
interface Props {
	label: string;
	value: number;
	variant: Variants;
}

defineProps<Props>();
</script>

<template>
	<div class="overview-card flex min-h-[7rem] flex-col items-center justify-center rounded-[0.8rem] bg-gray-25">
		<p class="flex items-center gap-[0.5rem] text-[1rem] leading-[160%] text-gray-600">
			<BaseDot :variant="variant" class="h-[0.6rem] w-[0.6rem]" />
			{{ label }}
		</p>
		<h6 class="text-[1.8rem] font-medium leading-[160%] text-gray-600">{{ value }}</h6>
	</div>
</template>

<style lang="scss" scoped>
.overview-card {
	border: 0.2px solid #667085;
}
</style>
