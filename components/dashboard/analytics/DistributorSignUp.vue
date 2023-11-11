<script setup lang="ts">
const distributors = [
	{ id: "1", initials: "mc", name: "Mycovergenius", timestamp: "5 mins ago" },
	{ id: "2", initials: "cw", name: "Cowrywise", timestamp: "42 mins ago" },
	{ id: "3", initials: "fc", name: "Fincra", timestamp: "1 hour ago" },
	{ id: "4", initials: "kd", name: "Kuda", timestamp: "1 hour ago" },
];
</script>

<template>
	<div class="distributor-signup min-h-[50.4rem] rounded-[0.4rem] bg-white p-[0.4rem]">
		<div class="distributor-signup__header bg-purple-25 rounded-[0.4rem] px-[1.8rem] py-[1.1rem]">
			<h4 class="font-medium leading-[3.4rem] text-gray-800">Distributor Sign up</h4>
		</div>
		<div class="distributor-signup__content pl-[1.6rem] pr-[2.2rem] pt-[1.5rem]">
			<div class="mb-[1.8rem] flex items-center justify-between">
				<p class="text-[1.4rem] leading-[2.4rem] text-gray-500">10 recent signup</p>
				<NuxtLink to="#" class="flex items-center gap-[0.6rem] font-medium leading-[160%] text-mcai">
					See more
					<NuxtIcon name="link-out" filled />
				</NuxtLink>
			</div>
			<div class="distributor-signup__list flex flex-col gap-[1.7rem]">
				<DashboardAnalyticsDistributorSignUpItem v-for="distributor in distributors" :key="distributor.id" :distributor="distributor" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
