<script setup lang="ts">
definePageMeta({
	middleware: () => navigateTo({ name: "login" }),
});
</script>

<template>
	<div>
		<h1 class="text-5xl text-mcai">Analytics</h1>
		<NuxtIcon name="link-out" filled />
		<NuxtIcon name="caret-down" filled />
		<NuxtIcon name="question-filled" filled />
		<NuxtIcon name="chevron-right" filled />
		<NuxtIcon name="claim-submitted" filled />
		<NuxtIcon name="pre-loss-conducted" filled />
		<NuxtIcon name="bell-line" filled />
		<NuxtIcon name="trending-up" filled />
	</div>
</template>

<style scoped>
h1 {
	font-family: Phantom Sans;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 23px;
}
</style>
