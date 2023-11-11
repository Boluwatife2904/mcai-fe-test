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
	</div>
</template>

<style scoped></style>
