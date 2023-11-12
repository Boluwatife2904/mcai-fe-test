<script setup lang="ts">
interface Props {
	distributors: Distributor[];
	isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="distributor-signup min-h-[50.4rem] rounded-[0.4rem] bg-white p-[0.4rem]">
		<div class="distributor-signup__header rounded-[0.4rem] bg-purple-25 px-[1.8rem] py-[1.1rem]">
			<h4 class="font-medium leading-[3.4rem] text-gray-800">Distributor Sign up</h4>
		</div>
		<div class="distributor-signup__content pl-[1.6rem] pr-[2.2rem] pt-[1.5rem]">
			<LoadingShimmer v-if="isLoading" class="mb-[1.8rem] h-[2rem] w-full rounded-[0.8rem]" />
			<div v-else class="mb-[1.8rem] flex items-center justify-between">
				<p class="text-[1.4rem] leading-[2.4rem] text-gray-500">{{ distributors.length }} recent signup</p>
				<NuxtLink to="#" class="flex items-center gap-[0.6rem] font-medium leading-[160%] text-mcai">
					See more
					<NuxtIcon name="link-out" filled />
				</NuxtLink>
			</div>
			<div class="distributor-signup__list flex flex-col gap-[1.7rem]">
				<template v-if="isLoading">
					<LoadingShimmer v-for="item in 4" :key="item" class="h-[4.6rem] w-full rounded-[0.8rem]" />
				</template>
				<template v-if="!isLoading && distributors.length">
					<DashboardAnalyticsDistributorSignUpItem v-for="distributor in distributors" :key="distributor.id" :distributor="distributor" />
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
