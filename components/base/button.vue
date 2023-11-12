<script setup lang="ts">
interface ButtonProps {
	variant?: "primary" | "outline-light";
	isLoading?: boolean;
}

const { variant = "" } = defineProps<ButtonProps>();

const buttonClasses = computed(() => {
	return ["variant"].map((property) => {
		if (property === "variant") return `button--${variant}`;
		return "";
	});
});
</script>

<template>
	<button class="button flex items-center" :class="buttonClasses" v-bind="$attrs">
		<NuxtIcon v-if="isLoading" name="spinner" class="animate-spin" filled /> 
		<slot v-else />
	</button>
</template>

<style lang="scss" scoped>
.button {
	&--primary {
		@apply bg-[#3BAA90] text-white;
	}

	&--outline-light {
		@apply text-gray-60;
		border: 1px solid rgba(5, 5, 20, 0.08);
	}

	&:disabled {
		@apply opacity-50;
	}
}
</style>
