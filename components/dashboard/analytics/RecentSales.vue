<script setup lang="ts">
interface Props {
	sales?: Sale[];
	isLoading: boolean;
}

defineProps<Props>();

const tableColumn = [
	{ value: "type", label: "Sales type", width: "12.2rem" },
	{ value: "policy", label: "Policy", width: "11rem" },
	{ value: "customer", label: "Customer", width: "12rem" },
	{ value: "distributor", label: "Distributor", width: "11rem" },
	{ value: "date", label: "Date", width: "11.7rem" },
	{ value: "status", label: "Status", width: "17.1rem" },
];
</script>

<template>
	<div class="recent-sales no-scrollbar flex w-full flex-col gap-[1.3rem] overflow-y-scroll bg-white">
		<div class="flex justify-between">
			<div class="flex flex-col gap-[0.2rem]">
				<h6 class="text-[1.8rem] font-medium leading-[2.8rem] text-dark">Recent sales</h6>
				<LoadingShimmer v-if="isLoading" class="h-[2rem] w-[12rem]" />
				<p v-else class="text-[1.4rem] leading-[2.4rem] text-gray-500">{{ sales?.length }} recent sales</p>
			</div>
			<NuxtLink v-if="!isLoading" to="#" class="weight-500 flex items-center gap-[0.6rem] text-mcai">
				See more
				<NuxtIcon name="link-out" filled />
			</NuxtLink>
		</div>
		<div class="recent-sales__table w-full py-[1.8rem]">
			<LoadingShimmer v-if="isLoading" class="h-[36rem] w-full" />
			<BaseTable v-if="!isLoading && sales && sales.length" :columns="tableColumn" :table-data="sales">
				<template #type="{ value }">
					<span class="font-medium">{{ value }}</span>
				</template>
				<template #status="{ value }">
					<BaseBadge :variant="value"></BaseBadge>
				</template>
			</BaseTable>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.recent-sales {
	@apply rounded-[1.2rem] pb-[2.7rem] pl-[1.7rem] pr-[2.4rem] pt-[1.5rem];
}
</style>
