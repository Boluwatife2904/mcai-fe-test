<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
});

interface InputProps {
	id: string;
	name: string;
	type: "text" | "password" | "email";
	label: string;
	placeholder: string;
	icon?: string;
	isInvalid?: boolean;
	errorMessage?: string;
}

defineProps<InputProps>();

const modelValue = defineModel<string | number>();
const passwordIsVisible = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

const togglePasswordVisibility = () => {
	passwordIsVisible.value = !passwordIsVisible.value;
	inputRef.value?.setAttribute("type", passwordIsVisible.value ? "text" : "password");
};
</script>

<template>
	<div class="base-input relative w-full">
		<input :id="id" ref="inputRef" v-model="modelValue" :name="name" :type="type" autocomplete="off" class="base-input__element block w-full border-b-[0.05rem] border-solid border-gray transition-colors ease-linear" :class="[{ 'pl-[3.7rem]': !!icon, 'base-input__element--error': isInvalid }]" v-bind="$attrs" :placeholder="placeholder" />
		<label :for="id" class="base-input__label absolute block" :placeholder="placeholder">{{ label }}</label>
		<NuxtIcon v-if="icon" :name="icon" class="absolute left-0 top-[-0.2rem]" filled />
		<BaseButton type="button" class="absolute right-[1rem] top-[-0.2rem]" @click="togglePasswordVisibility">
			<NuxtIcon v-if="type === 'password'" :name="passwordIsVisible ? 'eye-outline-off' : 'eye-outline'" filled />
		</BaseButton>
		<span v-if="isInvalid && errorMessage" class="mt-[0.6rem] text-[1.4rem] leading-[2.4rem] text-error-500">{{ errorMessage }}</span>
	</div>
</template>

<style lang="scss" scoped>
.base-input {
	&__label {
		@apply pointer-events-none  text-[1.4rem] text-gray-60 opacity-40;
		transform-origin: left center;
		transition: transform 250ms;
		transform: translate(3.7rem, -3.3rem);
	}

	&__element {
		@apply pb-[1.6rem] text-[1.4rem];

		&::placeholder {
			@apply hidden text-transparent;
		}

		&:focus,
		&:active {
			@apply border-b border-b-[#4fbfa3] outline-none;
		}

		&:focus,
		&:not(:placeholder-shown) {
			&::placeholder {
				@apply text-gray-60 opacity-40;
			}

			& + .base-input__label {
				@apply text-black opacity-100;
				transform: translate(0, -6.6rem);
			}
		}

		&--error {
			@apply border-b-error-500 #{!important};
		}
	}
}
</style>
