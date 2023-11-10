<script setup lang="ts">
interface ButtonProps {
	variant?: "primary" | "outline-black";
}

const { variant = "primary" } = defineProps<ButtonProps>();

const buttonClasses = computed(() => {
	return ["variant"].map((property) => {
		if (property === "variant") return `button--${variant}`;
		return "";
	});
});
</script>

<template>
	<button class="inline-flex items-center" :class="buttonClasses">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.button {
	&--primary {
		@apply bg-[#3BAA90] text-white;
	}
}
</style>
