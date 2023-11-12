<script setup lang="ts">
interface ButtonProps {
	variant?: "primary" | "outline-light";
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
	<button class="flex items-center" :class="buttonClasses">
		<slot />
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
}
</style>
