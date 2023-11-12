<script lang="ts" setup>
interface Props {
	size?: "sm" | "md" | "lg";
}

const { size = "md" } = defineProps<Props>();

defineEmits(["close-modal"]);

const showModalWrapper = ref(false);
const showModalContent = ref(false);

onMounted(() => {
	showModalWrapper.value = true;
	setTimeout(() => {
		showModalContent.value = true;
	}, 0);
	document.body.classList.add("overflow-hidden");
});

onUnmounted(() => {
	document.body.classList.remove("overflow-hidden");
});
</script>

<template>
	<Teleport to="body">
		<Transition name="fade">
			<div v-if="showModalWrapper" class="modal fixed inset-0 h-screen w-screen overflow-y-scroll">
				<div class="modal__container flex h-full items-center justify-center">
					<Transition name="slidein" appear>
						<div v-if="showModalContent" class="modal__content m-auto w-full" :class="[`modal__content--${size}`]">
							<div class="modal__header">
								<slot name="header" />
							</div>
							<div class="modal__body">
								<slot name="body" />
							</div>
							<div class="modal__footer">
								<slot name="footer" />
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>
.modal {
	z-index: 1000;
	background: rgba(50, 59, 75, 0.5);
	backdrop-filter: blur(2px);

	&__container {
		@apply px-[1.2rem] py-[5.2rem] md:px-[3.2rem];
	}

	&__content {
		&--sm {
			@apply max-w-[54rem];
		}

		&--md {
			@apply max-w-[64rem];
		}

		&--lg {
			@apply max-w-[70rem];
		}
	}
}
</style>
