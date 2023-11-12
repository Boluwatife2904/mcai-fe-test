<script setup lang="ts">
import RadialProgress from "vue3-radial-progress";

interface Props {
	data: ClaimGWPData;
	isLoading: boolean;
}

defineProps<Props>();

const showRatioModal = ref(false);

const openRatioModal = (value: boolean) => (showRatioModal.value = value);
</script>

<template>
	<template v-if="isLoading">
		<LoadingShimmer class="h-[21.9rem] w-full rounded-[1.2rem]" />
	</template>
	<div v-if="!isLoading && data" class="claim-ratio flex justify-between bg-purple-50">
		<div class="flex w-full max-w-[14.1rem] flex-col gap-[1rem]">
			<h5 class="flex items-center justify-center gap-[1rem] text-center text-[1.4rem] font-medium leading-[2.4rem] text-[#2C2A3B]">
				Claim/GWP Ratio
				<NuxtIcon name="question-filled" filled />
			</h5>
			<div>
				<RadialProgress :diameter="141" :total-steps="100" :completed-steps="data.percentageClaim" start-color="#D9D6FE" stop-color="#D9D6FE" inner-stroke-color="#9B8AFB" :stroke-width="15" :inner-stroke-width="15">
					<div class="gap-[-1.8rem] text-center">
						<h4 class="text-[1.8rem] font-semibold leading-[3.4rem] text-gray-900">{{ data.percentageClaim }}%</h4>
						<p class="mt-[-1.8rem] text-[1.2rem] leading-[3.4rem] text-gray-500">Claim</p>
					</div>
				</RadialProgress>
			</div>
		</div>
		<div class="flex flex-col gap-[1.2rem]">
			<h5 class="text-[1.4rem] font-medium leading-[2.8rem] text-gray-600">Last 3 months</h5>
			<div class="pl-[0.6rem]">
				<div class="relative flex flex-col gap-[1.2rem] overflow-hidden">
					<div v-for="ratio in data.data" :key="ratio.id">
						<p class="mb-[1px] text-[1rem] font-medium text-gray-500">{{ ratio.month }}</p>
						<h6 class="text-[1.4rem] font-medium leading-[2.4rem] text-[#44444F]">{{ ratio.value }}%</h6>
					</div>
					<span class="ratios-bg pointer-events-none absolute left-[-1.5rem] top-[5.7rem] block h-[13.2rem] w-[6.6rem]"></span>
				</div>
				<BaseButton class="weight-500 text-[1.2rem] leading-[2.8rem] text-mcai" @click="openRatioModal(true)">View more</BaseButton>
			</div>
		</div>

		<ModalsClaimRatioGWP v-if="showRatioModal" :data="data" @close-modal="openRatioModal(false)" />
	</div>
</template>

<style lang="scss" scoped>
.claim-ratio {
	@apply rounded-[1.2rem] pb-[0.3rem] pl-[1.7rem] pr-[2.1rem] pt-[1.6rem];

	&__modal-header {
		@apply pb-[1.9rem] pl-[2rem] pr-[2rem] pt-[2.2rem] sm:pl-[3.2rem] md:pr-[4rem] lg:pl-[5.4rem];
	}

	&__modal-body {
		@apply px-[2rem] pb-[3.6rem] pt-[5.4rem] sm:px-[3.2rem] lg:px-[5.4rem];
	}

	&__claims {
		@apply pb-[2.6rem] pl-[1.2rem] pr-[1.2rem] pt-[2rem] md:pl-[2.9rem] md:pr-[3.1rem];

		&--top {
			border-bottom: 0.4px solid #d0d5dd;
		}
	}
}

.ratios-bg {
	background: linear-gradient(179deg, rgba(244, 243, 255, 0.16) -6.29%, #f4f3ff 79.41%);
}
</style>
