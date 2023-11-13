<script setup lang="ts">
interface Props {
	activities: Activity[];
	isLoading: boolean;
}

defineProps<Props>();

const buttonGroup = [
	{ label: "Claim", value: "claim" },
	{ label: "Others", value: "others" },
];

const currentSelection = ref("claim");
</script>

<template>
	<section class="latest-activities flex flex-col gap-[0.4rem] overflow-hidden rounded-[1.2rem]">
		<p class="text-[1.4rem] leading-[2.4rem] text-gray-500">Latest activities</p>
		<div class="latest-activities__content min-h-[35.9rem] bg-white">
			<div class="latest-activities__group p-[1.2rem] pb-[1.7rem]">
				<LoadingShimmer v-if="isLoading" class="h-[4rem] w-[13rem] rounded-[0.8rem]" />
				<BaseButtonGroup v-else v-model="currentSelection" :group="buttonGroup" />
			</div>
			<div class="latest-activities__list">
				<template v-if="isLoading">
					<LoadingShimmer v-for="item in 4" :key="item" class="h-[4.6rem] w-full" />
				</template>
				<template v-else>
					<DashboardAnalyticsLatestActivityListItem v-for="activity in activities" :key="activity.id" :activity="activity" />
				</template>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.latest-activities {
	&__list {
		@apply overflow-hidden rounded-[0.4rem] bg-gray-25;
		border: 0.6px solid #eaecf0;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.02);
	}
}
</style>
