<script setup lang="ts">
interface Props {
	title: string;
	body: number;
	isPercentage?: boolean;
	isAmount?: boolean;
	isLoading: boolean;
}

const { isAmount = false, isPercentage = false } = defineProps<Props>();
</script>

<template>
	<div class="policy-statistic no-shrink flex flex-col items-center gap-[0.9rem] py-[3.7rem] text-center">
		<p class="text-[1.2rem] text-gray-500">{{ title }}</p>
		<LoadingShimmer v-if="isLoading" class="h-[2.4rem] w-[7.4rem] rounded-[0.8rem]" />
		<h6 v-else class="text-[2.6rem] font-semibold leading-[2.4rem] text-mcai">
			<span v-if="isAmount">N</span>
			<span>{{ isPercentage ? body : convertToInternationalCurrencySystem(body) }}</span>
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
