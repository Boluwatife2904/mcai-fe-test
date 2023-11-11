<script setup lang="ts">
interface Props {
	title: string;
	body: string;
	isPercentage?: boolean;
	isAmount?: boolean;
}

const { isAmount = false, isPercentage = false } = defineProps<Props>();
</script>

<template>
	<div class="policy-statistic no-shrink flex flex-col items-center gap-[0.9rem] py-[3.7rem] text-center">
		<p class="text-[1.2rem] text-gray-500">{{ title }}</p>
		<h6 class="text-[2.6rem] font-semibold leading-[2.4rem] text-mcai">
			<span v-if="isAmount">N</span>
			{{ body }}
			<span v-if="isPercentage">%</span>
		</h6>
	</div>
</template>

<style lang="scss" scoped>
.policy-statistic {
	&:not(:last-child) {
		@apply border-r border-r-gray-200;
	}

	&:nth-child(1) {
		@apply min-w-[13rem];
	}

	&:nth-child(2),
	&:nth-child(5) {
		@apply min-w-[14.9rem];
	}

	&:nth-child(3) {
		@apply min-w-[15.2rem];
	}

	&:nth-child(4) {
		@apply min-w-[14.1rem];
	}
}
</style>
