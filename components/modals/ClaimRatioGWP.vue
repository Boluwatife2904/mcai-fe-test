<script setup lang="ts">
interface Props {
	data: ClaimGWPData;
}

interface Emits {
	(event: "close-modal"): void;
}

const props = defineProps<Props>();

const claimAndRevenue = ["totalRevenue", "claimPaid"].map((item) => {
	if (item === "totalRevenue") return { name: "Total Revenue", amount: convertToInternationalCurrencySystem(props.data.totalRevenue) };
	else return { name: "Total claim paid", amount: convertToInternationalCurrencySystem(props.data.totalClaimPaid) };
});

defineEmits<Emits>();
</script>

<template>
	<BaseModal>
		<template #header>
			<div class="claim-ratio__modal-header flex items-center gap-[2rem] bg-purple-50">
				<div class="flex max-w-[37rem] flex-col items-start gap-[2rem]">
					<h3 class="text-[3rem] font-semibold leading-[3.2rem] text-gray-700">Claim/GWP Ratio 🎉</h3>
					<p class="text-[1.4rem] leading-[2rem] text-gray-500">See below your financial stability ,solvency and overall health of your company</p>
					<BaseBadge variant="success">Good condition</BaseBadge>
				</div>
				<NuxtIcon class="hidden md:block" name="strength" filled />
			</div>
		</template>
		<template #body>
			<div class="claim-ratio__modal-body flex flex-col gap-[2.4rem] bg-white">
				<div class="claim-ratio__claims flex flex-col gap-[2.8rem] rounded-[0.6rem] border border-gray-200">
					<div class="claim-ratio__claims--top border-b pb-[3.1rem]">
						<DashboardAnalyticsClaimRevenuePercentage :claim="data.claim" :revenue="data.revenue" />
					</div>
					<div class="flex flex-wrap justify-between gap-[2rem]">
						<DashboardAnalyticsClaimGWPRatioRecord label="% of Claim paid to Revenue" :value="data.claimToRevenuePercentage" :is-percentage="true" />
						<div class="flex gap-[4.2rem]">
							<DashboardAnalyticsClaimGWPRatioRecord v-for="item in claimAndRevenue" :key="item.name" :label="item.name" :value="item.amount" :is-amount="true" />
						</div>
					</div>
				</div>
				<BaseButton class="ml-auto w-[14.2rem] justify-center rounded-[0.8rem] px-[1.6rem] py-[1.2rem] text-center text-[1.4rem] font-medium leading-[2.4rem]" variant="primary" @click="$emit('close-modal')">Ok</BaseButton>
			</div>
		</template>
	</BaseModal>
</template>

<style lang="scss" scoped>
.claim-ratio {
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
</style>
