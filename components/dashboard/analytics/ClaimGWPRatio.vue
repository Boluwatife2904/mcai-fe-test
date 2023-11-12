<script setup lang="ts">
import RadialProgress from "vue3-radial-progress";

const ratios = [
	{ id: "1", month: "January", percentage: 30 },
	{ id: "2", month: "February", percentage: 40 },
	{ id: "3", month: "March", percentage: 20 },
];
</script>

<template>
	<div class="claim-ratio flex justify-between bg-purple-50">
		<div class="flex w-full max-w-[14.1rem] flex-col gap-[1rem]">
			<h5 class="flex items-center justify-center gap-[1rem] text-center text-[1.4rem] font-medium leading-[2.4rem] text-[#2C2A3B]">
				Claim/GWP Ratio
				<NuxtIcon name="question-filled" filled />
			</h5>
			<div>
				<RadialProgress :diameter="141" :total-steps="100" :completed-steps="70" start-color="#D9D6FE" stop-color="#D9D6FE" inner-stroke-color="#9B8AFB" :stroke-width="15" :inner-stroke-width="15">
					<div class="gap-[-1.8rem] text-center">
						<h4 class="text-[1.8rem] font-semibold leading-[3.4rem] text-gray-900">70%</h4>
						<p class="mt-[-1.8rem] text-[1.2rem] leading-[3.4rem] text-gray-500">Claim</p>
					</div>
				</RadialProgress>
			</div>
		</div>
		<div class="flex flex-col gap-[1.2rem]">
			<h5 class="text-[1.4rem] font-medium leading-[2.8rem] text-gray-600">Last 3 months</h5>
			<div class="pl-[0.6rem]">
				<div class="relative z-10 flex flex-col gap-[1.2rem] overflow-hidden">
					<div v-for="ratio in ratios" :key="ratio.id">
						<p class="mb-[1px] text-[1rem] font-medium text-gray-500">{{ ratio.month }}</p>
						<h6 class="text-[1.4rem] font-medium leading-[2.4rem] text-[#44444F]">{{ ratio.percentage }}%</h6>
					</div>
					<span class="ratios-bg pointer-events-none absolute left-[-1.5rem] top-[5.7rem] block h-[13.2rem] w-[6.6rem]"></span>
				</div>
				<BaseButton class="weight-500 text-[1.2rem] leading-[2.8rem] text-mcai">View more</BaseButton>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.claim-ratio {
	@apply rounded-[1.2rem] pb-[0.3rem] pl-[1.7rem] pr-[2.1rem] pt-[1.6rem];
}

.ratios-bg {
	background: linear-gradient(179deg, rgba(244, 243, 255, 0.16) -6.29%, #f4f3ff 79.41%);
}
</style>
