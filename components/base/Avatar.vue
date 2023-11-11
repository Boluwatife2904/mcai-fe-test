<script setup lang="ts">
interface Props {
	initials: string;
	size: "sm" | "md" | "lg";
}

const props = defineProps<Props>();

const colors = ["#F58634", "#246CF9", "#3BAA90"];

function stringToHashCode(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
	}
	return hash;
}

const backgroundColor = computed(() => {
	const hashCode = stringToHashCode(props.initials);
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
	@apply inline-flex items-center justify-center rounded-full uppercase text-white;
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
