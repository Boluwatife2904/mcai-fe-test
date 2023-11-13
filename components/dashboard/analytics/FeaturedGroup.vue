<script setup lang="ts">
interface Props {
	data?: FeaturedData;
	isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="flex gap-[2.8rem]">
		<template v-if="isLoading">
			<LoadingShimmer v-for="item in 3" :key="item" class="h-[7.2rem] w-[18.2rem] rounded-[0.8rem]" />
		</template>
		<template v-if="!isLoading && data">
			<DashboardAnalyticsFeaturedCard variant="mcai" name="GWP" :value="data?.gwp" :increase="data.gwpIncrease" />
			<DashboardAnalyticsFeaturedCard variant="yellow" name="Revenue" :value="data?.revenue" :increase="data.revenueIncrease" />
			<DashboardAnalyticsFeaturedCard variant="purple" name="Total claim paid" :value="data.totalClaimPaid" />
		</template>
	</div>
</template>

<style scoped></style>
