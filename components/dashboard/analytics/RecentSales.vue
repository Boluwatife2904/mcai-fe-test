<script setup lang="ts">
const tableColumn = [
	{ value: "type", label: "Sales type", width: "12.2rem" },
	{ value: "policy", label: "Policy", width: "11rem" },
	{ value: "customer", label: "Customer", width: "12rem" },
	{ value: "distributor", label: "Distributor", width: "11rem" },
	{ value: "date", label: "Date", width: "11.7rem" },
	{ value: "status", label: "Status", width: "17.1rem" },
];

const tableData = [
	{ type: "Purchase", policy: "Flexicare", customer: "Alex Igwe", distributor: "Mycovergenius", date: "July 12 2022", status: "success" },
	{ type: "Renewal", policy: "Compre.Auto", customer: "Ajayi Ibrahim", distributor: "Cowrywise", date: "July 12 2022", status: "success" },
	{ type: "Purchase", policy: "Travel", customer: "Ade Debo", distributor: "Fincra", date: "July 12 2022", status: "failed" },
	{ type: "Renewal", policy: "Gadget", customer: "Chuks Olivia", distributor: "MCG", date: "July 12 2022", status: "pending" },
];
</script>

<template>
	<div class="recent-sales no-scrollbar flex w-full flex-col gap-[1.3rem] overflow-y-scroll bg-white">
		<div class="flex justify-between">
			<div class="flex flex-col gap-[0.2rem]">
				<h6 class="text-[1.8rem] font-medium leading-[2.8rem] text-dark">Recent sales</h6>
				<p class="text-[1.4rem] leading-[2.4rem] text-gray-500">10 recent sales</p>
			</div>
			<NuxtLink to="#" class="weight-500 flex items-center gap-[0.6rem] text-mcai">
				See more
				<NuxtIcon name="link-out" filled />
			</NuxtLink>
		</div>
		<div class="recent-sales__table w-full py-[1.8rem]">
			<BaseTable :columns="tableColumn" :table-data="tableData">
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
