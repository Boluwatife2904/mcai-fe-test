<script setup lang="ts">
interface Option {
	value: string;
	label: string;
}

interface Props {
	options: Option[];
}

const props = defineProps<Props>();

const showDropdown = ref(false);

const modelValue = defineModel<string>();

const selectedOption = computed(() => {
	if (modelValue.value) return props.options.find((option) => option.value === modelValue.value)?.label;
	return "None";
});

const openDropdown = (value: boolean) => (showDropdown.value = value);
const selectOption = (option: string) => {
	if (option !== modelValue.value) modelValue.value = option;
	openDropdown(false);
};
</script>

<template>
	<div class="select flex cursor-pointer flex-wrap items-center gap-[1rem]" @click.stop="openDropdown(true)">
		<div class="relative w-fit">
			<p class="select__selected inline-flex text-[1.4rem] font-semibold text-gray-700">
				Filters by: {{ selectedOption }}
				<NuxtIcon name="caret-down" filled />
			</p>
			<BaseDropdown :show="showDropdown" class="top-[4.5rem]" @close="openDropdown(false)">
				<ul class="flex flex-col">
					<li v-for="option in options" :key="option.value" class="select__option" :class="{ 'select__option--selected': modelValue === option.value }" @click.stop="selectOption(option.value)">{{ option.label }}</li>
				</ul>
			</BaseDropdown>
		</div>
		<span v-if="modelValue" class="select__pill flex cursor-pointer items-center">
			{{ modelValue === "last-year" ? "Jan - Dec" : "Jul - Dec" }}
			<NuxtIcon name="navigation-cancel" filled @click.stop="modelValue = ''" />
		</span>
	</div>
</template>

<style lang="scss" scoped>
.select {
	&__selected {
		@apply gap-[0.8rem] rounded-[0.8rem] border border-gray-300 bg-white px-[1.8rem] py-[1rem];
		box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
	}

	&__option {
		@apply px-[1.8rem] py-[1.4rem] text-[1.4rem] text-gray-400;

		&--selected {
			@apply font-semibold text-gray-900;
		}
	}

	&__pill {
		@apply gap-[1rem] rounded-[0.4rem] bg-gray-200 pl-[1rem] text-[1.2rem] leading-[2.4rem] text-gray-700;
	}
}
</style>
