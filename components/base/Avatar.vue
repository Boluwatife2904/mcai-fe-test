<script setup lang="ts">
interface Props {
	name: string;
	size: "sm" | "md" | "lg";
}

const props = defineProps<Props>();

const colors = ["#3BAA90", "#246CF9", "#F58634", "#F58634", "#F58634"];

const initials = computed(() => convertWordToInitials(props.name));

const backgroundColor = computed(() => {
	const hashCode = stringToHashCode(initials.value);
	const nonNegativeIndex = Math.abs(hashCode % colors.length);
	return colors[nonNegativeIndex];
});
</script>

<template>
	<span class="base-avatar" :class="[`base-avatar--${size}`]">
		{{ initials }}
	</span>
</template>

<style lang="scss" scoped>
.base-avatar {
	@apply inline-flex items-center justify-center rounded-full text-[1.2rem] font-semibold uppercase leading-[2.4rem] text-white;
	background-color: v-bind(backgroundColor);

	&--sm {
		@apply h-[2rem] w-[2rem];
	}

	&--md {
		@apply h-[3.2rem] w-[3.2rem];
	}

	&--lg {
		@apply h-[4rem] w-[4rem];
	}
}
</style>
