<script setup lang="ts">
definePageMeta({
	// middleware: () => navigateTo({ name: "login" }),
});

const buttonGroup = [
	{ label: "Claim", value: "claim" },
	{ label: "Others", value: "others" },
];

const tabs = [
	{ label: "Transactions", value: "transactions", position: "left" },
	{ label: "User insights", value: "user-insights", position: "left" },
	{ label: "Service dashboard", value: "service-dashboard", position: "right" },
];

const activeGroup = ref("claim");
const activeTab = ref("transactions");

const tableColumn = [
	{ value: "type", label: "Sales type", width: "12.2rem" },
	{ value: "policy", label: "Policy", width: "11rem" },
	{ value: "customer", label: "Customer", width: "11rem" },
	{ value: "distributor", label: "Distributor", width: "11rem" },
	{ value: "date", label: "Date", width: "10.7rem" },
	{ value: "status", label: "Status", width: "17.1rem" },
];

const tableData = [
	{ type: "Purchase", policy: "Flexicare", customer: "Alex Igwe", distributor: "Mycovergenius", date: "July 12 2022", status: "success" },
	{ type: "Renewal", policy: "Compre.Auto", customer: "Ajayi Ibrahim", distributor: "Cowrywise", date: "July 12 2022", status: "success" },
	{ type: "Purchase", policy: "Travel", customer: "Ade Debo", distributor: "Fincra", date: "July 12 2022", status: "failed" },
	{ type: "Renewal", policy: "Gadget", customer: "Chuks Olivia", distributor: "MCG", date: "July 12 2022", status: "pending" },
];
</script>

<template>
	<div class="bg-gray-200 px-16">
		<BaseButtonGroup v-model="activeGroup" :group="buttonGroup" />

		<BaseBadge variant="success" text="Successful" />
		<BaseBadge variant="failed" text="Failed" />
		<BaseBadge variant="pending" text="Pending" />
		<BaseBadge variant="success">Good condition</BaseBadge>

		<BaseTabSwitcher v-model="activeTab" :tabs="tabs" />

		<DashboardAnalyticsDistributorSignUp />

		<DashboardAnalyticsPoliciesStatistics />

		<DashboardAnalyticsLatestActivityList />

		<BaseTable :columns="tableColumn" :table-data="tableData">
			<template #type="{ value }">
				<span class="font-medium">{{ value }}</span>
			</template>
			<template #status="{ value }">
				<BaseBadge :variant="value"></BaseBadge>
			</template>
		</BaseTable>
	</div>
</template>

<style scoped></style>
