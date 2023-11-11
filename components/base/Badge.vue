<script setup lang="ts">
interface Props {
	variant: "success" | "pending" | "failed";
	text?: string;
}

defineProps<Props>();
</script>

<template>
	<span class="base-badge inline-flex items-center gap-[0.8rem]" :class="[`base-badge--${variant}`]">
		<BaseDot :variant="variant" class="h-[6px] w-[6px]" />
		<span v-if="text">{{ text }}</span>
		<slot>
			<template v-if="variant === 'success'">Successful</template>
			<template v-if="variant === 'failed'">Failed</template>
			<template v-if="variant === 'pending'">Pending</template>
		</slot>
	</span>
</template>

<style lang="scss" scoped>
.base-badge {
	@apply rounded-[1.5rem] px-[0.8rem] py-[0.2rem] text-[1rem] leading-[1.8rem];

	&--success {
		@apply bg-[#ECFDF3] text-[#027A48];
	}

	&--pending {
		@apply bg-[#FFFAEB] text-[#B54708];
	}

	&--failed {
		@apply bg-[#FEF3F2] text-[#B42318];
	}
}
</style>
