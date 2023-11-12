<script setup lang="ts"></script>

<template>
	<div class="shimmer shrink-0"></div>
</template>

<style lang="scss" scoped>
.shimmer {
	@apply bg-[#ddd];
	animation-duration: 2.2s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: shimmer;
	animation-timing-function: linear;
	background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
	background-size: 120rem 100%;
}

@keyframes shimmer {
	0% {
		background-position: -120rem 0;
	}
	100% {
		background-position: 120rem 0;
	}
}
</style>
