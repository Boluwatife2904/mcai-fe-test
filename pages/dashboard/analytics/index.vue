<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
	middleware: "auth",
});

const currentTab = ref("transactions");
const currentFilter = ref("last-year");

const tabs = [
	{ label: "Transactions", value: "transactions", position: "left" },
	{ label: "User insights", value: "user-insights", position: "left" },
	{ label: "Service dashboard", value: "service-dashboard", position: "right" },
];

const filterOptions = [
	{ value: "last-year", label: "Last Year" },
	{ value: "six-months", label: "Last 6 months" },
];
</script>

<template>
	<div class="analytics-page pb-[41.7rem]">
		<BaseTabSwitcher v-model="currentTab" :tabs="tabs" />
		<div class="analytics-page__overview mb-[3.2rem] mt-[1.6rem] flex flex-col bg-white">
			<div class="border-b border-b-gray-200 px-[2.1rem] py-[0.8rem]">
				<BaseSelect v-model="currentFilter" :options="filterOptions" />
			</div>
			<div class="no-scrollbar flex w-full items-start justify-between gap-[6.4rem] overflow-y-scroll px-[2.1rem] pb-[2.4rem] pt-[4.3rem]">
				<DashboardAnalyticsOverviewGroup />
				<DashboardAnalyticsFeaturedGroup />
			</div>
		</div>
		<div class="analytics-page__grid">
			<div class="mb-[3rem]">
				<div class="analytics-page__statistics mb-[2.3rem]">
					<DashboardAnalyticsStatistics />
				</div>
				<div class="analytics-page__policies-statistics mb-[3.2rem]">
					<DashboardAnalyticsPoliciesStatistics />
				</div>
				<DashboardAnalyticsRecentSales />
			</div>
			<div>
				<div class="analytics-page__activities mb-[1.8rem]">
					<DashboardAnalyticsLatestActivityList />
				</div>
				<div class="analytics-page__claim-ratio mb-[1rem]">
					<DashboardAnalyticsClaimGWPRatio />
				</div>
				<DashboardAnalyticsDistributorSignUp />
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
