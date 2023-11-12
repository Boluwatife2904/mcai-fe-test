<script setup lang="ts">
interface Props {
	variant: Variants;
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

	&--success-500 {
		@apply bg-[#12B76A];
	}

	&--pending {
		@apply bg-[#B54708];
	}

	&--failed {
		@apply bg-[#B42318];
	}

	&--yellow {
		@apply bg-[#F5B203];
	}

	&--purple {
		@apply bg-[#7A5AF8];
	}

	&--error-500 {
		@apply bg-[#F04438];
	}
}
</style>
