<script setup lang="ts">
const buttonGroup = [
	{ label: "Claim", value: "claim" },
	{ label: "Others", value: "others" },
];

const currentSelection = ref("claim");

const latestActivities = [
	{ id: "1", activity: "preloss-conducted", agent: "Agent Ade", timestamp: "Just Now" },
	{ id: "2", activity: "claim-submitted", agent: "Agent Ade", timestamp: "Just Now" },
	{ id: "3", activity: "preloss-conducted", agent: "Agent Ade", timestamp: "Just Now" },
];
</script>

<template>
	<section class="latest-activities flex flex-col gap-[0.4rem] pb-[9.7rem]">
		<p class="text-[1.4rem] leading-[2.4rem] text-gray-500">Latest activities</p>
		<div class="latest-activities__content bg-white">
			<div class="latest-activities__group p-[1.2rem] pb-[1.7rem]">
				<BaseButtonGroup v-model="currentSelection" :group="buttonGroup" />
			</div>
			<div class="latest-activities__list">
				<DashboardLatestActivityListItem v-for="activity in latestActivities" :key="activity.id" :activity="activity" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.latest-activities {
	&__list {
		@apply rounded-[0.4rem] bg-gray-25;
		border: 0.6px solid #eaecf0;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.02);
	}
}
</style>
