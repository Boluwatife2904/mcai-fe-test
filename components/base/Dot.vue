<script setup lang="ts">
interface Props {
	variant: "success" | "pending" | "failed";
	size: number;
	rounded?: boolean;
}

const { rounded = true } = defineProps<Props>();
</script>

<template>
	<span class="base-dot block" :class="[`base-dot--${variant}`, { 'rounded-full': rounded }]"></span>
</template>

<style lang="scss" scoped>
.base-dot {
	&--success {
		@apply bg-[#027A48];
	}

	&--pending {
		@apply bg-[#B54708];
	}

	&--failed {
		@apply bg-[#B42318];
	}
}
</style>
