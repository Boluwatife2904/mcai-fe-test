<script setup lang="ts">
interface Props {
	data: PoliciesStatisticsData;
	isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="policies-statistics rounded-[1.2rem] bg-white">
		<div class="policies-statistics__header border-b border-b-gray-200 px-[3.8rem] py-[2.2rem]">
			<h4 class="font-medium leading-[3.4rem]">Policies Statistics</h4>
		</div>
		<div class="policies-statistics__list no-scrollbar flex overflow-y-scroll">
			<DashboardAnalyticsPoliciesStatisticsItem :is-loading="isLoading" title="Total Policies" :body="data.totalPolicies" />
			<DashboardAnalyticsPoliciesStatisticsItem :is-loading="isLoading" title="Total active policies" :body="data.totalActivePolicies" />
			<DashboardAnalyticsPoliciesStatisticsItem :is-loading="isLoading" title="Total inactive policies" :body="data.totalInactivePolicies" />
			<DashboardAnalyticsPoliciesStatisticsItem :is-loading="isLoading" title="Average policy value" :body="data.averagePolicyValue" is-amount />
			<DashboardAnalyticsPoliciesStatisticsItem :is-loading="isLoading" title="% of Policy Renewal" :body="data.percentageOfPolicyRenewal" is-percentage />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
