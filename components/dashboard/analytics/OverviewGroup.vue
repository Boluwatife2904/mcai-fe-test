<script setup lang="ts">
interface Props {
	data?: {
		numberOfDistributors: number;
		activeDistributor: number;
		numberOfPolicySold: number;
	};
	isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="flex gap-[2rem]">
		<template v-if="isLoading">
			<LoadingShimmer v-for="item in 3" :key="item" class="h-[7rem] w-[10.3rem] rounded-[0.8rem]" />
		</template>
		<template v-if="!isLoading && data">
			<DashboardAnalyticsOverviewCard variant="success" label="No. of Distributors" :value="data.numberOfDistributors" class="w-[10.3rem]" />
			<DashboardAnalyticsOverviewCard variant="yellow" label="Active Distributor" :value="data.activeDistributor" class="w-[10.5rem]" />
			<DashboardAnalyticsOverviewCard variant="purple" label="No of Policy sold" :value="data.numberOfPolicySold" class="w-[12.5rem]" />
		</template>
	</div>
</template>

<style scoped></style>
