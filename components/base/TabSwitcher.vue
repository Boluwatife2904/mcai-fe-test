<script setup lang="ts">
interface Tab {
	value: string;
	label: string;
	position: string;
}

interface Props {
	tabs: Tab[];
}

defineProps<Props>();

const modelValue = defineModel<string>();

const selectTab = (tabValue: string) => {
	if (tabValue !== modelValue.value) modelValue.value = tabValue;
};
</script>

<template>
	<div class="tabs-switcher border border-b border-gray-200 pl-[2rem] md:pl-[4.2rem] pr-[2rem] md:pr-[3.5rem] pt-[1rem]">
		<ul class="tabs-swither__inner no-scrollbar flex items-start gap-[5.7rem] overflow-y-scroll">
			<li v-for="tab in tabs" :key="tab.value" class="tab-switcher__item cursor-pointer transition-colors ease-linear" :class="[{ 'ml-auto': tab.position === 'right' }, { 'tab-switcher__item--active': modelValue === tab.value }]" @click="selectTab(tab.value)">
				{{ tab.label }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.tab-switcher {
	&__item {
		@apply shrink-0 border-b-2 border-transparent px-[0.4rem] pb-[1.6rem] text-[1.4rem] leading-[2rem] text-gray-500;

		&--active {
			@apply text-gray-800 border-b-purple-500 font-medium;
		}
	}
}
</style>
