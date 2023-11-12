<script setup lang="ts">
interface Props {
	label: string;
	value: string | number;
	isPercentage?: boolean;
	isAmount?: boolean;
}

const props = defineProps<Props>();

const dotVariant = computed(() => (props.label.toLowerCase().includes("revenue") ? "success-500" : "error-500"));
</script>

<template>
	<div class="flex flex-col gap-[0.9rem]">
		<p class="flex items-center" :class="[{ 'text-[1.2rem] text-gray-500': isAmount }, { 'text-[1.4rem] font-medium text-gray-700': isPercentage }, dotVariant === 'success-500' ? 'gap-[0.55rem]' : 'flex-row-reverse gap-[0.3rem]']">
			<BaseDot v-if="isAmount" :variant="dotVariant" class="h-[0.7rem] w-[0.7rem]" :rounded="false" />
			{{ label }}
		</p>
		<h5 class="text-[2.6rem] font-semibold leading-[2.4rem]" :class="[{ 'text-gray-600': isAmount }, { 'text-success-500': isPercentage }, { 'pl-[1.25rem]': isAmount && dotVariant === 'success-500' }]">
			<span v-if="isAmount">N</span>
			{{ value }}
			<span v-if="isPercentage">%</span>
		</h5>
	</div>
</template>

<style scoped></style>
