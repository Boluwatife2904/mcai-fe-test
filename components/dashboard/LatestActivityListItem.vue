<script setup lang="ts">
interface Activity {
	agent: string;
	activity: string;
	timestamp: string;
}

interface Props {
	activity: Activity;
}

defineProps<Props>();
</script>

<template>
	<div class="activity py-[0.5rem] pl-[1.6rem] pr-[2.2rem] cursor-pointer">
		<div class="flex justify-between">
			<div class="flex items-center gap-[0.8rem]">
				<NuxtIcon :name="activity.activity" filled />
				<h6 class="weight-500 text-[1.4rem] font-medium leading-[2.8rem] text-gray-600">
					<template v-if="activity.activity === 'claim-submitted'">Claim submitted</template>
					<template v-if="activity.activity === 'preloss-conducted'">Pre Loss Conducted</template>
				</h6>
			</div>
			<NuxtIcon name="chevron-right" filled />
		</div>
		<div class="flex items-center justify-between text-[1.2rem] leading-[2rem]">
			<p class="text-gray-500">{{ activity.agent }} conducted inspection</p>
			<p class="text-success-500">{{ activity.timestamp }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.activity {
	&:not(:last-child) {
		border: 0.6px solid #eaecf0;
	}
}
</style>
