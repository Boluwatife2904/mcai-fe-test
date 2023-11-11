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
	<div class="analytics-page">
		<BaseTabSwitcher v-model="currentTab" :tabs="tabs" />
	</div>
</template>

<style scoped></style>
