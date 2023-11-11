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
</script>

<template>
	<div>
		<BaseButtonGroup v-model="activeGroup" :group="buttonGroup" />

		<BaseBadge variant="success" text="Successful" />
		<BaseBadge variant="failed" text="Failed" />
		<BaseBadge variant="pending" text="Pending" />
		<BaseBadge variant="success">Good condition</BaseBadge>

		<BaseTabSwitcher v-model="activeTab" :tabs="tabs" />
	</div>
</template>

<style scoped></style>
