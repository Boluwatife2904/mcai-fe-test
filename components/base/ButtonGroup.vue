<script setup lang="ts">
interface Button {
	value: string;
	label: string;
}

interface Props {
	group: Button[];
}

defineProps<Props>();

const modelValue = defineModel<string>();

const selectButton = (buttonValue: string) => {
	if (buttonValue !== modelValue.value) modelValue.value = buttonValue;
};
</script>

<template>
	<div class="button-group flex w-fit gap-[0.1rem] overflow-hidden">
		<button v-for="button in group" :key="button.value" class="button-group__item" :class="{ 'button-group__item--active': modelValue === button.value }" @click="selectButton(button.value)">
			{{ button.label }}
		</button>
	</div>
</template>

<style lang="scss" scoped>
.button-group {
	@apply rounded-[0.8rem] border border-solid border-gray-300 bg-gray-300;
	box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

	&__item {
		@apply bg-white px-[1.6rem] py-[1rem] text-[1.2rem] font-medium leading-[2rem] text-gray-700 transition-colors ease-linear;

		&--active {
			@apply bg-secondary-mcai text-white;
		}
	}
}
</style>
