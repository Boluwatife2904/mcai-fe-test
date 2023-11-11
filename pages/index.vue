<script setup lang="ts">
definePageMeta({
	// middleware: () => navigateTo({ name: "login" }),
});

const buttonGroup = [
	{ label: "Claim", value: "claim" },
	{ label: "Others", value: "others" },
];

const activeGroup = ref("claim");
</script>

<template>
	<div>
		<BaseButtonGroup v-model="activeGroup" :group="buttonGroup" />

		<BaseBadge variant="success" text="Successful" />
		<BaseBadge variant="failed" text="Failed" />
		<BaseBadge variant="pending" text="Pending" />
		<BaseBadge variant="success">Good condition</BaseBadge>
	</div>
</template>

<style scoped></style>
