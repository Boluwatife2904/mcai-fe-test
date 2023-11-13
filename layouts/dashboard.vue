<script setup lang="ts">
const { isOnMobile } = useDeviceWidthChecker();
const route = useRoute();

const sidebarIsOpen = ref(false);

const toggleSidebar = () => {
	sidebarIsOpen.value = !sidebarIsOpen.value;
};

watch(isOnMobile, (newValue) => {
	if (!newValue) sidebarIsOpen.value = false;
});

watch(
	() => route.fullPath,
	() => {
		if (sidebarIsOpen.value) sidebarIsOpen.value = false;
	},
);
</script>

<template>
	<div class="dashboard grid">
		<aside class="dashboard__sidebar relative z-10 h-screen" :class="{ 'dashboard__sidebar--active': sidebarIsOpen }">
			<DashboardSidebar />
		</aside>
		<div class="dashboard__content h-screen overflow-y-scroll">
			<DashboardHeader @toggle-sidebar="toggleSidebar" />
			<main class="dashboard__main">
				<slot />
			</main>
		</div>
		<Transition name="fade">
			<div v-if="sidebarIsOpen" class="dashboard__overlay fixed inset-0 h-screen w-screen cursor-pointer" @click="toggleSidebar"></div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
.dashboard {
	@include breakpoint(md) {
		grid-template-columns: 25rem auto;
	}

	&__sidebar {
		@apply fixed left-[-100%] top-0 bg-secondary-mcai transition-all duration-200 ease-linear md:static;
		z-index: 3;

		&--active {
			@apply left-0 w-full min-w-[25rem] max-w-[25rem];
		}
	}

	&__main {
		@apply bg-[#FAFBFC] px-[2rem] py-[1.2rem] sm:px-[3.2rem] lg:px-[5.8rem];
		min-height: calc(100dvh - 8rem);
	}

	&__overlay {
		background-color: rgba(0, 0, 0, 0.15);
		z-index: 2;
	}
}
</style>
