<script setup lang="ts">
const dashboardLinksGroup = [
	{ name: "", marginBottom: "mb-[3.2rem]", links: [{ icon: "globe", name: "dashboard-get-started", title: "Get Started" }] },
	{ name: "dashboard", marginBottom: "mb-[3.8rem]", links: [{ icon: "dashboard-round", name: "dashboard-analytics", title: "Analytics" }] },
	{
		name: "admin",
		marginBottom: "mb-[4.2rem]",
		links: [
			{ icon: "sales", name: "dashboard-sales", title: "Sales" },
			{ icon: "policies", name: "dashboard-policies", title: "Policies" },
			{ icon: "products", name: "dashboard-products", title: "Products" },
			{ icon: "customer", name: "dashboard-customer", title: "Customer" },
			{ icon: "users", name: "dashboard-users", title: "Users" },
			{ icon: "claim", name: "dashboard-Claim", title: "Claim" },
		],
	},
	{
		name: "transactions",
		marginBottom: "mb-[4.2rem]",
		links: [
			{ icon: "wallet", name: "dashboard-wallet", title: "Wallet" },
			{ icon: "transaction-history", name: "dashboard-transaction-history", title: "Transaction History" },
		],
	},
	{
		name: "partners",
		marginBottom: "mb-[4.2rem]",
		links: [
			{ icon: "provider", name: "dashboard-wallet", title: "Provider" },
			{ icon: "distributors", name: "dashboard-transaction-history", title: "Distributors" },
		],
	},
	{
		name: "others",
		marginBottom: "mb-[4.2rem]",
		links: [{ icon: "services", name: "dashboard-services", title: "Services" }],
	},
	{
		name: "",
		links: [{ icon: "settings", name: "dashboard-settings", title: "Settings" }],
	},
];
</script>

<template>
	<div class="no-scrollbar relative h-full w-full overflow-y-scroll px-[3.5rem] pb-[5rem] pt-[2.3rem]">
		<div class="sidebar__logo mb-[4.626rem]">
			<NuxtIcon name="mcai-logo-white" filled />
		</div>
		<div v-for="group in dashboardLinksGroup" :key="group.name" class="relative z-0 flex flex-col" :class="[group.name === 'admin' ? 'gap-[1.6rem]' : 'gap-[1.4rem]', `${group.marginBottom}`]">
			<p v-if="group.name" class="text-[1rem] uppercase tracking-[0.15rem] text-gray-600">{{ group.name }}</p>
			<ul class="flex flex-col gap-[1.2rem]">
				<li v-for="link in group.links" :key="link.name">
					<NuxtLink to="#" class="sidebar__link relative inline-flex items-center gap-[1rem]" :class="[link.name === 'dashboard-analytics' ? 'sidebar__link--active text-mcai' : 'text-gray-200']">
						<NuxtIcon class="min-w-[2rem]" :name="link.icon" filled />
						{{ link.title }}
					</NuxtLink>
				</li>
				<template v-if="group.name === 'others'">
					<span class="mb-[0.6rem] block h-[1.8rem] w-[6.1rem]"></span>
					<span class="others-bg absolute block h-[7.1rem] w-[25rem] bg-[#1A1C20]"></span>
				</template>
			</ul>
		</div>
		<NuxtIcon class="absolute bottom-[-13.8rem] left-0" name="sidebar-pattern" filled />
	</div>
</template>

<style lang="scss" scoped>
.sidebar__link--active::after {
	content: "";
	@apply absolute left-[-3.5rem] h-[3.1rem] w-[0.4rem] bg-mcai;
	border-radius: 0px 4px 4px 0px;
}

.others-bg {
	@apply left-[-3.5rem] top-[-1.2rem];
	z-index: -1;
}
</style>
