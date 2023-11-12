<script setup lang="ts">
interface Props {
	variant: Variants;
	name: string;
	value: number;
	increase?: number;
}

defineProps<Props>();
</script>

<template>
	<div class="featured-card flex shrink-0 flex-col" :class="[`featured-card--${variant}`]">
		<p class="text-[1.4rem] leading-[2rem] text-white">{{ name }}</p>
		<div class="flex items-center gap-[2rem]">
			<p class="text-[2rem] font-semibold leading-[3rem] text-white">N {{ convertToInternationalCurrencySystem(value) }}</p>
			<span class="featured-card__increase flex items-center bg-primary-50 text-[1.4rem] font-medium text-success-500">
				<template v-if="increase">
					<NuxtIcon name="trending-up" filled />
					+{{ increase }}%
				</template>
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.featured-card {
	@apply gap-[0.4rem] rounded-[0.8rem] px-[1.6rem] py-[0.8rem];

	&--mcai {
		@apply bg-mcai;
	}

	&--purple {
		@apply bg-purple-500;
	}

	&--yellow {
		@apply bg-yellow;
	}

	&__increase {
		@apply min-h-[1.7rem] min-w-[5.9rem]  gap-[0.3rem] rounded-[0.2rem] py-[0.1rem] pl-[0.15rem] pr-[0.25rem];
	}
}
</style>
