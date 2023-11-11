<script setup lang="ts"></script>

<template>
	<div class="policies-statistics rounded-[1.2rem] bg-white">
		<div class="policies-statistics__header border-b border-b-gray-200 px-[3.8rem] py-[2.2rem]">
			<h4 class="font-medium leading-[3.4rem]">Policies Statistics</h4>
		</div>
		<div class="policies-statistics__list no-scrollbar flex overflow-y-scroll">
			<DashboardAnalyticsPoliciesStatisticsItem title="Total Policies" body="500" />
			<DashboardAnalyticsPoliciesStatisticsItem title="Total active policies" body="200" />
			<DashboardAnalyticsPoliciesStatisticsItem title="Total inactive policies" body="200" />
			<DashboardAnalyticsPoliciesStatisticsItem title="Average policy value" body="50K" is-amount />
			<DashboardAnalyticsPoliciesStatisticsItem title="% of Policy Renewal" body="60" is-percentage />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
