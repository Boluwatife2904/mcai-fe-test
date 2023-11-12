<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

interface Props {
	show: boolean;
}

const { show = false } = defineProps<Props>();

const emits = defineEmits(["close"]);

const target = ref(null);

onClickOutside(target, (event: Event) => {
	event.stopPropagation();
	emits("close");
});
</script>

<template>
	<Transition name="fade">
		<div v-if="show" ref="target" class="dropdown absolute w-full rounded-[0.8rem] border border-gray-300 bg-white" v-bind="$attrs">
			<slot />
		</div>
	</Transition>
</template>

<style lang="scss" scoped>
.dropdown {
	z-index: 1;
	box-shadow:
		0 22px 18px 0 rgba(0, 0, 0, 0.02),
		0 12px 10px 0 rgba(0, 0, 0, 0.02),
		0 3px 7px 0 rgba(0, 0, 0, 0.03);
}
</style>
