export function useDeviceWidthChecker() {
	const isOnMobile = ref(false);

	const handleWindowResize = () => {
		const innerWidth = window.innerWidth;
		isOnMobile.value = innerWidth < 768;
		console.log(isOnMobile.value)
	};

	onMounted(() => {
		window.addEventListener("resize", handleWindowResize);
	});

	onUnmounted(() => {
		window.addEventListener("resize", handleWindowResize);
	});

	return { isOnMobile };
}