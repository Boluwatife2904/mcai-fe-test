<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const currentTab = ref("transactions");

const tabs = [
	{ label: "Transactions", value: "transactions", position: "left" },
	{ label: "User insights", value: "user-insights", position: "left" },
	{ label: "Service dashboard", value: "service-dashboard", position: "right" },
];
</script>

<template>
	<div class="analytics-page pb-[41.7rem]">
		<BaseTabSwitcher v-model="currentTab" :tabs="tabs" />
		<div class="analytics-page__overview mb-[3.2rem] flex bg-white">
			<div class="no-scrollbar flex w-full items-start justify-between gap-[6.4rem] overflow-y-scroll px-[2.1rem] pb-[2.4rem] pt-[4.3rem]">
				<DashboardAnalyticsOverviewGroup />
				<DashboardAnalyticsFeaturedGroup />
			</div>
		</div>
		<div class="analytics-page__grid">
			<div class="mb-[3rem]">
				<div class="analytics-page__policies-statistics mb-[3.2rem]">
					<DashboardAnalyticsPoliciesStatistics />
				</div>
				<div class="analytics-page__sales">
					<DashboardAnalyticsRecentSales />
				</div>
			</div>
			<div>
				<div class="analytics-page__activities mb-[1.8rem]">
					<DashboardAnalyticsLatestActivityList />
				</div>
				<div class="analytics-page__signups">
					<DashboardAnalyticsDistributorSignUp />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.analytics-page {
	&__grid {
		@include breakpoint(xl) {
			@apply grid gap-[3rem];
			grid-template-columns: 68% 29.1%;
		}
	}
}
</style>
