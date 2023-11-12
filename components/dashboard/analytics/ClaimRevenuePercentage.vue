<script setup lang="ts">
interface Props {
	claim: number;
	revenue: number;
}

const props = defineProps<Props>();

const claimPercentage = computed(() => (props.claim / (props.claim + props.revenue)) * 100);
const revenuePercentage = computed(() => (props.revenue / (props.claim + props.revenue)) * 100);
</script>

<template>
	<div class="ratio flex flex-col gap-[1.6rem]">
		<div class="ratio__percentage bg-success-50 flex text-[0.8rem] font-medium tracking-[1.2rem]">
			<div class="bg-error-200 text-error-500 rounded-[2.6rem]" :style="{ width: `${claimPercentage}%` }">CLAIM</div>
			<div class="text-success-800" :style="{ width: `${revenuePercentage}%` }">REVENUE</div>
		</div>
		<div class="flex items-center justify-between text-[1.4rem] font-semibold text-gray-700">
			<p>{{ claim }}%</p>
			<p>{{ revenue }}%</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ratio {
	&__percentage {
		@apply w-full overflow-hidden rounded-[2.6rem];
		border: 0.4px solid #eaecf0;

		& > div {
			@apply inline-flex justify-center py-[0.2rem];
		}
	}
}
</style>
